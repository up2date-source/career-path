import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, Users, DollarSign, MapPin, BookOpen, Target, Clock, CheckCircle } from "lucide-react";

interface CareerData {
  title: string;
  icon: string;
  description: string;
  level: string;
  skills: string[];
  jobs: string;
  growth: string;
  salary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  learningPath: {
    title: string;
    duration: string;
    progress?: number;
  }[];
  companies: string[];
  locations: string[];
}

const careerData: Record<string, CareerData> = {
  "software-engineering": {
    title: "Software Engineering",
    icon: "💻",
    description: "Design, develop, and maintain software applications and systems",
    level: "Entry to Senior",
    skills: ["JavaScript", "React", "Python", "Git", "SQL", "APIs"],
    jobs: "15,000+ jobs",
    growth: "+22%",
    salary: "$65k - $180k",
    overview: "Software engineers design, develop, test, and maintain software applications and systems. They work across various industries and technologies, from web development to mobile apps, enterprise software, and emerging technologies like AI and blockchain.",
    responsibilities: [
      "Write clean, efficient, and maintainable code",
      "Collaborate with cross-functional teams",
      "Debug and troubleshoot software issues",
      "Participate in code reviews and technical discussions",
      "Design software architecture and systems",
      "Stay updated with latest technologies and best practices"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in at least one programming language",
      "Understanding of software development principles",
      "Problem-solving and analytical skills",
      "Experience with version control systems",
      "Strong communication and teamwork abilities"
    ],
    learningPath: [
      { title: "Programming Fundamentals", duration: "4-6 weeks", progress: 100 },
      { title: "Web Development Basics", duration: "6-8 weeks", progress: 80 },
      { title: "Frontend Frameworks", duration: "8-10 weeks", progress: 60 },
      { title: "Backend Development", duration: "10-12 weeks", progress: 30 },
      { title: "Database Management", duration: "4-6 weeks", progress: 0 },
      { title: "System Design", duration: "8-10 weeks", progress: 0 }
    ],
    companies: ["Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix", "Spotify", "Airbnb"],
    locations: ["San Francisco", "New York", "Seattle", "Austin", "Boston", "London", "Berlin", "Toronto"]
  },
  "data-science": {
    title: "Data Science",
    icon: "📊",
    description: "Extract insights from data to drive business decisions and innovation",
    level: "Entry to Principal",
    skills: ["Python", "SQL", "Machine Learning", "Statistics", "R", "Tableau"],
    jobs: "8,500+ jobs",
    growth: "+31%",
    salary: "$70k - $200k",
    overview: "Data scientists analyze complex data to extract meaningful insights that drive business decisions. They combine statistical analysis, machine learning, and domain expertise to solve challenging problems and predict future trends.",
    responsibilities: [
      "Collect, clean, and analyze large datasets",
      "Build predictive models and machine learning algorithms",
      "Create data visualizations and reports",
      "Communicate findings to stakeholders",
      "Collaborate with business teams to identify opportunities",
      "Deploy and monitor data science solutions"
    ],
    requirements: [
      "Strong background in statistics and mathematics",
      "Proficiency in Python, R, or similar languages",
      "Experience with SQL and database systems",
      "Knowledge of machine learning techniques",
      "Data visualization skills",
      "Business acumen and communication skills"
    ],
    learningPath: [
      { title: "Statistics & Probability", duration: "6-8 weeks", progress: 90 },
      { title: "Python for Data Science", duration: "8-10 weeks", progress: 75 },
      { title: "Machine Learning Fundamentals", duration: "10-12 weeks", progress: 40 },
      { title: "Deep Learning", duration: "12-14 weeks", progress: 20 },
      { title: "Big Data Technologies", duration: "6-8 weeks", progress: 0 },
      { title: "MLOps & Deployment", duration: "8-10 weeks", progress: 0 }
    ],
    companies: ["Netflix", "Uber", "Airbnb", "LinkedIn", "Spotify", "Amazon", "Google", "Microsoft"],
    locations: ["San Francisco", "New York", "Boston", "Seattle", "Chicago", "London", "Amsterdam", "Singapore"]
  },
  "product-management": {
    title: "Product Management",
    icon: "🎯",
    description: "Drive product strategy and execution from ideation to launch",
    level: "Associate to VP",
    skills: ["Strategy", "Analytics", "User Research", "Leadership", "Agile", "SQL"],
    jobs: "5,200+ jobs",
    growth: "+19%",
    salary: "$80k - $220k",
    overview: "Product managers are responsible for the strategy, roadmap, and feature definition of a product or product line. They work cross-functionally with engineering, design, marketing, and sales teams to deliver products that customers love.",
    responsibilities: [
      "Define product vision and strategy",
      "Prioritize features and manage product roadmap",
      "Conduct market research and user interviews",
      "Analyze product metrics and user behavior",
      "Collaborate with engineering and design teams",
      "Communicate with stakeholders and executives"
    ],
    requirements: [
      "Bachelor's degree in business, engineering, or related field",
      "Strong analytical and problem-solving skills",
      "Experience with product management tools",
      "Understanding of software development process",
      "Excellent communication and leadership abilities",
      "Customer-focused mindset"
    ],
    learningPath: [
      { title: "Product Management Fundamentals", duration: "4-6 weeks", progress: 85 },
      { title: "User Research & Analytics", duration: "6-8 weeks", progress: 70 },
      { title: "Product Strategy & Roadmapping", duration: "6-8 weeks", progress: 50 },
      { title: "Agile & Scrum Methodology", duration: "4-6 weeks", progress: 30 },
      { title: "Data Analysis for PMs", duration: "8-10 weeks", progress: 10 },
      { title: "Product Leadership", duration: "10-12 weeks", progress: 0 }
    ],
    companies: ["Google", "Facebook", "Amazon", "Apple", "Uber", "Airbnb", "Slack", "Stripe"],
    locations: ["San Francisco", "New York", "Seattle", "Los Angeles", "Austin", "London", "Tel Aviv", "Bangalore"]
  },
  "ux-ui-design": {
    title: "UX/UI Design",
    icon: "🎨",
    description: "Create intuitive and engaging user experiences for digital products",
    level: "Junior to Principal",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Adobe XD", "Sketch"],
    jobs: "3,800+ jobs",
    growth: "+13%",
    salary: "$55k - $160k",
    overview: "UX/UI designers focus on creating user-centered designs that are both functional and aesthetically pleasing. They research user needs, create wireframes and prototypes, and collaborate with development teams to bring designs to life.",
    responsibilities: [
      "Conduct user research and usability testing",
      "Create wireframes, mockups, and prototypes",
      "Design user interfaces and interactions",
      "Develop and maintain design systems",
      "Collaborate with product and engineering teams",
      "Iterate on designs based on feedback and data"
    ],
    requirements: [
      "Portfolio demonstrating design skills",
      "Proficiency in design tools (Figma, Sketch, Adobe XD)",
      "Understanding of UX principles and methodologies",
      "Knowledge of web and mobile design patterns",
      "Strong visual design and typography skills",
      "Excellent communication and collaboration abilities"
    ],
    learningPath: [
      { title: "Design Fundamentals", duration: "4-6 weeks", progress: 95 },
      { title: "User Research Methods", duration: "6-8 weeks", progress: 80 },
      { title: "Wireframing & Prototyping", duration: "6-8 weeks", progress: 65 },
      { title: "Visual Design & Typography", duration: "8-10 weeks", progress: 45 },
      { title: "Design Systems", duration: "6-8 weeks", progress: 25 },
      { title: "Advanced Interaction Design", duration: "10-12 weeks", progress: 0 }
    ],
    companies: ["Apple", "Google", "Airbnb", "Uber", "Spotify", "Adobe", "Figma", "Dropbox"],
    locations: ["San Francisco", "New York", "Los Angeles", "Seattle", "Austin", "London", "Berlin", "Toronto"]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    icon: "🔐",
    description: "Protect organizations from digital threats and cyber attacks",
    level: "Entry to Expert",
    skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance", "SIEM", "Incident Response"],
    jobs: "4,200+ jobs",
    growth: "+35%",
    salary: "$75k - $190k",
    overview: "Cybersecurity professionals protect organizations from digital threats, ensuring the confidentiality, integrity, and availability of information systems. They analyze security risks, implement protective measures, and respond to security incidents.",
    responsibilities: [
      "Monitor networks and systems for security breaches",
      "Conduct security assessments and penetration testing",
      "Develop and implement security policies",
      "Investigate security incidents and breaches",
      "Stay updated on latest threats and vulnerabilities",
      "Train employees on security best practices"
    ],
    requirements: [
      "Knowledge of network security principles",
      "Understanding of common attack vectors",
      "Experience with security tools and frameworks",
      "Strong analytical and problem-solving skills",
      "Security certifications (CISSP, CEH, CompTIA Security+)",
      "Attention to detail and ethical mindset"
    ],
    learningPath: [
      { title: "Security Fundamentals", duration: "4-6 weeks", progress: 80 },
      { title: "Network Security", duration: "6-8 weeks", progress: 60 },
      { title: "Ethical Hacking", duration: "8-10 weeks", progress: 40 },
      { title: "Security Tools & SIEM", duration: "6-8 weeks", progress: 20 },
      { title: "Incident Response", duration: "6-8 weeks", progress: 0 },
      { title: "Compliance & Governance", duration: "4-6 weeks", progress: 0 }
    ],
    companies: ["CrowdStrike", "Palo Alto Networks", "FireEye", "Symantec", "IBM", "Microsoft", "Cisco", "Fortinet"],
    locations: ["Washington DC", "San Francisco", "New York", "Austin", "Atlanta", "London", "Tel Aviv", "Singapore"]
  },
  "devops-engineering": {
    title: "DevOps Engineering",
    icon: "⚙️",
    description: "Bridge development and operations to streamline software delivery",
    level: "Junior to Senior",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring", "Infrastructure as Code"],
    jobs: "6,800+ jobs",
    growth: "+25%",
    salary: "$70k - $175k",
    overview: "DevOps engineers work to improve collaboration between development and operations teams, automating processes and implementing practices that enable faster, more reliable software delivery.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure and deployments",
      "Monitor system performance and reliability",
      "Automate repetitive tasks and processes",
      "Implement security best practices",
      "Collaborate with development and operations teams"
    ],
    requirements: [
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Knowledge of containerization technologies",
      "Understanding of CI/CD principles",
      "Scripting and automation skills",
      "System administration experience",
      "Strong problem-solving abilities"
    ],
    learningPath: [
      { title: "Linux & System Administration", duration: "6-8 weeks", progress: 85 },
      { title: "Cloud Platforms (AWS/Azure)", duration: "8-10 weeks", progress: 70 },
      { title: "Containerization (Docker/K8s)", duration: "6-8 weeks", progress: 50 },
      { title: "CI/CD Pipeline Development", duration: "6-8 weeks", progress: 30 },
      { title: "Infrastructure as Code", duration: "6-8 weeks", progress: 15 },
      { title: "Monitoring & Observability", duration: "4-6 weeks", progress: 0 }
    ],
    companies: ["Amazon", "Google", "Microsoft", "Netflix", "Uber", "Airbnb", "Spotify", "Atlassian"],
    locations: ["Seattle", "San Francisco", "New York", "Austin", "Boston", "London", "Amsterdam", "Bangalore"]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: "📱",
    description: "Drive brand awareness and customer acquisition through digital channels",
    level: "Entry to Director",
    skills: ["SEO", "PPC", "Analytics", "Content Marketing", "Social Media", "Email Marketing"],
    jobs: "7,500+ jobs",
    growth: "+15%",
    salary: "$45k - $140k",
    overview: "Digital marketers develop and execute marketing strategies across digital channels to reach target audiences, drive engagement, and generate leads or sales for businesses.",
    responsibilities: [
      "Develop digital marketing strategies and campaigns",
      "Manage social media accounts and content",
      "Optimize websites for search engines (SEO)",
      "Run paid advertising campaigns (PPC)",
      "Analyze campaign performance and ROI",
      "Create and distribute engaging content"
    ],
    requirements: [
      "Understanding of digital marketing channels",
      "Experience with analytics tools (Google Analytics)",
      "Knowledge of SEO and SEM principles",
      "Content creation and copywriting skills",
      "Social media platform expertise",
      "Data analysis and reporting abilities"
    ],
    learningPath: [
      { title: "Digital Marketing Fundamentals", duration: "4-6 weeks", progress: 90 },
      { title: "SEO & Content Marketing", duration: "6-8 weeks", progress: 75 },
      { title: "PPC & Paid Advertising", duration: "6-8 weeks", progress: 55 },
      { title: "Social Media Marketing", duration: "4-6 weeks", progress: 35 },
      { title: "Email Marketing & Automation", duration: "4-6 weeks", progress: 15 },
      { title: "Analytics & Performance Tracking", duration: "6-8 weeks", progress: 0 }
    ],
    companies: ["Google", "Facebook", "HubSpot", "Salesforce", "Adobe", "Mailchimp", "Hootsuite", "Buffer"],
    locations: ["New York", "San Francisco", "Los Angeles", "Chicago", "Austin", "London", "Berlin", "Toronto"]
  },
  "cloud-architecture": {
    title: "Cloud Architecture",
    icon: "☁️",
    description: "Design and implement scalable cloud infrastructure solutions",
    level: "Mid to Principal",
    skills: ["AWS", "Azure", "GCP", "Microservices", "System Design", "Serverless"],
    jobs: "3,900+ jobs",
    growth: "+28%",
    salary: "$95k - $220k",
    overview: "Cloud architects design and oversee cloud computing strategies, including cloud adoption plans, application design, and cloud management and monitoring.",
    responsibilities: [
      "Design cloud infrastructure architectures",
      "Lead cloud migration projects",
      "Ensure security and compliance in cloud environments",
      "Optimize cloud costs and performance",
      "Mentor teams on cloud best practices",
      "Evaluate and select cloud technologies"
    ],
    requirements: [
      "Extensive experience with cloud platforms",
      "Strong understanding of system architecture",
      "Knowledge of security and compliance frameworks",
      "Experience with microservices and serverless",
      "Cloud certifications (AWS Solutions Architect, etc.)",
      "Leadership and communication skills"
    ],
    learningPath: [
      { title: "Cloud Computing Fundamentals", duration: "6-8 weeks", progress: 100 },
      { title: "AWS/Azure Advanced Services", duration: "10-12 weeks", progress: 80 },
      { title: "Microservices Architecture", duration: "8-10 weeks", progress: 60 },
      { title: "Security & Compliance", duration: "6-8 weeks", progress: 40 },
      { title: "Cost Optimization", duration: "4-6 weeks", progress: 20 },
      { title: "Enterprise Architecture", duration: "10-12 weeks", progress: 0 }
    ],
    companies: ["Amazon", "Microsoft", "Google", "IBM", "Oracle", "VMware", "Snowflake", "Databricks"],
    locations: ["Seattle", "San Francisco", "New York", "Austin", "Boston", "London", "Dublin", "Sydney"]
  }
};

