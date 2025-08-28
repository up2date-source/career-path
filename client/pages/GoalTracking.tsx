import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, TrendingUp, Clock, CheckCircle, Plus, Calendar, BarChart3 } from "lucide-react";

export default function GoalTracking() {
  const currentGoals = [
    {
      id: 1,
      title: "Complete JavaScript Fundamentals",
      category: "Technical Skills",
      progress: 75,
      deadline: "Dec 31, 2024",
      status: "In Progress",
      milestones: ["Variables & Functions", "DOM Manipulation", "Async Programming", "ES6+ Features"]
    },
    {
      id: 2,
      title: "Build Portfolio Website",
      category: "Projects",
      progress: 40,
      deadline: "Jan 15, 2025",
      status: "In Progress",
      milestones: ["Design Mockups", "Frontend Development", "Content Creation", "Deployment"]
    },
    {
      id: 3,
      title: "Network with 20 Industry Professionals",
      category: "Professional Network",
      progress: 60,
      deadline: "Feb 28, 2025",
      status: "In Progress",
      milestones: ["LinkedIn Connections", "Industry Events", "Informational Interviews", "Mentorship"]
    }
  ];

  const completedGoals = [
    {
      id: 4,
      title: "Complete React Basics Course",
      category: "Technical Skills",
      progress: 100,
      completedDate: "Nov 15, 2024",
      status: "Completed"
    },
    {
      id: 5,
      title: "Update Resume and LinkedIn Profile",
      category: "Professional Branding",
      progress: 100,
      completedDate: "Nov 10, 2024",
      status: "Completed"
    }
  ];

  const achievements = [
    { title: "First Course Completed", icon: "🎓", date: "Oct 2024" },
    { title: "Portfolio Published", icon: "🚀", date: "Nov 2024" },
    { title: "5 Skills Mastered", icon: "⭐", date: "Nov 2024" },
    { title: "Network Builder", icon: "🤝", date: "Dec 2024" }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Goal Tracking
              </h1>
              <p className="text-muted-foreground mt-2">
                Track your career progress and achieve your professional milestones
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add New Goal
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +1 this month
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <div className="text-xs text-green-600 flex items-center">
                <CheckCircle className="h-3 w-3 mr-1" />
                2 this month
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">58%</div>
              <div className="text-xs text-blue-600 flex items-center">
                <BarChart3 className="h-3 w-3 mr-1" />
                +15% this week
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Days Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <div className="text-xs text-purple-600 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                This month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current Goals</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            <div className="grid gap-6">
              {currentGoals.map((goal) => (
                <Card key={goal.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{goal.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <Badge variant="outline">{goal.category}</Badge>
                          <span className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            Due: {goal.deadline}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{goal.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Milestones</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {goal.milestones.map((milestone, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className={`h-4 w-4 ${index < Math.floor(goal.progress / 25) ? 'text-green-500' : 'text-gray-300'}`} />
                            <span className={index < Math.floor(goal.progress / 25) ? 'line-through text-muted-foreground' : ''}>
                              {milestone}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <div className="grid gap-6">
              {completedGoals.map((goal) => (
                <Card key={goal.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          {goal.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <Badge variant="outline">{goal.category}</Badge>
                          <span className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            Completed: {goal.completedDate}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {goal.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={100} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.date}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <Card className="text-center py-8">
              <CardContent>
                <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Keep Going!</h3>
                <p className="text-muted-foreground">
                  Complete more goals to unlock new achievements and track your progress.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
