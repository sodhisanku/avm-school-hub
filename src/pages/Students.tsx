
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BookOpen, Trophy, Music, Palette, Star, Globe } from "lucide-react";

const Students = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "State Level Science Fair",
      description: "First Prize in State Science Exhibition 2024",
      student: "Arjun Sharma, Grade 10"
    },
    {
      icon: Music,
      title: "Cultural Fest Winner",
      description: "Best Classical Dance Performance",
      student: "Priya Patel, Grade 8"
    },
    {
      icon: Award,
      title: "Mathematics Olympiad",
      description: "Gold Medal in National Mathematics Olympiad",
      student: "Rahul Kumar, Grade 9"
    },
    {
      icon: BookOpen,
      title: "Essay Competition",
      description: "District Level Essay Writing Competition Winner",
      student: "Sneha Singh, Grade 11"
    }
  ];

  const activities = [
    {
      category: "Sports",
      items: ["Cricket", "Football", "Basketball", "Badminton", "Table Tennis", "Athletics"]
    },
    {
      category: "Cultural Arts",
      items: ["Classical Dance", "Folk Dance", "Singing", "Drama", "Art & Craft", "Music"]
    },
    {
      category: "Academic Clubs",
      items: ["Science Club", "Math Club", "Literary Society", "Debate Club", "Quiz Club", "Environment Club"]
    },
    {
      category: "Special Programs",
      items: ["NCC", "Scouts & Guides", "Red Cross", "Career Counseling", "Yoga & Meditation", "Community Service"]
    }
  ];

  const studentLife = [
    {
      icon: Users,
      title: "House System",
      description: "Four houses - Wisdom, Courage, Integrity, and Excellence - foster healthy competition and teamwork"
    },
    {
      icon: Star,
      title: "Student Council",
      description: "Democratically elected student representatives lead various school initiatives and activities"
    },
    {
      icon: Globe,
      title: "Exchange Programs",
      description: "Cultural exchange programs and pen pal relationships with schools across India and abroad"
    },
    {
      icon: Palette,
      title: "Creative Expression",
      description: "Regular art exhibitions, cultural programs, and creative workshops to nurture artistic talents"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Life</h1>
            <p className="text-xl text-blue-100">
              Nurturing young minds through diverse opportunities for growth, 
              learning, and self-discovery
            </p>
          </div>
        </div>
      </section>

      {/* Student Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-900 mb-2">1200+</div>
              <div className="text-gray-600">Total Students</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-900 mb-2">95%</div>
              <div className="text-gray-600">Pass Rate</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-yellow-900 mb-2">150+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-900 mb-2">25+</div>
              <div className="text-gray-600">Clubs & Activities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recent Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our students' outstanding accomplishments in various fields
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <achievement.icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-semibold">
                        {achievement.student}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Extracurricular Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A wide range of activities to explore interests and develop talents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-50 px-3 py-2 rounded text-sm text-gray-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Features */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Student Life at AVM
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Creating a vibrant, inclusive environment where every student can thrive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentLife.map((feature, index) => (
              <Card key={index} className="bg-white text-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <feature.icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Students Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <blockquote className="text-gray-600 italic mb-4">
                  "AVM has given me opportunities to explore my interests in science and technology. 
                  The teachers are supportive and the labs are excellent!"
                </blockquote>
                <div>
                  <p className="font-semibold">Ankit Verma</p>
                  <p className="text-sm text-gray-500">Grade 11, Science Stream</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <blockquote className="text-gray-600 italic mb-4">
                  "The cultural activities here are amazing. I've participated in many dance 
                  competitions and won several prizes. Thank you AVM!"
                </blockquote>
                <div>
                  <p className="font-semibold">Kavya Sharma</p>
                  <p className="text-sm text-gray-500">Grade 9</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <blockquote className="text-gray-600 italic mb-4">
                  "The teachers here care about each student personally. They helped me 
                  improve my grades and build confidence in myself."
                </blockquote>
                <div>
                  <p className="font-semibold">Rohit Gupta</p>
                  <p className="text-sm text-gray-500">Grade 12, Commerce Stream</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
