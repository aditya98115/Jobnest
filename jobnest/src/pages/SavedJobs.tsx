import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import { useAuth } from '@/contexts/AuthContext';
import { useApplicationContext } from '@/contexts/ApplicationContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Bookmark,
  BookmarkX,
  MapPin,
  Calendar,
  Search,
  Filter,
  ExternalLink,
  Building,
  Clock,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const SavedJobs = () => {
  const { user } = useAuth();
  const { savedJobs, unsaveJob, loading } = useApplicationContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('savedDate');
  const [filteredJobs, setFilteredJobs] = useState(savedJobs);

  useEffect(() => {
    let filtered = savedJobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort jobs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'savedDate':
          return new Date(b.savedDate).getTime() - new Date(a.savedDate).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'company':
          return a.company.localeCompare(b.company);
        default:
          return 0;
      }
    });

    setFilteredJobs(filtered);
  }, [savedJobs, searchTerm, sortBy]);

  const handleUnsaveJob = async (jobId: string) => {
    try {
      await unsaveJob(jobId);
    } catch (error) {
      console.error('Error unsaving job:', error);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return 'Unknown date';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <p className="text-muted-foreground">Please sign in to view your saved jobs</p>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Saved Jobs</h1>
              <p className="text-muted-foreground">
                {savedJobs.length} {savedJobs.length === 1 ? 'job' : 'jobs'} saved
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Bookmark className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Keep track of interesting opportunities</span>
            </div>
          </div>

          {/* Search and Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search saved jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savedDate">Date Saved</SelectItem>
                      <SelectItem value="title">Job Title</SelectItem>
                      <SelectItem value="company">Company</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}

          {/* Empty State */}
          {!loading && savedJobs.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Bookmark className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No saved jobs yet</h3>
                <p className="text-muted-foreground mb-4 text-center">
                  Start browsing jobs and save the ones that interest you
                </p>
                <Button asChild>
                  <Link to="/">
                    Browse Jobs
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* No Search Results */}
          {!loading && savedJobs.length > 0 && filteredJobs.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms
                </p>
                <Button variant="outline" onClick={() => setSearchTerm('')}>
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Jobs List */}
          {!loading && filteredJobs.length > 0 && (
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-xl hover:text-primary">
                            <Link to={`/job/${job.id}`} className="hover:underline">
                              {job.title}
                            </Link>
                          </CardTitle>
                          {job.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          {job.salary && (
                            <div className="font-medium text-green-600">
                              {job.salary}
                            </div>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUnsaveJob(job.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <BookmarkX className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Saved {formatDate(job.savedDate)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/job/${job.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    {job.description && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {job.description.substring(0, 200)}...
                        </p>
                      </div>
                    )}
                    
                    {job.tags && job.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {job.tags.slice(0, 5).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {job.tags.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.tags.length - 5} more
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Results Summary */}
          {!loading && filteredJobs.length > 0 && (
            <div className="text-center text-sm text-muted-foreground">
              Showing {filteredJobs.length} of {savedJobs.length} saved jobs
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SavedJobs;
