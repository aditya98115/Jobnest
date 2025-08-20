import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jobService, Job, formatSalary, formatDate, getCompanyImageFallback } from "@/lib/supabase";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users, Globe, Building, Briefcase, DollarSign, ArrowLeft, Bookmark, ExternalLink, Check } from "lucide-react";
import Header from "@/components/Header";

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showApplyButton, setShowApplyButton] = useState(false);
  const { saveJob, unsaveJob, applyToJob, isJobSaved, isJobApplied } = useApplicationContext();

  const isSaved = jobId ? isJobSaved(jobId) : false;
  const isApplied = jobId ? isJobApplied(jobId) : false;

  const handleSave = () => {
    if (!job || !jobId) return;
    
    const jobData = {
      id: jobId,
      title: job.title,
      company: job.company?.name || '',
      companyImage: getCompanyImageFallback(job.company?.name || ''),
      location: typeof job.location === 'string' ? job.location : 'Not specified',
      salary: job.salary_min && job.salary_max ? `$${formatSalary(job.salary_min)} - $${formatSalary(job.salary_max)}` : 'Not specified',
      type: 'Full-time',
      date: job.created_at,
      experience: 'Not specified',
      description: job.description
    };

    if (isSaved) {
      unsaveJob(jobId);
    } else {
      saveJob(jobData);
    }
  };

  const handleApplyNow = () => {
    if (!job || !jobId) return;

    const jobData = {
      id: jobId,
      title: job.title,
      company: job.company?.name || '',
      companyImage: getCompanyImageFallback(job.company?.name || ''),
      location: typeof job.location === 'string' ? job.location : 'Not specified',
      salary: job.salary_min && job.salary_max ? `$${formatSalary(job.salary_min)} - $${formatSalary(job.salary_max)}` : 'Not specified',
      type: 'Full-time',
      date: job.created_at,
      experience: 'Not specified',
      description: job.description
    };

    // Add to applied jobs
    applyToJob(jobData);

    // Priority: application_url > application_email > company website > fallback
    if (job.application_url) {
      window.open(job.application_url, '_blank', 'noopener,noreferrer');
    } else if (job.application_email) {
      const subject = encodeURIComponent(`Application for ${job.title} at ${job.company?.name}`);
      const body = encodeURIComponent(`Dear Hiring Manager,

I am interested in applying for the ${job.title} position at ${job.company?.name}.

Please find my resume attached and let me know if you need any additional information.

Best regards,
[Your Name]`);
      window.location.href = `mailto:${job.application_email}?subject=${subject}&body=${body}`;
    } else if (job.company?.website_url) {
      // Fallback to company website careers page
      const careersUrl = job.company.website_url.endsWith('/') 
        ? `${job.company.website_url}careers` 
        : `${job.company.website_url}/careers`;
      window.open(careersUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Last resort - show alert with instructions
      alert(`To apply for this position, please visit ${job.company?.name}'s website or contact them directly.`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when user has scrolled to within 100px of the bottom
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;
      setShowApplyButton(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) {
        setError('Job not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const jobData = await jobService.getJobBySlug(jobId);
        setJob(jobData);
        
        // Increment view count
        await jobService.incrementViewCount(jobData.id);
      } catch (err) {
        console.error('Error fetching job:', err);
        setError('Job not found or failed to load');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => navigate('/')}>
            Back to Jobs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-4 sm:py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Button>
        {/* Header */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <img
                src={job.company?.logo_url || getCompanyImageFallback(job.company?.name)}
                alt={`${job.company?.name} logo`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border border-border flex-shrink-0"
              />
              <div className="flex-1 min-w-0 w-full">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                  <Badge variant={job.job_type === 'Internship' ? 'secondary' : 'default'} className="text-xs">
                    {job.job_type}
                  </Badge>
                  {job.featured && <Badge variant="outline" className="text-xs">Featured</Badge>}
                  {job.urgent && <Badge variant="destructive" className="text-xs">Urgent</Badge>}
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 line-clamp-2">{job.title}</h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-3 sm:mb-4">{job.company?.name}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm truncate">{job.location?.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">{formatDate(job.posted_date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm truncate">{formatSalary(job.salary_min, job.salary_max, job.salary_currency, job.salary_period)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">{job.experience_years_min || 0} years exp</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="w-full sm:w-auto flex-shrink-0">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleSave}
                  className={`w-full sm:w-auto transition-all duration-200 ${
                    isSaved 
                      ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Saved' : 'Save Job'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Job Description */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Job Description</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="prose prose-sm sm:prose max-w-none">
                  <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed">{job.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            {job.requirements && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">Requirements</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="prose prose-sm sm:prose max-w-none">
                    <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed">{job.requirements}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Responsibilities */}
            {job.responsibilities && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">Responsibilities</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="prose prose-sm sm:prose max-w-none">
                    <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed">{job.responsibilities}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Skills */}
            {job.skills && job.skills.length > 0 && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">Required Skills</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-sm sm:text-base">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills
                          .filter(js => js.is_required)
                          .map((jobSkill) => (
                            <Badge key={jobSkill.id} variant="default" className="text-xs">
                              {jobSkill.skill?.name} 
                              {jobSkill.proficiency_level && ` (${jobSkill.proficiency_level})`}
                            </Badge>
                          ))}
                      </div>
                    </div>
                    
                    {job.skills.some(js => !js.is_required) && (
                      <div>
                        <h4 className="font-medium mb-2 text-sm sm:text-base">Preferred Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills
                            .filter(js => !js.is_required)
                            .map((jobSkill) => (
                              <Badge key={jobSkill.id} variant="secondary" className="text-xs">
                                {jobSkill.skill?.name}
                                {jobSkill.proficiency_level && ` (${jobSkill.proficiency_level})`}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Company Info */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">About {job.company?.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                {job.company?.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.company.description}
                  </p>
                )}
                
                <div className="space-y-3">
                  {job.company?.industry && (
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{job.company.industry}</span>
                    </div>
                  )}
                  
                  {job.company?.size_range && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{job.company.size_range} employees</span>
                    </div>
                  )}
                  
                  {job.company?.website_url && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <a 
                        href={job.company.website_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline break-all"
                      >
                        Company Website
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Job Details */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Job Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Job Type</span>
                    <span className="text-sm font-medium">{job.job_type}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="text-sm font-medium">
                      {job.experience_years_min || 0}-{job.experience_years_max || (job.experience_years_min || 0) + 2} years
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Remote</span>
                    <span className="text-sm font-medium">{job.is_remote ? 'Yes' : 'No'}</span>
                  </div>
                  
                  {job.application_deadline && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Deadline</span>
                      <span className="text-sm font-medium">{formatDate(job.application_deadline)}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">Benefits</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        
        {/* Apply Now Section - Shows when near bottom */}
        {showApplyButton && (
          <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 z-50">
            <div className="max-w-4xl mx-auto flex gap-3">
              <Button 
                variant="outline"
                onClick={handleSave}
                className={`transition-all duration-200 shadow-lg hover:shadow-xl ${
                  isSaved 
                    ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline ml-2">Save</span>
              </Button>
              <Button 
                className={`flex-1 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold ${
                  isApplied 
                    ? 'bg-green-600 hover:bg-green-600 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary/90'
                }`}
                size="lg" 
                onClick={handleApplyNow}
                disabled={isApplied}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                {isApplied ? 'Applied' : 'Apply Now'}
              </Button>
            </div>
          </div>
        )}
        
        {/* Add bottom padding to account for sticky button */}
        <div className={`${showApplyButton ? 'h-20' : 'h-4'} transition-all duration-200`}></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail; 