import { supabase } from './supabase';

// Additional types for user-related data
export interface Profile {
  id: string
  full_name?: string
  avatar_url?: string
  bio?: string
  phone?: string
  website?: string
  location?: string
  skills?: string[]
  experience_level?: string
  current_position?: string
  company?: string
  linkedin_url?: string
  github_url?: string
  portfolio_url?: string
  resume_url?: string
  preferred_job_types?: string[]
  preferred_locations?: string[]
  salary_expectation_min?: number
  salary_expectation_max?: number
  availability_status: 'open_to_work' | 'not_looking' | 'passive'
  email_notifications: boolean
  profile_visibility: 'public' | 'private'
  created_at: string
  updated_at: string
}

export interface UserSavedJob {
  id: string
  user_id: string
  job_id: string
  saved_at: string
  notes?: string
  job?: any
}

export interface UserJobApplication {
  id: string
  user_id: string
  job_id: string
  applied_at: string
  status: 'applied' | 'in_review' | 'interview_scheduled' | 'interview_completed' | 'offer_received' | 'rejected' | 'withdrawn'
  application_method: 'platform' | 'external' | 'email' | 'direct'
  cover_letter?: string
  resume_url?: string
  notes?: string
  interview_date?: string
  interview_notes?: string
  feedback?: string
  salary_offered?: number
  next_step?: string
  recruiter_contact?: string
  updated_at: string
  job?: any
}

export interface UserResume {
  id: string
  user_id: string
  title: string
  file_url: string
  file_name: string
  file_size: number
  file_type: string
  is_primary: boolean
  description?: string
  skills?: string[]
  experience_years?: number
  education_level?: string
  industry?: string
  job_titles?: string[]
  upload_date: string
  updated_at: string
  is_active: boolean
  download_count: number
  last_used_at?: string
  created_at: string
}

// User profile functions
export const profileService = {
  // Get user profile
  async getProfile(userId: string) {
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching profile:', error)
      throw error
    }

    return profile
  },

  // Create user profile
  async createProfile(userId: string, profileData: Partial<Profile>) {
    const { data: profile, error } = await supabase
      .from('profiles')
      .insert([{
        id: userId,
        ...profileData
      }])
      .select()
      .single()

    if (error) {
      console.error('Error creating profile:', error)
      throw error
    }

    return profile
  },

  // Update user profile
  async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data: profile, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    if (error) {
      console.error('Error updating profile:', error)
      throw error
    }

    return profile
  }
}

// User saved jobs functions
export const savedJobsService = {
  // Get user's saved jobs
  async getSavedJobs(userId: string) {
    const { data: savedJobs, error } = await supabase
      .from('user_saved_jobs')
      .select(`
        *,
        job:jobs(
          *,
          companies(*),
          job_categories(*),
          locations(*)
        )
      `)
      .eq('user_id', userId)
      .order('saved_at', { ascending: false })

    if (error) {
      console.error('Error fetching saved jobs:', error)
      throw error
    }

    return savedJobs || []
  },

  // Save a job
  async saveJob(userId: string, jobId: string, notes?: string) {
    const { data, error } = await supabase
      .from('user_saved_jobs')
      .insert({
        user_id: userId,
        job_id: jobId,
        notes
      })
      .select()
      .single()

    if (error) {
      console.error('Error saving job:', error)
      throw error
    }

    return data
  },

  // Unsave a job
  async unsaveJob(userId: string, jobId: string) {
    const { error } = await supabase
      .from('user_saved_jobs')
      .delete()
      .eq('user_id', userId)
      .eq('job_id', jobId)

    if (error) {
      console.error('Error unsaving job:', error)
      throw error
    }
  },

  // Check if job is saved
  async isJobSaved(userId: string, jobId: string) {
    const { data, error } = await supabase
      .from('user_saved_jobs')
      .select('id')
      .eq('user_id', userId)
      .eq('job_id', jobId)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking if job is saved:', error)
      throw error
    }

    return !!data
  }
}

