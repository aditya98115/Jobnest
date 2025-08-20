import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Job Seekers",
      links: [
        { label: "Browse Jobs", href: "/" },
        { label: "Career Blog", href: "/blog" },
        { label: "Interview Tips", href: "/interview-tips" },
        { label: "Resume Resources", href: "/resumes" },
        { label: "Application Tracker", href: "/application-tracker" },
        { label: "Salary Tools", href: "/resources" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Career Advice", href: "/blog" },
        { label: "Industry Insights", href: "/resources" },
        { label: "Job Search Guide", href: "/resources" },
        { label: "Remote Work Tips", href: "/remote-resources" },
        { label: "Job Portals", href: "/job-portals" },
        { label: "Articles & Posts", href: "/articles-posts" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Mission", href: "/about" },
        { label: "Success Stories", href: "/about" },
        { label: "Press & Media", href: "/about" },
        { label: "Careers at Jobnest", href: "/about" },
        { label: "Contact Us", href: "/about" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/faq" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact Support", href: "/faq" },
        { label: "Report Issue", href: "/faq" },
        { label: "Safety Guidelines", href: "/faq" },
        { label: "Community Guidelines", href: "/terms-of-service" }
      ]
    }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
              Jobnest
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your trusted partner in career advancement. We connect talented professionals 
              with meaningful opportunities and provide the resources you need to succeed.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/jobnest" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/jobnest" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/jobnest" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/jobnest" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium">Headquarters</p>
                <p className="text-muted-foreground text-sm">Gaur City, Noida, UP, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium">Support</p>
                <p className="text-muted-foreground text-sm">+91 9412626872</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground text-sm">hello@jobnest.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted-foreground text-sm max-w-md">
                Get weekly career tips, job market insights, and exclusive opportunities 
                delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 min-w-0 sm:min-w-80">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-1"
                aria-label="Email address for newsletter"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-background/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Jobnest. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <a 
                href="/cookie-policy" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Accessibility
              </a>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <span>Powered by</span>
                <a 
                  href="https://www.google.com/adsense/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center"
                >
                  Google AdSense
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
