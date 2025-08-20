import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  HelpCircle, 
  Briefcase, 
  User, 
  CreditCard, 
  Shield, 
  Settings,
  MessageCircle,
  Phone,
  Mail,
  Clock
} from "lucide-react";
import Header from "@/components/Header";

const FAQ = () => {
  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      description: "Basic information about Jobnest platform",
      faqs: [
        {
          question: "What is Jobnest and how does it work?",
          answer: "Jobnest is a comprehensive job search platform that connects job seekers with employers. We aggregate job listings from various sources, provide career guidance tools, and offer features like application tracking, resume building, and interview preparation. Our AI-powered matching system helps you discover relevant opportunities based on your skills, experience, and preferences."
        },
        {
          question: "Is Jobnest free to use?",
          answer: "Yes, Jobnest offers a robust free tier that includes job searching, basic application tracking, and access to career resources. We also offer premium features for users who want advanced functionality like priority support, enhanced profile visibility, and premium career coaching resources."
        },
        {
          question: "How is Jobnest different from other job sites?",
          answer: "Jobnest stands out through our focus on career development beyond just job listings. We provide comprehensive interview preparation, salary negotiation guidance, career coaching resources, and industry insights. Our platform also emphasizes user experience with clean design, personalized recommendations, and transparent employer reviews."
        },
        {
          question: "What types of jobs are available on Jobnest?",
          answer: "We feature opportunities across all industries and experience levels, from entry-level positions to executive roles. This includes full-time, part-time, contract, freelance, and remote positions in fields like technology, healthcare, finance, marketing, education, engineering, and many others."
        }
      ]
    },
    {
      id: "jobsearch",
      title: "Job Search & Applications",
      icon: <Briefcase className="w-5 h-5" />,
      description: "Everything about finding and applying for jobs",
      faqs: [
        {
          question: "How do I search for jobs effectively?",
          answer: "Start with specific keywords related to your desired role, then use our advanced filters for location, salary range, experience level, and company size. Set up job alerts to be notified of new opportunities. Consider using boolean search operators (AND, OR, NOT) for more precise results. Don't forget to explore related job titles and industry-specific terms."
        },
        {
          question: "Can I apply for jobs directly through Jobnest?",
          answer: "Yes, many employers allow direct applications through our platform. You can apply with your Jobnest profile or upload a custom resume and cover letter. Some positions may redirect you to the employer's website to complete the application process. We track all your applications in your personal dashboard."
        },
        {
          question: "How do I set up job alerts?",
          answer: "Create job alerts by saving your search criteria, including keywords, location, salary range, and other preferences. You can choose to receive alerts daily, weekly, or as new jobs are posted. Manage all your alerts from your account dashboard and adjust frequency or criteria anytime."
        },
        {
          question: "Why aren't I hearing back from employers?",
          answer: "Several factors can affect response rates: ensure your resume is ATS-friendly, tailor your applications to each role, follow up appropriately, and apply within the first few days of posting. Consider if your qualifications match the requirements and if your resume clearly demonstrates relevant experience. Our resume optimization tools can help improve your application success rate."
        }
      ]
    },
    {
      id: "account",
      title: "Account & Profile",
      icon: <User className="w-5 h-5" />,
      description: "Managing your account and profile settings",
      faqs: [
        {
          question: "How do I create an effective profile?",
          answer: "Complete all profile sections including professional summary, work experience, education, and skills. Use a professional photo, write compelling descriptions of your achievements, and keep information current. Include relevant keywords for your industry and desired roles. Enable profile visibility to recruiters if you're open to opportunities."
        },
        {
          question: "Can I control who sees my profile?",
          answer: "Yes, you have full control over profile visibility. You can make your profile public, visible only to recruiters, or completely private. You can also hide your profile from specific companies (like your current employer) while keeping it visible to others."
        },
        {
          question: "How do I update my profile information?",
          answer: "Access your profile settings from the account menu. You can edit any section including contact information, work history, education, skills, and preferences. Changes are saved automatically, and we recommend keeping your profile updated regularly to reflect your current situation and career goals."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can permanently delete your account from the account settings page. This will remove all your personal information, applications, and saved items. Before deleting, consider downloading any important information you might need. Account deletion is permanent and cannot be undone."
        }
      ]
    },
    {
      id: "premium",
      title: "Premium Features & Billing",
      icon: <CreditCard className="w-5 h-5" />,
      description: "Information about paid services and billing",
      faqs: [
        {
          question: "What premium features are available?",
          answer: "Premium subscribers get enhanced profile visibility, advanced analytics on profile views and application status, priority customer support, access to salary insights, premium career coaching content, and advanced search filters. You also get unlimited access to our resume builder and interview preparation tools."
        },
        {
          question: "How much does premium membership cost?",
          answer: "We offer flexible pricing plans starting at $9.99/month for basic premium features, $19.99/month for professional features, and $29.99/month for our complete career advancement package. Annual subscriptions receive significant discounts. View current pricing on our upgrade page."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your billing period. No cancellation fees apply, and you can resubscribe later if needed."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 7-day money-back guarantee for new premium subscribers. If you're not satisfied within the first week, contact our support team for a full refund. After the guarantee period, we don't offer refunds, but you can cancel to prevent future charges."
        }
      ]
    },
    {
      id: "privacy",
      title: "Privacy & Security",
      icon: <Shield className="w-5 h-5" />,
      description: "Data protection and account security",
      faqs: [
        {
          question: "How do you protect my personal information?",
          answer: "We use industry-standard encryption, secure data centers, and strict access controls to protect your information. We comply with data protection regulations including GDPR and CCPA. We never sell personal information to third parties and only share data with employers when you explicitly apply for their positions."
        },
        {
          question: "What information do you collect?",
          answer: "We collect information you provide (profile details, resume, preferences), usage data (how you interact with our platform), and some technical information (IP address, browser type) for security and improvement purposes. Detailed information is available in our Privacy Policy."
        },
        {
          question: "Can I control what information is shared with employers?",
          answer: "Absolutely. You control what information is included in your profile and applications. You can create different versions of your resume for different types of roles and choose what information to share when applying for specific positions. Your contact information is only shared when you apply for a job."
        },
        {
          question: "How do you handle data breaches?",
          answer: "We have comprehensive security measures to prevent breaches, including regular security audits, monitoring systems, and incident response procedures. In the unlikely event of a security incident, we will notify affected users within 72 hours and take immediate action to secure the platform and protect user data."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Support",
      icon: <Settings className="w-5 h-5" />,
      description: "Platform features and troubleshooting",
      faqs: [
        {
          question: "The website is running slowly. What should I do?",
          answer: "Try clearing your browser cache and cookies, disable browser extensions temporarily, or try a different browser. Check your internet connection and try accessing the site from a different network if possible. If problems persist, contact our technical support team with details about your browser and operating system."
        },
        {
          question: "I'm having trouble uploading my resume. What file types are supported?",
          answer: "We accept PDF, DOC, and DOCX files up to 5MB in size. Ensure your file isn't password protected or corrupted. For best results, use a standard resume format without unusual fonts or complex formatting. If you continue having issues, try converting your resume to PDF format."
        },
        {
          question: "Can I access Jobnest on my mobile device?",
          answer: "Yes, our website is fully optimized for mobile devices and tablets. You can search jobs, apply, manage your profile, and access most features on any device with a web browser. We also plan to release dedicated mobile apps in the near future."
        },
        {
          question: "How do I report a bug or technical issue?",
          answer: "Use the 'Report Issue' button in the help section, or contact our support team with detailed information about the problem, including what you were trying to do, error messages, your browser type, and device information. Screenshots are helpful for troubleshooting visual issues."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "9 AM - 6 PM EST",
      action: "Start Chat"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone Support",
      description: "Speak directly with support",
      availability: "Premium members only",
      action: "Call Now"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to common questions about using Jobnest, managing your account, and advancing your career
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search FAQ..." 
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {faqCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-xs sm:text-sm flex items-center gap-1"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        {category.icon}
                        {category.title}
                      </CardTitle>
                      <CardDescription>
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`} className="border rounded-lg px-4">
                            <AccordionTrigger className="text-left hover:no-underline">
                              <span className="font-medium">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>FAQ Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Questions</span>
                    <Badge variant="secondary">24</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Categories</span>
                    <Badge variant="secondary">6</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Last Updated</span>
                    <Badge variant="outline">Today</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Our support team is here to help
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactOptions.map((option, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="text-primary">{option.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium">{option.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{option.description}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                          <Clock className="w-3 h-3" />
                          <span>{option.availability}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          {option.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Articles */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Help Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-3">
                    <h4 className="font-medium text-sm">How to Write an ATS-Friendly Resume</h4>
                    <p className="text-xs text-muted-foreground">Essential tips for getting past automated screening</p>
                  </div>
                  <div className="border-l-4 border-muted pl-3">
                    <h4 className="font-medium text-sm">Interview Preparation Checklist</h4>
                    <p className="text-xs text-muted-foreground">Complete guide to acing your next interview</p>
                  </div>
                  <div className="border-l-4 border-muted pl-3">
                    <h4 className="font-medium text-sm">Salary Negotiation Strategies</h4>
                    <p className="text-xs text-muted-foreground">Research-backed approach to negotiate better offers</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View All Articles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
