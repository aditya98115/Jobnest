import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/auth/LoginModal";
import { SignupModal } from "@/components/auth/SignupModal";
import { UserDropdown } from "@/components/auth/UserDropdown";

const Header = () => {
  const { user, loading } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

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
              <div className="flex-shrink-0 mr-8">
                <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                  Jobnest
                </Link>
              </div>
              <nav className="hidden md:flex space-x-6 ml-16">
                {/* <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Remote Jobs
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resume Maker
                </a> */}
                <Link
                  to="/interview-tips"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Interview Tips
                </Link>
                <Link
                  to="/application-tracker"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Application Tracker
                </Link>
                <Link
                  to="/resources"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resources
                </Link>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </nav>
            </div>
              <div className="flex items-center space-x-3">
                {loading ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ) : user ? (
                  <UserDropdown />
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="text-foreground"
                      onClick={() => setShowLoginModal(true)}
                    >
                      Log in
                    </Button>
                    <Button 
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => setShowSignupModal(true)}
                    >
                      Sign up
                    </Button>
                  </>
                )}
            </div>
          </div>
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