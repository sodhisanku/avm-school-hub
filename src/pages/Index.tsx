
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Calendar, Bell, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  const announcements = [
    { date: "Dec 15, 2024", title: "Winter Break Holiday Notice", type: "Holiday" },
    { date: "Dec 10, 2024", title: "Annual Sports Day 2024", type: "Event" },
    { date: "Dec 5, 2024", title: "Parent-Teacher Meeting", type: "Meeting" },
    { date: "Nov 28, 2024", title: "Mid-term Examination Results", type: "Academic" },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum aligned with state education standards"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Qualified and dedicated teachers committed to student success"
    },
    {
      icon: Award,
      title: "Excellence Awards",
      description: "Recognized for outstanding academic and co-curricular achievements"
    },
    {
      icon: Calendar,
      title: "Holistic Development",
      description: "Focus on academics, sports, arts, and character building"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Astha Vidya Mandir
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Nurturing Young Minds • Building Future Leaders • Excellence in Education Since 1985
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/admission">Apply for Admission</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Astha Vidya Mandir?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing exceptional education that prepares students for success in life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements & Quick Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Announcements */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-blue-900" />
                    <CardTitle>Latest Announcements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-blue-900 text-white px-2 py-1 rounded text-xs font-semibold min-w-max">
                          {announcement.type}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{announcement.title}</h4>
                          <p className="text-sm text-gray-600">{announcement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to="/news">View All Announcements</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-900" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-sm text-gray-600">123 Education Street, Learning City</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-900" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-gray-600">+91-XXXX-XXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-900" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-600">info@asthavidyamandir.edu.in</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Principal's Message */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Principal's Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    "Education is the most powerful weapon which you can use to change the world. At Astha Vidya Mandir, we are committed to nurturing every child's potential."
                  </p>
                  <p className="text-sm font-semibold">- Dr. Rajesh Kumar</p>
                  <p className="text-xs text-gray-500">Principal</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1200+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85+</div>
              <div className="text-blue-200">Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Index;
