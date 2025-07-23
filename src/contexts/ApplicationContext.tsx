import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { savedJobsService, applicationsService } from '@/lib/supabase-auth';
import { useToast } from '@/hooks/use-toast';

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
  status: 'applied' | 'in_review' | 'interview_scheduled' | 'interview_completed' | 'offer_received' | 'rejected' | 'withdrawn' | 'pending' | 'interview';
  stage: string;
  nextStep: string;
}

interface ApplicationContextType {
  savedJobs: SavedJob[];
  appliedJobs: AppliedJob[];
  saveJob: (job: Job) => Promise<void>;
  unsaveJob: (jobId: string) => Promise<void>;
  applyToJob: (job: Job) => Promise<void>;
  updateApplicationStatus: (jobId: string, status: AppliedJob['status'], stage: string, nextStep: string) => Promise<void>;
  isJobSaved: (jobId: string) => boolean;
  isJobApplied: (jobId: string) => boolean;
  loading: boolean;
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
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  // Load user's saved jobs and applications from Supabase
  useEffect(() => {
    if (user) {
      loadUserData();
    } else {
      // If user is not logged in, load from localStorage for backward compatibility
      loadLocalStorageData();
    }
  }, [user]);

  const loadUserData = async () => {
    if (!user) return;

    setLoading(true);
    try {
      // Load saved jobs
      const savedJobsData = await savedJobsService.getSavedJobs(user.id);
      const transformedSavedJobs: SavedJob[] = savedJobsData.map(savedJob => ({
        id: savedJob.job_id,
        title: savedJob.job?.title || 'Unknown Job',
        company: savedJob.job?.companies?.name || savedJob.job?.company?.name || 'Unknown Company',
        companyImage: savedJob.job?.companies?.logo_url || savedJob.job?.company?.logo_url,
        location: savedJob.job?.locations?.city || savedJob.job?.location?.city || 'Location not specified',
        salary: savedJob.job?.salary_min && savedJob.job?.salary_max 
          ? `₹${(savedJob.job.salary_min / 100000).toFixed(0)}-${(savedJob.job.salary_max / 100000).toFixed(0)} LPA`
          : 'Competitive',
        type: savedJob.job?.job_type || 'Full-time',
        description: savedJob.job?.description || '',
        tags: [], // We can populate this from job skills if needed
        urgent: savedJob.job?.urgent || false,
        status: 'saved',
        savedDate: savedJob.saved_at,
      }));

      // Load applications
      const applicationsData = await applicationsService.getApplications(user.id);
      const transformedApplications: AppliedJob[] = applicationsData.map(application => ({
        id: application.job_id,
        title: application.job?.title || 'Unknown Job',
        company: application.job?.companies?.name || application.job?.company?.name || 'Unknown Company',
        companyImage: application.job?.companies?.logo_url || application.job?.company?.logo_url,
        location: application.job?.locations?.city || application.job?.location?.city || 'Location not specified',
        salary: application.job?.salary_min && application.job?.salary_max 
          ? `₹${(application.job.salary_min / 100000).toFixed(0)}-${(application.job.salary_max / 100000).toFixed(0)} LPA`
          : 'Competitive',
        type: application.job?.job_type || 'Full-time',
        description: application.job?.description || '',
        tags: [], // We can populate this from job skills if needed
        urgent: application.job?.urgent || false,
        status: application.status as AppliedJob['status'],
        appliedDate: application.applied_at,
        stage: getStatusDisplayName(application.status),
        nextStep: application.next_step || getDefaultNextStep(application.status),
      }));

      setSavedJobs(transformedSavedJobs);
      setAppliedJobs(transformedApplications);
    } catch (error) {
      console.error('Error loading user data:', error);
      toast({
        title: "Error",
        description: "Failed to load your saved jobs and applications",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadLocalStorageData = () => {
    try {
      const savedJobsData = localStorage.getItem('savedJobs');
      const appliedJobsData = localStorage.getItem('appliedJobs');
      
      if (savedJobsData) {
        setSavedJobs(JSON.parse(savedJobsData));
      }
      
      if (appliedJobsData) {
        setAppliedJobs(JSON.parse(appliedJobsData));
      }
    } catch (error) {
      console.error('Error loading localStorage data:', error);
    }
  };

  const getStatusDisplayName = (status: string) => {
    const statusMap = {
      'applied': 'Application Submitted',
      'in_review': 'Under Review',
      'interview_scheduled': 'Interview Scheduled',
      'interview_completed': 'Interview Completed', 
      'offer_received': 'Offer Received',
      'rejected': 'Application Rejected',
      'withdrawn': 'Application Withdrawn',
      'pending': 'Application Submitted',
      'interview': 'Interview Stage'
    };
    return statusMap[status as keyof typeof statusMap] || 'Applied';
  };

  const getDefaultNextStep = (status: string) => {
    const nextStepMap = {
      'applied': 'Wait for response',
      'in_review': 'Application being reviewed',
      'interview_scheduled': 'Prepare for interview',
      'interview_completed': 'Wait for final decision',
      'offer_received': 'Review and respond to offer',
      'rejected': 'Continue job search',
      'withdrawn': 'Continue job search',
      'pending': 'Waiting for response',
      'interview': 'Prepare for interview'
    };
    return nextStepMap[status as keyof typeof nextStepMap] || 'Follow up';
  };

  const saveJob = async (job: Job) => {
    try {
      if (user) {
        // Save to Supabase
        await savedJobsService.saveJob(user.id, job.id);
        toast({
          title: "Success",
          description: "Job saved successfully!",
        });
        // Refresh data
        await loadUserData();
      } else {
        // Save to localStorage for non-authenticated users
        const savedJob: SavedJob = {
          ...job,
          status: 'saved',
          savedDate: new Date().toISOString(),
        };
        
        setSavedJobs(prev => {
          const exists = prev.find(saved => saved.id === job.id);
          if (exists) return prev;
          const newSavedJobs = [...prev, savedJob];
          localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
          return newSavedJobs;
        });
        
        toast({
          title: "Success",
          description: "Job saved locally! Sign in to sync across devices.",
        });
      }
    } catch (error) {
      console.error('Error saving job:', error);
      toast({
        title: "Error",
        description: "Failed to save job. Please try again.",
        variant: "destructive",
      });
    }
  };

  const unsaveJob = async (jobId: string) => {
    try {
      if (user) {
        // Remove from Supabase
        await savedJobsService.unsaveJob(user.id, jobId);
        toast({
          title: "Success",
          description: "Job removed from saved jobs",
        });
        // Refresh data
        await loadUserData();
      } else {
        // Remove from localStorage
        setSavedJobs(prev => {
          const newSavedJobs = prev.filter(job => job.id !== jobId);
          localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
          return newSavedJobs;
        });
        
        toast({
          title: "Success",
          description: "Job removed from saved jobs",
        });
      }
    } catch (error) {
      console.error('Error unsaving job:', error);
      toast({
        title: "Error",
        description: "Failed to remove job. Please try again.",
        variant: "destructive",
      });
    }
  };

  const applyToJob = async (job: Job) => {
    try {
      if (user) {
        // Apply via Supabase
        await applicationsService.applyToJob(user.id, job.id, {
          application_method: 'platform',
          notes: `Applied through Jobnest platform`
        });
        
        toast({
          title: "Success",
          description: "Application submitted successfully!",
        });
        // Refresh data
        await loadUserData();
      } else {
        // Save to localStorage for non-authenticated users
        const appliedJob: AppliedJob = {
          ...job,
          appliedDate: new Date().toISOString(),
          status: 'applied',
          stage: 'Application Submitted',
          nextStep: 'Waiting for response'
        };
        
        setAppliedJobs(prev => {
          const exists = prev.find(applied => applied.id === job.id);
          if (exists) return prev;
          const newAppliedJobs = [...prev, appliedJob];
          localStorage.setItem('appliedJobs', JSON.stringify(newAppliedJobs));
          return newAppliedJobs;
        });
        
        toast({
          title: "Success",
          description: "Application tracked locally! Sign in to sync across devices.",
        });
      }
    } catch (error) {
      console.error('Error applying to job:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    }
  };

  const updateApplicationStatus = async (jobId: string, status: AppliedJob['status'], stage: string, nextStep: string) => {
    try {
      if (user) {
        // Map status to valid database status
        const dbStatus = status === 'pending' ? 'applied' : status === 'interview' ? 'interview_scheduled' : status;
        
        // Update in Supabase
        await applicationsService.updateApplication(user.id, jobId, {
          status: dbStatus as any,
          next_step: nextStep,
          notes: `Status updated to ${stage}`
        });
        
        toast({
          title: "Success",
          description: "Application status updated",
        });
        // Refresh data
        await loadUserData();
      } else {
        // Update localStorage
        setAppliedJobs(prev => {
          const newAppliedJobs = prev.map(job => 
            job.id === jobId 
              ? { ...job, status, stage, nextStep }
              : job
          );
          localStorage.setItem('appliedJobs', JSON.stringify(newAppliedJobs));
          return newAppliedJobs;
        });
        
        toast({
          title: "Success",
          description: "Application status updated locally",
        });
      }
    } catch (error) {
      console.error('Error updating application status:', error);
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive",
      });
    }
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
      isJobApplied,
      loading
    }}>
      {children}
    </ApplicationContext.Provider>
  );
};
