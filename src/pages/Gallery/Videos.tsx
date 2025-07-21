const Videos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Video Gallery
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Experience the dynamic life at Aastha Vidya Mandir through our video collection. 
            These videos showcase our students' performances, educational activities, and 
            the vibrant culture of our English medium school in rural Jawanga.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">School Introduction</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">🎬</div>
                  <h3 className="font-medium mb-2">School Overview Video</h3>
                  <p className="text-sm">Virtual tour of our campus and facilities</p>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="font-medium mb-2">Academic Excellence</h3>
                  <p className="text-sm">Highlights of our educational programs</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Get an overview of Aastha Vidya Mandir's mission, facilities, and commitment to 
              providing quality English medium education in rural setting.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Cultural Performances</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">💃</div>
                  <h3 className="font-medium text-sm">Annual Day Dance</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🎭</div>
                  <h3 className="font-medium text-sm">Drama Performance</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🎵</div>
                  <h3 className="font-medium text-sm">Music Concert</h3>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Watch our talented students perform in various cultural events, showcasing both 
              traditional and contemporary arts with confidence and creativity.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Academic Activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🔬</div>
                  <h3 className="font-medium text-sm">Science Experiments</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">💻</div>
                  <h3 className="font-medium text-sm">Computer Classes</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">📚</div>
                  <h3 className="font-medium text-sm">English Learning</h3>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Observe our innovative teaching methods and student engagement in various academic 
              subjects, demonstrating our commitment to quality education.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Sports Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="font-medium mb-2">Sports Day 2024</h3>
                  <p className="text-sm">Annual athletic competition highlights</p>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">🏏</div>
                  <h3 className="font-medium mb-2">Cricket Championship</h3>
                  <p className="text-sm">Inter-house cricket tournament final</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Experience the excitement of our sports events and see how we promote physical 
              fitness and team spirit among our students.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Student Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🥇</div>
                  <h3 className="font-medium text-sm">Award Ceremony</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🗣️</div>
                  <h3 className="font-medium text-sm">Debate Competition</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🌟</div>
                  <h3 className="font-medium text-sm">Success Stories</h3>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Celebrate our students' achievements in academics, competitions, and personal 
              development milestones that make us proud.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Community Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="font-medium mb-2">Tree Plantation Drive</h3>
                  <p className="text-sm">Environmental conservation initiative</p>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="font-medium mb-2">Community Service</h3>
                  <p className="text-sm">Students helping local community</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              See how our students contribute to the local community through various social 
              service activities and environmental initiatives.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Special Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🇮🇳</div>
                  <h3 className="font-medium text-sm">Independence Day</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">👨‍🏫</div>
                  <h3 className="font-medium text-sm">Teachers' Day</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🎂</div>
                  <h3 className="font-medium text-sm">Founders' Day</h3>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Witness our celebration of national holidays and special occasions that bring 
              our school community together in patriotic and festive spirit.
            </p>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Video Submission & Access</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Submit Your Videos</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Send video links to: videos@asthavidyamandir.edu.in</li>
                  <li>• Include event details and date</li>
                  <li>• Ensure proper consent for publication</li>
                  <li>• High quality videos preferred (HD minimum)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Access Full Videos</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Full videos available on YouTube channel</li>
                  <li>• Subscribe for latest uploads</li>
                  <li>• Share videos with family and friends</li>
                  <li>• Download options for personal use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;