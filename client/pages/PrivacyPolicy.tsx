import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Shield, Eye, Lock, Users, Globe } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "December 15, 2024";

  const dataTypes = [
    {
      icon: <Users className="h-5 w-5" />,
      category: "Personal Information",
      description: "Name, email, phone number, profile picture, career level, location"
    },
    {
      icon: <Eye className="h-5 w-5" />,
      category: "Usage Data",
      description: "How you interact with our platform, assessment results, learning progress"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      category: "Technical Data", 
      description: "IP address, browser type, device information, cookies, session data"
    },
    {
      icon: <Lock className="h-5 w-5" />,
      category: "Professional Data",
      description: "Resume, work history, skills, career goals, assessment results"
    }
  ];

  const sections = [
    {
      id: "overview",
      title: "1. Overview",
      content: `CareerPath is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our career guidance platform, website, and mobile applications.

This policy applies to all users of CareerPath services and covers both personal and professional information you provide or that we collect during your use of our platform.`
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: `We collect information in several ways:

Account Information:
• Name, email address, phone number
• Profile picture and professional headshot
• Career level, industry, and location
• Educational background and work history

Assessment and Platform Data:
• Skills assessment results and scores
• Learning path progress and achievements
• Career preferences and goals
• Resume and portfolio uploads
• Job search and application history

Technical Information:
• IP address and device identifiers
• Browser type, operating system, and version
• Usage patterns and navigation data
• Cookies and similar tracking technologies
• Location data (if permitted)

Communications:
• Messages sent through our platform
• Customer support interactions
• Survey responses and feedback`
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: `We use your information to:

Provide Our Services:
• Deliver personalized career recommendations
• Conduct skills assessments and provide results
• Suggest relevant learning paths and resources
• Connect you with mentors and career opportunities
• Provide customer support and assistance

Improve Our Platform:
• Analyze usage patterns to enhance user experience
• Develop new features and functionality
• Conduct research on career trends and outcomes
• Perform analytics and generate insights

Communications:
• Send important service notifications
• Provide career guidance and tips
• Share relevant job opportunities
• Send marketing communications (with consent)

Legal and Safety:
• Comply with legal obligations
• Protect against fraud and abuse
• Enforce our terms of service
• Resolve disputes and legal claims`
    },
    {
      id: "sharing",
      title: "4. Information Sharing and Disclosure",
      content: `We may share your information in the following circumstances:

With Your Consent:
• When you explicitly authorize us to share information
• For specific services you request (job applications, mentorship)

Service Providers:
• Third-party vendors who provide technical infrastructure
• Analytics providers who help us improve our service
• Payment processors for subscription services
• Email and communication service providers

Business Transfers:
• In connection with mergers, acquisitions, or sale of assets
• During corporate restructuring or bankruptcy proceedings

Legal Requirements:
• To comply with applicable laws and regulations
• In response to valid legal process or government requests
• To protect our rights, property, or safety
• To prevent fraud or illegal activities

Aggregated Data:
• Anonymous, aggregated data for research and industry reports
• Career trends and market insights (no personal identification)`
    },
    {
      id: "data-security",
      title: "5. Data Security",
      content: `We implement comprehensive security measures to protect your information:

Technical Safeguards:
• Encryption of data in transit and at rest
• Secure servers and network infrastructure
• Regular security audits and vulnerability assessments
• Multi-factor authentication for admin access

Access Controls:
• Strict employee access controls and training
• Need-to-know basis for data access
• Regular review of access permissions
• Background checks for personnel with data access

Monitoring and Response:
• 24/7 security monitoring and threat detection
• Incident response procedures
• Regular security updates and patches
• Third-party security certifications and compliance`
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      content: `We retain your information for as long as necessary to provide our services and comply with legal obligations:

Active Accounts:
• Personal and professional data retained while account is active
• Assessment results and learning progress maintained for continuity
• Communication history preserved for support purposes

Inactive Accounts:
• Data retained for up to 3 years after account closure
• Some data may be retained longer for legal compliance
• You can request earlier deletion of personal data

Legal Requirements:
• Financial records retained per regulatory requirements
• Legal dispute-related data retained until resolution
• Certain data retained for fraud prevention purposes`
    },
    {
      id: "your-rights",
      title: "7. Your Privacy Rights",
      content: `You have the following rights regarding your personal information:

Access and Portability:
• Request a copy of your personal data
• Export your assessment results and learning history
• Download your professional profile and resume data

Correction and Updates:
• Update your personal and professional information
• Correct inaccurate or incomplete data
• Request verification of data accuracy

Deletion:
• Request deletion of your personal data
• Close your account and remove profile information
• Opt-out of marketing communications

Restriction and Objection:
• Limit how we process your data
• Object to certain uses of your information
• Withdraw consent for optional data processing

California Residents:
• Additional rights under the California Consumer Privacy Act (CCPA)
• Right to know what information is collected and shared
• Right to delete personal information
• Right to opt-out of sale of personal information`
    },
    {
      id: "cookies",
      title: "8. Cookies and Tracking",
      content: `We use cookies and similar technologies to enhance your experience:

Essential Cookies:
• Required for basic platform functionality
• Authentication and security features
• Session management and preferences

Analytics Cookies:
• Usage statistics and performance monitoring
• User behavior analysis for improvements
• A/B testing for feature optimization

Marketing Cookies:
• Personalized content and recommendations
• Targeted advertising (with consent)
• Social media integration features

Your Choices:
• Browser settings to control cookies
• Opt-out options for non-essential cookies
• Third-party opt-out tools and services`
    },
    {
      id: "international",
      title: "9. International Data Transfers",
      content: `CareerPath operates globally and may transfer your data internationally:

Data Transfer Safeguards:
• Adequate protection standards for international transfers
• Standard contractual clauses with service providers
• Compliance with applicable data protection laws

Regional Compliance:
• GDPR compliance for European users
• CCPA compliance for California residents
• Other regional privacy law compliance as applicable

Your Rights:
• Information about where your data is processed
• Safeguards in place for international transfers
• Right to object to certain international transfers`
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      content: `CareerPath is not intended for children under 13 years of age:

Age Restrictions:
• Users must be at least 13 years old
• Users 13-17 require parental consent
• Special protections for underage users

Parental Rights:
• Parents can review their child's information
• Request deletion of child's data
• Control privacy settings for underage accounts

If we discover we have collected information from a child under 13 without proper consent, we will delete it immediately.`
    },
    {
      id: "changes",
      title: "11. Changes to This Privacy Policy",
      content: `We may update this Privacy Policy periodically:

Notification of Changes:
• Email notification for material changes
• Prominent notice on our platform
• Updated effective date clearly displayed

Your Choices:
• Continued use constitutes acceptance of changes
• Right to discontinue service if you disagree
• Access to previous versions of the policy`
    },
    {
      id: "contact",
      title: "12. Contact Information",
      content: `For privacy-related questions or requests, contact us at:

Privacy Team:
• Email: privacy@careerpath.com
• Phone: +1 (555) 123-4567
• Address: 123 Innovation Drive, Suite 400, San Francisco, CA 94105

Data Protection Officer:
• Email: dpo@careerpath.com
• Response time: Within 30 days for most requests

You can also submit privacy requests through your account settings or our online contact form.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 flex items-center gap-2 w-fit mx-auto">
            <Calendar className="h-3 w-3" />
            Last updated: {lastUpdated}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information 
            when you use CareerPath.
          </p>
        </div>
      </section>

      {/* Data Types Overview */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Information We Handle</h2>
            <p className="text-muted-foreground">
              Understanding the types of data we collect and why
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {type.icon}
                  </div>
                  <CardTitle className="text-lg">{type.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={section.id} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </CardContent>
                {index < sections.length - 1 && <Separator className="mx-6" />}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Privacy Questions or Concerns?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our privacy team is here to help. We're committed to transparency and will respond 
                to your privacy-related questions and requests promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Contact Privacy Team
                </a>
                <a href="/terms" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  View Terms of Service
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
