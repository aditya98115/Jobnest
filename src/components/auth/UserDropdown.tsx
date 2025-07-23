import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { User, Settings, FileText, BookmarkIcon, LogOut, ChevronDown, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UserDropdown: React.FC = () => {
  const { user, signOut } = useAuth();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const initials = getInitials(displayName);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 h-auto p-2 rounded-xl">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback className="bg-gray-100 text-gray-600 text-sm">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            {displayName}
          </span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56 rounded-xl border-gray-200 shadow-lg">
        <DropdownMenuLabel className="text-sm">
          <div className="flex flex-col space-y-1">
            <p className="font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-gray-500">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/application-tracker" className="flex items-center gap-2 cursor-pointer">
            <FileText className="h-4 w-4" />
            <span>Applications</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/resumes" className="flex items-center gap-2 cursor-pointer">
            <Upload className="h-4 w-4" />
            <span>Resumes</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/saved-jobs" className="flex items-center gap-2 cursor-pointer">
            <BookmarkIcon className="h-4 w-4" />
            <span>Saved Jobs</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer text-red-600 focus:text-red-600"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