// User job applications functions
export const applicationsService = {
  // Get user's job applications
  async getApplications(userId: string) {
    const { data: applications, error } = await supabase
      .from('user_job_applications')
      .select(`
        *,
        job:jobs(
          *,
          companies(*),
          job_categories(*),
          locations(*)
        )
      `)
      .eq('user_id', userId)
      .order('applied_at', { ascending: false })

    if (error) {
      console.error('Error fetching applications:', error)
      throw error
    }

    return applications || []
  },

  // Apply to a job
  async applyToJob(userId: string, jobId: string, applicationData: {
    application_method?: string
    cover_letter?: string
    resume_url?: string
    notes?: string
  }) {
    const { data, error } = await supabase
      .from('user_job_applications')
      .insert({
        user_id: userId,
        job_id: jobId,
        ...applicationData
      })
      .select()
      .single()

    if (error) {
      console.error('Error applying to job:', error)
      throw error
    }

    return data
  },

  // Update application status
  async updateApplication(userId: string, applicationId: string, updates: Partial<UserJobApplication>) {
    const { data, error } = await supabase
      .from('user_job_applications')
      .update(updates)
      .eq('id', applicationId)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) {
      console.error('Error updating application:', error)
      throw error
    }

    return data
  },

  // Check if user has applied to job
  async hasAppliedToJob(userId: string, jobId: string) {
    const { data, error } = await supabase
      .from('user_job_applications')
      .select('id')
      .eq('user_id', userId)
      .eq('job_id', jobId)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking if applied to job:', error)
      throw error
    }

    return !!data
  }
}

// Resume service functions
export const resumeService = {
  // Get all user resumes
  async getResumes(userId: string) {
    const { data: resumes, error } = await supabase
      .from('user_resumes')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('is_primary', { ascending: false })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching resumes:', error)
      throw error
    }

    return resumes || []
  },

  // Get primary resume
  async getPrimaryResume(userId: string) {
    const { data: resume, error } = await supabase
      .from('user_resumes')
      .select('*')
      .eq('user_id', userId)
      .eq('is_primary', true)
      .eq('is_active', true)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching primary resume:', error)
      throw error
    }

    return resume
  },

  // Upload/Create resume
  async createResume(userId: string, resumeData: {
    title: string
    file_url: string
    file_name: string
    file_size: number
    file_type: string
    is_primary?: boolean
    description?: string
    skills?: string[]
    experience_years?: number
    education_level?: string
    industry?: string
    job_titles?: string[]
  }) {
    const { data: resume, error } = await supabase
      .from('user_resumes')
      .insert([{
        user_id: userId,
        ...resumeData
      }])
      .select()
      .single()

    if (error) {
      console.error('Error creating resume:', error)
      throw error
    }

    return resume
  },

  // Update resume
  async updateResume(userId: string, resumeId: string, updates: Partial<UserResume>) {
    const { data: resume, error } = await supabase
      .from('user_resumes')
      .update(updates)
      .eq('id', resumeId)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) {
      console.error('Error updating resume:', error)
      throw error
    }

    return resume
  },

  // Set primary resume
  async setPrimaryResume(userId: string, resumeId: string) {
    const { data: resume, error } = await supabase
      .from('user_resumes')
      .update({ is_primary: true })
      .eq('id', resumeId)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) {
      console.error('Error setting primary resume:', error)
      throw error
    }

    return resume
  },

  // Delete resume (soft delete)
  async deleteResume(userId: string, resumeId: string) {
    const { data: resume, error } = await supabase
      .from('user_resumes')
      .update({ is_active: false })
      .eq('id', resumeId)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) {
      console.error('Error deleting resume:', error)
      throw error
    }

    return resume
  },

  // Increment download count
  async incrementDownloadCount(userId: string, resumeId: string) {
    const { data: resume, error } = await supabase
      .from('user_resumes')
      .update({ 
        download_count: supabase.rpc('increment', { x: 1 }),
        last_used_at: new Date().toISOString()
      })
      .eq('id', resumeId)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) {
      console.error('Error incrementing download count:', error)
      throw error
    }

    return resume
  },

  // Get resume by ID
  async getResume(userId: string, resumeId: string) {
    const { data: resume, error } = await supabase
      .from('user_resumes')
      .select('*')
      .eq('id', resumeId)
      .eq('user_id', userId)
      .eq('is_active', true)
      .single()

    if (error) {
      console.error('Error fetching resume:', error)
      throw error
    }

    return resume
  }
}
