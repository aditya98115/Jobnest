import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const JobSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentSearch = searchParams.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(currentSearch);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery.trim() });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <form onSubmit={handleSearch} className="flex gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs by title, company, skills, or location..."
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <Button type="submit" className="px-6">
          Search
        </Button>
      </form>
      
      {/* Quick search suggestions */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Popular searches:</p>
        <div className="flex flex-wrap gap-2">
          {['React', 'Python', 'Frontend', 'Backend', 'Remote', 'Full Stack'].map((term) => (
            <button
              key={term}
              onClick={() => {
                setSearchQuery(term);
                setSearchParams({ search: term });
              }}
              className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
