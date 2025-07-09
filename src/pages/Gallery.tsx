
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "events", name: "School Events" },
    { id: "academics", name: "Academic Activities" },
    { id: "sports", name: "Sports & Games" },
    { id: "cultural", name: "Cultural Programs" },
    { id: "infrastructure", name: "Infrastructure" }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Annual Sports Day 2024",
      category: "sports",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      description: "Students participating in various sports events"
    },
    {
      id: 2,
      title: "Science Exhibition",
      category: "academics",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description: "Students showcasing their science projects"
    },
    {
      id: 3,
      title: "Cultural Performance",
      category: "cultural",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      description: "Traditional dance performance by students"
    },
    {
      id: 4,
      title: "Computer Lab",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      description: "Modern computer laboratory facility"
    },
    {
      id: 5,
      title: "Independence Day Celebration",
      category: "events",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      description: "Flag hoisting ceremony and patriotic programs"
    },
    {
      id: 6,
      title: "School Building",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      description: "Main school building and campus view"
    },
    {
      id: 7,
      title: "Mathematics Competition",
      category: "academics",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description: "Inter-class mathematics competition"
    },
    {
      id: 8,
      title: "Basketball Tournament",
      category: "sports",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      description: "Annual basketball championship"
    },
    {
      id: 9,
      title: "Music Concert",
      category: "cultural",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      description: "School band performing at annual concert"
    },
    {
      id: 10,
      title: "Teacher's Day Celebration",
      category: "events",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      description: "Students honoring their teachers"
    },
    {
      id: 11,
      title: "Library Reading Session",
      category: "academics",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description: "Students engaged in reading activities"
    },
    {
      id: 12,
      title: "Art Exhibition",
      category: "cultural",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      description: "Display of student artwork and crafts"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-blue-100">
              Capturing moments of learning, growth, and celebration at Astha Vidya Mandir
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id 
                  ? "bg-blue-900 hover:bg-blue-800" 
                  : "hover:bg-blue-50"
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Recent Events Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recent Events Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our most memorable recent events and activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop"
                    alt="Annual Sports Day"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Annual Sports Day 2024</h3>
                  <p className="text-gray-600 mb-4">
                    A day filled with enthusiasm, team spirit, and athletic excellence. 
                    Students from all grades participated in various sports events.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">December 10, 2024</div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
                    alt="Science Exhibition"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Science Exhibition 2024</h3>
                  <p className="text-gray-600 mb-4">
                    Students showcased innovative science projects and experiments, 
                    demonstrating their creativity and scientific thinking.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">November 25, 2024</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Follow us on social media for daily updates and more photos from school activities
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Facebook
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Instagram
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
