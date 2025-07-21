const Clubs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Student Clubs & Societies
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Our diverse range of clubs and societies at Aastha Vidya Mandir provides students with 
            opportunities to explore their interests, develop new skills, and build lasting friendships. 
            These activities complement academic learning and foster creativity, leadership, and teamwork.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold text-school-primary mb-4">Academic Clubs</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Science Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Hands-on experiments, science projects, participation in science fairs, 
                    and exploration of scientific concepts through practical activities.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Mathematics Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Problem-solving competitions, math puzzles, Vedic mathematics, and 
                    real-world application of mathematical concepts.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">English Literary Society</h3>
                  <p className="text-sm text-muted-foreground">
                    Debates, elocution, creative writing, book discussions, and publishing 
                    the school magazine in English.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold text-school-primary mb-4">Cultural Clubs</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Music & Dance Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Classical and folk music training, traditional and modern dance forms, 
                    participation in cultural events and competitions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Drama Society</h3>
                  <p className="text-sm text-muted-foreground">
                    Theatre workshops, play productions, storytelling sessions, and 
                    participation in inter-school drama competitions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Art & Craft Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Painting, sketching, pottery, handicrafts, and exhibitions showcasing 
                    student artwork and creative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold text-school-primary mb-4">Service Clubs</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Environmental Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Tree plantation drives, cleanliness campaigns, awareness programs about 
                    environmental conservation, and sustainable practices.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Community Service Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Village outreach programs, helping elderly residents, organizing health 
                    camps, and supporting local community initiatives.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Health & Wellness Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Yoga sessions, nutrition awareness, first aid training, and promoting 
                    physical and mental well-being among students.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold text-school-primary mb-4">Special Interest Clubs</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Computer Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Basic programming, computer applications, digital literacy, and 
                    technology-based project development.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Photography Club</h3>
                  <p className="text-sm text-muted-foreground">
                    Learning photography basics, documenting school events, nature photography, 
                    and creating visual stories of rural life.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">Quiz Club</h3>
                  <p className="text-sm text-muted-foreground">
                    General knowledge competitions, current affairs discussions, and 
                    participation in inter-school quiz competitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Club Activities & Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Regular Activities</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Weekly club meetings after school hours</li>
                  <li>• Monthly inter-club competitions</li>
                  <li>• Annual club exhibitions and performances</li>
                  <li>• Participation in district and state level events</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Student Benefits</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Leadership and organizational skills development</li>
                  <li>• Enhanced creativity and self-expression</li>
                  <li>• Building confidence and communication skills</li>
                  <li>• Recognition and certificates for participation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;