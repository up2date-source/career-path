import { useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon, Mail, Phone, ShieldCheck, User } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  preferredMode: z.enum(["video", "audio", "chat"]),
  preferredDate: z.string().min(1, "Please select a date"),
  concerns: z.string().min(10, "Please describe your concerns (min 10 chars)"),
});

export default function ConsultPsychiatrist() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const parsed = schema.safeParse({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      preferredMode: data.preferredMode,
      preferredDate: data.preferredDate,
      concerns: data.concerns,
    });

    if (!parsed.success) {
      setError(parsed.error.errors[0]?.message || "Please check your inputs");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.message || "Submission failed");
      }
      setSuccessId(json.id || "");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Consult with the Best Psychiatrists</h1>
          <p className="text-muted-foreground mt-2">
            Confidential, secure, and professional mental health consultations. Choose your preferred mode and time.
          </p>
          <div className="flex gap-2 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> HIPAA-friendly</Badge>
            <Badge variant="secondary" className="flex items-center gap-1"><Mail className="h-3 w-3" /> Email confirmation</Badge>
            <Badge variant="secondary" className="flex items-center gap-1"><Phone className="h-3 w-3" /> 24/7 Support</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Book a Consultation</CardTitle>
              <CardDescription>Fill in your details to request an appointment</CardDescription>
            </CardHeader>
            <CardContent>
              {successId ? (
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold">Request Received ✅</h3>
                  <p className="text-muted-foreground mt-2">
                    Your consultation request has been submitted. Our team will contact you shortly to confirm your appointment.
                  </p>
                  <p className="text-sm mt-4">Reference ID: <span className="font-mono">{successId}</span></p>
                  <div className="mt-6 flex gap-3">
                    <Button onClick={() => navigate('/goals')} variant="outline">Track Goals</Button>
                    <Button onClick={() => setSuccessId(null)}>Book Another</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                        <Input id="fullName" name="fullName" className="pl-9" placeholder="John Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                        <Input id="email" name="email" type="email" className="pl-9" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <div className="relative">
                        <Phone className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                        <Input id="phone" name="phone" className="pl-9" placeholder="+1 555 123 4567" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <div className="relative">
                        <CalendarIcon className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                        <Input id="preferredDate" name="preferredDate" type="date" className="pl-9" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Mode</Label>
                    <RadioGroup className="grid grid-cols-3 gap-4" defaultValue="video" name="preferredMode">
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="video" id="video" />
                        <Label htmlFor="video">Video</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="audio" id="audio" />
                        <Label htmlFor="audio">Audio</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="chat" id="chat" />
                        <Label htmlFor="chat">Chat</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="concerns">Describe Your Concerns</Label>
                    <Textarea id="concerns" name="concerns" rows={5} placeholder="Briefly describe what's on your mind..." />
                  </div>

                  {error && <p className="text-red-600 text-sm">{error}</p>}

                  <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Consultation Request"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose Our Psychiatrists?</CardTitle>
              <CardDescription>Top-rated professionals with compassionate care</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Board-certified psychiatrists with 10+ years experience</li>
                <li>Confidential and secure consultations</li>
                <li>Flexible scheduling and multiple consultation modes</li>
                <li>Holistic treatment plans tailored to your needs</li>
                <li>Follow-up support and progress tracking</li>
              </ul>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-1">Privacy & Security</h4>
                <p>Your information is kept strictly confidential and handled securely.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
