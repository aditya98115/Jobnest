import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ExternalLink, 
  Clock, 
  TrendingUp,
  Users,
  BookOpen,
  Filter,
  ArrowRight,
  Star,
  Calendar,
  Bookmark
} from "lucide-react";
import Header from "@/components/Header";

const ArticlesPosts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // All articles with their data
  const articles = [
    {
      id: 1,
      title: "3 mistakes to avoid if you want to get hired remotely",
      url: "https://x-team.com/blog/mistakes-remote-developers",
      category: "hiring",
      readTime: "5 min",
      featured: true,
      description: "Common pitfalls that prevent developers from landing remote positions and how to avoid them."
    },
    {
      id: 2,
      title: "5 Things I've Learned From Working Remotely",
      url: "https://www.donedone.com/blog/five-things-ive-learned-working-remotely",
      category: "experience",
      readTime: "4 min",
      featured: false,
      description: "Personal insights from years of remote work experience and lessons learned."
    },
    {
      id: 3,
      title: "5 Tricks to Get More Done While Working Remotely",
      url: "https://rdutel.medium.com/working-remotely-getting-things-done-38dcd0413733",
      category: "productivity",
      readTime: "6 min",
      featured: true,
      description: "Proven strategies to boost your productivity when working from home."
    },
    {
      id: 4,
      title: "8 tips that will make you a more active, healthier remote developer",
      url: "https://x-team.com/blog/how-to-be-healthy-remote",
      category: "health",
      readTime: "7 min",
      featured: false,
      description: "Essential health and wellness tips for remote developers and tech workers."
    },
    {
      id: 5,
      title: "10 Lessons from 4 Years Working Remotely at Automattic",
      url: "https://whenihavetime.com/2014/07/08/10-lessons-from-4-years-working-remotely/",
      category: "experience",
      readTime: "10 min",
      featured: true,
      description: "Deep insights from working at one of the most famous remote-first companies."
    },
    {
      id: 6,
      title: "10 Secrets to Becoming a Great Remote Developer",
      url: "https://x-team.com/blog/10-secrets-to-becoming-a-great-remote-developer",
      category: "development",
      readTime: "8 min",
      featured: false,
      description: "Professional development tips specifically for remote software developers."
    },
    {
      id: 7,
      title: "21 tools that will help your remote team work better together",
      url: "https://thenextweb.com/news/tools-remote-teams",
      category: "tools",
      readTime: "12 min",
      featured: false,
      description: "Comprehensive list of essential tools for remote team collaboration."
    },
    {
      id: 8,
      title: "30 Tips for Successful Communication as a Remote Worker",
      url: "https://www.hanselman.com/blog/30-tips-for-successful-communication-as-a-remote-worker",
      category: "communication",
      readTime: "15 min",
      featured: true,
      description: "Master communication skills essential for remote work success."
    },
    {
      id: 9,
      title: "Acceptance of Telecommuting Project Management Grows",
      url: "https://www.amanet.org/articles/acceptance-of-telecommuting-project-management-grows/",
      category: "management",
      readTime: "6 min",
      featured: false,
      description: "How project management is adapting to remote work trends."
    },
    {
      id: 10,
      title: "Andreessen-Incubated Teleport Aims To Make Location Irrelevant For Mobile Workers",
      url: "https://techcrunch.com/2014/05/19/teleport/",
      category: "business",
      readTime: "5 min",
      featured: false,
      description: "Industry analysis of location-independent work trends and technology."
    },
    {
      id: 11,
      title: "Bosses without borders: Essential tools for managing remote workers",
      url: "https://www.pcworld.com/article/453170/bosses-without-borders-essential-tools-for-managing-remote-workers.html",
      category: "management",
      readTime: "8 min",
      featured: false,
      description: "Management strategies and tools for leading distributed teams effectively."
    },
    {
      id: 12,
      title: "Communication for Distributed Teams",
      url: "https://www.lullabot.com/articles/communication-for-distributed-teams",
      category: "communication",
      readTime: "10 min",
      featured: true,
      description: "Best practices for maintaining clear communication across distributed teams."
    },
    {
      id: 13,
      title: "Currents: The Remote Developer Experience (July 2019)",
      url: "https://www.digitalocean.com/blog/currents-july2019",
      category: "development",
      readTime: "12 min",
      featured: false,
      description: "Research and insights into the remote developer experience and trends."
    },
    {
      id: 14,
      title: "Datadog Engineering: 9 ways to make working remote work for you",
      url: "https://www.datadoghq.com/blog/pup-culture/9-ways-to-make-working-remote-work-for-you/",
      category: "experience",
      readTime: "9 min",
      featured: false,
      description: "Engineering team's proven strategies for successful remote work."
    },
    {
      id: 15,
      title: "Death of the office and rise of the telecommuter",
      url: "https://www.zdnet.com/article/death-of-the-office-and-rise-of-the-telecommuter/",
      category: "future",
      readTime: "7 min",
      featured: false,
      description: "Analysis of the fundamental shift from office-based to remote work."
    },
    {
      id: 16,
      title: "Distributed Design: How Stack Overflow builds strong remote teams",
      url: "https://www.tedgoas.com/blog/distributed-design/",
      category: "management",
      readTime: "11 min",
      featured: true,
      description: "Case study of how Stack Overflow successfully manages distributed design teams."
    },
    {
      id: 17,
      title: "Find \"Hidden\" Remote Jobs with Google Search",
      url: "https://medium.com/ft-remote-job/how-to-find-hidden-remote-jobs-using-google-search-12ebaa2ea8ea?source=friends_link&sk=3bc251fed25dddd4c1a024ae4dd58e30",
      category: "hiring",
      readTime: "6 min",
      featured: false,
      description: "Advanced search techniques to discover remote job opportunities."
    },
    {
      id: 18,
      title: "GitLab's Remote Manifesto",
      url: "https://about.gitlab.com/blog/2015/04/08/the-remote-manifesto/",
      category: "culture",
      readTime: "8 min",
      featured: true,
      description: "GitLab's foundational principles and approach to remote-first culture."
    },
    {
      id: 19,
      title: "Give people the freedom of where to work",
      url: "https://www.virgin.com/branson-family/richard-branson-blog",
      category: "leadership",
      readTime: "4 min",
      featured: false,
      description: "Richard Branson's perspective on workplace flexibility and freedom."
    },
    {
      id: 20,
      title: "Hiring Secrets Of A Distributed Company",
      url: "https://www.lullabot.com/articles/hiring-secrets-of-a-distributed-company",
      category: "hiring",
      readTime: "9 min",
      featured: false,
      description: "Insider secrets for recruiting and hiring top talent for remote teams."
    },
    {
      id: 21,
      title: "How GitHub Works",
      url: "https://zachholman.com/posts/how-github-works/",
      category: "culture",
      readTime: "13 min",
      featured: true,
      description: "Deep dive into GitHub's remote-first culture and operational practices."
    },
    {
      id: 22,
      title: "How many companies are 100% distributed? (Research Summary)",
      url: "https://scottberkun.com/2013/how-many-companies-are-100-distributed/",
      category: "research",
      readTime: "8 min",
      featured: false,
      description: "Statistical analysis of fully distributed companies and market trends."
    },
    {
      id: 23,
      title: "How many people really work from home? (research summary)",
      url: "https://scottberkun.com/2013/how-many-people-really-work-from-home-research-summary/",
      category: "research",
      readTime: "7 min",
      featured: false,
      description: "Comprehensive research data on remote work adoption and statistics."
    },
    {
      id: 24,
      title: "How to focus when working remotely",
      url: "https://x-team.com/blog/focus-working-remotely",
      category: "productivity",
      readTime: "6 min",
      featured: false,
      description: "Practical strategies for maintaining focus and avoiding distractions."
    },
    {
      id: 25,
      title: "How to Handle Client Work Remotely: Our Communication Stack",
      url: "https://marsbased.com/blog/2015/12/07/how-to-handle-client-work-remotely-our-communication-stack",
      category: "communication",
      readTime: "10 min",
      featured: false,
      description: "Complete communication framework for managing remote client relationships."
    },
    {
      id: 26,
      title: "How to Make Remote Working Work for You",
      url: "https://www.toptal.com/remote/how-to-make-remote-working-work-for-you",
      category: "productivity",
      readTime: "12 min",
      featured: true,
      description: "Comprehensive guide to optimizing your remote work setup and habits."
    },
    {
      id: 27,
      title: "How to run a team of people who never see each other",
      url: "https://qz.com/230998/how-to-run-a-team-of-people-who-never-see-each-other",
      category: "management",
      readTime: "8 min",
      featured: false,
      description: "Leadership strategies for managing fully remote and distributed teams."
    },
    {
      id: 28,
      title: "How to suggest improvements remotely",
      url: "https://x-team.com/blog/suggest-improvements-remotely",
      category: "communication",
      readTime: "5 min",
      featured: false,
      description: "Effective techniques for providing feedback and suggestions in remote settings."
    },
    {
      id: 29,
      title: "How Working at Home Works (For Us)",
      url: "https://www.lullabot.com/articles/how-working-at-home-works-for-us",
      category: "experience",
      readTime: "9 min",
      featured: false,
      description: "Real-world case study of successful work-from-home implementation."
    },
    {
      id: 30,
      title: "It's Unclearly Defined, but Telecommuting Is Fast on the Rise",
      url: "https://www.nytimes.com/2014/03/08/your-money/when-working-in-your-pajamas-is-more-productive.html?_r=0",
      category: "trends",
      readTime: "6 min",
      featured: false,
      description: "New York Times analysis of telecommuting trends and workplace evolution."
    },
    {
      id: 31,
      title: "Latest Telecommuting Statistics | Global Workplace Analytics",
      url: "https://globalworkplaceanalytics.com/telecommuting-statistics",
      category: "research",
      readTime: "5 min",
      featured: true,
      description: "Latest data and statistics on global telecommuting and remote work trends."
    },
    {
      id: 32,
      title: "Learning From Distributed Companies",
      url: "https://www.lullabot.com/articles/learning-from-distributed-companies",
      category: "business",
      readTime: "11 min",
      featured: false,
      description: "Key lessons and insights from successful distributed company models."
    },
    {
      id: 33,
      title: "Managing a Geographically Dispersed Team: Achieving Your Goals Together, While Apart",
      url: "https://www.mindtools.com/awe2ycs/managing-a-geographically-dispersed-team",
      category: "management",
      readTime: "14 min",
      featured: false,
      description: "Complete framework for managing teams across different geographic locations."
    },
    {
      id: 34,
      title: "My Ideal Day as a Remote Programmer: Taking Charge of Your Daily Routine",
      url: "https://buffer.com/resources/my-ideal-day-as-a-programmer-taking-charge-of-your-daily-routine/",
      category: "productivity",
      readTime: "8 min",
      featured: false,
      description: "Personal productivity system and daily routine optimization for remote developers."
    },
    {
      id: 35,
      title: "My Remote Developer Life",
      url: "https://shift.infinite.red/my-remote-developer-life-ama-bb91fa7bd0bd",
      category: "experience",
      readTime: "10 min",
      featured: false,
      description: "Personal journey and insights from a successful remote developer's career."
    },
    {
      id: 36,
      title: "Phoning It In: 3 Years of Lessons From Running a Remote Business",
      url: "https://observer.com/2014/02/phoning-it-in-3-years-of-lessons-from-running-a-remote-business/",
      category: "business",
      readTime: "9 min",
      featured: false,
      description: "Three years of practical lessons from building and running a remote business."
    },
    {
      id: 37,
      title: "Remote versus Co-located Work",
      url: "https://martinfowler.com/articles/remote-or-co-located.html",
      category: "comparison",
      readTime: "15 min",
      featured: true,
      description: "Martin Fowler's analysis comparing remote work with traditional co-located teams."
    },
    {
      id: 38,
      title: "Remote Work: How to work the Precision Nutrition way",
      url: "https://www.precisionnutrition.com/remote-how-to-work-the-pn-way",
      category: "culture",
      readTime: "12 min",
      featured: false,
      description: "Case study of Precision Nutrition's successful remote work culture and practices."
    },
    {
      id: 39,
      title: "Remote worker vs distributed team",
      url: "https://opensource.com/life/11/11/remote-worker-vs-distributed-team",
      category: "comparison",
      readTime: "6 min",
      featured: false,
      description: "Understanding the key differences between individual remote workers and distributed teams."
    },
    {
      id: 40,
      title: "Remote Working – 3 Year Retrospective",
      url: "http://blog.jonliv.es/blog/2015/01/14/remote-working-3-year-retrospective/",
      category: "experience",
      readTime: "11 min",
      featured: false,
      description: "Three-year retrospective analysis of remote work benefits and challenges."
    },
    {
      id: 41,
      title: "Rethinking Agile in an office-less world",
      url: "https://signalvnoise.com/posts/3641-rethinking-agile-in-an-office-less-world",
      category: "development",
      readTime: "8 min",
      featured: false,
      description: "How agile methodologies adapt and evolve for distributed development teams."
    },
    {
      id: 42,
      title: "Six Strategies for Managing Telecommuters",
      url: "https://www.cio.com/article/280749/leadership-management-six-strategies-for-managing-telecommuters.html",
      category: "management",
      readTime: "7 min",
      featured: false,
      description: "Six proven strategies for effectively managing and leading remote employees."
    },
    {
      id: 43,
      title: "Solo Workers Bond at Shared Workspaces",
      url: "https://www.nytimes.com/2013/05/05/fashion/solo-workers-bond-at-shared-workspaces.html",
      category: "workspace",
      readTime: "6 min",
      featured: false,
      description: "Analysis of coworking spaces and their role in remote worker communities."
    },
    {
      id: 44,
      title: "The 5 most important things we do as a remote company",
      url: "https://x-team.com/blog/5-important-things-remote-company",
      category: "culture",
      readTime: "7 min",
      featured: false,
      description: "Five core practices that make remote companies successful and sustainable."
    },
    {
      id: 45,
      title: "The case for all-remote companies",
      url: "https://about.gitlab.com/blog/2018/10/18/the-case-for-all-remote-companies/",
      category: "business",
      readTime: "13 min",
      featured: true,
      description: "GitLab's comprehensive argument for why companies should go fully remote."
    },
    {
      id: 46,
      title: "The future of telecommuting: Corralling the Yahoos",
      url: "https://www.economist.com/business/2013/03/02/corralling-the-yahoos?fsrc=scn%2Ftw%2Fte%2Fpe%2Fcorallingtheyahoos",
      category: "future",
      readTime: "8 min",
      featured: false,
      description: "The Economist's analysis of telecommuting trends and future workplace evolution."
    },
    {
      id: 47,
      title: "The Pros & Cons of Being a Remote Team (& How We Do It)",
      url: "https://blog.groovehq.com/being-a-remote-team",
      category: "comparison",
      readTime: "10 min",
      featured: false,
      description: "Honest assessment of remote team advantages, challenges, and solutions."
    },
    {
      id: 48,
      title: "The Ultimate Remote Team Culture",
      url: "https://www.toptal.com/remote-work-playbook",
      category: "culture",
      readTime: "16 min",
      featured: true,
      description: "Comprehensive guide to building and maintaining strong remote team culture."
    },
    {
      id: 49,
      title: "The Villains of Remote Work",
      url: "https://blog.dnsimple.com/2016/10/the-villains-of-remote-work/",
      category: "challenges",
      readTime: "6 min",
      featured: false,
      description: "Common pitfalls and challenges that can undermine remote work success."
    },
    {
      id: 50,
      title: "Things To Watch Out For While Working Remotely",
      url: "https://www.toptal.com/remote/remote-work-burnout-a-cautionary-tale",
      category: "health",
      readTime: "9 min",
      featured: false,
      description: "Important warning signs and health considerations for remote workers."
    },
    {
      id: 51,
      title: "Tips to Land a Remote Job",
      url: "https://moduscreate.com/blog/tips-to-land-a-remote-job/",
      category: "hiring",
      readTime: "8 min",
      featured: false,
      description: "Practical advice and strategies for successfully landing remote job opportunities."
    },
    {
      id: 52,
      title: "To Raise Productivity, Let More Employees Work from Home",
      url: "https://hbr.org/2014/01/to-raise-productivity-let-more-employees-work-from-home",
      category: "productivity",
      readTime: "7 min",
      featured: false,
      description: "Harvard Business Review's research on productivity benefits of remote work."
    },
    {
      id: 53,
      title: "What is a Distributed Company?",
      url: "https://www.lullabot.com/articles/what-is-a-distributed-company",
      category: "business",
      readTime: "8 min",
      featured: false,
      description: "Comprehensive definition and characteristics of distributed company models."
    },
    {
      id: 54,
      title: "Who Needs an Office? How to Go 100 Percent Remote.",
      url: "https://www.entrepreneur.com/growing-a-business/who-needs-an-office-how-to-go-100-percent-remote/242708",
      category: "business",
      readTime: "10 min",
      featured: false,
      description: "Complete guide for entrepreneurs transitioning to fully remote operations."
    },
    {
      id: 55,
      title: "Why I work remotely (hint: it has nothing to do with productivity)",
      url: "https://signalvnoise.com/svn3/why-i-work-remotely-hint-it-has-nothing-to-do-with-productivity/",
      category: "perspective",
      readTime: "5 min",
      featured: false,
      description: "Personal perspective on remote work motivations beyond productivity metrics."
    },
    {
      id: 56,
      title: "Why Coworking Is a Hit for Telecommuters and Entrepreneurs",
      url: "https://www.cio.com/article/300381/telecommuting-why-coworking-is-a-hit-for-telecommuters-and-entrepreneurs.html",
      category: "workspace",
      readTime: "6 min",
      featured: false,
      description: "Analysis of coworking spaces and their appeal to remote workers and entrepreneurs."
    },
    {
      id: 57,
      title: "Why Remote Workers Are More (Yes, More) Engaged",
      url: "https://hbr.org/2012/08/are-you-taking-your-people-for",
      category: "engagement",
      readTime: "6 min",
      featured: false,
      description: "Harvard Business Review research on remote worker engagement and satisfaction."
    },
    {
      id: 58,
      title: "Why Small Businesses Are Building Remote Workforces",
      url: "https://www.businessinsider.com/why-small-businesses-are-building-remote-workforces-2013-10",
      category: "business",
      readTime: "7 min",
      featured: false,
      description: "Business Insider analysis of small business adoption of remote workforce models."
    },
    {
      id: 59,
      title: "Why We (Still) Believe in Working Remotely",
      url: "https://stackoverflow.blog/2013/02/01/why-we-still-believe-in-working-remotely/",
      category: "culture",
      readTime: "8 min",
      featured: false,
      description: "Stack Overflow's continued commitment to remote work and supporting arguments."
    },
    {
      id: 60,
      title: "Working Remotely: A Complete Guide to Turn You Into a Pro",
      url: "https://www.paymoapp.com/blog/working-remotely/",
      category: "guide",
      readTime: "18 min",
      featured: true,
      description: "Comprehensive guide covering all aspects of successful remote work."
    },
    {
      id: 61,
      title: "Working Remotely for Extroverts",
      url: "https://stephyiu.com/2014/12/13/working-remotely-for-extroverts/",
      category: "personality",
      readTime: "6 min",
      featured: false,
      description: "Special considerations and strategies for extroverted remote workers."
    },
    {
      id: 62,
      title: "Yahoo, Best Buy, and Telecommuting: Advice From A Distributed Company",
      url: "https://www.lullabot.com/articles/yahoo-best-buy-and-telecommuting-advice-from-a-distributed-company",
      category: "business",
      readTime: "9 min",
      featured: false,
      description: "Analysis of corporate remote work policies and lessons from industry changes."
    },
    {
      id: 63,
      title: "Your Commute Is Killing You",
      url: "https://slate.com/business/2011/05/long-commutes-cause-obesity-neck-pain-loneliness-divorce-stress-and-insomnia.html",
      category: "health",
      readTime: "8 min",
      featured: false,
      description: "Research on negative health impacts of commuting and benefits of remote work."
    },
    {
      id: 64,
      title: "Why remote work makes disagreement hard",
      url: "https://zapier.com/blog/how-to-disagree-remote-work/",
      category: "communication",
      readTime: "7 min",
      featured: false,
      description: "Challenges of handling disagreements and conflicts in remote work environments."
    },
    {
      id: 65,
      title: "10 Leadership Lessons from 10 Years Working in a Fully-Distributed and Remote Company",
      url: "https://whenihavetime.com/2020/07/09/10-leadership-lessons-from-10-years-working-remotely/",
      category: "leadership",
      readTime: "12 min",
      featured: true,
      description: "Ten years of leadership insights from a fully distributed company environment."
    },
    {
      id: 66,
      title: "Remote Work for Everyone - NY Times",
      url: "https://www.nytimes.com/2021/07/06/technology/remote-work-for-everyone.html",
      category: "trends",
      readTime: "9 min",
      featured: false,
      description: "New York Times analysis of remote work democratization and accessibility."
    },
    {
      id: 67,
      title: "This Is the Future Of Remote Work In 2021",
      url: "https://www.forbes.com/sites/carolinecastrillon/2021/12/27/this-is-the-future-of-remote-work-in-2021/?sh=500189961e1d",
      category: "future",
      readTime: "8 min",
      featured: false,
      description: "Forbes analysis of remote work trends and predictions for the future workplace."
    }
  ];

  const categories = [
    { id: "all", name: "All Articles", icon: BookOpen },
    { id: "productivity", name: "Productivity", icon: TrendingUp },
    { id: "communication", name: "Communication", icon: Users },
    { id: "management", name: "Management", icon: Users },
    { id: "hiring", name: "Hiring", icon: Bookmark },
    { id: "culture", name: "Culture", icon: Star },
    { id: "experience", name: "Experience", icon: Calendar },
    { id: "business", name: "Business", icon: TrendingUp },
    { id: "health", name: "Health", icon: Star },
    { id: "development", name: "Development", icon: BookOpen }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              67 Expert Articles & Posts
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6">
              Remote Work
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Articles & Posts
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Curated collection of the most insightful articles about remote work, productivity, 
              team management, and building successful distributed companies.
            </p>
          </div>

          {/* Search & Filters */}
          <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
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
                Filters
              </Button>
            </div>

            {/* Category Filters */}
            <div className={`transition-all duration-300 ${showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Filter by Category</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
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
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeCategory === "all" && (
        <section className="px-4 py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-6 h-6 text-yellow-500" />
                <h2 className="text-3xl font-semibold text-gray-900">Featured Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.slice(0, 6).map((article, index) => (
                  <div
                    key={article.id}
                    onClick={() => window.open(article.url, '_blank')}
                    className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium text-gray-500">FEATURED</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">{article.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                          {article.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium capitalize">
                            {article.category}
                          </span>
                          <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-semibold text-gray-900">
                {activeCategory === "all" ? "All Articles" : `${categories.find(c => c.id === activeCategory)?.name} Articles`}
              </h2>
              <span className="text-gray-500">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  onClick={() => window.open(article.url, '_blank')}
                  className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                          {article.featured && (
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          )}
                          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium capitalize">
                            {article.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span className="text-xs">{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium text-xs group-hover:text-blue-700 transition-colors">
                          Read article
                        </span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-light mb-6">
            Ready to start your remote journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Apply the insights from these articles and find your perfect remote opportunity.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg"
            onClick={() => window.open('/', '_self')}
          >
            Find Remote Jobs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPosts;
