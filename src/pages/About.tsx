import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Heart, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  MapPin,
  Building,
  Zap,
  Shield,
  Clock
} from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  const stats = [
    { label: "Active Job Seekers", value: "50K+", icon: <Users className="w-5 h-5" /> },
    { label: "Partner Companies", value: "1,200+", icon: <Building className="w-5 h-5" /> },
    { label: "Jobs Posted Daily", value: "500+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Success Rate", value: "94%", icon: <Target className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "People First",
      description: "We believe every career journey is unique. Our platform is designed to understand and support your individual path to success."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Transparency",
      description: "Complete transparency in job postings, company reviews, and salary information. No hidden fees, no misleading information."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge technology meets human intuition. We're constantly evolving to make job searching smarter and more efficient."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Connecting talent worldwide with opportunities that matter. Breaking down barriers to create a more inclusive job market."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      bio: "Former VP of Engineering at Google. 15+ years building products that scale to millions of users.",
      image: "👩🏻‍💼"
    },
    {
      name: "Marcus Johnson",
      role: "Co-Founder & CTO",
      bio: "Ex-Principal Engineer at Apple. Expert in AI and machine learning applications for career matching.",
      image: "👨🏾‍💻"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Product",
      bio: "Previously led product teams at LinkedIn. Passionate about creating inclusive hiring experiences.",
      image: "👩🏽‍🎨"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Former Staff Engineer at Meta. Specializes in large-scale distributed systems and user experience.",
      image: "👨🏻‍💻"
    }
  ];

  const features = [
    {
      title: "AI-Powered Matching",
      description: "Our advanced algorithms learn from your preferences to suggest the most relevant opportunities.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Real-Time Updates",
      description: "Get instant notifications about new jobs, application status updates, and interview invitations.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Career Guidance",
      description: "Access to interview tips, resume optimization, and career coaching from industry experts.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Company Insights",
      description: "Detailed company profiles, culture insights, and employee reviews to help you make informed decisions.",
      icon: <Building className="w-6 h-6" />
    }
  ];

  const achievements = [
    "Featured in TechCrunch's 'Top 10 Career Platforms of 2024'",
    "Winner of the 'Best User Experience' award at HR Tech Summit",
    "Rated #1 Job Platform by CareerBuilder Magazine",
    "Recognized as 'Startup of the Year' by Innovation Awards",
    "Featured in Forbes '30 Under 30' for our founding team"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              We're on a mission to transform how people discover, apply for, and land their dream jobs. 
              Built by career experts, powered by cutting-edge technology, and designed for your success.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="rounded-xl px-8">
                Join Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-8">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light text-gray-900 mb-8 leading-tight">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                We believe that finding the right job shouldn't be a full-time job itself. That's why we've created 
                a platform that puts you in control of your career journey.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                From personalized job recommendations to comprehensive application tracking, we're here to support 
                every step of your career advancement.
              </p>
              <div className="space-y-4">
                {[
                  "Democratize access to quality job opportunities",
                  "Eliminate bias in the hiring process",
                  "Provide transparency in job market data",
                  "Support career growth at every level"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 border border-gray-100 hover:border-gray-200 transition-colors">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Advanced features designed to accelerate your career journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white border border-gray-100">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Experienced professionals from top tech companies, united by a passion for career advancement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center text-4xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{member.name}</h3>
                <div className="mb-3">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-0 font-normal">
                    {member.role}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Recognition</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Industry recognition for our commitment to excellence and innovation.
            </p>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700 font-light">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-5xl font-light text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gray-50 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 font-light">hello@jobplatform.com</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gray-50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 font-light">San Francisco, CA</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gray-50 flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Partner With Us</h3>
                <p className="text-gray-600 font-light">partnerships@jobplatform.com</p>
              </div>
            </div>
            
            <Button size="lg" className="rounded-xl px-8">
              <Mail className="w-4 h-4 mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
