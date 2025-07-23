import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = 'https://zicdqodncmbjyoesazeb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppY2Rxb2RuY21ianlvZXNhemViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk0NTUsImV4cCI6MjA2ODc3NTQ1NX0.-JboOOEtL6YhaU33gmXr4pEkMe3_A94DOy4Ef0ZM_r8'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our database tables
export interface Job {
  id: string
  slug: string
  title: string
  description: string
  requirements?: string
  responsibilities?: string
  job_type: string
  experience_level?: string
  experience_years_min?: number
  experience_years_max?: number
  salary_min?: number
  salary_max?: number
  salary_currency: string
  salary_period: string
  is_remote: boolean
  hybrid_policy?: string
  application_deadline?: string
  application_url?: string
  application_email?: string
  how_to_apply?: string
  benefits?: string[]
  perks?: string[]
  status: string
  posted_date: string
  last_updated: string
  expires_at?: string
  featured: boolean
  urgent: boolean
  meta_title?: string
  meta_description?: string
  views_count: number
  applications_count: number
  created_at: string
  updated_at: string
  
  // Relationships
  company?: Company
  category?: JobCategory
  location?: Location
  skills?: JobSkill[]
}

export interface Company {
  id: string
  name: string
  logo_url?: string
  description?: string
  website_url?: string
  industry?: string
  size_range?: string
  location?: string
  created_at: string
  updated_at: string
}

export interface JobCategory {
  id: string
  name: string
  slug: string
  description?: string
  created_at: string
}

export interface Location {
  id: string
  city: string
  state?: string
  country: string
  is_remote: boolean
  created_at: string
}

export interface Skill {
  id: string
  name: string
  category?: string
  created_at: string
}

export interface JobSkill {
  id: string
  job_id: string
  skill_id: string
  is_required: boolean
  proficiency_level?: string
  created_at: string
  skill?: Skill
}

// Database functions
export const jobService = {
  // Get all jobs with related data
  async getJobs() {
    console.log('Fetching all jobs...');
    
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select(`
          *,
          companies(*),
          job_categories(*),
          locations(*),
          job_skills(
            *,
            skills(*)
          )
        `)
        .eq('status', 'active')
        .order('posted_date', { ascending: false })
      
      if (error) {
        console.error('Error fetching jobs:', error)
        throw error
      }
      
      console.log('Jobs fetched:', data?.length)
      
      // Transform the data to match our interface
      const jobsData: Job[] = data?.map(job => ({
        ...job,
        company: job.companies,
        category: job.job_categories,
        location: job.locations,
        skills: job.job_skills?.map((js: any) => ({
          ...js,
          skill: js.skills
        })) || []
      })) || []
      
      return jobsData
    } catch (error) {
      console.error('Error in getJobs:', error)
      throw error
    }
  },

  // Get a single job by slug
  async getJobBySlug(slug: string) {
    console.log('Fetching job with slug:', slug);
    
    try {
      // First try to get the basic job data
      const { data, error } = await supabase
        .from('jobs')
        .select(`
          *,
          companies(*),
          job_categories(*),
          locations(*),
          job_skills(
            *,
            skills(*)
          )
        `)
        .eq('slug', slug)
        .eq('status', 'active')
        .single()
      
      if (error) {
        console.error('Supabase error:', error)
        throw error
      }
      
      if (!data) {
        console.error('No data returned for slug:', slug)
        throw new Error('Job not found')
      }
      
      console.log('Job data fetched successfully:', data)
      
      // Transform the data to match our interface
      const jobData: Job = {
        ...data,
        company: data.companies,
        category: data.job_categories,
        location: data.locations,
        skills: data.job_skills?.map((js: any) => ({
          ...js,
          skill: js.skills
        })) || []
      }
      
      return jobData
    } catch (error) {
      console.error('Error in getJobBySlug:', error)
      throw error
    }
  },

  // Update job view count
  async incrementViewCount(jobId: string) {
    try {
      // First get the current view count
      const { data: currentJob } = await supabase
        .from('jobs')
        .select('views_count')
        .eq('id', jobId)
        .single()
      
      if (currentJob) {
        const { error } = await supabase
          .from('jobs')
          .update({ 
            views_count: (currentJob.views_count || 0) + 1,
            last_updated: new Date().toISOString()
          })
          .eq('id', jobId)
        
        if (error) {
          console.error('Error updating view count:', error)
        }
      }
    } catch (error) {
      console.error('Error incrementing view count:', error)
    }
  },

  // Get jobs by filters
  async getFilteredJobs(filters: {
    category?: string
    location?: string
    jobType?: string
    experienceLevel?: string
    isRemote?: boolean
    salaryMin?: number
    salaryMax?: number
  }) {
    let query = supabase
      .from('jobs')
      .select(`
        *,
        company:companies(*),
        category:job_categories(*),
        location:locations(*),
        skills:job_skills(
          *,
          skill:skills(*)
        )
      `)
      .eq('status', 'active')

    if (filters.category) {
      query = query.eq('job_categories.slug', filters.category)
    }
    
    if (filters.jobType) {
      query = query.eq('job_type', filters.jobType)
    }
    
    if (filters.experienceLevel) {
      query = query.eq('experience_level', filters.experienceLevel)
    }
    
    if (filters.isRemote !== undefined) {
      query = query.eq('is_remote', filters.isRemote)
    }
    
    if (filters.salaryMin) {
      query = query.gte('salary_min', filters.salaryMin)
    }
    
    if (filters.salaryMax) {
      query = query.lte('salary_max', filters.salaryMax)
    }

    query = query.order('posted_date', { ascending: false })
    
    const { data, error } = await query
    
    if (error) {
      console.error('Error fetching filtered jobs:', error)
      throw error
    }
    
    return data as Job[]
  }
}

// Utility functions
export const formatSalary = (min?: number, max?: number, currency = 'INR', period = 'yearly') => {
  if (!min && !max) return 'Competitive'
  
  const formatAmount = (amount: number) => {
    if (period === 'monthly') {
      return `${(amount / 100000).toFixed(0)}K`
    }
    return `${(amount / 100000).toFixed(0)} LPA`
  }
  
  if (min && max) {
    return `${formatAmount(min)}-${formatAmount(max)}`
  }
  
  return formatAmount(min || max || 0)
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export const getJobUrl = (slug: string) => `/job/${slug}`

// Professional office/headquarters images for company logos
export const getCompanyImageFallback = (companyName?: string) => {
  const officeImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Modern office building
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Glass corporate building
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Corporate headquarters
    'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Business district
    'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Tech office building
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Modern corporate tower
    'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Office complex
    'https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // Corporate building facade
    'https://images.unsplash.com/photo-1612810806546-ebbf22b50913?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', // High-rise office
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'  // Contemporary office building
  ];
  
  // Use company name hash to consistently pick the same image for the same company
  if (companyName) {
    const hash = companyName.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return officeImages[Math.abs(hash) % officeImages.length];
  }
  
  return officeImages[0]; // Default to first image
}
