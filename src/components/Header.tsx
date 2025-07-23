import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/auth/LoginModal";
import { SignupModal } from "@/components/auth/SignupModal";
import { UserDropdown } from "@/components/auth/UserDropdown";

const Header = () => {
  const { user, loading } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <header className="w-full glass-panel shadow-lg border-b border-white/30 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-1 items-center">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                  Jobnest
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-6 ml-8 xl:ml-16">
                <Link
                  to="/interview-tips"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base"
                >
                  Interview Tips
                </Link>
                <Link
                  to="/application-tracker"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base"
                >
                  Application Tracker
                </Link>
                <Link
                  to="/job-portals"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base"
                >
                  Job Portals
                </Link>
                <Link
                  to="/articles-posts"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base"
                >
                  Articles & Posts
                </Link>
                <Link
                  to="/remote-resources"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base"
                >
                  Remote Resources
                </Link>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base"
                >
                  About
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-12 sm:w-16 h-6 sm:h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-16 sm:w-20 h-6 sm:h-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ) : user ? (
                <UserDropdown />
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    className="text-foreground text-sm sm:text-base px-2 sm:px-4"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Log in
                  </Button>
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-3 sm:px-4"
                    onClick={() => setShowSignupModal(true)}
                  >
                    Sign up
                  </Button>
                </>
              )}

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="block h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 mt-4">
                <Link
                  to="/interview-tips"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Interview Tips
                </Link>
                <Link
                  to="/application-tracker"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Application Tracker
                </Link>
                <Link
                  to="/job-portals"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Job Portals
                </Link>
                <Link
                  to="/articles-posts"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Articles & Posts
                </Link>
                <Link
                  to="/remote-resources"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Remote Resources
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Authentication Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />
      
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default Header;