import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobFilters from "./JobFilters";

const MobileFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Filter Toggle Button */}
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="mb-4 w-full flex items-center justify-center gap-2"
      >
        <Filter className="h-4 w-4" />
        Filters
      </Button>

      {/* Mobile Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <JobFilters />
            </div>
            <div className="p-4 border-t">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
