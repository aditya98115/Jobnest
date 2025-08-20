import { Button } from "@/components/ui/button";
import { Search, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to main page with search query
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    // Navigate to main page without search query to show all jobs
    navigate("/");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center bg-white overflow-hidden py-8 sm:py-0">
      
      {/* Ultra-minimal background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white"></div>
      
      {/* Animated floating elements - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Apple-style minimal badge with animation */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 lg:mb-8 hover:bg-gray-200/80 transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">Now hiring at 10,000+ companies</span>
            </div>
          </div>

          {/* Apple-inspired typography with staggered animation */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-[0.85]">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Find work</span>
              <br />
              <span className="text-gray-400 inline-block hover:scale-105 transition-transform duration-300 cursor-default">you love</span>
            </h1>
          </div>

          {/* Minimal description with animation */}
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <p className="text-base sm:text-xl md:text-2xl text-gray-500 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-0">
              Connect with opportunities that matter.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Simple. Fast. Effective.
            </p>
          </div>

          {/* Apple-style search interface with animation */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp opacity-0 px-4 sm:px-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <form onSubmit={handleSearch} className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-gray-600 transition-colors duration-200" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search jobs, companies, skills"
                className="w-full pl-12 sm:pl-14 pr-32 sm:pr-40 py-4 sm:py-5 text-base sm:text-lg bg-gray-50/80 backdrop-blur-sm border-0 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-gray-900 focus:bg-white/90 transition-all duration-300 placeholder-gray-500 sm:placeholder-gray-400 placeholder:text-sm sm:placeholder:text-base hover:bg-gray-100/80 hover:scale-[1.02] focus:outline-none"
              />
              
              {/* Clear button - only show when there's text */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-24 sm:right-32 pr-1 sm:pr-2 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200 group/clear"
                >
                  <div className="p-1 rounded-full hover:bg-gray-200/50 transition-colors duration-200">
                    <X className="h-3 w-3 sm:h-4 sm:w-4 group-hover/clear:scale-110 transition-transform duration-200" />
                  </div>
                </button>
              )}
              
              <div className="absolute inset-y-0 right-0 pr-1 sm:pr-2 flex items-center">
                <Button 
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl group"
                >
                  <span className="hidden sm:inline">Search</span>
                  <span className="sm:hidden">Go</span>
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </form>
          </div>

          {/* Minimal social proof with animation */}
          <div className="border-t border-gray-100 pt-6 sm:pt-8 lg:pt-12 animate-fadeInUp opacity-0 px-4 sm:px-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 lg:mb-6 uppercase tracking-wider font-medium">
              Trusted by professionals at
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-50 hover:opacity-70 transition-opacity duration-300">
              <div className="text-base sm:text-xl font-bold text-gray-900 hover:scale-110 transition-all duration-200 cursor-pointer hover:text-blue-600">Google</div>
              <div className="text-base sm:text-xl font-bold text-gray-900 hover:scale-110 transition-all duration-200 cursor-pointer hover:text-blue-600">Apple</div>
              <div className="text-base sm:text-xl font-bold text-gray-900 hover:scale-110 transition-all duration-200 cursor-pointer hover:text-blue-600">Microsoft</div>
              <div className="text-base sm:text-xl font-bold text-gray-900 hover:scale-110 transition-all duration-200 cursor-pointer hover:text-blue-600">Meta</div>
              <div className="text-base sm:text-xl font-bold text-gray-900 hover:scale-110 transition-all duration-200 cursor-pointer hover:text-blue-600">Tesla</div>
              <div className="text-base sm:text-xl font-bold text-gray-900 hover:scale-110 transition-all duration-200 cursor-pointer hover:text-blue-600">Netflix</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;