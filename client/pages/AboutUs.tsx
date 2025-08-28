import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const stats = [
    { label: "Professionals Helped", value: "500K+", icon: <Users className="h-6 w-6" /> },
    { label: "Career Paths Mapped", value: "2,000+", icon: <Target className="h-6 w-6" /> },
    { label: "Success Stories", value: "15K+", icon: <Award className="h-6 w-6" /> },
    { label: "Years of Experience", value: "8+", icon: <Heart className="h-6 w-6" /> }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Talent at LinkedIn with 15+ years in career development and HR technology.",
      image: "👩‍💼",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder",
      bio: "Former Engineering Lead at Google, passionate about using AI to democratize career guidance.",
      image: "👨‍💻",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Head of Data Science",
      bio: "PhD in Psychology from Stanford, specializing in career assessment and predictive analytics.",
      image: "👩‍🔬",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product leader with experience at Coursera and Udacity, focused on learning experiences.",
      image: "👨‍🎨",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const values = [
    {
      title: "Accessibility",
      description: "Career guidance should be available to everyone, regardless of background or location.",
      icon: "🌍"
    },
    {
      title: "Data-Driven",
      description: "We use real market data and outcomes to provide accurate career recommendations.",
      icon: "📊"
    },
    {
      title: "Continuous Learning",
      description: "The job market evolves rapidly, and our platform adapts to provide current insights.",
      icon: "🚀"
    },
    {
      title: "Human-Centered",
      description: "Technology amplifies human potential; we put people at the center of everything we do.",
      icon: "❤️"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Founded in 2016
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Careers Through
            <span className="text-primary block mt-2">Innovation & Insight</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves a fulfilling career. CareerPath combines cutting-edge AI technology 
            with human expertise to provide personalized career guidance at scale.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground">How we started and where we're going</p>
          </div>
          <div className="prose prose-lg max-w-none">
            <div className="bg-background rounded-lg p-8 space-y-6">
              <p className="text-lg leading-relaxed">
                CareerPath was born from a simple observation: despite having access to more career information 
                than ever before, people still struggled to make informed decisions about their professional futures.
              </p>
              <p className="text-lg leading-relaxed">
                Our founders, Sarah and Marcus, met while working on talent acquisition technology and realized that 
                the same data science techniques used to match companies with candidates could be used to help 
                individuals understand their career options and development paths.
              </p>
              <p className="text-lg leading-relaxed">
                Today, CareerPath serves over 500,000 professionals worldwide, from recent graduates exploring 
                their first career moves to seasoned executives planning strategic transitions. Our AI-powered 
                platform analyzes millions of career trajectories to provide personalized insights that would 
                have been impossible to access just a few years ago.
              </p>
              <p className="text-lg leading-relaxed">
                We're just getting started. Our mission is to democratize access to high-quality career guidance 
                and help everyone find work that aligns with their values, skills, and aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{value.icon}</span>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The people behind CareerPath</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who share our passion for helping others succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
