import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Target, 
  Briefcase, 
  Users, 
  Star,
  ArrowRight,
  Eye,
  MessageCircle,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchTerm, setSearchTerm] = useState("");
  const featuredArticles = [
    {
      id: 1,
      slug: "remote-job-interviews-guide",
      title: "The Complete Guide to Remote Job Interviews: Mastering Virtual Meetings in 2025",
      excerpt: "Learn essential strategies for succeeding in remote job interviews, from technical setup to virtual body language and building rapport through screens.",
      author: "Sarah Johnson",
      authorRole: "Career Coach & Interview Expert",
      date: "January 15, 2025",
      readTime: "12 min read",
      category: "Interview Tips",
      tags: ["Remote Work", "Interview Preparation", "Virtual Meetings", "Career Advice"],
      views: "2.3K",
      comments: 47,
      featured: true,
      image: "📹"
    },
    {
      id: 2,
      slug: "salary-negotiation-strategies",
      title: "Salary Negotiation Strategies That Actually Work: A Data-Driven Approach",
      excerpt: "Discover proven salary negotiation tactics backed by research, including when to negotiate, how to research market rates, and scripted responses for common scenarios.",
      author: "Michael Chen",
      authorRole: "Compensation Analyst",
      date: "January 12, 2025",
      readTime: "15 min read",
      category: "Career Growth",
      tags: ["Salary Negotiation", "Career Advancement", "Professional Development"],
      views: "1.8K",
      comments: 32,
      featured: true,
      image: "💰"
    },
    {
      id: 3,
      slug: "ats-friendly-resume-guide",
      title: "Building an ATS-Friendly Resume: What Applicant Tracking Systems Really Look For",
      excerpt: "Understand how ATS systems work and optimize your resume to pass through automated screening while maintaining human readability.",
      author: "Emily Rodriguez",
      authorRole: "HR Technology Specialist",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "Resume Writing",
      tags: ["Resume Optimization", "ATS", "Job Applications", "HR Technology"],
      views: "3.1K",
      comments: 58,
      featured: true,
      image: "📄"
    }
  ];

  const recentArticles = [
    {
      id: 4,
      slug: "career-transition-psychology",
      title: "The Psychology of Career Transitions: Overcoming Fear and Uncertainty",
      excerpt: "Explore the emotional aspects of changing careers and practical strategies for managing transition anxiety while pursuing new opportunities.",
      author: "Dr. Amanda Foster",
      authorRole: "Career Psychology Expert",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Career Psychology",
      tags: ["Career Change", "Mental Health", "Professional Growth"],
      views: "1.2K",
      comments: 24,
      image: "🧠"
    },
    {
      id: 5,
      slug: "green-technology-opportunities",
      title: "Industry Spotlight: Emerging Opportunities in Green Technology and Sustainability",
      excerpt: "Discover the fastest-growing roles in environmental technology, renewable energy, and sustainable business practices.",
      author: "James Thompson",
      authorRole: "Industry Analyst",
      date: "January 5, 2025",
      readTime: "11 min read",
      category: "Industry Trends",
      tags: ["Green Jobs", "Sustainability", "Renewable Energy", "Future of Work"],
      views: "956",
      comments: 18,
      image: "🌱"
    },
    {
      id: 6,
      slug: "digital-networking-guide",
      title: "Networking in the Digital Age: Building Professional Relationships Online",
      excerpt: "Master the art of digital networking through LinkedIn, virtual events, and online communities to expand your professional circle.",
      author: "Lisa Park",
      authorRole: "Professional Networking Coach",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Networking",
      tags: ["Professional Networking", "LinkedIn", "Digital Marketing", "Relationship Building"],
      views: "1.4K",
      comments: 35,
      image: "🤝"
    },
    {
      id: 7,
      slug: "skills-based-hiring-trends",
      title: "The Rise of Skills-Based Hiring: How to Position Yourself for Success",
      excerpt: "Learn how employers are shifting focus from degrees to demonstrable skills and how to showcase your capabilities effectively.",
      author: "Robert Kim",
      authorRole: "Talent Acquisition Director",
      date: "December 30, 2024",
      readTime: "7 min read",
      category: "Hiring Trends",
      tags: ["Skills Assessment", "Talent Acquisition", "Professional Development"],
      views: "2.1K",
      comments: 41,
      image: "🎯"
    },
    {
      id: 8,
      slug: "work-life-balance-strategies",
      title: "Work-Life Balance in High-Pressure Careers: Strategies from Top Performers",
      excerpt: "Insights from executives, consultants, and entrepreneurs on maintaining personal well-being while excelling in demanding roles.",
      author: "Jennifer Walsh",
      authorRole: "Executive Coach",
      date: "December 28, 2024",
      readTime: "13 min read",
      category: "Work-Life Balance",
      tags: ["Executive Leadership", "Stress Management", "Performance Optimization"],
      views: "1.7K",
      comments: 29,
      image: "⚖️"
    }
  ];

  const categories = [
    { name: "All Articles", count: 45, active: activeCategory === "All Articles" },
    { name: "Interview Tips", count: 12, active: activeCategory === "Interview Tips" },
    { name: "Career Growth", count: 8, active: activeCategory === "Career Growth" },
    { name: "Resume Writing", count: 7, active: activeCategory === "Resume Writing" },
    { name: "Industry Trends", count: 9, active: activeCategory === "Industry Trends" },
    { name: "Networking", count: 6, active: activeCategory === "Networking" },
    { name: "Work-Life Balance", count: 3, active: activeCategory === "Work-Life Balance" }
  ];

  // Filter articles based on active category and search term
  const filterArticles = (articles: any[]) => {
    let filtered = articles;
    
    // Filter by category
    if (activeCategory !== "All Articles") {
      filtered = filtered.filter(article => article.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  };

  const filteredFeaturedArticles = filterArticles(featuredArticles);
  const filteredRecentArticles = filterArticles(recentArticles);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Career Insights & Professional Growth
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert advice, industry insights, and actionable strategies to accelerate your career journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button onClick={() => setSearchTerm("")}>
                {searchTerm ? "Clear" : "Search Articles"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Featured Articles */}
              <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <h2 className="text-2xl font-bold">
                    {activeCategory === "All Articles" ? "Featured Articles" : `Featured ${activeCategory} Articles`}
                  </h2>
                  {filteredFeaturedArticles.length > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {filteredFeaturedArticles.length} article{filteredFeaturedArticles.length !== 1 ? 's' : ''}
                    </Badge>
                  )}
                </div>
                
                {filteredFeaturedArticles.length > 0 ? (
                  <div className="grid gap-6">
                    {filteredFeaturedArticles.map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-primary/10 p-8 flex items-center justify-center">
                              <span className="text-6xl">{article.image}</span>
                            </div>
                            <div className="md:w-2/3 p-6">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="secondary">{article.category}</Badge>
                                {article.featured && (
                                  <Badge variant="default">Featured</Badge>
                                )}
                              </div>
                              <h3 className="text-xl font-bold mb-3 line-clamp-2">
                                {article.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 line-clamp-3">
                                {article.excerpt}
                              </p>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4" />
                                  <span>{article.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{article.readTime}</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.slice(0, 3).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{article.views}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{article.comments}</span>
                                  </div>
                                </div>
                                <Link to={`/blog/${article.slug}`}>
                                  <Button variant="default">
                                    Read Article
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                    <p className="text-muted-foreground">
                      {searchTerm ? 
                        `No articles match your search for "${searchTerm}"` : 
                        `No featured articles in ${activeCategory} category`
                      }
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setActiveCategory("All Articles");
                        setSearchTerm("");
                      }}
                    >
                      View All Articles
                    </Button>
                  </div>
                )}
              </section>

              {/* Recent Articles */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">
                    {activeCategory === "All Articles" ? "Recent Articles" : `Recent ${activeCategory} Articles`}
                  </h2>
                  {filteredRecentArticles.length > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {filteredRecentArticles.length} article{filteredRecentArticles.length !== 1 ? 's' : ''}
                    </Badge>
                  )}
                </div>
                
                {filteredRecentArticles.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredRecentArticles.map((article) => (
                      <Card key={article.id} className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary">{article.category}</Badge>
                            <span className="text-4xl">{article.image}</span>
                          </div>
                          <CardTitle className="line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">
                            {article.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {article.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{article.views}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="w-3 h-3" />
                                <span>{article.comments}</span>
                              </div>
                            </div>
                            <Link to={`/blog/${article.slug}`}>
                              <Button variant="outline" size="sm">
                                Read More
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <TrendingUp className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                    <h3 className="text-lg font-semibold mb-2">No recent articles found</h3>
                    <p className="text-muted-foreground text-sm">
                      {searchTerm ? 
                        `No recent articles match "${searchTerm}"` : 
                        `No recent articles in ${activeCategory} category`
                      }
                    </p>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.name}
                        variant={category.active ? "default" : "ghost"}
                        className="w-full justify-between hover:bg-primary/10"
                        size="sm"
                        onClick={() => setActiveCategory(category.name)}
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest career insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full">
                    Subscribe to Newsletter
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Join 10,000+ professionals getting weekly career tips and industry insights
                  </p>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Interview Prep", "Remote Work", "Career Change", "Salary Negotiation",
                      "LinkedIn Tips", "Resume Writing", "Leadership", "Networking",
                      "Professional Growth", "Work-Life Balance", "Industry Trends"
                    ].map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => setSearchTerm(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
