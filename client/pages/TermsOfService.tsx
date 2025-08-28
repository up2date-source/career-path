import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Shield, AlertTriangle } from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: `By accessing and using CareerPath's website, mobile application, and related services (collectively, the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these Terms of Service, do not use or access the Service.`
    },
    {
      id: "description",
      title: "2. Description of Service",
      content: `CareerPath provides an online platform that offers career guidance, skills assessment, learning paths, and job market insights. Our Service includes but is not limited to:
      
      • AI-powered career recommendations and matching
      • Skills assessments and gap analysis
      • Curated learning paths and educational resources
      • Job market data and salary information
      • Career coaching and mentorship connections
      • Professional networking opportunities`
    },
    {
      id: "eligibility",
      title: "3. User Eligibility",
      content: `You must be at least 13 years of age to use this Service. Users between the ages of 13 and 18 must have parental or guardian consent. By using this Service, you represent and warrant that you have the legal capacity to enter into these Terms.`
    },
    {
      id: "account",
      title: "4. User Accounts",
      content: `To access certain features of the Service, you must register for an account. You agree to:
      
      • Provide accurate, current, and complete information during registration
      • Maintain and promptly update your account information
      • Maintain the security of your password and account
      • Accept responsibility for all activities under your account
      • Notify us immediately of any unauthorized access or security breach`
    },
    {
      id: "acceptable-use",
      title: "5. Acceptable Use Policy",
      content: `You agree not to use the Service to:
      
      • Violate any applicable laws or regulations
      • Infringe upon intellectual property rights
      • Upload malicious code or attempt to disrupt the Service
      • Harass, abuse, or harm other users
      • Share false, misleading, or discriminatory information
      • Attempt to gain unauthorized access to our systems
      • Use the Service for commercial purposes without authorization
      • Create multiple accounts to circumvent restrictions`
    },
    {
      id: "content",
      title: "6. User Content",
      content: `You retain ownership of content you submit to the Service. By submitting content, you grant CareerPath a non-exclusive, worldwide, royalty-free license to use, modify, publicly display, and distribute your content in connection with the Service. You represent that you have all necessary rights to grant this license.`
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property",
      content: `The Service and its original content, features, and functionality are owned by CareerPath and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of our content without explicit written permission.`
    },
    {
      id: "privacy",
      title: "8. Privacy",
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to the collection and use of your information as outlined in our Privacy Policy.`
    },
    {
      id: "disclaimers",
      title: "9. Disclaimers",
      content: `The Service is provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:
      
      • Merchantability and fitness for a particular purpose
      • Accuracy, reliability, or completeness of information
      • Uninterrupted or error-free operation
      • Career outcomes or job placement guarantees
      
      Career guidance and recommendations are for informational purposes only and should not be considered professional advice.`
    },
    {
      id: "limitation",
      title: "10. Limitation of Liability",
      content: `To the maximum extent permitted by law, CareerPath shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of the Service.`
    },
    {
      id: "indemnification",
      title: "11. Indemnification",
      content: `You agree to indemnify, defend, and hold harmless CareerPath and its affiliates from any claims, damages, losses, or expenses arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.`
    },
    {
      id: "termination",
      title: "12. Termination",
      content: `We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or the Service. You may terminate your account at any time by contacting us or using account deletion features.`
    },
    {
      id: "modifications",
      title: "13. Modifications to Terms",
      content: `We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.`
    },
    {
      id: "governing-law",
      title: "14. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.`
    },
    {
      id: "contact",
      title: "15. Contact Information",
      content: `If you have any questions about these Terms of Service, please contact us at:
      
      Email: legal@careerpath.com
      Address: 123 Innovation Drive, Suite 400, San Francisco, CA 94105
      Phone: +1 (555) 123-4567`
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
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using CareerPath. These terms govern your access to and use of our services.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                    By using CareerPath, you agree to these terms. If you don't agree with any part of these terms, 
                    please don't use our service. These terms may change from time to time, and your continued use 
                    constitutes acceptance of any changes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms Content */}
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

      {/* Footer Notice */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're here to help clarify any questions you may have about our Terms of Service. 
                Our legal team is available to discuss these terms and how they apply to your use of CareerPath.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Contact Legal Team
                </a>
                <a href="/privacy" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  View Privacy Policy
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
