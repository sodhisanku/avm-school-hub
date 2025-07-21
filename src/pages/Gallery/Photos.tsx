const Photos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Photo Gallery
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Explore the vibrant life at Aastha Vidya Mandir through our photo gallery. These images 
            capture the essence of our school - from academic achievements and cultural celebrations 
            to sports events and community activities that make our rural English medium school special.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Academic Life</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-2xl mb-2">📚</div>
                    <p className="text-sm">Classroom Activities</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Students engaged in interactive learning sessions, science experiments, computer classes, 
              and English medium instruction across all grade levels.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Cultural Events</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-2xl mb-2">🎭</div>
                    <p className="text-sm">Cultural Programs</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Annual day celebrations, traditional dance performances, drama competitions, 
              and cultural festivals showcasing our rich heritage.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Sports & Recreation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-2xl mb-2">⚽</div>
                    <p className="text-sm">Sports Activities</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Inter-house competitions, cricket matches, athletics meets, basketball tournaments, 
              and physical education sessions.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">School Infrastructure</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-2xl mb-2">🏫</div>
                    <p className="text-sm">Campus Views</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Modern classrooms, science laboratories, computer lab, library, playground, 
              and other facilities that support quality education.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Community Outreach</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-2xl mb-2">🤝</div>
                    <p className="text-sm">Community Service</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Village cleanliness drives, tree plantation, health awareness camps, 
              and social service activities by our students.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Special Occasions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-2xl mb-2">🎉</div>
                    <p className="text-sm">Celebrations</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Independence Day, Republic Day, Teachers' Day, Children's Day, 
              and other national and school celebrations.
            </p>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Photo Submission Guidelines</h2>
            <p className="text-muted-foreground mb-3">
              We encourage parents and students to share memorable moments from school events:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Send high-quality photos to: photos@asthavidyamandir.edu.in</li>
              <li>• Include event name, date, and brief description</li>
              <li>• Ensure proper consent for photo publication</li>
              <li>• Photos will be reviewed before adding to gallery</li>
              <li>• Credit will be given to photo contributors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;