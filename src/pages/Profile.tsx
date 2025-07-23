import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import { useAuth } from '@/contexts/AuthContext';
import { profileService } from '@/lib/supabase-auth';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Briefcase, 
  Building, 
  Linkedin, 
  Github, 
  ExternalLink,
  Save,
  Edit2
} from 'lucide-react';
import type { Profile } from '@/lib/supabase-auth';

const ProfilePage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    bio: '',
    phone: '',
    website: '',
    location: '',
    skills: '',
    experience_level: '',
    current_position: '',
    company: '',
    linkedin_url: '',
    github_url: '',
    portfolio_url: '',
    preferred_job_types: '',
    preferred_locations: '',
    salary_expectation_min: '',
    salary_expectation_max: '',
    availability_status: 'open_to_work' as const,
    email_notifications: true,
    profile_visibility: 'public' as const
  });

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const profileData = await profileService.getProfile(user.id);
      if (profileData) {
        setProfile(profileData);
        setFormData({
          full_name: profileData.full_name || '',
          bio: profileData.bio || '',
          phone: profileData.phone || '',
          website: profileData.website || '',
          location: profileData.location || '',
          skills: profileData.skills?.join(', ') || '',
          experience_level: profileData.experience_level || '',
          current_position: profileData.current_position || '',
          company: profileData.company || '',
          linkedin_url: profileData.linkedin_url || '',
          github_url: profileData.github_url || '',
          portfolio_url: profileData.portfolio_url || '',
          preferred_job_types: profileData.preferred_job_types?.join(', ') || '',
          preferred_locations: profileData.preferred_locations?.join(', ') || '',
          salary_expectation_min: profileData.salary_expectation_min?.toString() || '',
          salary_expectation_max: profileData.salary_expectation_max?.toString() || '',
          availability_status: profileData.availability_status,
          email_notifications: profileData.email_notifications,
          profile_visibility: profileData.profile_visibility
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;

    setSaving(true);
    try {
      const updateData = {
        ...formData,
        skills: formData.skills ? formData.skills.split(',').map(s => s.trim()) : [],
        preferred_job_types: formData.preferred_job_types ? formData.preferred_job_types.split(',').map(s => s.trim()) : [],
        preferred_locations: formData.preferred_locations ? formData.preferred_locations.split(',').map(s => s.trim()) : [],
        salary_expectation_min: formData.salary_expectation_min ? parseInt(formData.salary_expectation_min) : null,
        salary_expectation_max: formData.salary_expectation_max ? parseInt(formData.salary_expectation_max) : null,
      };

      if (profile) {
        await profileService.updateProfile(user.id, updateData);
      } else {
        await profileService.createProfile(user.id, updateData);
      }

      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });

      setEditing(false);
      await loadProfile();
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: "Error",
        description: "Failed to save profile",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <p className="text-muted-foreground">Please sign in to view your profile</p>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={profile?.avatar_url} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {profile?.full_name ? getInitials(profile.full_name) : getInitials(user.email || '')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-2xl font-bold">
                        {profile?.full_name || 'Complete your profile'}
                      </h1>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {user.email}
                      </p>
                      {profile?.location && (
                        <p className="text-muted-foreground flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {profile.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <Button onClick={() => setEditing(!editing)}>
                    <Edit2 className="h-4 w-4 mr-2" />
                    {editing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {editing ? (
              /* Edit Form */
              <Card>
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                  <CardDescription>Update your personal information and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="full_name">Full Name</Label>
                      <Input
                        id="full_name"
                        value={formData.full_name}
                        onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      value={formData.bio}
                      onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="current_position">Current Position</Label>
                      <Input
                        id="current_position"
                        value={formData.current_position}
                        onChange={(e) => setFormData(prev => ({ ...prev, current_position: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience_level">Experience Level</Label>
                      <Select value={formData.experience_level} onValueChange={(value) => setFormData(prev => ({ ...prev, experience_level: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="mid">Mid Level</SelectItem>
                          <SelectItem value="senior">Senior Level</SelectItem>
                          <SelectItem value="lead">Lead/Principal</SelectItem>
                          <SelectItem value="executive">Executive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="skills">Skills (comma-separated)</Label>
                    <Input
                      id="skills"
                      placeholder="React, Node.js, Python, etc."
                      value={formData.skills}
                      onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin_url">LinkedIn</Label>
                      <Input
                        id="linkedin_url"
                        value={formData.linkedin_url}
                        onChange={(e) => setFormData(prev => ({ ...prev, linkedin_url: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="github_url">GitHub</Label>
                      <Input
                        id="github_url"
                        value={formData.github_url}
                        onChange={(e) => setFormData(prev => ({ ...prev, github_url: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button onClick={handleSave} disabled={saving}>
                      <Save className="h-4 w-4 mr-2" />
                      {saving ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button variant="outline" onClick={() => setEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* View Profile */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profile?.bio && (
                      <div>
                        <Label className="text-sm font-medium">Bio</Label>
                        <p className="text-sm text-muted-foreground mt-1">{profile.bio}</p>
                      </div>
                    )}
                    
                    {profile?.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{profile.phone}</span>
                      </div>
                    )}
                    
                    {profile?.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          {profile.website}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Professional Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Professional Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profile?.current_position && (
                      <div>
                        <Label className="text-sm font-medium">Current Position</Label>
                        <p className="text-sm text-muted-foreground mt-1">{profile.current_position}</p>
                      </div>
                    )}
                    
                    {profile?.company && (
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{profile.company}</span>
                      </div>
                    )}
                    
                    {profile?.experience_level && (
                      <div>
                        <Label className="text-sm font-medium">Experience Level</Label>
                        <p className="text-sm text-muted-foreground mt-1 capitalize">{profile.experience_level.replace('_', ' ')}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Skills */}
                {profile?.skills && profile.skills.length > 0 && (
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Links */}
                {(profile?.linkedin_url || profile?.github_url || profile?.portfolio_url) && (
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Links</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-4">
                        {profile.linkedin_url && (
                          <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {profile.github_url && (
                          <a href={profile.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                            <Github className="h-4 w-4" />
                            GitHub
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {profile.portfolio_url && (
                          <a href={profile.portfolio_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                            <Globe className="h-4 w-4" />
                            Portfolio
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;
