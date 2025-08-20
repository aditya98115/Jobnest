import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  BookOpen, 
  Brain, 
  CheckCircle, 
  Clock, 
  FileText, 
  Lightbulb, 
  MessageCircle, 
  Star, 
  Target, 
  TrendingUp,
  Users,
  Award,
  Eye,
  Heart,
  Zap,
  Shield,
  Globe,
  Video,
  Headphones,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";

const InterviewTips = () => {
  const categories = [
    {
      id: "preparation",
      title: "Interview Preparation",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
      tips: [
        {
          title: "Research the Company Thoroughly",
          description: "Deep dive into company culture, values, recent news, and industry position",
          difficulty: "Essential",
          timeRequired: "2-3 hours",
          content: [
            "Study the company's mission, vision, and values",
            "Read recent press releases and news articles",
            "Understand their products/services and target market",
            "Research key executives and team members",
            "Check their social media presence and company blog",
            "Look up the company on Glassdoor for insider insights"
          ]
        },
        {
          title: "Master Your Resume Stories",
          description: "Prepare compelling narratives for each experience using the STAR method",
          difficulty: "Critical",
          timeRequired: "3-4 hours",
          content: [
            "Identify 5-7 key experiences from your resume",
            "Structure each story using STAR (Situation, Task, Action, Result)",
            "Quantify your achievements with specific numbers",
            "Practice telling these stories concisely (2-3 minutes each)",
            "Prepare follow-up details for deeper questions",
            "Connect each story to relevant job requirements"
          ]
        },
        {
          title: "Technical Skills Assessment",
          description: "Prepare for role-specific technical evaluations and coding challenges",
          difficulty: "Advanced",
          timeRequired: "5+ hours",
          content: [
            "Review fundamental concepts in your field",
            "Practice coding problems on LeetCode, HackerRank, or Codility",
            "Prepare for system design questions (for senior roles)",
            "Brush up on relevant frameworks and technologies",
            "Practice explaining technical concepts simply",
            "Prepare questions about the technical stack"
          ]
        }
      ]
    },
    {
      id: "questions",
      title: "Common Questions",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-gradient-to-br from-green-500 to-teal-600",
      tips: [
        {
          title: "Behavioral Questions Mastery",
          description: "Excel at questions about your past experiences and soft skills",
          difficulty: "Essential",
          timeRequired: "2-3 hours",
          content: [
            "Tell me about yourself (30-second elevator pitch)",
            "Why are you interested in this position?",
            "Describe a challenging situation and how you handled it",
            "Tell me about a time you failed and what you learned",
            "How do you handle conflicts with team members?",
            "Where do you see yourself in 5 years?"
          ]
        },
        {
          title: "Technical Interview Questions",
          description: "Navigate technical assessments with confidence",
          difficulty: "Advanced",
          timeRequired: "4+ hours",
          content: [
            "Explain your approach to problem-solving",
            "Walk through your code and explain your logic",
            "Discuss trade-offs in your technical decisions",
            "Describe how you stay updated with technology trends",
            "Explain a complex project you've worked on",
            "How do you handle debugging and troubleshooting?"
          ]
        },
        {
          title: "Salary and Benefits Negotiation",
          description: "Navigate compensation discussions professionally",
          difficulty: "Intermediate",
          timeRequired: "1-2 hours",
          content: [
            "Research market rates for your role and location",
            "Prepare your salary range based on experience",
            "Consider the total compensation package",
            "Practice negotiation scenarios",
            "Know when and how to counteroffer",
            "Understand benefits beyond base salary"
          ]
        }
      ]
    },
    {
      id: "body-language",
      title: "Body Language & Presence",
      icon: <Eye className="w-6 h-6" />,
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      tips: [
        {
          title: "Professional Video Interview Setup",
          description: "Optimize your virtual interview environment",
          difficulty: "Essential",
          timeRequired: "30 minutes",
          content: [
            "Test your camera, microphone, and internet connection",
            "Choose a clean, professional background",
            "Ensure proper lighting (face well-lit, avoid backlighting)",
            "Position camera at eye level",
            "Minimize distractions and interruptions",
            "Have backup plans for technical issues"
          ]
        },
        {
          title: "Confident Body Language",
          description: "Project confidence through non-verbal communication",
          difficulty: "Intermediate",
          timeRequired: "Practice ongoing",
          content: [
            "Maintain appropriate eye contact (50-70% of the time)",
            "Sit up straight with shoulders back",
            "Use natural hand gestures when speaking",
            "Smile genuinely and at appropriate times",
            "Mirror the interviewer's energy level",
            "Practice power poses before the interview"
          ]
        },
        {
          title: "Voice and Communication",
          description: "Master verbal communication techniques",
          difficulty: "Intermediate",
          timeRequired: "Practice ongoing",
          content: [
            "Speak clearly and at a moderate pace",
            "Use appropriate volume and tone",
            "Pause before answering to collect thoughts",
            "Avoid filler words (um, uh, like)",
            "Practice active listening skills",
            "Ask clarifying questions when needed"
          ]
        }
      ]
    },
    {
      id: "follow-up",
      title: "Follow-up Strategy",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      tips: [
        {
          title: "Thank You Email Best Practices",
          description: "Stand out with thoughtful post-interview communication",
          difficulty: "Essential",
          timeRequired: "30 minutes",
          content: [
            "Send within 24 hours of the interview",
            "Personalize each email for different interviewers",
            "Reference specific conversation points",
            "Reiterate your interest and qualifications",
            "Address any concerns that came up",
            "Keep it concise but meaningful"
          ]
        },
        {
          title: "Interview Reflection and Learning",
          description: "Continuously improve your interview skills",
          difficulty: "Intermediate",
          timeRequired: "30 minutes per interview",
          content: [
            "Document questions you were asked",
            "Note areas where you struggled",
            "Identify what went well",
            "Research topics you couldn't answer",
            "Update your preparation materials",
            "Practice improved responses for next time"
          ]
        }
      ]
    }
  ];

  const industrySpecificTips = [
    {
      industry: "Technology",
      icon: <Zap className="w-5 h-5" />,
      tips: [
        "Be prepared for coding challenges and technical assessments",
        "Understand the company's tech stack and development methodology",
        "Show passion for continuous learning and staying updated",
        "Demonstrate problem-solving approach, not just solutions"
      ]
    },
    {
      industry: "Finance",
      icon: <TrendingUp className="w-5 h-5" />,
      tips: [
        "Understand market conditions and industry trends",
        "Prepare for analytical and numerical reasoning tests",
        "Demonstrate attention to detail and risk awareness",
        "Show understanding of regulatory compliance"
      ]
    },
    {
      industry: "Healthcare",
      icon: <Heart className="w-5 h-5" />,
      tips: [
        "Emphasize patient care and safety priorities",
        "Show knowledge of healthcare regulations",
        "Demonstrate empathy and communication skills",
        "Prepare for scenario-based ethical questions"
      ]
    },
    {
      industry: "Marketing",
      icon: <Target className="w-5 h-5" />,
      tips: [
        "Present creative portfolio or campaign examples",
        "Show understanding of digital marketing trends",
        "Demonstrate data analysis and ROI measurement skills",
        "Prepare ideas for the company's marketing challenges"
      ]
    }
  ];

  const resourceLinks = [
    {
      category: "Interview Practice",
      links: [
        { 
          name: "Pramp - Free Mock Interviews", 
          url: "https://www.pramp.com/", 
          description: "Practice with peers in live mock interviews" 
        },
        { 
          name: "InterviewBuddy", 
          url: "https://www.interviewbuddy.in/", 
          description: "AI-powered interview practice platform" 
        },
        { 
          name: "Glassdoor Interview Questions", 
          url: "https://www.glassdoor.com/Interview/index.htm", 
          description: "Real interview questions from specific companies" 
        },
        { 
          name: "LeetCode Interview", 
          url: "https://leetcode.com/interview/", 
          description: "Technical coding practice and assessments" 
        }
      ]
    },
    {
      category: "Research Tools",
      links: [
        { 
          name: "Company Annual Reports", 
          url: "https://www.sec.gov/edgar/searchedgar/companysearch.html", 
          description: "SEC EDGAR database for financial insights" 
        },
        { 
          name: "Crunchbase", 
          url: "https://www.crunchbase.com/", 
          description: "Company funding, growth, and business intelligence" 
        },
        { 
          name: "LinkedIn Company Pages", 
          url: "https://www.linkedin.com/company/", 
          description: "Employee insights and company culture" 
        },
        { 
          name: "Indeed Company Reviews", 
          url: "https://www.indeed.com/companies", 
          description: "Employee experiences and workplace reviews" 
        }
      ]
    },
    {
      category: "Salary Research",
      links: [
        { 
          name: "PayScale", 
          url: "https://www.payscale.com/", 
          description: "Comprehensive salary data by role and location" 
        },
        { 
          name: "levels.fyi", 
          url: "https://www.levels.fyi/", 
          description: "Tech industry compensation benchmarks" 
        },
        { 
          name: "Glassdoor Salaries", 
          url: "https://www.glassdoor.com/Salaries/index.htm", 
          description: "Company-specific salary ranges and reviews" 
        },
        { 
          name: "Salary.com", 
          url: "https://www.salary.com/", 
          description: "Market rate analysis and compensation data" 
        }
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
            Interview Tips
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Master the art of interviewing with our curated collection of insights and strategies.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-24 max-w-6xl">
        {/* Main Content Tabs */}
        <Tabs defaultValue="preparation" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-16 bg-gray-50 rounded-2xl p-1 border-0">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 rounded-xl px-6 py-4 text-gray-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all duration-200 font-medium"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="space-y-12">
                {category.tips.map((tip, index) => (
                  <div key={index} className="border-b border-gray-100 pb-12 last:border-b-0 last:pb-0">
                    <div className="mb-8">
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="text-3xl font-light text-gray-900 tracking-tight">{tip.title}</h2>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-0 font-normal">
                            {tip.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-0 font-normal">
                            <Clock className="w-3 h-3 mr-1" />
                            {tip.timeRequired}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                    <div className="grid gap-3">
                      {tip.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-4 py-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-3 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Industry-Specific Tips */}
        <section className="mt-24 border-t border-gray-100 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Industry Insights
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Specialized guidance for different sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySpecificTips.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">{industry.industry}</h3>
                <div className="space-y-4 text-left">
                  {industry.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-light leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-24 border-t border-gray-100 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Resources
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Essential tools for interview preparation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {resourceLinks.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group cursor-pointer"
                    >
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {link.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-light">{link.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-24 border-t border-gray-100 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Answers to frequently asked questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-100 rounded-2xl px-6">
                <AccordionTrigger className="text-left hover:text-gray-900 transition-colors font-medium py-6">
                  How early should I start preparing for an interview?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed pb-6">
                  Start preparing as soon as you apply for the position. Ideally, begin 1-2 weeks before the interview to allow adequate time for research, practice, and preparation without feeling rushed.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6">
                <AccordionTrigger className="text-left hover:text-gray-900 transition-colors font-medium py-6">
                  What should I do if I don't know the answer to a question?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed pb-6">
                  Be honest about not knowing, but demonstrate your problem-solving approach. Explain how you would find the answer, relate it to similar experiences, or show your willingness to learn.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6">
                <AccordionTrigger className="text-left hover:text-gray-900 transition-colors font-medium py-6">
                  How should I handle multiple interview rounds?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed pb-6">
                  Treat each round as building upon the previous one. Take notes after each interview, ask about next steps, and tailor your preparation for different stakeholders (HR, technical team, management).
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-gray-100 rounded-2xl px-6">
                <AccordionTrigger className="text-left hover:text-gray-900 transition-colors font-medium py-6">
                  What's the best way to practice for behavioral questions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-light leading-relaxed pb-6">
                  Use the STAR method (Situation, Task, Action, Result) and practice with a variety of scenarios. Record yourself or practice with friends/family to improve your delivery and timing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InterviewTips;
