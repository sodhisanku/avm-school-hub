
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, BookOpen, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Astha Vidya Mandir</h1>
            <p className="text-xl text-blue-100">
              Established in 1985, we have been a cornerstone of quality education, 
              shaping young minds and building future leaders for nearly four decades.
            </p>
          </div>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Astha Vidya Mandir was founded in 1985 with a simple yet powerful vision: to provide 
                quality education that nurtures not just academic excellence but also character, 
                creativity, and critical thinking skills.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have grown from a small institution to one of the most respected 
                schools in the region, consistently maintaining our commitment to educational excellence 
                and holistic development of our students.
              </p>
              <p className="text-gray-600">
                Today, we serve over 1,200 students from kindergarten through grade 12, with a 
                dedicated faculty of 85+ qualified teachers who are passionate about education.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Established:</span>
                  <span>1985</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Total Students:</span>
                  <span>1,200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Faculty Members:</span>
                  <span>85+</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Classes:</span>
                  <span>KG to Grade 12</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Medium:</span>
                  <span>English & Hindi</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Board:</span>
                  <span>CBSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Eye className="h-6 w-6 text-blue-900" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be a leading educational institution that empowers students to become 
                  compassionate, confident, and competent global citizens who contribute 
                  meaningfully to society while maintaining strong moral values and cultural roots.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Target className="h-6 w-6 text-blue-900" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide quality education through innovative teaching methods, 
                  comprehensive curriculum, and a nurturing environment that fosters 
                  intellectual growth, creativity, and character development in every student.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do at Astha Vidya Mandir
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We foster empathy, kindness, and understanding in all our interactions, 
                  creating a caring and supportive community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for the highest standards in education, encouraging students 
                  to reach their full potential in all endeavors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We uphold honesty, transparency, and ethical behavior in all aspects 
                  of our educational mission and daily operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Principal's Message</h2>
            </div>
            <Card className="bg-white text-gray-800">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-16 w-16 text-blue-900" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg italic text-gray-600 mb-4">
                      "Education is not just about acquiring knowledge; it's about developing 
                      the character, values, and skills that will serve our students throughout 
                      their lives. At Astha Vidya Mandir, we are committed to nurturing each 
                      child's unique potential while preparing them for the challenges and 
                      opportunities of the 21st century."
                    </blockquote>
                    <div>
                      <p className="font-bold text-xl">Dr. Rajesh Kumar</p>
                      <p className="text-gray-600">Principal, Astha Vidya Mandir</p>
                      <p className="text-sm text-gray-500 mt-2">M.Ed., Ph.D. in Education | 25+ Years Experience</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
