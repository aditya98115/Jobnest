import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

const JobFilters = () => {
  const jobTypes = ["Full Time", "Internship"];
  
  const experienceLevels = [
    "More than 0 year",
    "More than 1 year", 
    "More than 2 years",
    "More than 3 years",
    "More than 4 years"
  ];

  const salaryRanges = [
    "Competitive",
    "2-4 LPA",
    "4-6 LPA", 
    "6-10 LPA",
    "10-20 LPA",
    "20-30 LPA",
    "30-40 LPA",
    "40+ LPA"
  ];

  return (
    <div className="w-80 bg-background p-6 border-r border-border h-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Filters</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Clear All
        </Button>
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Job Type</h4>
        <div className="space-y-3">
          {jobTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <label
                htmlFor={type}
                className="text-sm text-muted-foreground cursor-pointer"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Experience</h4>
        <div className="space-y-3">
          {experienceLevels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox id={level} />
              <label
                htmlFor={level}
                className="text-sm text-muted-foreground cursor-pointer"
              >
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Salary */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Salary</h4>
        <div className="space-y-3">
          {salaryRanges.map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <Checkbox id={range} />
              <label
                htmlFor={range}
                className="text-sm text-muted-foreground cursor-pointer"
              >
                {range}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Domain */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Domain</h4>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select domain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Apply Filters
      </Button>
    </div>
  );
};

export default JobFilters;