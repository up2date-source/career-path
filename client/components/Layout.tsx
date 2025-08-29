import { Button } from "@/components/ui/button";
import { Outlet, Link, useLocation } from "react-router-dom";
import AuthModals from "./auth/AuthModals";
import Chatbot from "./chatbot/Chatbot";
import { useAuth } from "@/contexts/AuthContext";
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
  const location = useLocation();
  const { activeModal, openSignIn, openSignUp, closeModals } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">C</span>
            </div>
            <span className="font-bold text-xl">CareerPath</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/explore"
              className={`text-sm font-medium transition-colors ${
                isActive("/explore") ? "text-primary" : "hover:text-primary"
              }`}
            >
              Explore Careers
            </Link>
            <Link
              to="/assessment"
              className={`text-sm font-medium transition-colors ${
                isActive("/assessment") ? "text-primary" : "hover:text-primary"
              }`}
            >
              Skills Assessment
            </Link>
            <Link
              to="/learning"
              className={`text-sm font-medium transition-colors ${
                isActive("/learning") ? "text-primary" : "hover:text-primary"
              }`}
            >
              Learning Paths
            </Link>
            <Link
              to="/goals"
              className={`text-sm font-medium transition-colors ${
                isActive("/goals") ? "text-primary" : "hover:text-primary"
              }`}
            >
              Goal Tracking
            </Link>
            <Link
              to="/resources"
              className={`text-sm font-medium transition-colors ${
                isActive("/resources") ? "text-primary" : "hover:text-primary"
              }`}
            >
              Resources
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={openSignIn}>
              Sign In
            </Button>
            <Button size="sm" onClick={openSignUp}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Authentication Modals */}
      <AuthModals activeModal={activeModal} onClose={closeModals} />

      {/* AI Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">C</span>
                </div>
                <span className="font-bold text-xl">CareerPath</span>
              </Link>
              <p className="text-muted-foreground">
                Empowering professionals to discover and achieve their career
                goals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/explore" className="hover:text-foreground">
                    Career Explorer
                  </Link>
                </li>
                <li>
                  <Link to="/assessment" className="hover:text-foreground">
                    Skills Assessment
                  </Link>
                </li>
                <li>
                  <Link to="/learning" className="hover:text-foreground">
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link to="/goals" className="hover:text-foreground">
                    Goal Tracking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/resources" className="hover:text-foreground">
                    Career Guides
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Industry Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Salary Data
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CareerPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
