import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ChatbotProvider } from "./components/chatbot/ChatbotContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import CareerExplorer from "./pages/CareerExplorer";
import CareerDetails from "./pages/CareerDetails";
import SkillsAssessment from "./pages/SkillsAssessment";
import LearningPaths from "./pages/LearningPaths";
import GoalTracking from "./pages/GoalTracking";
import ConsultPsychiatrist from "./pages/ConsultPsychiatrist";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminConsultations from "client/pages/AdminConsultations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ChatbotProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="explore" element={<CareerExplorer />} />
                <Route path="career/:slug" element={<CareerDetails />} />
                <Route path="assessment" element={<SkillsAssessment />} />
                <Route path="learning" element={<LearningPaths />} />
                <Route path="goals" element={<GoalTracking />} />
              <Route path="consult" element={<ConsultPsychiatrist />} />
              <Route path="resources" element={<Resources />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="admin/consultations" element={<AdminConsultations />} />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ChatbotProvider>
    </AuthProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
