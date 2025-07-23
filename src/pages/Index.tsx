import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobFilters from "@/components/JobFilters";
import JobListing from "@/components/JobListing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="glass-panel container mx-auto mt-8 p-8">
        <HeroSection />
        {/* Main Content Area */}
        <div className="mt-8">
          <div className="flex gap-6">
            <JobFilters />
            <JobListing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
