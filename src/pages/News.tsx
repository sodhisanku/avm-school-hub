
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Bell, FileText, Award, Users } from "lucide-react";

const News = () => {
  const announcements = [
    {
      id: 1,
      title: "Winter Break Holiday Notice",
      date: "December 15, 2024",
      time: "10:00 AM",
      type: "Holiday",
      priority: "high",
      content: "School will remain closed from December 22, 2024 to January 2, 2025 for winter break. Classes will resume on January 3, 2025.",
      category: "Academic"
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting Scheduled",
      date: "December 10, 2024",
      time: "2:00 PM",
      type: "Meeting",
      priority: "medium",
      content: "Parent-Teacher meeting for all grades will be held on December 20, 2024. Please check the detailed schedule on the notice board.",
      category: "Academic"
    },
    {
      id: 3,
      title: "Annual Sports Day Results",
      date: "December 8, 2024",
      time: "4:00 PM",
      type: "Event",
      priority: "low",
      content: "Congratulations to all participants of Annual Sports Day 2024. Blue House emerged as the overall champion.",
      category: "Sports"
    },
    {
      id: 4,
      title: "Mid-term Examination Results Published",
      date: "November 28, 2024",
      time: "11:00 AM",
      type: "Academic",
      priority: "high",
      content: "Mid-term examination results for all grades are now available. Parents can collect report cards from class teachers.",
      category: "Academic"
    },
    {
      id: 5,
      title: "New Computer Lab Inauguration",
      date: "November 20, 2024",
      time: "9:00 AM",
      type: "Event",
      priority: "medium",
      content: "We are excited to announce the inauguration of our new state-of-the-art computer laboratory with 40 new computers.",
      category: "Infrastructure"
    },
    {
      id: 6,
      title: "Science Fair Registration Open",
      date: "November 15, 2024",
      time: "1:00 PM",
      type: "Academic",
      priority: "medium",
      content: "Registration for Inter-school Science Fair 2025 is now open. Interested students can register with their science teachers.",
      category: "Academic"
    }
  ];

  const events = [
    {
      title: "Cultural Week 2025",
      date: "January 15-20, 2025",
      description: "Week-long cultural activities including dance, music, and drama competitions",
      icon: Users
    },
    {
      title: "Mathematics Olympiad",
      date: "February 5, 2025",
      description: "National level mathematics competition for grades 6-12",
      icon: Award
    },
    {
      title: "Annual Day Celebration",
      date: "March 10, 2025",
      description: "Grand annual day celebration with cultural performances and prize distribution",
      icon: Users
    },
    {
      title: "Science Exhibition",
      date: "March 25, 2025",
      description: "Student science project exhibition and competition",
      icon: Award
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Holiday": return <Calendar className="h-4 w-4" />;
      case "Meeting": return <Users className="h-4 w-4" />;
      case "Event": return <Award className="h-4 w-4" />;
      case "Academic": return <FileText className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Announcements</h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest news, announcements, and upcoming events
            </p>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Announcements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important updates and notices for students, parents, and staff
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        {getTypeIcon(announcement.type)}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-800">
                          {announcement.title}
                        </CardTitle>
                        <CardDescription className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4" />
                          <span>{announcement.date}</span>
                          <Clock className="h-4 w-4 ml-2" />
                          <span>{announcement.time}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={getPriorityColor(announcement.priority)}>
                      {announcement.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{announcement.content}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {announcement.category}
                    </Badge>
                    <Badge variant="secondary">
                      {announcement.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              View All Announcements
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendars for these exciting upcoming events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <event.icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-blue-600 font-semibold">{event.date}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Digital Notice Board
              </h2>
              <p className="text-lg text-gray-600">
                Quick updates and important notices
              </p>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Bell className="h-6 w-6 text-blue-900" />
                  <CardTitle className="text-xl text-blue-900">Important Notices</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Fee Payment Reminder</h4>
                      <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Quarterly fees for the current term are due by December 20, 2024. 
                      Please ensure timely payment to avoid late fee charges.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Library Book Return</h4>
                      <Badge className="bg-yellow-100 text-yellow-800">Reminder</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">
                      All borrowed library books must be returned before the winter break. 
                      Fine will be charged for overdue books.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Uniform Guidelines</h4>
                      <Badge className="bg-green-100 text-green-800">Info</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Winter uniform is mandatory from December 1st. Please ensure students 
                      are properly dressed according to the uniform policy.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Health Checkup Camp</h4>
                      <Badge className="bg-blue-100 text-blue-800">Event</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Free health checkup camp for all students will be conducted on 
                      December 18, 2024, in association with City General Hospital.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive important updates and announcements directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-md text-gray-800"
              />
              <Button className="bg-white text-blue-900 hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
