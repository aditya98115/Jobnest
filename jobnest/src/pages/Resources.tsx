import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  FileText, 
  TrendingUp, 
  Users, 
  Briefcase, 
  BookOpen, 
  Globe, 
  Zap, 
  Target, 
  Brain,
  Building,
  Calculator,
  MessageCircle,
  Eye,
  Star,
  ArrowUpRight,
  Code,
  PenTool,
  Shield,
  Clock
} from "lucide-react";
import Header from "@/components/Header";

const Resources = () => {
  const resourceCategories = [
    {
      id: "job-search",
      title: "Job Search",
      icon: <Search className="w-6 h-6" />,
      description: "Find your next opportunity",
      resources: [
        {
          name: "LinkedIn Jobs",
          url: "https://www.linkedin.com/jobs/",
          description: "Professional network job platform with company insights",
          category: "Major Platforms",
          type: "Platform",
          rating: 4.8
        },
        {
          name: "Indeed",
          url: "https://www.indeed.com/",
          description: "World's largest job site with millions of listings",
          category: "Major Platforms",
          type: "Platform",
          rating: 4.5
        },
        {
          name: "Glassdoor",
          url: "https://www.glassdoor.com/",
          description: "Jobs with company reviews and salary insights",
          category: "Major Platforms",
          type: "Platform",
          rating: 4.3
        },
        {
          name: "AngelList",
          url: "https://angel.co/",
          description: "Startup jobs and equity information",
          category: "Specialized",
          type: "Startup Focus",
          rating: 4.2
        },
        {
          name: "RemoteOK",
          url: "https://remoteok.io/",
          description: "Remote work opportunities worldwide",
          category: "Remote Work",
          type: "Remote Focus",
          rating: 4.4
        },
        {
          name: "We Work Remotely",
          url: "https://weworkremotely.com/",
          description: "Largest remote work community",
          category: "Remote Work",
          type: "Remote Focus",
          rating: 4.3
        },
        {
          name: "Stack Overflow Jobs",
          url: "https://stackoverflow.com/jobs",
          description: "Developer-focused job board",
          category: "Tech Specific",
          type: "Developer Focus",
          rating: 4.1
        },
        {
          name: "Dribbble Jobs",
          url: "https://dribbble.com/jobs",
          description: "Design and creative roles",
          category: "Creative",
          type: "Design Focus",
          rating: 4.0
        }
      ]
    },
    {
      id: "career-tools",
      title: "Career Tools",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Build and enhance your career",
      resources: [
        {
          name: "Resume.io",
          url: "https://resume.io/",
          description: "Professional resume builder with ATS optimization",
          category: "Resume Building",
          type: "Builder",
          rating: 4.6
        },
        {
          name: "Canva Resume",
          url: "https://www.canva.com/resumes/",
          description: "Creative resume templates and design tools",
          category: "Resume Building",
          type: "Design Tool",
          rating: 4.5
        },
        {
          name: "Zety",
          url: "https://zety.com/",
          description: "Resume and cover letter builder",
          category: "Resume Building",
          type: "Builder",
          rating: 4.4
        },
        {
          name: "LinkedIn Learning",
          url: "https://www.linkedin.com/learning/",
          description: "Professional skill development courses",
          category: "Skill Development",
          type: "Learning Platform",
          rating: 4.3
        },
        {
          name: "Coursera",
          url: "https://www.coursera.org/",
          description: "University courses and professional certificates",
          category: "Skill Development",
          type: "Learning Platform",
          rating: 4.4
        },
        {
          name: "Udemy",
          url: "https://www.udemy.com/",
          description: "Practical skills and technology courses",
          category: "Skill Development",
          type: "Learning Platform",
          rating: 4.2
        },
        {
          name: "Portfolio Box",
          url: "https://www.portfoliobox.net/",
          description: "Professional portfolio website builder",
          category: "Portfolio",
          type: "Builder",
          rating: 4.1
        },
        {
          name: "Behance",
          url: "https://www.behance.net/",
          description: "Creative portfolio showcase platform",
          category: "Portfolio",
          type: "Showcase",
          rating: 4.3
        }
      ]
    },
    {
      id: "company-research",
      title: "Company Research",
      icon: <Building className="w-6 h-6" />,
      description: "Know your potential employers",
      resources: [
        {
          name: "Crunchbase",
          url: "https://www.crunchbase.com/",
          description: "Company funding, growth, and business intelligence",
          category: "Business Intelligence",
          type: "Database",
          rating: 4.5
        },
        {
          name: "SEC EDGAR",
          url: "https://www.sec.gov/edgar/searchedgar/companysearch.html",
          description: "Official company financial filings and reports",
          category: "Financial Data",
          type: "Government Database",
          rating: 4.2
        },
        {
          name: "Glassdoor Reviews",
          url: "https://www.glassdoor.com/Reviews/index.htm",
          description: "Employee reviews and workplace insights",
          category: "Employee Insights",
          type: "Review Platform",
          rating: 4.1
        },
        {
          name: "Indeed Company Reviews",
          url: "https://www.indeed.com/companies",
          description: "Workplace reviews and company ratings",
          category: "Employee Insights",
          type: "Review Platform",
          rating: 4.0
        },
        {
          name: "Blind",
          url: "https://www.teamblind.com/",
          description: "Anonymous professional network for workplace discussions",
          category: "Employee Insights",
          type: "Anonymous Platform",
          rating: 3.9
        },
        {
          name: "Owler",
          url: "https://www.owler.com/",
          description: "Company news, competitor analysis, and insights",
          category: "Business Intelligence",
          type: "Analytics Platform",
          rating: 4.0
        },
        {
          name: "LinkedIn Company Pages",
          url: "https://www.linkedin.com/company/",
          description: "Professional company profiles and employee networks",
          category: "Professional Network",
          type: "Social Platform",
          rating: 4.4
        },
        {
          name: "Craft.co",
          url: "https://craft.co/",
          description: "Company intelligence and market research",
          category: "Market Research",
          type: "Intelligence Platform",
          rating: 4.1
        }
      ]
    },
    {
      id: "salary-research",
      title: "Salary Research",
      icon: <Calculator className="w-6 h-6" />,
      description: "Know your worth",
      resources: [
        {
          name: "levels.fyi",
          url: "https://www.levels.fyi/",
          description: "Tech industry compensation data with detailed breakdowns",
          category: "Tech Compensation",
          type: "Salary Database",
          rating: 4.8
        },
        {
          name: "PayScale",
          url: "https://www.payscale.com/",
          description: "Comprehensive salary data by role, experience, and location",
          category: "General Salary Data",
          type: "Salary Research",
          rating: 4.3
        },
        {
          name: "Glassdoor Salaries",
          url: "https://www.glassdoor.com/Salaries/index.htm",
          description: "Company-specific salary ranges and employee reports",
          category: "Company Specific",
          type: "Salary Database",
          rating: 4.2
        },
        {
          name: "Salary.com",
          url: "https://www.salary.com/",
          description: "Market rate analysis and compensation benchmarks",
          category: "Market Analysis",
          type: "Compensation Tool",
          rating: 4.1
        },
        {
          name: "Comparably",
          url: "https://www.comparably.com/",
          description: "Culture and compensation data from employees",
          category: "Culture & Compensation",
          type: "Employee Data",
          rating: 4.0
        },
        {
          name: "H1B Salary Database",
          url: "https://h1bdata.info/",
          description: "H1B visa salary data for international workers",
          category: "Visa Specific",
          type: "Government Data",
          rating: 3.9
        },
        {
          name: "Robert Half Salary Guide",
          url: "https://www.roberthalf.com/salary-guide",
          description: "Annual salary guides by industry and role",
          category: "Industry Guides",
          type: "Market Report",
          rating: 4.2
        },
        {
          name: "Built In Salaries",
          url: "https://builtin.com/salaries",
          description: "Tech startup salary data and insights",
          category: "Startup Focus",
          type: "Salary Database",
          rating: 4.0
        }
      ]
    },
    {
      id: "interview-prep",
      title: "Interview Prep",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Ace your interviews",
      resources: [
        {
          name: "Pramp",
          url: "https://www.pramp.com/",
          description: "Free peer-to-peer mock interviews",
          category: "Mock Interviews",
          type: "Practice Platform",
          rating: 4.5
        },
        {
          name: "InterviewBuddy",
          url: "https://www.interviewbuddy.in/",
          description: "AI-powered interview practice with professionals",
          category: "Mock Interviews",
          type: "AI Platform",
          rating: 4.2
        },
        {
          name: "LeetCode",
          url: "https://leetcode.com/",
          description: "Coding interview practice and competitions",
          category: "Technical Practice",
          type: "Coding Platform",
          rating: 4.4
        },
        {
          name: "HackerRank",
          url: "https://www.hackerrank.com/",
          description: "Programming challenges and skill assessments",
          category: "Technical Practice",
          type: "Coding Platform",
          rating: 4.1
        },
        {
          name: "Big Interview",
          url: "https://biginterview.com/",
          description: "Comprehensive interview training system",
          category: "Interview Training",
          type: "Training Platform",
          rating: 4.3
        },
        {
          name: "Interviewing.io",
          url: "https://interviewing.io/",
          description: "Anonymous technical interviews with engineers",
          category: "Technical Practice",
          type: "Practice Platform",
          rating: 4.2
        },
        {
          name: "Glassdoor Interview Questions",
          url: "https://www.glassdoor.com/Interview/index.htm",
          description: "Real interview questions from specific companies",
          category: "Question Database",
          type: "Question Bank",
          rating: 4.0
        },
        {
          name: "System Design Primer",
          url: "https://github.com/donnemartin/system-design-primer",
          description: "System design interview preparation guide",
          category: "System Design",
          type: "Learning Resource",
          rating: 4.6
        }
      ]
    },
    {
      id: "networking",
      title: "Networking",
      icon: <Users className="w-6 h-6" />,
      description: "Build professional connections",
      resources: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
          description: "Professional networking and career development",
          category: "Professional Network",
          type: "Social Platform",
          rating: 4.5
        },
        {
          name: "Meetup",
          url: "https://www.meetup.com/",
          description: "Professional meetups and industry events",
          category: "Events",
          type: "Event Platform",
          rating: 4.2
        },
        {
          name: "Eventbrite",
          url: "https://www.eventbrite.com/",
          description: "Professional conferences and workshops",
          category: "Events",
          type: "Event Platform",
          rating: 4.1
        },
        {
          name: "Shapr",
          url: "https://shapr.co/",
          description: "Professional networking app for meaningful connections",
          category: "Networking Apps",
          type: "Mobile App",
          rating: 4.0
        },
        {
          name: "Bumble Bizz",
          url: "https://bumble.com/bizz",
          description: "Professional networking within Bumble app",
          category: "Networking Apps",
          type: "Mobile App",
          rating: 3.8
        },
        {
          name: "AngelList",
          url: "https://angel.co/",
          description: "Startup ecosystem networking and opportunities",
          category: "Startup Network",
          type: "Platform",
          rating: 4.3
        },
        {
          name: "Product Hunt",
          url: "https://www.producthunt.com/",
          description: "Tech product community and maker network",
          category: "Tech Community",
          type: "Community Platform",
          rating: 4.1
        },
        {
          name: "GitHub",
          url: "https://github.com/",
          description: "Developer community and project collaboration",
          category: "Developer Network",
          type: "Code Platform",
          rating: 4.7
        }
      ]
    }
  ];

  const quickLinks = [
    {
      category: "Popular Tools",
      links: [
        { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
        { name: "Resume.io", url: "https://resume.io/" },
        { name: "levels.fyi", url: "https://www.levels.fyi/" },
        { name: "Glassdoor", url: "https://www.glassdoor.com/" },
        { name: "LeetCode", url: "https://leetcode.com/" }
      ]
    },
    {
      category: "Learning Platforms",
      links: [
        { name: "Coursera", url: "https://www.coursera.org/" },
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
        { name: "Udemy", url: "https://www.udemy.com/" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "Khan Academy", url: "https://www.khanacademy.org/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            Resources
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Curated tools and platforms to accelerate your career journey.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-24 max-w-7xl">
        {/* Quick Links */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            {quickLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-gray-900 mb-6">{section.category}</h3>
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-200 group"
                    >
                      <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="job-search" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-16 bg-gray-50 rounded-2xl p-1 border-0">
            {resourceCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex flex-col items-center gap-2 rounded-xl px-4 py-4 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all duration-200"
              >
                {category.icon}
                <span className="text-sm font-medium hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {resourceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">{category.title}</h2>
                <p className="text-lg text-gray-600 font-light">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-200 group-hover:shadow-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                            {resource.description}
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-0 font-normal text-xs">
                            {resource.category}
                          </Badge>
                          <Badge variant="outline" className="border-gray-200 text-gray-500 text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-600 font-medium">{resource.rating}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Resources */}
        <section className="mt-24 border-t border-gray-100 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Editor's Choice
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Our most recommended tools for career success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "LinkedIn Premium",
                description: "Advanced networking and job search features",
                url: "https://premium.linkedin.com/",
                badge: "Most Popular",
                badgeColor: "bg-blue-500"
              },
              {
                name: "Notion",
                description: "All-in-one workspace for job tracking and notes",
                url: "https://www.notion.so/",
                badge: "Productivity",
                badgeColor: "bg-purple-500"
              },
              {
                name: "Calendly",
                description: "Easy interview scheduling and availability",
                url: "https://calendly.com/",
                badge: "Time Saver",
                badgeColor: "bg-green-500"
              }
            ].map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-200 group-hover:shadow-lg text-center">
                  <div className={`inline-flex items-center gap-2 ${tool.badgeColor} text-white rounded-full px-3 py-1 text-sm font-medium mb-4`}>
                    <Star className="w-3 h-3" />
                    {tool.badge}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Resource Tips */}
        <section className="mt-24 border-t border-gray-100 pt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
              Pro Tips
            </h2>
            <div className="space-y-6 text-left">
              {[
                "Bookmark 3-5 job boards that align with your industry and check them daily",
                "Set up Google Alerts for companies you're interested in to stay updated",
                "Use salary research tools to prepare for negotiation conversations",
                "Practice coding problems regularly, even when not actively job hunting",
                "Build relationships before you need them - networking is a long-term game"
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm font-medium">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-light leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
