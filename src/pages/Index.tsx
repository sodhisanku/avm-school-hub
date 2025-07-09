import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Calendar, Bell, MapPin, Phone, Mail, GraduationCap } from "lucide-react";
import schoolHeroBg from "@/assets/school-hero-bg.jpg";

const Index = () => {
  const announcements = [
    { date: "Dec 15, 2024", title: "शीतकालीन अवकाश सूचना", type: "Holiday" },
    { date: "Dec 10, 2024", title: "वार्षिक खेल दिवस 2024", type: "Event" },
    { date: "Dec 5, 2024", title: "अभिभावक-शिक्षक मिलन", type: "Meeting" },
    { date: "Nov 28, 2024", title: "मध्यावधि परीक्षा परिणाम", type: "Academic" },
  ];

  const quickFeatures = [
    {
      icon: Users,
      title: "Students",
      description: "1200+ छात्र",
      color: "bg-school-primary"
    },
    {
      icon: BookOpen,
      title: "Academics",
      description: "गुणवत्तापूर्ण शिक्षा",
      color: "bg-school-primary"
    },
    {
      icon: GraduationCap,
      title: "Excellence",
      description: "40 वर्षों की उत्कृष्टता",
      color: "bg-school-primary"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "95% सफलता दर",
      color: "bg-school-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center hero-bg-animate"
        style={{
          backgroundImage: `linear-gradient(rgba(72, 61, 139, 0.8), rgba(72, 61, 139, 0.9)), url(${schoolHeroBg})`
        }}
      >
        <div className="absolute inset-0 bg-school-bg-overlay/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-school-text-light mb-6">
              आस्था विद्या मंदिर में आपका स्वागत है
            </h1>
            <p className="text-xl md:text-2xl text-school-text-light/90 mb-8">
              Nurturing Young Minds • Building Future Leaders • Excellence in Education Since 1985
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-school-secondary hover:bg-school-secondary/90 text-primary font-semibold px-8 py-4 text-lg">
                <Link to="/admission">Apply For Admission</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-school-text-light text-school-text-light hover:bg-school-text-light hover:text-school-primary px-8 py-4 text-lg">
                <Link to="/about">Know More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Icons */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`mx-auto w-24 h-24 rounded-full ${feature.color} flex items-center justify-center mb-4 hover:scale-105 transition-transform cursor-pointer`}>
                  <feature.icon className="h-12 w-12 text-school-text-light" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements & Quick Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Announcements */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-school-primary" />
                    <CardTitle className="text-xl">नवीनतम घोषणाएं</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                        <div className="bg-school-primary text-school-text-light px-3 py-1 rounded-full text-xs font-semibold min-w-max">
                          {announcement.type}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{announcement.title}</h4>
                          <p className="text-sm text-muted-foreground">{announcement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to="/news">सभी घोषणाएं देखें</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">त्वरित संपर्क</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-school-primary" />
                    <div>
                      <p className="font-semibold">पता</p>
                      <p className="text-sm text-muted-foreground">123 शिक्षा स्ट्रीट, लर्निंग सिटी</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-school-primary" />
                    <div>
                      <p className="font-semibold">फोन</p>
                      <p className="text-sm text-muted-foreground">+91-9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-school-primary" />
                    <div>
                      <p className="font-semibold">ईमेल</p>
                      <p className="text-sm text-muted-foreground">info@asthavidyamandir.edu.in</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-school-primary hover:bg-school-primary-dark">
                    <Link to="/contact">संपर्क करें</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Principal's Message */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl">प्रधानाचार्य का संदेश</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    "शिक्षा सबसे शक्तिशाली हथियार है जिसका उपयोग आप दुनिया को बदलने के लिए कर सकते हैं। आस्था विद्या मंदिर में, हम हर बच्चे की क्षमता को पोषित करने के लिए प्रतिबद्ध हैं।"
                  </p>
                  <p className="text-sm font-semibold">- डॉ. राजेश कुमार</p>
                  <p className="text-xs text-muted-foreground">प्रधानाचार्य</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-school-primary text-school-text-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">1200+</div>
              <div className="text-school-text-light/80">छात्र</div>
            </div>
            <div className="hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">85+</div>
              <div className="text-school-text-light/80">शिक्षक</div>
            </div>
            <div className="hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-school-text-light/80">वर्षों की उत्कृष्टता</div>
            </div>
            <div className="hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-school-text-light/80">सफलता दर</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;