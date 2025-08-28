import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, TrendingUp, Target, BookOpen, Award, BarChart3, Compass } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Index() {
  const { openSignUp, openSignIn } = useAuth();

  const careerPaths = [
    {
      title: "Software Engineering",
      level: "Entry to Senior",
      skills: ["JavaScript", "React", "Python", "Git"],
      jobs: "15,000+ jobs",
      growth: "+22%",
      icon: "💻",
      slug: "software-engineering"
    },
    {
      title: "Data Science",
      level: "Entry to Principal",
      skills: ["Python", "SQL", "Machine Learning", "Statistics"],
      jobs: "8,500+ jobs",
      growth: "+31%",
      icon: "📊",
      slug: "data-science"
    },
    {
      title: "Product Management",
      level: "Associate to VP",
      skills: ["Strategy", "Analytics", "User Research", "Leadership"],
      jobs: "5,200+ jobs",
      growth: "+19%",
      icon: "🎯",
      slug: "product-management"
    },
    {
      title: "UX/UI Design",
      level: "Junior to Principal",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      jobs: "3,800+ jobs",
      growth: "+13%",
      icon: "🎨",
      slug: "ux-ui-design"
    },
    {
      title: "Cybersecurity",
      level: "Entry to Expert",
      skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"],
      jobs: "4,200+ jobs",
      growth: "+35%",
      icon: "🔐",
      slug: "cybersecurity"
    },
    {
      title: "DevOps Engineering",
      level: "Junior to Senior",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      jobs: "6,800+ jobs",
      growth: "+25%",
      icon: "⚙️",
      slug: "devops-engineering"
    },
    {
      title: "Digital Marketing",
      level: "Entry to Director",
      skills: ["SEO", "PPC", "Analytics", "Content Marketing", "Social Media"],
      jobs: "7,500+ jobs",
      growth: "+15%",
      icon: "📱",
      slug: "digital-marketing"
    },
    {
      title: "Cloud Architecture",
      level: "Mid to Principal",
      skills: ["AWS", "Azure", "GCP", "Microservices", "System Design"],
      jobs: "3,900+ jobs",
      growth: "+28%",
      icon: "☁️",
      slug: "cloud-architecture"
    }
  ];

  const features = [
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Career Explorer",
      description: "Discover career paths that match your interests, skills, and goals with our AI-powered recommendation engine."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Skills Assessment",
      description: "Take comprehensive assessments to identify your strengths and areas for growth in your chosen field."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learning Paths",
      description: "Follow structured learning paths with curated courses, projects, and resources for skill development."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Tracking",
      description: "Set career milestones and track your progress with personalized dashboards and insights."
    }
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trusted by 500K+ professionals
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Discover Your
              <span className="text-primary block mt-2">Dream Career Path</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Navigate your professional journey with confidence. Get personalized career recommendations, 
              skill assessments, and learning paths designed to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="text-lg px-8" onClick={openSignUp}>
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" onClick={openSignIn}>
                Take Skills Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides the tools and insights you need to make informed career decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Career Paths
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore high-growth career opportunities with detailed roadmaps and skill requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{path.icon}</span>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {path.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {path.level}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {path.growth}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {path.jobs}
                    </span>
                    <Link to={`/career/${path.slug}`}>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        View Path
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <Award className="h-16 w-16 mx-auto opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of professionals who have successfully navigated their career transitions with CareerPath.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="secondary" className="text-lg px-8" onClick={openSignUp}>
                Start Free Assessment
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary" onClick={openSignIn}>
                Browse Career Paths
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
