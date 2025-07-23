import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const HeroSection = () => {
  // Professional avatar URLs from Unsplash (matching the original design)
  const avatars = [
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&h=256&q=80"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="glass-panel container mx-auto text-center max-w-4xl p-10 shadow-xl">
        {/* Success Badge */}
        <div className="mb-8">
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20 px-4 py-2">
            ● Over 500+ jobs added this week
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
          Find Your Next Career Move with Jobnest
        </h1>

        {/* User Avatars */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`User ${index + 1}`}
                className="w-12 h-12 rounded-full border-2 border-background"
              />
            ))}
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
          Loved by 100,000+ professionals
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Join hundreds of professionals who have found their dream jobs through Jobnest. 
          With over 3,000 active jobs and global opportunities, your next career move is just a click away.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;