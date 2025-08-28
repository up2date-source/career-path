import PlaceholderPage from "@/components/PlaceholderPage";

export default function CareerExplorer() {
  const comingSoonFeatures = [
    "AI-powered career matching based on your skills and interests",
    "Interactive career path visualizations and roadmaps",
    "Salary insights and job market trends by location",
    "Skills gap analysis for your target career",
    "Connect with professionals in your desired field",
    "Personalized career recommendations",
    "Industry growth projections and emerging roles"
  ];

  return (
    <PlaceholderPage
      title="Career Explorer"
      description="Discover new career opportunities that align with your skills, interests, and goals. Our AI-powered platform analyzes thousands of career paths to find your perfect match."
      comingSoonFeatures={comingSoonFeatures}
    />
  );
}
