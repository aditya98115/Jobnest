import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApplicationProvider } from "./contexts/ApplicationContext";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobDetail from "./pages/JobDetail";
import InterviewTips from "./pages/InterviewTips";
import Resources from "./pages/Resources";
import ApplicationTracker from "./pages/ApplicationTracker";
import Resumes from "./pages/Resumes";
import Profile from "./pages/Profile";
import SavedJobs from "./pages/SavedJobs";
import About from "./pages/About";
import RemoteResources from "./pages/RemoteResources";
import ArticlesPosts from "./pages/ArticlesPosts";
import JobPortals from "./pages/JobPortals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ApplicationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/job/:jobId" element={<JobDetail />} />
              <Route path="/interview-tips" element={<InterviewTips />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/application-tracker" element={<ApplicationTracker />} />
              <Route path="/articles-posts" element={<ArticlesPosts />} />
              <Route path="/job-portals" element={<JobPortals />} />
              <Route path="/resumes" element={<Resumes />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/saved-jobs" element={<SavedJobs />} />
              <Route path="/about" element={<About />} />
              <Route path="/remote-resources" element={<RemoteResources />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ApplicationProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
