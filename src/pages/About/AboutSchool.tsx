import schoolBuilding from "@/assets/school-building.jpg";
import studentsClassroom from "@/assets/students-classroom.jpg";
import schoolLibrary from "@/assets/school-library.jpg";
import { Card, CardContent } from "@/components/ui/card";

const AboutSchool = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-8 text-center">
          About Aastha Vidya Mandir
        </h1>

        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={schoolBuilding} 
            alt="Aastha Vidya Mandir School Building" 
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Established in 1985, Aastha Vidya Mandir, Jawanga, has been a cornerstone of quality education 
              in our rural community. As an English Medium School, we bridge the gap between traditional values 
              and modern educational practices, ensuring our students are well-prepared for the globalized world.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our school is more than just an educational institution; it's a nurturing environment where 
              young minds develop critical thinking, creativity, and character. We serve students from diverse 
              backgrounds, providing equal opportunities for academic excellence and personal growth.
            </p>
          </div>
          
          <Card className="h-fit">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-school-primary mb-4">Our Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 40+ years of educational excellence</li>
                <li>• 95% annual pass rate</li>
                <li>• 1200+ active students</li>
                <li>• 85+ qualified teachers</li>
                <li>• State-of-the-art facilities</li>
                <li>• Award-winning extracurricular programs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={studentsClassroom} 
              alt="Students in classroom at Aastha Vidya Mandir" 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 bg-background">
              <h4 className="font-semibold text-foreground">Modern Classrooms</h4>
              <p className="text-sm text-muted-foreground">Interactive learning environments with latest teaching aids</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={schoolLibrary} 
              alt="School library at Aastha Vidya Mandir" 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 bg-background">
              <h4 className="font-semibold text-foreground">Comprehensive Library</h4>
              <p className="text-sm text-muted-foreground">Extensive collection of books and digital resources</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            With modern infrastructure, experienced faculty, and a curriculum that balances academic rigor 
            with extracurricular activities, Aastha Vidya Mandir continues to be the preferred choice for 
            families seeking quality education in Jawanga and surrounding areas. Our commitment to excellence 
            ensures that every student receives personalized attention and opportunities to discover their unique potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;