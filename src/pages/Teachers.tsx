
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Users, Star, Clock } from "lucide-react";

const Teachers = () => {
  const departments = [
    {
      name: "English & Literature",
      teachers: 8,
      head: "Dr. Priya Sharma",
      qualification: "Ph.D. in English Literature"
    },
    {
      name: "Mathematics",
      teachers: 6,
      head: "Prof. Rajesh Kumar",
      qualification: "M.Sc. Mathematics, B.Ed."
    },
    {
      name: "Science",
      teachers: 12,
      head: "Dr. Anita Singh",
      qualification: "Ph.D. in Physics"
    },
    {
      name: "Social Studies",
      teachers: 7,
      head: "Mr. Vikram Patel",
      qualification: "M.A. History, M.Ed."
    },
    {
      name: "Computer Science",
      teachers: 4,
      head: "Ms. Ritu Gupta",
      qualification: "M.Tech. Computer Science"
    },
    {
      name: "Physical Education",
      teachers: 3,
      head: "Mr. Suresh Yadav",
      qualification: "M.P.Ed., Sports Coach"
    }
  ];

  const featuredTeachers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualification: "Ph.D. in Education, M.Ed.",
      experience: "25+ years",
      specialization: "Educational Leadership, Curriculum Development",
      achievements: "State Award for Excellence in Education (2020)"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Vice Principal & HOD English",
      qualification: "Ph.D. in English Literature",
      experience: "20+ years",
      specialization: "Literature, Creative Writing",
      achievements: "Published Author, Literary Awards"
    },
    {
      name: "Prof. Anita Singh",
      position: "HOD Science Department",
      qualification: "Ph.D. in Physics, M.Sc. Physics",
      experience: "18+ years",
      specialization: "Physics, Research Methodology",
      achievements: "Best Teacher Award (2019, 2021)"
    },
    {
      name: "Mr. Vikram Patel",
      position: "HOD Social Studies",
      qualification: "M.A. History, M.Ed.",
      experience: "15+ years",
      specialization: "Indian History, Civics",
      achievements: "Excellence in Teaching Award (2018)"
    }
  ];

  const qualifications = [
    { degree: "Ph.D.", count: 12, percentage: "14%" },
    { degree: "M.Phil.", count: 18, percentage: "21%" },
    { degree: "Post Graduate", count: 45, percentage: "53%" },
    { degree: "Graduate + B.Ed.", count: 10, percentage: "12%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-blue-100">
              Dedicated educators committed to nurturing young minds and 
              fostering academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-900 mb-2">85+</div>
              <div className="text-gray-600">Total Faculty</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-900 mb-2">18</div>
              <div className="text-gray-600">Average Experience</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-yellow-900 mb-2">68%</div>
              <div className="text-gray-600">Post Graduates</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-900 mb-2">30+</div>
              <div className="text-gray-600">Ph.D. & M.Phil.</div>
            </div>
          </div>

          {/* Qualifications Breakdown */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Faculty Qualifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {qualifications.map((qual, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{qual.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-900">{qual.count}</div>
                    <div className="text-sm text-gray-600">{qual.percentage}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Faculty */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Faculty Members
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our distinguished educators who lead by example
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTeachers.map((teacher, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <GraduationCap className="h-8 w-8 text-blue-900" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-blue-900">{teacher.name}</CardTitle>
                      <CardDescription className="text-gray-600 font-semibold">
                        {teacher.position}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <BookOpen className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-700">Qualification:</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{teacher.qualification}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-700">Experience:</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{teacher.experience}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Star className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-700">Specialization:</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{teacher.specialization}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Award className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-700">Achievements:</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{teacher.achievements}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Well-organized departments with experienced heads and qualified faculty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{dept.name}</CardTitle>
                  <CardDescription>
                    {dept.teachers} Faculty Members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Department Head:</span>
                      <p className="text-sm text-gray-600">{dept.head}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Qualification:</span>
                      <p className="text-sm text-gray-600">{dept.qualification}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Development */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Development
              </h2>
              <p className="text-lg text-blue-100">
                Continuous learning and growth opportunities for our faculty
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white text-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">Training Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Regular workshops on modern teaching methods</li>
                    <li>• Technology integration in education</li>
                    <li>• Child psychology and counseling</li>
                    <li>• Subject-specific skill enhancement</li>
                    <li>• Leadership development programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">Recognition & Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Best Teacher Awards (Annual)</li>
                    <li>• Innovation in Teaching Recognition</li>
                    <li>• Research Publication Support</li>
                    <li>• Professional Conference Participation</li>
                    <li>• Career Advancement Opportunities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Faculty */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Connect with Our Faculty
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our teachers are always available to support students and parents. 
              Feel free to reach out for academic guidance or any concerns.
            </p>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <p><strong>Faculty Coordination Office</strong></p>
                  <p>📞 Phone: +91-XXXX-XXXXXX (Ext. 123)</p>
                  <p>✉️ Email: faculty@asthavidyamandir.edu.in</p>
                  <p>🕒 Office Hours: Monday - Friday, 9:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
