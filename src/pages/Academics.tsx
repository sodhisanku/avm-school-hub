
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Microscope, Calculator, Globe, Music, Palette, Trophy, Computer } from "lucide-react";

const Academics = () => {
  const subjects = [
    {
      icon: BookOpen,
      name: "Language Arts",
      description: "English, Hindi Literature, Grammar & Communication",
      grades: "KG - 12"
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Pure Mathematics, Applied Mathematics, Statistics",
      grades: "KG - 12"
    },
    {
      icon: Microscope,
      name: "Sciences",
      description: "Physics, Chemistry, Biology, Environmental Science",
      grades: "6 - 12"
    },
    {
      icon: Globe,
      name: "Social Studies",
      description: "History, Geography, Political Science, Economics",
      grades: "KG - 12"
    },
    {
      icon: Computer,
      name: "Computer Science",
      description: "Programming, Web Development, Digital Literacy",
      grades: "3 - 12"
    },
    {
      icon: Palette,
      name: "Arts & Crafts",
      description: "Drawing, Painting, Sculpture, Creative Arts",
      grades: "KG - 12"
    },
    {
      icon: Music,
      name: "Music & Dance",
      description: "Classical Music, Folk Dance, Modern Instruments",
      grades: "KG - 12"
    },
    {
      icon: Trophy,
      name: "Physical Education",
      description: "Sports, Fitness, Health Education, Yoga",
      grades: "KG - 12"
    }
  ];

  const facilities = [
    {
      name: "Science Laboratories",
      description: "Well-equipped Physics, Chemistry, and Biology labs with modern instruments"
    },
    {
      name: "Computer Lab",
      description: "40 computers with high-speed internet and latest software"
    },
    {
      name: "Library",
      description: "Over 15,000 books, digital resources, and quiet study spaces"
    },
    {
      name: "Language Lab",
      description: "Audio-visual equipment for enhanced language learning"
    },
    {
      name: "Mathematics Lab",
      description: "Interactive tools and models for practical mathematics learning"
    },
    {
      name: "Art Studio",
      description: "Spacious studio with art supplies and exhibition space"
    }
  ];

  const classStructure = [
    { grade: "Pre-Primary", classes: "Nursery, LKG, UKG", age: "3-5 years" },
    { grade: "Primary", classes: "Grade 1-5", age: "6-10 years" },
    { grade: "Middle School", classes: "Grade 6-8", age: "11-13 years" },
    { grade: "Secondary", classes: "Grade 9-10", age: "14-15 years" },
    { grade: "Senior Secondary", classes: "Grade 11-12", age: "16-17 years" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-blue-100">
              Comprehensive curriculum designed to foster intellectual growth, 
              critical thinking, and lifelong learning
            </p>
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Class Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach to education across different age groups
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classStructure.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{level.grade}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {level.classes} • {level.age}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    {level.grade === "Pre-Primary" && "Foundation learning through play-based activities"}
                    {level.grade === "Primary" && "Building fundamental skills in all subjects"}
                    {level.grade === "Middle School" && "Developing analytical and critical thinking"}
                    {level.grade === "Secondary" && "CBSE Board preparation with career guidance"}
                    {level.grade === "Senior Secondary" && "Specialization streams: Science, Commerce, Arts"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Subjects & Curriculum
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum aligned with CBSE standards and global best practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <subject.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-lg">{subject.name}</CardTitle>
                  <CardDescription className="text-sm text-blue-600 font-semibold">
                    Grades: {subject.grades}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    {subject.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities to enhance the learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{facility.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Assessment & Evaluation
              </h2>
              <p className="text-lg text-blue-100">
                Comprehensive assessment system focusing on holistic development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white text-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">Continuous Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Regular class tests and quizzes</li>
                    <li>• Project-based assessments</li>
                    <li>• Oral presentations and discussions</li>
                    <li>• Practical examinations</li>
                    <li>• Portfolio assessments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">Formal Examinations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Mid-term examinations</li>
                    <li>• Annual examinations</li>
                    <li>• CBSE Board examinations (Grade 10 & 12)</li>
                    <li>• Competitive exam preparation</li>
                    <li>• Skill-based evaluations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
