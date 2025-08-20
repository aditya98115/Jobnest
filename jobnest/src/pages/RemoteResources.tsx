import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ExternalLink, 
  BookOpen, 
  Users, 
  Building, 
  Briefcase, 
  Home, 
  Wrench,
  Star,
  ArrowRight,
  Play,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";

const RemoteResources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Comprehensive data from the awesome-remote-job repository
  const categories = [
    {
      id: "job-boards",
      title: "Job Boards",
      icon: Briefcase,
      description: "Find remote opportunities",
      items: [
        { title: "Real Work From Anywhere", description: "100% location independent jobs", url: "https://www.realworkfromanywhere.com/", featured: true },
        { title: "4 Day Week", description: "Software jobs with better work-life balance", url: "https://4dayweek.io/" },
        { title: "We Work Remotely", description: "Largest remote work community", url: "https://weworkremotely.com/" },
        { title: "Remote OK", description: "Remote jobs board with live data", url: "https://remoteok.com/" },
        { title: "JustRemote", description: "Remote jobs from around the world", url: "https://justremote.co/" },
        { title: "FlexJobs", description: "Vetted flexible and remote jobs", url: "https://www.flexjobs.com/" },
        { title: "Remote.co", description: "Hand-screened remote jobs", url: "https://remote.co/" },
        { title: "AngelList", description: "Startup remote jobs", url: "https://wellfound.com/jobs" },
        { title: "Authentic Jobs", description: "Creative and tech remote jobs", url: "https://authenticjobs.com/?search_location=remote" },
        { title: "Built In", description: "Tech jobs with remote options", url: "https://builtin.com/jobs/remote" },
        { title: "Crypto Jobs", description: "Blockchain and crypto remote jobs", url: "https://crypto.jobs/?jobs=remote" },
        { title: "Dribbble Jobs", description: "Design remote opportunities", url: "https://dribbble.com/jobs?location=Anywhere" },
        { title: "Guru", description: "Freelance opportunities", url: "https://www.guru.com/" },
        { title: "Jobspresso", description: "High-quality remote positions", url: "https://jobspresso.co/" },
        { title: "Larajobs", description: "Laravel developer jobs", url: "https://larajobs.com/?location=&remote=1" },
        { title: "NoDesk", description: "Remote work job board", url: "https://nodesk.co/remote-jobs/" },
        { title: "Power to Fly", description: "Remote jobs for women", url: "https://powertofly.com/jobs/" },
        { title: "Remote AI Jobs", description: "AI and ML remote positions", url: "https://www.moaijobs.com/remote-ai-jobs" },
        { title: "Remote Backend Jobs", description: "Backend development roles", url: "https://www.remotebackendjobs.com/" },
        { title: "Remote Frontend Jobs", description: "Frontend development positions", url: "https://www.remotefrontendjobs.com/" },
        { title: "Skip the Drive", description: "Telecommuting jobs", url: "https://www.skipthedrive.com/" },
        { title: "Upwork", description: "Freelance marketplace", url: "https://www.upwork.com/" },
        { title: "Virtual Vocations", description: "Remote job database", url: "https://www.virtualvocations.com/" },
        { title: "Working Nomads", description: "Curated remote job list", url: "https://www.workingnomads.com/jobs" }
      ]
    },
    {
      id: "companies",
      title: "Remote Companies",
      icon: Building,
      description: "Companies with remote DNA",
      items: [
        { title: "GitLab", description: "All-remote DevOps platform", url: "https://about.gitlab.com/jobs/", featured: true },
        { title: "Buffer", description: "Social media management tools", url: "https://buffer.com/journey" },
        { title: "Zapier", description: "Automation platform", url: "https://zapier.com/about" },
        { title: "Automattic", description: "WordPress creators", url: "https://automattic.com/work-with-us/" },
        { title: "Basecamp", description: "Project management software", url: "https://basecamp.com/about" },
        { title: "Ghost", description: "Publishing platform", url: "https://ghost.org/about/#careers" },
        { title: "Stripe", description: "Financial infrastructure", url: "https://stripe.com/blog/remote-hub" },
        { title: "Toptal", description: "Freelance talent network", url: "https://www.toptal.com/careers" },
        { title: "InVision", description: "Digital product design", url: "https://www.invisionapp.com/company#jobs" },
        { title: "Doist", description: "Productivity tools (Todoist)", url: "https://doist.com/careers" },
        { title: "Help Scout", description: "Customer service software", url: "https://www.helpscout.com/company/careers/" },
        { title: "Hotjar", description: "Analytics and feedback", url: "https://www.hotjar.com/careers/" },
        { title: "ConsenSys", description: "Blockchain technology", url: "https://consensys.io/careers" },
        { title: "Elastic", description: "Search and analytics", url: "https://www.elastic.co/" },
        { title: "HashiCorp", description: "Cloud infrastructure", url: "https://www.hashicorp.com/careers" },
        { title: "Mozilla", description: "Firefox and open web", url: "https://www.mozilla.org/en-US/careers/listings/" },
        { title: "Auth0", description: "Identity platform", url: "https://www.okta.com/company/careers/" },
        { title: "Clevertech", description: "Software development", url: "https://lumenalta.com/remote-jobs" },
        { title: "Customer.io", description: "Customer engagement", url: "https://customer.io/careers" },
        { title: "DigitalOcean", description: "Cloud hosting", url: "https://www.digitalocean.com/careers" },
        { title: "Docker", description: "Container platform", url: "https://www.docker.com/career-openings/" },
        { title: "DuckDuckGo", description: "Privacy search engine", url: "https://duckduckgo.com/duckduckgo-help-pages/" },
        { title: "GitHub", description: "Code collaboration platform", url: "https://www.github.careers/careers-home" },
        { title: "Harvest", description: "Time tracking software", url: "https://www.getharvest.com/careers" },
        { title: "Toggl", description: "Time tracking tools", url: "https://toggl.com/jobs/" }
      ]
    },
    {
      id: "tools",
      title: "Remote Tools",
      icon: Wrench,
      description: "Essential tools for remote work",
      items: [
        { title: "Slack", description: "Team communication", url: "https://slack.com/", featured: true },
        { title: "Zoom", description: "Video conferencing", url: "https://www.zoom.com/" },
        { title: "Notion", description: "All-in-one workspace", url: "https://www.notion.so/" },
        { title: "Linear", description: "Issue tracking", url: "https://linear.app/" },
        { title: "Asana", description: "Project management", url: "https://asana.com/" },
        { title: "Trello", description: "Visual project boards", url: "https://trello.com/" },
        { title: "Miro", description: "Online whiteboard", url: "https://miro.com/" },
        { title: "Figma", description: "Collaborative design", url: "https://www.figma.com/" },
        { title: "Loom", description: "Video messaging", url: "https://www.loom.com/" },
        { title: "Calendly", description: "Meeting scheduling", url: "https://calendly.com/" },
        { title: "Gather", description: "Virtual office spaces", url: "https://www.gather.town/" },
        { title: "Discord", description: "Voice and text chat", url: "https://discord.com/" },
        { title: "Microsoft Teams", description: "Collaboration platform", url: "https://www.microsoft.com/en-us/microsoft-teams/" },
        { title: "Jitsi", description: "Open source video conferencing", url: "https://jitsi.org/" },
        { title: "Rocket.Chat", description: "Open source chat platform", url: "https://www.rocket.chat/" },
        { title: "Whereby", description: "Browser-based video calls", url: "https://whereby.com/" },
        { title: "ClickUp", description: "All-in-one productivity", url: "https://clickup.com/" },
        { title: "Monday.com", description: "Work management platform", url: "https://monday.com/" },
        { title: "Todoist", description: "Task management", url: "https://todoist.com/" },
        { title: "Time Doctor", description: "Time tracking with screenshots", url: "https://www.timedoctor.com/" }
      ]
    },
    {
      id: "learning",
      title: "Learning Resources",
      icon: BookOpen,
      description: "Books, articles, and guides",
      items: [
        { title: "Remote: Office Not Required", description: "Essential remote work book by Jason Fried", url: "https://basecamp.com/books/remote", featured: true },
        { title: "Distributed Teams", description: "Complete guide by John O'Duinn", url: "https://oduinn.com/book/" },
        { title: "The Ultimate Guide to Remote Work", description: "Comprehensive guide by Zapier", url: "https://zapier.com/resources/guides/remote-work" },
        { title: "GitLab's Remote Manifesto", description: "How GitLab operates all-remote", url: "https://about.gitlab.com/blog/2015/04/08/the-remote-manifesto/" },
        { title: "How GitHub Works", description: "GitHub's remote culture insights", url: "https://zachholman.com/posts/how-github-works/" },
        { title: "The Case for All-Remote", description: "Why remote work is the future", url: "https://about.gitlab.com/blog/2018/10/18/the-case-for-all-remote-companies/" },
        { title: "Remote Work Hub", description: "Tips and best practices", url: "https://remoteworkhub.com/" },
        { title: "Async Remote", description: "Book by Arkency team", url: "https://products.arkency.com/async-remote/" },
        { title: "The Year Without Pants", description: "WordPress.com remote work story", url: "https://scottberkun.com/yearwithoutpants/" },
        { title: "10 Lessons from 4 Years Working Remotely", description: "Automattic employee insights", url: "https://whenihavetime.com/2014/07/08/10-lessons-from-4-years-working-remotely/" },
        { title: "Remote Developer Life", description: "Personal experiences and tips", url: "https://shift.infinite.red/my-remote-developer-life-ama-bb91fa7bd0bd" },
        { title: "Communication for Distributed Teams", description: "Best practices for remote communication", url: "https://www.lullabot.com/articles/communication-for-distributed-teams" },
        { title: "Managing Remote Teams", description: "Leadership in remote environments", url: "https://www.mindtools.com/awe2ycs/managing-a-geographically-dispersed-team" },
        { title: "Remote Work Playbook", description: "Complete remote work strategies", url: "https://www.toptal.com/remote-work-playbook" },
        { title: "The Remote Manifesto", description: "Principles of remote work", url: "https://about.gitlab.com/company/culture/all-remote/guide/" }
      ]
    },
    {
      id: "communities",
      title: "Communities",
      icon: Users,
      description: "Connect with remote workers",
      items: [
        { title: "Nomad List", description: "Digital nomad community", url: "https://nomadlist.com/", featured: true },
        { title: "Remote Year", description: "Travel while working remotely", url: "https://remoteyear.com/" },
        { title: "r/digitalnomad", description: "Reddit community for nomads", url: "https://www.reddit.com/r/digitalnomad/" },
        { title: "r/telecommuting", description: "Reddit remote work community", url: "https://www.reddit.com/r/telecommuting/" },
        { title: "Remote Work Association", description: "Professional remote work network", url: "https://remoteworkassociation.org/" },
        { title: "Hacker Paradise", description: "Traveling remote workers", url: "https://www.hackerparadise.org/" },
        { title: "Remote Indian", description: "Remote workers from India", url: "https://remoteindian.com/" },
        { title: "DNX Community", description: "Digital nomad community", url: "https://www.dnxconf.com/" },
        { title: "Working Nomads", description: "Remote work community", url: "https://www.workingnomads.co/" },
        { title: "Remote Work Hub", description: "Resources and networking", url: "https://remoteworkhub.com/" },
        { title: "Invide", description: "Experienced remote developers", url: "https://www.invidelabs.com/developer.html" },
        { title: "Remote Workers", description: "Slack community", url: "https://remoteworkers.slack.com/" },
        { title: "Remotive", description: "Remote work community", url: "https://remotive.com/" },
        { title: "Eleduck", description: "Chinese remote worker community", url: "https://eleduck.com/" },
        { title: "Running Remote", description: "Remote work conference community", url: "https://runningremote.com/" }
      ]
    },
    {
      id: "housing",
      title: "Coliving & Workspaces",
      icon: Home,
      description: "Remote-friendly spaces",
      items: [
        { title: "Selina", description: "Global coliving network", url: "https://www.selina.com/", featured: true },
        { title: "Outsite", description: "Coliving spaces worldwide", url: "https://www.outsite.com/" },
        { title: "WeWork", description: "Flexible workspaces", url: "https://www.wework.com/" },
        { title: "Hubud", description: "Bali coworking space", url: "https://hubud.org/" },
        { title: "Dojo Bali", description: "Coliving and coworking in Bali", url: "https://dojobali.org/" },
        { title: "Sun Desk", description: "Morocco coworking space", url: "https://sun-desk.com/" },
        { title: "Mokrin House", description: "Serbia coliving space", url: "https://mokrinhouse.com/" },
        { title: "Nest Copenhagen", description: "Denmark coliving", url: "https://www.nestcopenhagen.dk/" },
        { title: "Talent Garden", description: "European coworking network", url: "https://talentgarden.com/en/coworking" },
        { title: "The Surf Office", description: "Portugal and Canaries workspaces", url: "https://www.surfoffice.com/" },
        { title: "Anceu", description: "Rural coliving in Spain", url: "https://anceu.com/" },
        { title: "Work From Curacao", description: "Caribbean coliving", url: "http://www.workfromcuracao.com/" },
        { title: "Common", description: "Coliving in major cities", url: "https://www.common.com/" },
        { title: "HubBOG", description: "Bogotá coworking and accelerator", url: "https://www.hubbog.com/" },
        { title: "NoHat Digital", description: "Mexico coliving space", url: "https://www.nohatdigital.com/mansionpage/" }
      ]
    },
    {
      id: "podcasts-videos",
      title: "Podcasts & Videos",
      icon: Play,
      description: "Learn from experts",
      items: [
        { title: "Building Remote Teams", description: "Podcast about remote work challenges", url: "https://www.buildingremoteteams.com/", featured: true },
        { title: "Distributed", description: "Interviews with distributed teams", url: "https://distributed.blog/podcast/" },
        { title: "Remote Works", description: "Remote work culture podcast", url: "https://remote.works/" },
        { title: "Wide Teams", description: "Remote worker interviews", url: "https://www.wideteams.com/" },
        { title: "Jason Fried: Why work doesn't happen at work", description: "TED Talk on remote work", url: "https://www.youtube.com/watch?v=5XD2kNopsUs" },
        { title: "The Effective Remote Developer", description: "Conference talk on remote development", url: "https://www.infoq.com/presentations/effective-remote-developer-2017/" },
        { title: "Remote Working Works!", description: "Fluent 2013 presentation", url: "https://www.youtube.com/watch?v=23oBUH270YU" },
        { title: "Lessons from Distributed Companies", description: "Lullabot podcast series", url: "https://www.lullabot.com/podcasts/drupalizeme-podcast/lessons-from-distributed-companies" },
        { title: "The Remote Show", description: "Weekly remote work podcast", url: "https://www.theremoteshow.com/" },
        { title: "Yonder Podcast", description: "Remote work insights", url: "https://www.yonder.io/podcast" }
      ]
    },
    {
      id: "events-conferences",
      title: "Events & Conferences",
      icon: Star,
      description: "Remote work events",
      items: [
        { title: "Running Remote", description: "World's largest remote work conference", url: "https://runningremote.com/", featured: true },
        { title: "9punto5", description: "Remote work conference in Latin America", url: "https://9punto5.cl/" },
        { title: "Git Commit Show", description: "Global developer conference", url: "https://gitcommit.show/" },
        { title: "Remote Work Summit", description: "Annual remote work event", url: "https://remoteworksummit.com/" },
        { title: "DNX Conference", description: "Digital nomad conference", url: "https://www.dnxconf.com/" },
        { title: "7in7 Conference", description: "Digital nomad event", url: "https://7in7.co/" },
        { title: "Nomad Summit", description: "Location independent lifestyle", url: "https://www.nomadsummit.com/" },
        { title: "Remote Year Track", description: "Remote work track at conferences", url: "https://remoteyear.com/track" },
        { title: "Recurse Center", description: "3-month programming retreat", url: "https://www.recurse.com/" },
        { title: "Project Getaway", description: "30-day remote work retreat", url: "https://www.projectgetaway.com/" }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => 
    activeCategory === "all" || category.id === activeCategory
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Apple-style minimal */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Minimal badge */}
          <div className={`inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">200+ Resources • 39k+ GitHub Stars</span>
          </div>

          {/* Clean typography */}
          <h1 className={`text-6xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Work from
            <br />
            <span className="font-medium">anywhere</span>
          </h1>

          <p className={`text-xl text-gray-500 mb-12 max-w-xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Comprehensive collection of 200+ resources from the most starred remote work repository on GitHub.
          </p>

          {/* Minimal search */}
          <div className={`max-w-md mx-auto mb-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation - Minimal pills */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "all" 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid - Clean and minimal */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Single category view - centered layout */}
          {activeCategory !== "all" && filteredCategories.length === 1 ? (
            <div className="max-w-4xl mx-auto">
              {filteredCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.id}
                    className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Category Header - Centered */}
                    <div className="flex items-center justify-center gap-3 mb-12">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-gray-500">{category.description}</p>
                      </div>
                    </div>

                    {/* Items Grid - Responsive and centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items
                        .slice(0, expandedCategories.includes(category.id) ? undefined : 12)
                        .map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          onClick={() => window.open(item.url, '_blank')}
                          className="group p-6 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-200 hover:shadow-lg"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                                  {item.title}
                                </h4>
                                {item.featured && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                )}
                              </div>
                              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors ml-3 flex-shrink-0" />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {category.items.length > 12 && (
                      <div className="pt-8 text-center">
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="px-8 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 border border-gray-200 hover:border-gray-300"
                        >
                          {expandedCategories.includes(category.id) 
                            ? `Show less` 
                            : `Show ${category.items.length - 12} more`
                          }
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* All categories view - original grid layout */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.id}
                    className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-gray-500">{category.description}</p>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="space-y-3">
                      {category.items
                        .slice(0, expandedCategories.includes(category.id) ? undefined : 8)
                        .map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          onClick={() => window.open(item.url, '_blank')}
                          className="group p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-200"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                                  {item.title}
                                </h4>
                                {item.featured && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                )}
                              </div>
                              <p className="text-sm text-gray-500 truncate">{item.description}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors ml-3" />
                          </div>
                        </div>
                      ))}
                      
                      {category.items.length > 8 && (
                        <div className="pt-2">
                          <button
                            onClick={() => toggleCategory(category.id)}
                            className="w-full p-3 text-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                          >
                            {expandedCategories.includes(category.id) 
                              ? `Show less` 
                              : `Show ${category.items.length - 8} more`
                            }
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="px-4 py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Ready to go remote?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your remote work journey today.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium"
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

export default RemoteResources;
