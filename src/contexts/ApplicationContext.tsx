import React, { createContext, useContext, useState, useEffect } from 'react';

interface Job {
  id: string;
  title: string;
  company: string;
  companyImage?: string;
  location: string;
  salary: string;
  type: string;
  date?: string;
  experience?: string;
  description?: string;
  tags?: string[];
  urgent?: boolean;
}

interface SavedJob extends Job {
  savedDate: string;
  status: 'saved';
}

interface AppliedJob extends Job {
  appliedDate: string;
  status: 'pending' | 'interview' | 'rejected';
  stage: string;
  nextStep: string;
}

interface ApplicationContextType {
  savedJobs: SavedJob[];
  appliedJobs: AppliedJob[];
  saveJob: (job: Job) => void;
  unsaveJob: (jobId: string) => void;
  applyToJob: (job: Job) => void;
  updateApplicationStatus: (jobId: string, status: AppliedJob['status'], stage: string, nextStep: string) => void;
  isJobSaved: (jobId: string) => boolean;
  isJobApplied: (jobId: string) => boolean;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const useApplicationContext = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplicationContext must be used within an ApplicationProvider');
  }
  return context;
};

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedJobsData = localStorage.getItem('savedJobs');
    const appliedJobsData = localStorage.getItem('appliedJobs');
    
    if (savedJobsData) {
      setSavedJobs(JSON.parse(savedJobsData));
    }
    
    if (appliedJobsData) {
      setAppliedJobs(JSON.parse(appliedJobsData));
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  const saveJob = (job: Job) => {
    const savedJob: SavedJob = {
      ...job,
      savedDate: new Date().toISOString(),
      status: 'saved'
    };
    
    setSavedJobs(prev => {
      const exists = prev.find(saved => saved.id === job.id);
      if (exists) return prev;
      return [...prev, savedJob];
    });
  };

  const unsaveJob = (jobId: string) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const applyToJob = (job: Job) => {
    const appliedJob: AppliedJob = {
      ...job,
      appliedDate: new Date().toISOString(),
      status: 'pending',
      stage: 'Application Submitted',
      nextStep: 'Waiting for response'
    };
    
    setAppliedJobs(prev => {
      const exists = prev.find(applied => applied.id === job.id);
      if (exists) return prev;
      return [...prev, appliedJob];
    });
  };

  const updateApplicationStatus = (jobId: string, status: AppliedJob['status'], stage: string, nextStep: string) => {
    setAppliedJobs(prev => 
      prev.map(job => 
        job.id === jobId 
          ? { ...job, status, stage, nextStep }
          : job
      )
    );
  };

  const isJobSaved = (jobId: string) => {
    return savedJobs.some(job => job.id === jobId);
  };

  const isJobApplied = (jobId: string) => {
    return appliedJobs.some(job => job.id === jobId);
  };

  return (
    <ApplicationContext.Provider value={{
      savedJobs,
      appliedJobs,
      saveJob,
      unsaveJob,
      applyToJob,
      updateApplicationStatus,
      isJobSaved,
      isJobApplied
    }}>
      {children}
    </ApplicationContext.Provider>
  );
};
