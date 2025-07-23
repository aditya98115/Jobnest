import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApplicationProvider } from "./contexts/ApplicationContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobDetail from "./pages/JobDetail";
import InterviewTips from "./pages/InterviewTips";
import Resources from "./pages/Resources";
import ApplicationTracker from "./pages/ApplicationTracker";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ApplicationProvider>
  </QueryClientProvider>
);

export default App;