export default function CareerDetails() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !careerData[slug]) {
    return <Navigate to="/explore" replace />;
  }

  const career = careerData[slug];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Career Paths
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-6xl">{career.icon}</span>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{career.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{career.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {career.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Available Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{career.jobs}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Growth Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{career.growth}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Salary Range
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{career.salary}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <Target className="h-4 w-4 mr-2" />
                  Experience Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{career.level}</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="path">Learning Path</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>About This Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{career.overview}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Key Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {career.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="justify-center">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {career.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {career.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="path" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Recommended Learning Path
                </CardTitle>
                <CardDescription>
                  Follow this structured path to build the skills needed for {career.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {career.learningPath.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{step.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {step.duration}
                        </div>
                      </div>
                      {step.progress !== undefined && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{step.progress}%</span>
                          </div>
                          <Progress value={step.progress} className="h-2" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Hiring Companies</CardTitle>
                <CardDescription>
                  Companies actively hiring for {career.title} positions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {career.companies.map((company, index) => (
                    <div key={index} className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
                      <div className="font-medium">{company}</div>
                      <div className="text-sm text-muted-foreground mt-1">Multiple positions</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="locations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Popular Locations
                </CardTitle>
                <CardDescription>
                  Cities with high demand for {career.title} professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {career.locations.map((location, index) => (
                    <div key={index} className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
                      <div className="font-medium">{location}</div>
                      <div className="text-sm text-muted-foreground mt-1">High demand</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start Your Journey?</CardTitle>
              <CardDescription className="text-lg">
                Take the next step in your {career.title} career path
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment">
                  <Button size="lg" className="min-w-48">
                    Take Skills Assessment
                  </Button>
                </Link>
                <Link to="/learning">
                  <Button variant="outline" size="lg" className="min-w-48">
                    View Learning Paths
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
