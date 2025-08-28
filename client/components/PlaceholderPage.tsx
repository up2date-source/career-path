import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoonFeatures?: string[];
}

export default function PlaceholderPage({ 
  title, 
  description, 
  comingSoonFeatures = []
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-16 px-4">
        <div className="text-center space-y-8">
          <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Construction className="h-12 w-12 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {comingSoonFeatures.length > 0 && (
            <Card className="max-w-2xl mx-auto text-left">
              <CardHeader>
                <CardTitle className="text-lg">Coming Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {comingSoonFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline">
              Get Notified When Ready
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
