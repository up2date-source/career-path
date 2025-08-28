import PlaceholderPage from "@/components/PlaceholderPage";

export default function Resources() {
  const comingSoonFeatures = [
    "Comprehensive career guides for every industry",
    "Resume and cover letter templates",
    "Interview preparation materials and mock interviews",
    "Salary negotiation guides and market data",
    "Networking strategies and professional development tips",
    "Industry reports and job market analysis",
    "Success stories and career transition case studies",
    "Professional development webinars and workshops",
    "Career coaching and mentorship resources"
  ];

  return (
    <PlaceholderPage
      title="Career Resources"
      description="Access a comprehensive library of career development resources, guides, and tools to support your professional growth at every stage of your journey."
      comingSoonFeatures={comingSoonFeatures}
    />
  );
}
