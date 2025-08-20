import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ExternalLink, 
  Globe, 
  MapPin,
  Users,
  Code,
  Briefcase,
  Building,
  GraduationCap,
  Star,
  Filter,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Laptop,
  Clock,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";

const JobPortals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Comprehensive job portals data
  const jobPortals = [
    // Global General Job Boards
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/jobs/",
      category: "global",
      region: "Global",
      description: "World's largest professional network with 900M+ users. Best for networking and professional opportunities.",
      features: ["Professional Networking", "Company Insights", "Salary Information", "Career Advice"],
      rating: 4.8,
      popular: true,
      logo: "🔗"
    },
    {
      id: 2,
      name: "Indeed",
      url: "https://www.indeed.com/",
      category: "global",
      region: "Global",
      description: "World's #1 job site with 250M+ unique visitors monthly. Aggregates jobs from thousands of websites.",
      features: ["Job Aggregation", "Company Reviews", "Salary Comparisons", "Resume Builder"],
      rating: 4.5,
      popular: true,
      logo: "🔵"
    },
    {
      id: 3,
      name: "Glassdoor",
      url: "https://www.glassdoor.com/",
      category: "global",
      region: "Global",
      description: "Transparent workplace insights with 100M+ reviews and salaries from employees worldwide.",
      features: ["Company Reviews", "Salary Transparency", "Interview Questions", "CEO Ratings"],
      rating: 4.4,
      popular: true,
      logo: "🚪"
    },
    {
      id: 4,
      name: "ZipRecruiter",
      url: "https://www.ziprecruiter.com/",
      category: "global",
      region: "Global",
      description: "AI-powered job matching platform connecting 9M+ job seekers with employers.",
      features: ["AI Job Matching", "Mobile App", "One-Click Apply", "Salary Estimates"],
      rating: 4.3,
      popular: false,
      logo: "⚡"
    },
    {
      id: 5,
      name: "Monster",
      url: "https://www.monster.com/",
      category: "global",
      region: "Global",
      description: "Pioneer in online job searching with 25+ years of experience. Strong in career advice.",
      features: ["Career Coaching", "Resume Services", "Job Alerts", "Career Assessments"],
      rating: 4.1,
      popular: false,
      logo: "👹"
    },

    // Remote Work Specialists
    {
      id: 6,
      name: "We Work Remotely",
      url: "https://weworkremotely.com/",
      category: "remote",
      region: "Global",
      description: "Largest remote work community with 3M+ users. 100% remote job listings only.",
      features: ["100% Remote Jobs", "No Location Restrictions", "Startup to Enterprise", "Tech Focus"],
      rating: 4.7,
      popular: true,
      logo: "🌍"
    },
    {
      id: 7,
      name: "Remote.co",
      url: "https://remote.co/",
      category: "remote",
      region: "Global",
      description: "Curated remote job board featuring hand-picked opportunities from top companies.",
      features: ["Curated Listings", "Remote Company Database", "Career Resources", "Quality Jobs"],
      rating: 4.6,
      popular: true,
      logo: "🏠"
    },
    {
      id: 8,
      name: "RemoteOK",
      url: "https://remoteok.io/",
      category: "remote",
      region: "Global",
      description: "Tech-focused remote job board with real-time listings and salary data.",
      features: ["Real-time Updates", "Salary Transparency", "Tech Focus", "Global Opportunities"],
      rating: 4.5,
      popular: true,
      logo: "💻"
    },
    {
      id: 9,
      name: "FlexJobs",
      url: "https://www.flexjobs.com/",
      category: "remote",
      region: "Global",
      description: "Premium job board specializing in flexible, remote, and part-time opportunities.",
      features: ["Screened Jobs", "Flexible Work", "Career Coaching", "Premium Service"],
      rating: 4.4,
      popular: false,
      logo: "🔄"
    },
    {
      id: 10,
      name: "AngelList (Wellfound)",
      url: "https://wellfound.com/",
      category: "remote",
      region: "Global",
      description: "Startup job platform with equity information and remote opportunities.",
      features: ["Startup Jobs", "Equity Information", "Direct Founder Contact", "Remote Options"],
      rating: 4.3,
      popular: false,
      logo: "👼"
    },

    // Tech-Specific Platforms
    {
      id: 11,
      name: "Stack Overflow Jobs",
      url: "https://stackoverflow.com/jobs",
      category: "tech",
      region: "Global",
      description: "Developer-focused job board by Stack Overflow with technical assessments.",
      features: ["Developer Community", "Technical Skills", "No Recruiter Spam", "Company Culture"],
      rating: 4.6,
      popular: true,
      logo: "📚"
    },
    {
      id: 12,
      name: "GitHub Jobs",
      url: "https://github.com/careers",
      category: "tech",
      region: "Global",
      description: "Developer jobs from the world's largest code repository platform.",
      features: ["Developer Focus", "Open Source", "Technical Roles", "Git Integration"],
      rating: 4.5,
      popular: true,
      logo: "🐙"
    },
    {
      id: 13,
      name: "Dice",
      url: "https://www.dice.com/",
      category: "tech",
      region: "US",
      description: "Leading tech job board in North America with 30+ years of experience.",
      features: ["Tech Specialization", "Salary Tools", "Career Insights", "Skill Assessments"],
      rating: 4.2,
      popular: false,
      logo: "🎲"
    },
    {
      id: 14,
      name: "HackerRank Jobs",
      url: "https://www.hackerrank.com/jobs",
      category: "tech",
      region: "Global",
      description: "Skill-based hiring platform where coding skills matter more than resumes.",
      features: ["Coding Challenges", "Skill Verification", "No Resume Bias", "Technical Assessment"],
      rating: 4.4,
      popular: false,
      logo: "⚔️"
    },
    {
      id: 15,
      name: "Toptal",
      url: "https://www.toptal.com/",
      category: "freelance",
      region: "Global",
      description: "Exclusive network of top 3% freelance software developers and designers.",
      features: ["Top 3% Talent", "Rigorous Screening", "High-end Projects", "Global Clients"],
      rating: 4.5,
      popular: true,
      logo: "🏆"
    },

    // Regional Leaders - India
    {
      id: 16,
      name: "Naukri.com",
      url: "https://www.naukri.com/",
      category: "regional",
      region: "India",
      description: "India's largest job portal with 60M+ registered users and 4.5M+ live jobs.",
      features: ["India's #1", "Resume Services", "Interview Preparation", "Skill Tests"],
      rating: 4.3,
      popular: true,
      logo: "🇮🇳"
    },
    {
      id: 17,
      name: "TimesJobs",
      url: "https://www.timesjobs.com/",
      category: "regional",
      region: "India",
      description: "Leading Indian job portal by Times Group with focus on experience professionals.",
      features: ["Times Brand", "Career Advice", "Industry Insights", "Skill Development"],
      rating: 4.1,
      popular: false,
      logo: "📰"
    },
    {
      id: 18,
      name: "Foundit (Monster India)",
      url: "https://www.foundit.in/",
      category: "regional",
      region: "India",
      description: "Rebranded Monster India with AI-powered job matching for Indian market.",
      features: ["AI Matching", "Career Guidance", "Skill Assessment", "Interview Tips"],
      rating: 4.0,
      popular: false,
      logo: "🔎"
    },

    // Regional Leaders - Europe
    {
      id: 19,
      name: "XING",
      url: "https://www.xing.com/jobs",
      category: "regional",
      region: "Germany/DACH",
      description: "Leading professional network in German-speaking countries with 20M+ members.",
      features: ["DACH Region Focus", "Professional Network", "Industry Events", "Career Coaching"],
      rating: 4.2,
      popular: false,
      logo: "🇩🇪"
    },
    {
      id: 20,
      name: "StepStone",
      url: "https://www.stepstone.com/",
      category: "regional",
      region: "Europe",
      description: "Europe's leading digital recruitment platform operating in 20+ countries.",
      features: ["European Focus", "Multi-language", "Local Expertise", "Company Insights"],
      rating: 4.3,
      popular: false,
      logo: "🇪🇺"
    },
    {
      id: 21,
      name: "Reed.co.uk",
      url: "https://www.reed.co.uk/",
      category: "regional",
      region: "UK",
      description: "UK's leading job site with 60+ years of recruitment experience.",
      features: ["UK Market Leader", "Career Advice", "Salary Guides", "Training Courses"],
      rating: 4.1,
      popular: false,
      logo: "🇬🇧"
    },

    // Creative & Design
    {
      id: 22,
      name: "Dribbble Jobs",
      url: "https://dribbble.com/jobs",
      category: "creative",
      region: "Global",
      description: "Premium design job board for the world's best designers and creative professionals.",
      features: ["Design Focus", "Portfolio Integration", "Creative Community", "Quality Clients"],
      rating: 4.5,
      popular: true,
      logo: "🎨"
    },
    {
      id: 23,
      name: "Behance Jobs",
      url: "https://www.behance.net/jobboard",
      category: "creative",
      region: "Global",
      description: "Adobe's creative job platform connecting designers with top creative opportunities.",
      features: ["Adobe Integration", "Creative Portfolio", "Global Reach", "Industry Leaders"],
      rating: 4.4,
      popular: false,
      logo: "🎭"
    },
    {
      id: 24,
      name: "99designs",
      url: "https://99designs.com/",
      category: "creative",
      region: "Global",
      description: "Global creative platform for graphic design contests and freelance projects.",
      features: ["Design Contests", "Freelance Projects", "Global Clients", "Creative Community"],
      rating: 4.2,
      popular: false,
      logo: "✨"
    },

    // Freelance Platforms
    {
      id: 25,
      name: "Upwork",
      url: "https://www.upwork.com/",
      category: "freelance",
      region: "Global",
      description: "World's largest freelancing platform with 18M+ freelancers and 5M+ clients.",
      features: ["Largest Platform", "Escrow Protection", "Time Tracking", "Global Reach"],
      rating: 4.2,
      popular: true,
      logo: "⬆️"
    },
    {
      id: 26,
      name: "Fiverr",
      url: "https://www.fiverr.com/",
      category: "freelance",
      region: "Global",
      description: "Marketplace for digital services starting at $5. Perfect for quick projects.",
      features: ["Service Marketplace", "Fixed Pricing", "Quick Turnaround", "Digital Focus"],
      rating: 4.1,
      popular: true,
      logo: "5️⃣"
    },
    {
      id: 27,
      name: "Freelancer.com",
      url: "https://www.freelancer.com/",
      category: "freelance",
      region: "Global",
      description: "Global freelancing and crowdsourcing marketplace with 50M+ users.",
      features: ["Project Contests", "Milestone Payments", "Global Reach", "Diverse Skills"],
      rating: 4.0,
      popular: false,
      logo: "🆓"
    },

    // Industry Specific
    {
      id: 28,
      name: "AngelList Talent",
      url: "https://angel.co/jobs",
      category: "startup",
      region: "Global",
      description: "Startup job platform where you can see equity, salary, and team details upfront.",
      features: ["Startup Focus", "Equity Details", "Team Info", "Direct Contact"],
      rating: 4.3,
      popular: true,
      logo: "🚀"
    },
    {
      id: 29,
      name: "YC Jobs",
      url: "https://www.worklist.fyi/",
      category: "startup",
      region: "Global",
      description: "Y Combinator startup job board featuring jobs at YC portfolio companies.",
      features: ["YC Network", "Startup Jobs", "High Growth", "Innovation Focus"],
      rating: 4.4,
      popular: false,
      logo: "⚡"
    },
    {
      id: 30,
      name: "HigherEdJobs",
      url: "https://www.higheredjobs.com/",
      category: "education",
      region: "Global",
      description: "Leading job board for higher education, academic, and university positions.",
      features: ["Academic Focus", "University Jobs", "Research Positions", "Education Sector"],
      rating: 4.2,
      popular: false,
      logo: "🎓"
    },

    // Emerging & Niche
    {
      id: 31,
      name: "Otta",
      url: "https://otta.com/",
      category: "tech",
      region: "Global",
      description: "Modern job platform that matches you with roles based on your preferences.",
      features: ["Smart Matching", "Company Culture", "Transparent Process", "Tech Focus"],
      rating: 4.5,
      popular: false,
      logo: "🎯"
    },
    {
      id: 32,
      name: "Hired",
      url: "https://hired.com/",
      category: "tech",
      region: "Global",
      description: "Marketplace where companies apply to you. Tech talent gets access to 4000+ companies.",
      features: ["Reverse Job Board", "Salary Upfront", "Tech Focus", "Personal Advisor"],
      rating: 4.4,
      popular: false,
      logo: "📧"
    },
    {
      id: 33,
      name: "Contra",
      url: "https://contra.com/",
      category: "freelance",
      region: "Global",
      description: "Commission-free freelance platform for independent professionals.",
      features: ["No Commission", "Portfolio Building", "Network Growth", "Creative Focus"],
      rating: 4.3,
      popular: false,
      logo: "🆚"
    },
    {
      id: 34,
      name: "Polywork",
      url: "https://www.polywork.com/",
      category: "global",
      region: "Global",
      description: "Professional network that highlights all your work, not just your day job.",
      features: ["Multi-faceted Profiles", "Side Projects", "Creator Economy", "Modern Network"],
      rating: 4.2,
      popular: false,
      logo: "🔗"
    },

    // Additional Global Platforms
    {
      id: 35,
      name: "CareerBuilder",
      url: "https://www.careerbuilder.com/",
      category: "global",
      region: "US",
      description: "One of the largest job boards in North America with AI-powered matching.",
      features: ["AI Matching", "Resume Database", "Hiring Solutions", "Career Advice"],
      rating: 4.0,
      popular: false,
      logo: "🏗️"
    },
    {
      id: 36,
      name: "SimplyHired",
      url: "https://www.simplyhired.com/",
      category: "global",
      region: "Global",
      description: "Job search engine that aggregates listings from thousands of job boards.",
      features: ["Job Aggregation", "Salary Estimates", "Company Reviews", "Easy Search"],
      rating: 3.9,
      popular: false,
      logo: "🔍"
    },

    // Additional Global Platforms
    {
      id: 37,
      name: "ZipRecruiter",
      url: "https://www.ziprecruiter.com/",
      category: "global",
      region: "US",
      description: "AI-powered job matching platform connecting 9M+ job seekers with employers.",
      features: ["AI Job Matching", "Mobile App", "One-Click Apply", "Salary Estimates"],
      rating: 4.3,
      popular: true,
      logo: "⚡"
    },
    {
      id: 38,
      name: "Snagajob",
      url: "https://www.snagajob.com/",
      category: "global",
      region: "US",
      description: "Leading platform for hourly work with 100M+ registered job seekers.",
      features: ["Hourly Jobs", "Instant Apply", "Schedule Interviews", "Text Notifications"],
      rating: 4.0,
      popular: false,
      logo: "⏰"
    },
    {
      id: 39,
      name: "FlexJobs",
      url: "https://www.flexjobs.com/",
      category: "global",
      region: "Global",
      description: "Premium job board specializing in flexible, remote, and part-time opportunities.",
      features: ["Screened Jobs", "Flexible Work", "Career Coaching", "Premium Service"],
      rating: 4.4,
      popular: true,
      logo: "🔄"
    },
    {
      id: 40,
      name: "Robert Half",
      url: "https://www.roberthalf.com/",
      category: "global",
      region: "Global",
      description: "Global staffing firm specializing in accounting, finance, and technology roles.",
      features: ["Professional Staffing", "Temporary Work", "Direct Hire", "Consulting"],
      rating: 4.1,
      popular: false,
      logo: "🏛️"
    },

    // European Job Boards
    {
      id: 41,
      name: "Jobs.de",
      url: "https://www.jobs.de/",
      category: "regional",
      region: "Germany",
      description: "Leading German job portal with comprehensive job listings across all industries.",
      features: ["German Market", "Industry Focus", "Career Tips", "Employer Branding"],
      rating: 4.2,
      popular: false,
      logo: "🇩🇪"
    },
    {
      id: 42,
      name: "Indeed Germany",
      url: "https://de.indeed.com/",
      category: "regional",
      region: "Germany",
      description: "German version of Indeed with localized content and German job listings.",
      features: ["Local Jobs", "German Interface", "Company Reviews", "Salary Info"],
      rating: 4.3,
      popular: true,
      logo: "🟦"
    },
    {
      id: 43,
      name: "JobTeaser",
      url: "https://www.jobteaser.com/",
      category: "regional",
      region: "Europe",
      description: "European career platform connecting students and graduates with employers.",
      features: ["Graduate Focus", "University Partnerships", "Career Events", "Skills Assessment"],
      rating: 4.0,
      popular: false,
      logo: "🎓"
    },
    {
      id: 44,
      name: "The Local Jobs",
      url: "https://jobs.thelocal.com/",
      category: "regional",
      region: "Europe",
      description: "English-language jobs across Europe for international professionals.",
      features: ["English Jobs", "Expat Focus", "Multiple Countries", "Relocation Support"],
      rating: 3.9,
      popular: false,
      logo: "🌍"
    },
    {
      id: 45,
      name: "Jobsite.co.uk",
      url: "https://www.jobsite.co.uk/",
      category: "regional",
      region: "UK",
      description: "UK's leading job board with comprehensive listings across all sectors.",
      features: ["UK Focus", "Career Advice", "CV Services", "Job Alerts"],
      rating: 4.1,
      popular: false,
      logo: "🇬🇧"
    },
    {
      id: 46,
      name: "Totaljobs",
      url: "https://www.totaljobs.com/",
      category: "regional",
      region: "UK",
      description: "One of UK's largest job sites with advanced search and matching technology.",
      features: ["Advanced Search", "Career Tools", "Salary Guides", "Skills Tests"],
      rating: 4.0,
      popular: false,
      logo: "🎯"
    },
    {
      id: 47,
      name: "CV-Library",
      url: "https://www.cv-library.co.uk/",
      category: "regional",
      region: "UK",
      description: "UK's fastest growing job board with innovative recruitment technology.",
      features: ["Fast Growing", "Tech Innovation", "Mobile First", "Instant Matching"],
      rating: 4.2,
      popular: false,
      logo: "📚"
    },

    // Asian Job Boards
    {
      id: 48,
      name: "JobStreet",
      url: "https://www.jobstreet.com/",
      category: "regional",
      region: "Asia",
      description: "Leading job portal in Southeast Asia serving Malaysia, Singapore, Philippines.",
      features: ["SEA Focus", "Local Expertise", "Career Fair", "Salary Tools"],
      rating: 4.2,
      popular: true,
      logo: "🏙️"
    },
    {
      id: 49,
      name: "JobsDB",
      url: "https://hk.jobsdb.com/",
      category: "regional",
      region: "Asia",
      description: "Premier job portal in Hong Kong, Thailand, and Indonesia.",
      features: ["Asian Markets", "Local Insights", "Career Advice", "Industry Reports"],
      rating: 4.1,
      popular: false,
      logo: "🏢"
    },
    {
      id: 50,
      name: "51job",
      url: "https://www.51job.com/",
      category: "regional",
      region: "China",
      description: "China's leading recruitment website with comprehensive job services.",
      features: ["China Focus", "Local Network", "Career Development", "HR Solutions"],
      rating: 4.0,
      popular: false,
      logo: "🇨🇳"
    },
    {
      id: 51,
      name: "Zhilian Zhaopin",
      url: "https://www.zhaopin.com/",
      category: "regional",
      region: "China",
      description: "One of China's largest online recruitment platforms.",
      features: ["Massive Database", "AI Matching", "Career Services", "Corporate Solutions"],
      rating: 4.1,
      popular: false,
      logo: "🏮"
    },
    {
      id: 52,
      name: "BOSS Zhipin",
      url: "https://www.zhipin.com/",
      category: "regional",
      region: "China",
      description: "China's leading direct recruitment platform for direct communication.",
      features: ["Direct Chat", "Real-time Communication", "Mobile First", "Startup Focus"],
      rating: 4.3,
      popular: true,
      logo: "💬"
    },

    // Indian Job Portals
    {
      id: 53,
      name: "Monster India",
      url: "https://www.monsterindia.com/",
      category: "regional",
      region: "India",
      description: "Leading Indian job portal with extensive database and career services.",
      features: ["India Focus", "Career Advice", "Resume Services", "Skill Tests"],
      rating: 4.0,
      popular: false,
      logo: "👹"
    },
    {
      id: 54,
      name: "Shine.com",
      url: "https://www.shine.com/",
      category: "regional",
      region: "India",
      description: "Popular Indian job portal focusing on career growth and development.",
      features: ["Career Growth", "Skill Development", "Job Alerts", "Industry Insights"],
      rating: 3.9,
      popular: false,
      logo: "✨"
    },
    {
      id: 55,
      name: "Freshersworld",
      url: "https://www.freshersworld.com/",
      category: "regional",
      region: "India",
      description: "India's top job site for freshers and entry-level positions.",
      features: ["Fresher Focus", "Entry Level", "Campus Recruitment", "Interview Prep"],
      rating: 3.8,
      popular: false,
      logo: "🌱"
    },
    {
      id: 56,
      name: "PlacementIndia",
      url: "https://www.placementindia.com/",
      category: "regional",
      region: "India",
      description: "Comprehensive placement portal for Indian job seekers.",
      features: ["Placement Focus", "Multiple Industries", "Career Guidance", "Job Matching"],
      rating: 3.7,
      popular: false,
      logo: "📍"
    },

    // Australian/New Zealand
    {
      id: 57,
      name: "Seek.com.au",
      url: "https://www.seek.com.au/",
      category: "regional",
      region: "Australia",
      description: "Australia's #1 job site with comprehensive listings and career tools.",
      features: ["Australia #1", "Career Advice", "Salary Tools", "Company Reviews"],
      rating: 4.4,
      popular: true,
      logo: "🇦🇺"
    },
    {
      id: 58,
      name: "CareerOne",
      url: "https://www.careerone.com.au/",
      category: "regional",
      region: "Australia",
      description: "Leading Australian job board with focus on career development.",
      features: ["Career Focus", "Professional Development", "Industry News", "Networking"],
      rating: 4.0,
      popular: false,
      logo: "1️⃣"
    },
    {
      id: 59,
      name: "Trade Me Jobs",
      url: "https://www.trademe.co.nz/jobs",
      category: "regional",
      region: "New Zealand",
      description: "New Zealand's most popular job site with local focus.",
      features: ["NZ Focus", "Local Jobs", "Easy Apply", "Career Resources"],
      rating: 4.2,
      popular: false,
      logo: "🇳🇿"
    },

    // Canadian Job Boards
    {
      id: 60,
      name: "Workopolis",
      url: "https://www.workopolis.com/",
      category: "regional",
      region: "Canada",
      description: "Canada's biggest job site with bilingual listings.",
      features: ["Canadian Focus", "Bilingual", "Career Advice", "Salary Tools"],
      rating: 4.0,
      popular: false,
      logo: "🇨🇦"
    },
    {
      id: 61,
      name: "Job Bank Canada",
      url: "https://www.jobbank.gc.ca/",
      category: "regional",
      region: "Canada",
      description: "Government of Canada's official job site with comprehensive listings.",
      features: ["Government Portal", "Official Source", "Immigration Support", "Labor Market Info"],
      rating: 4.1,
      popular: true,
      logo: "🍁"
    },

    // Tech Specialized Platforms (Additional)
    {
      id: 62,
      name: "CyberSeek",
      url: "https://www.cyberseek.org/",
      category: "tech",
      region: "US",
      description: "Interactive tool providing detailed data about cybersecurity jobs.",
      features: ["Cybersecurity Focus", "Data Analytics", "Career Pathways", "Skills Mapping"],
      rating: 4.3,
      popular: false,
      logo: "🔒"
    },
    {
      id: 63,
      name: "AngelList (Wellfound)",
      url: "https://wellfound.com/",
      category: "startup",
      region: "Global",
      description: "Startup job platform with equity information and remote opportunities.",
      features: ["Startup Jobs", "Equity Information", "Direct Founder Contact", "Remote Options"],
      rating: 4.3,
      popular: true,
      logo: "👼"
    },
    {
      id: 64,
      name: "ProductHunt Jobs",
      url: "https://www.producthunt.com/jobs",
      category: "tech",
      region: "Global",
      description: "Job board for product-focused roles at innovative companies.",
      features: ["Product Focus", "Innovation", "Startup Culture", "Product Management"],
      rating: 4.2,
      popular: false,
      logo: "🚀"
    },
    {
      id: 65,
      name: "CrunchBoard",
      url: "https://www.crunchboard.com/",
      category: "tech",
      region: "Global",
      description: "TechCrunch's job board featuring positions at tech companies.",
      features: ["Tech Focus", "Startup Jobs", "Innovation", "TechCrunch Network"],
      rating: 4.1,
      popular: false,
      logo: "🥊"
    },
    {
      id: 66,
      name: "Honeypot",
      url: "https://www.honeypot.io/",
      category: "tech",
      region: "Europe",
      description: "Developer-focused job platform where companies apply to you.",
      features: ["Developer Focus", "Reverse Recruiting", "European Market", "Tech Specialization"],
      rating: 4.4,
      popular: false,
      logo: "🍯"
    },
    {
      id: 67,
      name: "X-Team",
      url: "https://x-team.com/",
      category: "remote",
      region: "Global",
      description: "Remote development team platform connecting developers globally.",
      features: ["Remote Teams", "Developer Community", "Global Projects", "Skill Development"],
      rating: 4.3,
      popular: false,
      logo: "❌"
    },

    // Creative & Design (Additional)
    {
      id: 68,
      name: "Krop",
      url: "https://www.krop.com/",
      category: "creative",
      region: "Global",
      description: "Creative job board for designers, developers, and digital professionals.",
      features: ["Creative Focus", "Portfolio Integration", "Design Jobs", "Digital Roles"],
      rating: 4.0,
      popular: false,
      logo: "🎨"
    },
    {
      id: 69,
      name: "Coroflot",
      url: "https://www.coroflot.com/",
      category: "creative",
      region: "Global",
      description: "Design job board and portfolio platform for creative professionals.",
      features: ["Design Portfolio", "Creative Network", "Industry Focus", "Design Jobs"],
      rating: 3.9,
      popular: false,
      logo: "🌈"
    },
    {
      id: 70,
      name: "ArtsThread",
      url: "https://www.artsthread.com/",
      category: "creative",
      region: "Global",
      description: "Global platform connecting emerging creative talent with industry leaders.",
      features: ["Emerging Talent", "Creative Industries", "Student Focus", "Portfolio Showcase"],
      rating: 4.1,
      popular: false,
      logo: "🧵"
    },

    // Freelance Platforms (Additional)
    {
      id: 71,
      name: "Guru",
      url: "https://www.guru.com/",
      category: "freelance",
      region: "Global",
      description: "Freelance marketplace connecting businesses with freelance professionals.",
      features: ["Secure Payments", "Work Rooms", "Project Management", "Global Reach"],
      rating: 4.0,
      popular: false,
      logo: "🧙"
    },
    {
      id: 72,
      name: "PeoplePerHour",
      url: "https://www.peopleperhour.com/",
      category: "freelance",
      region: "Global",
      description: "UK-based freelance platform for hourly and project-based work.",
      features: ["Hourly Work", "Project Based", "UK Focus", "Quality Control"],
      rating: 3.9,
      popular: false,
      logo: "⏱️"
    },
    {
      id: 73,
      name: "Catalant",
      url: "https://gocatalant.com/",
      category: "freelance",
      region: "Global",
      description: "Expert network connecting businesses with independent consultants.",
      features: ["Expert Network", "Consulting", "Business Strategy", "Independent Experts"],
      rating: 4.2,
      popular: false,
      logo: "🧩"
    },
    {
      id: 74,
      name: "99designs",
      url: "https://99designs.com/",
      category: "creative",
      region: "Global",
      description: "Global creative platform for graphic design contests and freelance projects.",
      features: ["Design Contests", "Freelance Projects", "Global Clients", "Creative Community"],
      rating: 4.2,
      popular: true,
      logo: "✨"
    },

    // Industry-Specific Platforms
    {
      id: 75,
      name: "Mediabistro",
      url: "https://www.mediabistro.com/",
      category: "industry",
      region: "US",
      description: "Media and communications industry job board and career resource.",
      features: ["Media Focus", "Communications", "Journalism", "Publishing"],
      rating: 3.8,
      popular: false,
      logo: "📺"
    },
    {
      id: 76,
      name: "Idealist",
      url: "https://www.idealist.org/",
      category: "industry",
      region: "Global",
      description: "Platform for nonprofit, volunteer, and social impact opportunities.",
      features: ["Nonprofit Focus", "Social Impact", "Volunteer Work", "Mission Driven"],
      rating: 4.2,
      popular: false,
      logo: "💡"
    },
    {
      id: 77,
      name: "BioPharma Dive Jobs",
      url: "https://jobs.biopharmadive.com/",
      category: "industry",
      region: "Global",
      description: "Specialized job board for pharmaceutical and biotech industries.",
      features: ["Pharma Focus", "Biotech", "Life Sciences", "Research"],
      rating: 4.0,
      popular: false,
      logo: "🧬"
    },
    {
      id: 78,
      name: "FinancialCareers",
      url: "https://www.efinancialcareers.com/",
      category: "industry",
      region: "Global",
      description: "Leading job site for finance and banking professionals globally.",
      features: ["Finance Focus", "Banking", "Investment", "Global Markets"],
      rating: 4.1,
      popular: false,
      logo: "💰"
    },
    {
      id: 79,
      name: "Rigzone",
      url: "https://www.rigzone.com/",
      category: "industry",
      region: "Global",
      description: "Oil and gas industry job board with global opportunities.",
      features: ["Oil & Gas", "Energy Sector", "Global Jobs", "Industry News"],
      rating: 3.9,
      popular: false,
      logo: "⚡"
    },
    {
      id: 80,
      name: "HealthJobsNationwide",
      url: "https://www.healthjobsnationwide.com/",
      category: "industry",
      region: "US",
      description: "Healthcare job board connecting medical professionals with employers.",
      features: ["Healthcare Focus", "Medical Jobs", "Nursing", "Allied Health"],
      rating: 4.0,
      popular: false,
      logo: "🏥"
    },

    // Government & Military
    {
      id: 81,
      name: "USAJobs",
      url: "https://www.usajobs.gov/",
      category: "government",
      region: "US",
      description: "Official job site of the United States Federal Government.",
      features: ["Federal Jobs", "Government Careers", "Security Clearance", "Veterans Preference"],
      rating: 3.8,
      popular: true,
      logo: "🇺🇸"
    },
    {
      id: 82,
      name: "GovernmentJobs.com",
      url: "https://www.governmentjobs.com/",
      category: "government",
      region: "US",
      description: "Leading site for state and local government job opportunities.",
      features: ["State & Local", "Government Focus", "Public Service", "Benefits"],
      rating: 3.9,
      popular: false,
      logo: "🏛️"
    },
    {
      id: 83,
      name: "ClearanceJobs",
      url: "https://www.clearancejobs.com/",
      category: "government",
      region: "US",
      description: "Career network for professionals with federal security clearance.",
      features: ["Security Clearance", "Defense Contractors", "Intelligence", "Federal"],
      rating: 4.1,
      popular: false,
      logo: "🔐"
    },

    // Education Specific
    {
      id: 84,
      name: "HigherEdJobs",
      url: "https://www.higheredjobs.com/",
      category: "education",
      region: "Global",
      description: "Leading job board for higher education, academic, and university positions.",
      features: ["Academic Focus", "University Jobs", "Research Positions", "Education Sector"],
      rating: 4.2,
      popular: true,
      logo: "🎓"
    },
    {
      id: 85,
      name: "SchoolSpring",
      url: "https://www.schoolspring.com/",
      category: "education",
      region: "US",
      description: "K-12 education job board connecting teachers with school districts.",
      features: ["K-12 Focus", "Teacher Jobs", "School Districts", "Education"],
      rating: 3.9,
      popular: false,
      logo: "🏫"
    },
    {
      id: 86,
      name: "Academic Keys",
      url: "https://www.academickeys.com/",
      category: "education",
      region: "Global",
      description: "Academic job board for faculty, research, and administrative positions.",
      features: ["Faculty Positions", "Research Jobs", "Academic Admin", "Higher Ed"],
      rating: 4.0,
      popular: false,
      logo: "🔑"
    },

    // Sales & Marketing
    {
      id: 87,
      name: "SalesJobs",
      url: "https://www.salesjobs.com/",
      category: "industry",
      region: "US",
      description: "Specialized job board for sales professionals and sales management.",
      features: ["Sales Focus", "Sales Management", "Commission Tracking", "Performance"],
      rating: 3.8,
      popular: false,
      logo: "📈"
    },
    {
      id: 88,
      name: "MarketingJobs.com",
      url: "https://www.marketingjobs.com/",
      category: "industry",
      region: "US",
      description: "Marketing career site with jobs in advertising, PR, and digital marketing.",
      features: ["Marketing Focus", "Digital Marketing", "Advertising", "PR"],
      rating: 3.9,
      popular: false,
      logo: "📢"
    },

    // International/Global Specialized
    {
      id: 89,
      name: "TheLocal.com Jobs",
      url: "https://jobs.thelocal.com/",
      category: "regional",
      region: "Europe",
      description: "English-language jobs across Europe for international professionals.",
      features: ["English Jobs", "Expat Focus", "Multiple Countries", "Relocation Support"],
      rating: 3.9,
      popular: false,
      logo: "🌍"
    },
    {
      id: 90,
      name: "WorkAway",
      url: "https://www.workaway.info/",
      category: "travel",
      region: "Global",
      description: "Cultural exchange platform offering work opportunities while traveling.",
      features: ["Cultural Exchange", "Travel Work", "Volunteer", "International"],
      rating: 4.2,
      popular: false,
      logo: "✈️"
    },
    {
      id: 91,
      name: "HelpX",
      url: "https://www.helpx.net/",
      category: "travel",
      region: "Global",
      description: "Work exchange platform for travelers seeking accommodation.",
      features: ["Work Exchange", "Travel", "Accommodation", "Cultural Experience"],
      rating: 4.0,
      popular: false,
      logo: "🤝"
    },

    // Emerging Platforms
    {
      id: 92,
      name: "Workana",
      url: "https://www.workana.com/",
      category: "freelance",
      region: "Latin America",
      description: "Latin America's largest freelance platform for remote work.",
      features: ["Latin America", "Remote Work", "Freelance", "Regional Focus"],
      rating: 4.0,
      popular: false,
      logo: "🌎"
    },
    {
      id: 93,
      name: "Outsourcely",
      url: "https://www.outsourcely.com/",
      category: "remote",
      region: "Global",
      description: "Remote work platform connecting businesses with remote workers globally.",
      features: ["Remote Focus", "Global Talent", "Long-term Work", "Quality Matching"],
      rating: 4.1,
      popular: false,
      logo: "🌐"
    },
    {
      id: 94,
      name: "RemoteOK",
      url: "https://remoteok.io/",
      category: "remote",
      region: "Global",
      description: "Tech-focused remote job board with real-time listings and salary data.",
      features: ["Real-time Updates", "Salary Transparency", "Tech Focus", "Global Opportunities"],
      rating: 4.5,
      popular: true,
      logo: "💻"
    },
    {
      id: 95,
      name: "Working Nomads",
      url: "https://www.workingnomads.co/",
      category: "remote",
      region: "Global",
      description: "Curated list of remote job opportunities for digital nomads.",
      features: ["Digital Nomad", "Curated Jobs", "Remote Only", "Location Independent"],
      rating: 4.2,
      popular: false,
      logo: "🎒"
    },

    // Additional Tech Platforms
    {
      id: 96,
      name: "Vettery",
      url: "https://vettery.com/",
      category: "tech",
      region: "US",
      description: "Talent marketplace where top companies compete for tech talent.",
      features: ["Talent Marketplace", "Company Competition", "Tech Focus", "Exclusive"],
      rating: 4.3,
      popular: false,
      logo: "🎯"
    },
    {
      id: 97,
      name: "Whitetruffle",
      url: "https://whitetruffle.com/",
      category: "tech",
      region: "US",
      description: "Tech recruiting platform using AI to match candidates with opportunities.",
      features: ["AI Matching", "Tech Recruiting", "Passive Candidates", "Smart Algorithms"],
      rating: 4.1,
      popular: false,
      logo: "🤖"
    },
    {
      id: 98,
      name: "PowerToFly",
      url: "https://powertofly.com/",
      category: "diversity",
      region: "Global",
      description: "Platform connecting women and diverse candidates with inclusive companies.",
      features: ["Diversity Focus", "Women in Tech", "Inclusive Hiring", "Remote Options"],
      rating: 4.4,
      popular: false,
      logo: "👩"
    },
    {
      id: 99,
      name: "DiversityJobs",
      url: "https://www.diversityjobs.com/",
      category: "diversity",
      region: "US",
      description: "Career site focused on diversity and inclusion in the workplace.",
      features: ["Diversity Focus", "Inclusive Employers", "Equal Opportunity", "Career Development"],
      rating: 4.0,
      popular: false,
      logo: "🌈"
    },
    {
      id: 100,
      name: "JustJobs",
      url: "https://www.justjobs.com/",
      category: "global",
      region: "Global",
      description: "Global job search engine aggregating millions of jobs worldwide.",
      features: ["Global Reach", "Job Aggregation", "Multiple Sources", "Easy Search"],
      rating: 3.8,
      popular: false,
      logo: "⚖️"
    },

    // Additional Regional Platforms
    {
      id: 101,
      name: "Jora",
      url: "https://au.jora.com/",
      category: "regional",
      region: "Australia",
      description: "Australian job search engine aggregating jobs from multiple sources.",
      features: ["Australian Focus", "Job Aggregation", "Local Jobs", "Easy Apply"],
      rating: 3.9,
      popular: false,
      logo: "🇦🇺"
    },
    {
      id: 102,
      name: "Jobboom",
      url: "https://www.jobboom.com/",
      category: "regional",
      region: "Canada",
      description: "Quebec's leading job site with French and English listings.",
      features: ["Quebec Focus", "Bilingual", "Local Market", "Career Resources"],
      rating: 3.9,
      popular: false,
      logo: "🇨🇦"
    },
    {
      id: 103,
      name: "Careerjet",
      url: "https://www.careerjet.com/",
      category: "global",
      region: "Global",
      description: "Global job search engine operating in 90+ countries worldwide.",
      features: ["90+ Countries", "Local Versions", "Job Aggregation", "Global Reach"],
      rating: 4.0,
      popular: false,
      logo: "✈️"
    },
    {
      id: 104,
      name: "Mitula Jobs",
      url: "https://jobs.mitula.com/",
      category: "global",
      region: "Global",
      description: "International job search engine with localized versions worldwide.",
      features: ["International", "Localized", "Easy Search", "Mobile Friendly"],
      rating: 3.7,
      popular: false,
      logo: "🔍"
    },
    {
      id: 105,
      name: "Neuvoo",
      url: "https://neuvoo.com/",
      category: "global",
      region: "Global",
      description: "Job search engine available in 50+ countries with local focus.",
      features: ["50+ Countries", "Local Focus", "Salary Data", "Job Trends"],
      rating: 3.8,
      popular: false,
      logo: "🌍"
    }
  ];

  const categories = [
    { id: "all", name: "All Portals", icon: Globe, count: jobPortals.length },
    { id: "global", name: "Global Leaders", icon: Globe, count: jobPortals.filter(p => p.category === "global").length },
    { id: "remote", name: "Remote Work", icon: Laptop, count: jobPortals.filter(p => p.category === "remote").length },
    { id: "tech", name: "Tech Focused", icon: Code, count: jobPortals.filter(p => p.category === "tech").length },
    { id: "freelance", name: "Freelance", icon: Users, count: jobPortals.filter(p => p.category === "freelance").length },
    { id: "regional", name: "Regional", icon: MapPin, count: jobPortals.filter(p => p.category === "regional").length },
    { id: "creative", name: "Creative", icon: Star, count: jobPortals.filter(p => p.category === "creative").length },
    { id: "startup", name: "Startups", icon: Zap, count: jobPortals.filter(p => p.category === "startup").length },
    { id: "industry", name: "Industry Specific", icon: Briefcase, count: jobPortals.filter(p => p.category === "industry").length },
    { id: "government", name: "Government", icon: Building, count: jobPortals.filter(p => p.category === "government").length },
    { id: "education", name: "Education", icon: GraduationCap, count: jobPortals.filter(p => p.category === "education").length },
    { id: "diversity", name: "Diversity & Inclusion", icon: Users, count: jobPortals.filter(p => p.category === "diversity").length },
    { id: "travel", name: "Travel & Work Exchange", icon: MapPin, count: jobPortals.filter(p => p.category === "travel").length }
  ];

  const filteredPortals = jobPortals.filter(portal => {
    const matchesSearch = portal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         portal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         portal.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || portal.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const popularPortals = jobPortals.filter(portal => portal.popular);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <Target className="w-4 h-4" />
              105+ Top Job Portals Worldwide
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6">
              Global Job
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Portals Directory
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              The most comprehensive directory of global job portals. From industry giants like LinkedIn 
              to specialized platforms across tech, creative, government, education, and regional markets. 
              Discover opportunities across 105+ platforms in 50+ countries worldwide.
            </p>
          </div>

          {/* Search & Filters */}
          <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mb-8">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search job portals by name, region, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-20 py-4 text-lg border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <Filter className="w-4 h-4 mr-2" />
                Categories
              </Button>
            </div>

            {/* Category Filters */}
            <div className={`transition-all duration-300 ${showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Filter by Category</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="hidden sm:inline">{category.name}</span>
                        <span className="bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded text-xs ml-auto">
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Portals */}
      {activeCategory === "all" && (
        <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <h2 className="text-3xl font-semibold text-gray-900">Most Popular Platforms</h2>
              </div>
              
              <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                {popularPortals.slice(0, 8).map((portal, index) => (
                  <div
                    key={portal.id}
                    onClick={() => window.open(portal.url, '_blank')}
                    className="group bg-white rounded-xl p-3 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200 hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-2 md:mb-4">
                      <div className="text-xl md:text-3xl">{portal.logo}</div>
                      <div className="flex items-center gap-1 bg-green-100 text-green-700 px-1 md:px-2 py-1 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="hidden md:inline">Popular</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-green-600 transition-colors text-sm md:text-base line-clamp-2">
                      {portal.name}
                    </h3>
                    
                    <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">
                      {portal.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-2 md:mb-4">
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-1 md:px-2 py-1 rounded-md text-xs font-medium">
                        <MapPin className="w-3 h-3" />
                        <span className="hidden md:inline">{portal.region}</span>
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 md:w-4 h-3 md:h-4 text-yellow-500 fill-current" />
                        <span className="text-xs md:text-sm font-medium">{portal.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-medium text-xs md:text-sm group-hover:text-green-700 transition-colors">
                        <span className="hidden md:inline">Visit Portal</span>
                        <span className="md:hidden">Visit</span>
                      </span>
                      <ExternalLink className="w-3 md:w-4 h-3 md:h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Portals */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-semibold text-gray-900">
                {activeCategory === "all" ? "All Job Portals" : `${categories.find(c => c.id === activeCategory)?.name} Portals`}
              </h2>
              <span className="text-gray-500">
                {filteredPortals.length} portal{filteredPortals.length !== 1 ? 's' : ''} found
              </span>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
              {filteredPortals.map((portal, index) => (
                <div
                  key={portal.id}
                  onClick={() => window.open(portal.url, '_blank')}
                  className="group bg-white rounded-xl p-3 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-2 md:mb-4">
                    <div className="text-xl md:text-2xl">{portal.logo}</div>
                    <div className="flex items-center gap-2">
                      {portal.popular && (
                        <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-1 md:px-2 py-1 rounded-full text-xs font-medium">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="hidden md:inline">Popular</span>
                        </div>
                      )}
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-1 md:px-2 py-1 rounded-md text-xs font-medium capitalize">
                        {portal.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 line-clamp-2 text-sm md:text-base group-hover:text-blue-600 transition-colors">
                    {portal.name}
                  </h3>
                  
                  <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">
                    {portal.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span className="hidden md:inline">{portal.region}</span>
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{portal.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2 mb-2 md:mb-4 hidden md:block">
                    {portal.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium text-xs md:text-sm group-hover:text-blue-700 transition-colors">
                      <span className="hidden md:inline">Visit Portal</span>
                      <span className="md:hidden">Visit</span>
                    </span>
                    <ExternalLink className="w-3 md:w-4 h-3 md:h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            {filteredPortals.length === 0 && (
              <div className="text-center py-16">
                <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">No portals found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-light mb-6">
            Ready to find your dream job?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start applying on these platforms and discover amazing opportunities worldwide.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg"
            onClick={() => window.open('/', '_self')}
          >
            Search Jobs Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default JobPortals;
