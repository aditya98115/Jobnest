import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "./JobCard";
import { jobService, Job, formatSalary, formatDate, getCompanyImageFallback } from "@/lib/supabase";

const JobListing = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        let jobsData;
        
        if (searchQuery) {
          jobsData = await jobService.searchJobs(searchQuery);
        } else {
          jobsData = await jobService.getJobs();
        }
        
        setJobs(jobsData);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="flex-1 p-4 sm:p-6">
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-lg"></div>
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
      <div className="flex-1 p-4 sm:p-6">
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
    <div className="flex-1 p-4 sm:p-6">
      {/* Search Results Header */}
      {searchQuery && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-base sm:text-lg font-semibold text-blue-900 mb-1">
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-sm sm:text-base text-blue-700">
            Found {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'} matching your search
          </p>
        </div>
      )}
      
      {/* No Results Message */}
      {jobs.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
            {searchQuery ? 'No jobs found' : 'No jobs available'}
          </h3>
          <p className="text-sm sm:text-base text-gray-500 mb-6 px-4">
            {searchQuery 
              ? `Try adjusting your search terms or browse all available positions.`
              : 'Check back later for new opportunities.'
            }
          </p>
          {searchQuery && (
            <button 
              onClick={() => window.location.href = '/'} 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Browse All Jobs
            </button>
          )}
        </div>
      )}

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