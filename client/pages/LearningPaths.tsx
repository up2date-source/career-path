import PlaceholderPage from "@/components/PlaceholderPage";

export default function LearningPaths() {
  const comingSoonFeatures = [
    "Curated learning paths for 50+ career tracks",
    "Interactive coding challenges and projects",
    "Video tutorials from industry experts",
    "Hands-on labs and real-world simulations",
    "Progress tracking with achievement badges",
    "Adaptive learning that adjusts to your pace",
    "Community forums and peer collaboration",
    "Certificate programs recognized by top companies",
    "1-on-1 mentorship opportunities"
  ];

  return (
    <PlaceholderPage
      title="Learning Paths"
      description="Follow structured learning journeys designed by industry experts. Build the skills you need with hands-on projects, expert guidance, and personalized learning experiences."
      comingSoonFeatures={comingSoonFeatures}
    />
  );
}
