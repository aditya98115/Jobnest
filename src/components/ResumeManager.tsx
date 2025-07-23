import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { resumeService } from '@/lib/supabase-auth';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Separator } from '@/components/ui/separator';
import { 
  Upload, 
  FileText, 
  Download, 
  Edit2, 
  Trash2, 
  Star, 
  StarOff, 
  Plus,
  Eye,
  Calendar,
  FileIcon
} from 'lucide-react';
import type { UserResume } from '@/lib/supabase-auth';

interface ResumeManagerProps {
  className?: string;
}

export default function ResumeManager({ className }: ResumeManagerProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [resumes, setResumes] = useState<UserResume[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState<UserResume | null>(null);

  // Form states
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    experience_years: '',
    education_level: '',
    industry: '',
    skills: '',
    job_titles: '',
    is_primary: false
  });

  useEffect(() => {
    if (user) {
      loadResumes();
    }
  }, [user]);

  const loadResumes = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const resumesData = await resumeService.getResumes(user.id);
      setResumes(resumesData);
    } catch (error) {
      console.error('Error loading resumes:', error);
      toast({
        title: "Error",
        description: "Failed to load resumes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // For now, we'll simulate file upload. In production, you'd upload to Supabase Storage
      const mockFileUrl = `https://example.com/resumes/${file.name}`;
      
      const resumeData = {
        title: uploadForm.title || file.name.replace(/\.[^/.]+$/, ""),
        file_url: mockFileUrl,
        file_name: file.name,
        file_size: file.size,
        file_type: file.type,
        description: uploadForm.description,
        experience_years: uploadForm.experience_years ? parseInt(uploadForm.experience_years) : undefined,
        education_level: uploadForm.education_level || undefined,
        industry: uploadForm.industry || undefined,
        skills: uploadForm.skills ? uploadForm.skills.split(',').map(s => s.trim()) : undefined,
        job_titles: uploadForm.job_titles ? uploadForm.job_titles.split(',').map(s => s.trim()) : undefined,
        is_primary: uploadForm.is_primary
      };

      await resumeService.createResume(user.id, resumeData);
      
      toast({
        title: "Success",
        description: "Resume uploaded successfully!",
      });

      setUploadDialogOpen(false);
      setUploadForm({
        title: '',
        description: '',
        experience_years: '',
        education_level: '',
        industry: '',
        skills: '',
        job_titles: '',
        is_primary: false
      });
      await loadResumes();
    } catch (error) {
      console.error('Error uploading resume:', error);
      toast({
        title: "Error",
        description: "Failed to upload resume",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSetPrimary = async (resumeId: string) => {
    if (!user) return;

    try {
      await resumeService.setPrimaryResume(user.id, resumeId);
      toast({
        title: "Success",
        description: "Primary resume updated",
      });
      await loadResumes();
    } catch (error) {
      console.error('Error setting primary resume:', error);
      toast({
        title: "Error",
        description: "Failed to update primary resume",
        variant: "destructive",
      });
    }
  };

  const handleDeleteResume = async (resumeId: string) => {
    if (!user) return;

    try {
      await resumeService.deleteResume(user.id, resumeId);
      toast({
        title: "Success",
        description: "Resume deleted successfully",
      });
      await loadResumes();
    } catch (error) {
      console.error('Error deleting resume:', error);
      toast({
        title: "Error",
        description: "Failed to delete resume",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async (resume: UserResume) => {
    if (!user) return;

    try {
      await resumeService.incrementDownloadCount(user.id, resume.id);
      // Simulate download - in production, you'd download from Supabase Storage
      window.open(resume.file_url, '_blank');
      await loadResumes();
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast({
        title: "Error",
        description: "Failed to download resume",
        variant: "destructive",
      });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!user) {
    return (
      <Card className={className}>
        <CardContent className="flex items-center justify-center py-8">
          <p className="text-muted-foreground">Please sign in to manage your resumes</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Resume Manager</h2>
          <p className="text-muted-foreground">Upload and manage your resumes</p>
        </div>
        
        <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Upload Resume
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload New Resume</DialogTitle>
              <DialogDescription>
                Upload a PDF or Word document. Maximum file size: 5MB
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="resume-file">Resume File</Label>
                <Input
                  id="resume-file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  disabled={loading}
                />
              </div>
              
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Senior Developer Resume"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of this resume"
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">Experience (Years)</Label>
                  <Input
                    id="experience"
                    type="number"
                    placeholder="5"
                    value={uploadForm.experience_years}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, experience_years: e.target.value }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="education">Education Level</Label>
                  <Select value={uploadForm.education_level} onValueChange={(value) => setUploadForm(prev => ({ ...prev, education_level: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high_school">High School</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  placeholder="e.g., Technology, Healthcare"
                  value={uploadForm.industry}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, industry: e.target.value }))}
                />
              </div>
              
              <div>
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  placeholder="React, Node.js, Python"
                  value={uploadForm.skills}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, skills: e.target.value }))}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="is_primary"
                  checked={uploadForm.is_primary}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, is_primary: e.target.checked }))}
                />
                <Label htmlFor="is_primary">Set as primary resume</Label>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}

      {!loading && resumes.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No resumes uploaded</h3>
            <p className="text-muted-foreground mb-4">Upload your first resume to get started</p>
            <Button onClick={() => setUploadDialogOpen(true)}>
              <Upload className="w-4 h-4 mr-2" />
              Upload Resume
            </Button>
          </CardContent>
        </Card>
      )}

      {!loading && resumes.length > 0 && (
        <div className="grid gap-4">
          {resumes.map((resume) => (
            <Card key={resume.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-lg">{resume.title}</CardTitle>
                        {resume.is_primary && (
                          <Badge variant="default">
                            <Star className="w-3 h-3 mr-1" />
                            Primary
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="mt-1">
                        {resume.file_name} • {formatFileSize(resume.file_size)}
                      </CardDescription>
                      {resume.description && (
                        <p className="text-sm text-muted-foreground mt-2">{resume.description}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {!resume.is_primary && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSetPrimary(resume.id)}
                      >
                        <StarOff className="w-4 h-4" />
                      </Button>
                    )}
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(resume)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Resume</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{resume.title}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDeleteResume(resume.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  {resume.experience_years && (
                    <div>
                      <p className="text-muted-foreground">Experience</p>
                      <p className="font-medium">{resume.experience_years} years</p>
                    </div>
                  )}
                  
                  {resume.education_level && (
                    <div>
                      <p className="text-muted-foreground">Education</p>
                      <p className="font-medium capitalize">{resume.education_level.replace('_', ' ')}</p>
                    </div>
                  )}
                  
                  {resume.industry && (
                    <div>
                      <p className="text-muted-foreground">Industry</p>
                      <p className="font-medium">{resume.industry}</p>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-muted-foreground">Downloads</p>
                    <p className="font-medium">{resume.download_count}</p>
                  </div>
                </div>
                
                {resume.skills && resume.skills.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {resume.skills.slice(0, 5).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {resume.skills.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{resume.skills.length - 5} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
                
                <Separator className="my-4" />
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span>Uploaded: {formatDate(resume.created_at)}</span>
                    {resume.last_used_at && (
                      <span>Last used: {formatDate(resume.last_used_at)}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
