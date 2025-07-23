import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { 
  Bookmark, 
  CheckCircle, 
  Clock, 
  Eye, 
  FileText, 
  Building, 
  MapPin, 
  Calendar, 
  DollarSign,
  Filter,
  Search,
  Plus,
  Trash2,
  Edit,
  Star,
  ArrowUpRight,
  Download,
  Upload,
  MoreVertical,
  Target
} from "lucide-react";
import Header from "@/components/Header";

const ApplicationTracker = () => {
  const [activeTab, setActiveTab] = useState("saved");
  const [searchQuery, setSearchQuery] = useState("");
  const { savedJobs, appliedJobs, unsaveJob, applyToJob } = useApplicationContext();

  // Mock data for resumes (keeping this since it's not connected to job saves/applies)
  const resumes = [
    {
      id: 1,
      name: "Frontend Developer Resume",
      version: "v2.1",
      lastModified: "2025-01-20",
      type: "Technical",
      fileSize: "245 KB",
      isDefault: true
    },
    {
      id: 2,
      name: "Product Manager Resume",
      version: "v1.8",
      lastModified: "2025-01-18",
      type: "Management",
      fileSize: "198 KB",
      isDefault: false
    },
    {
      id: 3,
      name: "Designer Portfolio Resume",
      version: "v3.0",
      lastModified: "2025-01-16",
      type: "Creative",
      fileSize: "312 KB",
      isDefault: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "saved": return "bg-blue-100 text-blue-700";
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "interview": return "bg-green-100 text-green-700";
      case "rejected": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "saved": return <Bookmark className="w-3 h-3" />;
      case "pending": return <Clock className="w-3 h-3" />;
      case "interview": return <CheckCircle className="w-3 h-3" />;
      case "rejected": return <Target className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Application Tracker
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Organize your job search with saved positions, application tracking, and resume management.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Saved Jobs", value: savedJobs.length, icon: <Bookmark className="w-5 h-5" /> },
              { label: "Applications", value: appliedJobs.length, icon: <FileText className="w-5 h-5" /> },
              { label: "Interviews", value: appliedJobs.filter(job => job.status === "interview").length, icon: <CheckCircle className="w-5 h-5" /> },
              { label: "Resumes", value: resumes.length, icon: <Upload className="w-5 h-5" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-light text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-24 max-w-6xl">
        {/* Search and Filter */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search jobs or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-200 rounded-xl"
            />
          </div>
          <Button variant="outline" className="rounded-xl border-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-50 rounded-2xl p-1 border-0">
            <TabsTrigger 
              value="saved"
              className="rounded-xl px-6 py-3 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all duration-200 font-medium"
            >
              <Bookmark className="w-4 h-4 mr-2" />
              Saved Jobs
            </TabsTrigger>
            <TabsTrigger 
              value="applied"
              className="rounded-xl px-6 py-3 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all duration-200 font-medium"
            >
              <FileText className="w-4 h-4 mr-2" />
              Applications
            </TabsTrigger>
            <TabsTrigger 
              value="resumes"
              className="rounded-xl px-6 py-3 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all duration-200 font-medium"
            >
              <Upload className="w-4 h-4 mr-2" />
              Resumes
            </TabsTrigger>
          </TabsList>

          {/* Saved Jobs Tab */}
          <TabsContent value="saved" className="mt-8">
            <div className="space-y-6">
              {savedJobs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center">
                    <Bookmark className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No saved jobs yet</h3>
                  <p className="text-gray-600 font-light">Start saving jobs to keep track of opportunities you're interested in.</p>
                </div>
              ) : (
                savedJobs.map((job) => (
                  <div key={job.id} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-200 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                          {job.companyImage ? (
                            <img src={job.companyImage} alt={job.company} className="w-8 h-8 rounded-lg object-contain" />
                          ) : (
                            <Building className="w-6 h-6 text-gray-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                            {job.urgent && (
                              <Badge className="bg-red-100 text-red-700 border-0 text-xs">
                                Urgent
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {job.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </div>
                          </div>
                          {job.description && (
                            <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                              {job.description}
                            </p>
                          )}
                          {job.tags && job.tags.length > 0 && (
                            <div className="flex items-center gap-2">
                              {job.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 border-0 text-xs font-normal">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Saved {formatDate(job.savedDate)}
                        </div>
                        <Badge className={`${getStatusColor(job.status)} border-0 text-xs`}>
                          {getStatusIcon(job.status)}
                          <span className="ml-1 capitalize">{job.status}</span>
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-xl border-gray-200"
                          onClick={() => applyToJob(job)}
                        >
                          <ArrowUpRight className="w-4 h-4 mr-1" />
                          Apply Now
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => unsaveJob(job.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          {/* Applied Jobs Tab */}
          <TabsContent value="applied" className="mt-8">
            <div className="space-y-6">
              {appliedJobs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h3>
                  <p className="text-gray-600 font-light">Start applying to jobs to track your application progress here.</p>
                </div>
              ) : (
                appliedJobs.map((job) => (
                  <div key={job.id} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-200 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                          {job.companyImage ? (
                            <img src={job.companyImage} alt={job.company} className="w-8 h-8 rounded-lg object-contain" />
                          ) : (
                            <Building className="w-6 h-6 text-gray-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                            <Badge className={`${getStatusColor(job.status)} border-0 text-xs`}>
                              {getStatusIcon(job.status)}
                              <span className="ml-1 capitalize">{job.status}</span>
                            </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                          {job.description}
                        </p>
                        <div className="flex items-center gap-2 mb-3">
                          {job.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 border-0 text-xs font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm">
                          <div className="text-gray-600 font-light">Current Stage: <span className="font-medium text-gray-900">{job.stage}</span></div>
                          <div className="text-gray-600 font-light">Next Step: <span className="font-medium text-gray-900">{job.nextStep}</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      Applied {formatDate(job.appliedDate)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="rounded-xl border-gray-200">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                ))
              )}
            </div>
          </TabsContent>

          {/* Resumes Tab */}
          <TabsContent value="resumes" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Upload New Resume Card */}
              <div className="p-8 rounded-2xl border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors cursor-pointer group">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                    <Plus className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Upload New Resume</h3>
                  <p className="text-sm text-gray-600 font-light">
                    Add a new version of your resume for different job applications
                  </p>
                </div>
              </div>

              {/* Resume Cards */}
              {resumes.map((resume) => (
                <div key={resume.id} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-2">
                      {resume.isDefault && (
                        <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Default
                        </Badge>
                      )}
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{resume.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-light">Version</span>
                      <span className="text-gray-900 font-medium">{resume.version}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-light">Type</span>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-0 text-xs">
                        {resume.type}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-light">Size</span>
                      <span className="text-gray-900 font-medium">{resume.fileSize}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      Modified {formatDate(resume.lastModified)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="rounded-xl border-gray-200">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-xl border-gray-200">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ApplicationTracker;
