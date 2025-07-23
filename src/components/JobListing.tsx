import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { jobService, Job, formatSalary, formatDate, getCompanyImageFallback } from "@/lib/supabase";

const JobListing = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const jobsData = await jobService.getJobs();
        setJobs(jobsData);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex-1 p-6">
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-muted rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                    <div className="h-3 bg-muted rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 p-6">
        <div className="text-center py-8">
          <p className="text-destructive">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.slug}
            title={job.title}
            company={job.company?.name || 'Unknown Company'}
            companyImage={job.company?.logo_url || getCompanyImageFallback(job.company?.name)}
            location={job.location?.city || 'Remote'}
            date={formatDate(job.posted_date)}
            type={job.job_type as "Full Time" | "Internship"}
            salary={formatSalary(job.salary_min, job.salary_max, job.salary_currency, job.salary_period)}
            experience={job.experience_years_min ? `${job.experience_years_min} years` : '0 years'}
          />
        ))}
      </div>
    </div>
  );
};

export default JobListing;