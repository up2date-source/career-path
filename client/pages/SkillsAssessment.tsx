import PlaceholderPage from "@/components/PlaceholderPage";

export default function SkillsAssessment() {
  const comingSoonFeatures = [
    "Comprehensive technical and soft skills assessments",
    "Real-world scenario-based evaluations",
    "Instant feedback and detailed skill reports",
    "Benchmark your skills against industry standards",
    "Personalized learning recommendations based on results",
    "Track your skill development progress over time",
    "Industry-specific certification pathways",
    "Peer comparison and ranking systems"
  ];

  return (
    <PlaceholderPage
      title="Skills Assessment"
      description="Evaluate your current skills and identify areas for improvement with our comprehensive assessment platform. Get detailed insights into your strengths and development opportunities."
      comingSoonFeatures={comingSoonFeatures}
    />
  );
}
