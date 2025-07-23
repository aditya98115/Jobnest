import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bookmark, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import { useApplicationContext } from "@/contexts/ApplicationContext";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  companyImage: string;
  location: string;
  date: string;
  type: "Full Time" | "Internship";
  salary: string;
  experience: string;
}

const JobCard = ({ 
  id,
  title, 
  company, 
  companyImage, 
  location, 
  date, 
  type, 
  salary, 
  experience
}: JobCardProps) => {
  const { saveJob, unsaveJob, applyToJob, isJobSaved, isJobApplied } = useApplicationContext();
  
  const isSaved = isJobSaved(id);
  const isApplied = isJobApplied(id);

  const jobData = {
    id,
    title,
    company,
    companyImage,
    location,
    salary,
    type,
    date,
    experience
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isSaved) {
      unsaveJob(id);
    } else {
      saveJob(jobData);
    }
  };

  const handleApply = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    applyToJob(jobData);
  };

  return (
    <Link to={`/job/${id}`} className="block">
      <Card className="p-0 hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-border group">
        <CardContent className="p-6">
          <div className="flex gap-4">
            {/* Company Image */}
            <div className="flex-shrink-0">
              <img
                src={companyImage}
                alt={`${company} logo`}
                className="w-16 h-16 rounded-lg object-cover border border-border"
              />
            </div>
            {/* Job Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  {company} • {date}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge 
                    variant="secondary" 
                    className={`px-2 py-1 text-xs ${
                      type === 'Internship' 
                        ? 'bg-blue-50 text-blue-700 border-blue-200' 
                        : 'bg-green-50 text-green-700 border-green-200'
                    }`}
                  >
                    {type}
                  </Badge>
                  <Badge variant="outline" className="px-2 py-1 text-xs">
                    {salary}
                  </Badge>
                  <Badge variant="outline" className="px-2 py-1 text-xs">
                    {experience}
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                className={`rounded-xl transition-all duration-200 ${
                  isSaved 
                    ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </Button>
              <Button
                size="sm"
                onClick={handleApply}
                disabled={isApplied}
                className={`rounded-xl transition-all duration-200 ${
                  isApplied 
                    ? 'bg-green-600 hover:bg-green-600 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary/90'
                }`}
              >
                {isApplied ? (
                  <span className="text-xs">Applied</span>
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;