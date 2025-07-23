import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobFilters from "@/components/JobFilters";
import JobListing from "@/components/JobListing";
import MobileFilters from "@/components/MobileFilters";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="glass-panel container mx-auto mt-4 sm:mt-8 p-4 sm:p-8">
        <HeroSection />
        {/* Main Content Area */}
        <div className="mt-6 sm:mt-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Desktop Filters */}
            <div className="hidden lg:block">
              <JobFilters />
            </div>
            
            {/* Job Listing with Mobile Filters */}
            <div className="flex-1">
              {/* Mobile Filter Toggle */}
              <MobileFilters />
              <JobListing />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
