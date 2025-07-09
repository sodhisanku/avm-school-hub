
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Users, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Astha Vidya Mandir",
        "123 Education Street",
        "Learning City, State 123456",
        "India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91-XXXX-XXXXXX",
        "Principal: +91-XXXX-XXXXXX",
        "Admission: +91-XXXX-XXXXXX",
        "Emergency: +91-XXXX-XXXXXX"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@asthavidyamandir.edu.in",
        "Principal: principal@asthavidyamandir.edu.in",
        "Admissions: admissions@asthavidyamandir.edu.in",
        "Academics: academics@asthavidyamandir.edu.in"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
        "School Hours: 7:30 AM - 2:30 PM"
      ]
    }
  ];

  const departments = [
    { name: "General Inquiry", email: "info@asthavidyamandir.edu.in" },
    { name: "Admissions", email: "admissions@asthavidyamandir.edu.in" },
    { name: "Academics", email: "academics@asthavidyamandir.edu.in" },
    { name: "Administration", email: "admin@asthavidyamandir.edu.in" },
    { name: "Finance", email: "finance@asthavidyamandir.edu.in" },
    { name: "Student Affairs", email: "students@asthavidyamandir.edu.in" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch with us for any inquiries, support, or information about our school
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="h-full text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <info.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-6 w-6 text-blue-900" />
                    <div>
                      <CardTitle className="text-2xl">Send us a Message</CardTitle>
                      <CardDescription>We'll get back to you as soon as possible</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept, index) => (
                          <SelectItem key={index} value={dept.name.toLowerCase()}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Brief subject of your message" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details of your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">123 Education Street, Learning City</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Quick Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">For Urgent Matters</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Call our main office during business hours for immediate assistance
                    </p>
                    <Button size="sm" className="bg-blue-900 hover:bg-blue-800">
                      Call Now: +91-XXXX-XXXXXX
                    </Button>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">WhatsApp Support</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Get quick answers to your questions via WhatsApp
                    </p>
                    <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                      Chat on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to specific departments for specialized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-900" />
                  </div>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{dept.email}</p>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50">
                    Contact Department
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our Campus</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We welcome you to visit our campus and see our facilities firsthand. 
              Schedule a tour to experience the Astha Vidya Mandir difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-900 hover:bg-blue-50">
                Schedule a Tour
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
