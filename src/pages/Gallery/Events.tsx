const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          School Events
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Aastha Vidya Mandir hosts numerous events throughout the academic year that enrich 
            our students' educational experience. From academic competitions to cultural festivals, 
            these events foster creativity, leadership, and community spirit.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Annual Cultural Festival</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🎪</div>
                  <h3 className="font-medium text-sm">Cultural Programs</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🎨</div>
                  <h3 className="font-medium text-sm">Art Exhibition</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🏆</div>
                  <h3 className="font-medium text-sm">Prize Distribution</h3>
                </div>
              </div>
            </div>
            <div className="bg-school-primary/10 p-4 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Event Highlights:</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Three-day cultural extravaganza featuring dance, music, and drama</li>
                <li>• Student art and craft exhibition showcasing creative talents</li>
                <li>• Inter-house competitions in various cultural activities</li>
                <li>• Guest performances by local artists and cultural groups</li>
                <li>• Traditional food stalls managed by parent volunteers</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Sports Day Championship</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">🏃‍♂️</div>
                  <h3 className="font-medium mb-2">Athletic Events</h3>
                  <p className="text-sm">Track and field competitions</p>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">⚽</div>
                  <h3 className="font-medium mb-2">Team Sports</h3>
                  <p className="text-sm">Inter-house tournaments</p>
                </div>
              </div>
            </div>
            <div className="bg-school-primary/10 p-4 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Sports Activities:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li>• 100m, 200m, and 400m races</li>
                  <li>• Long jump and high jump</li>
                  <li>• Shot put and discus throw</li>
                  <li>• Relay races for all age groups</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Cricket and football matches</li>
                  <li>• Basketball and volleyball</li>
                  <li>• Badminton tournaments</li>
                  <li>• Traditional games competitions</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Science Exhibition</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🔬</div>
                  <h3 className="font-medium text-sm">Experiments</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🤖</div>
                  <h3 className="font-medium text-sm">Models</h3>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🧪</div>
                  <h3 className="font-medium text-sm">Projects</h3>
                </div>
              </div>
            </div>
            <div className="bg-school-primary/10 p-4 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Exhibition Features:</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Student-created scientific models and working prototypes</li>
                <li>• Live demonstration of physics and chemistry experiments</li>
                <li>• Environmental science projects and renewable energy models</li>
                <li>• Mathematics and computer science project displays</li>
                <li>• Interaction with visiting scientists and educators</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Academic Competitions</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">🗣️</div>
                  <h3 className="font-medium text-xs">Debate</h3>
                </div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">✍️</div>
                  <h3 className="font-medium text-xs">Essay Writing</h3>
                </div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">🧮</div>
                  <h3 className="font-medium text-xs">Math Quiz</h3>
                </div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">📖</div>
                  <h3 className="font-medium text-xs">Spelling Bee</h3>
                </div>
              </div>
            </div>
            <div className="bg-school-primary/10 p-4 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Competition Categories:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li>• English and Hindi elocution contests</li>
                  <li>• Inter-house debate competitions</li>
                  <li>• Creative writing and poetry recitation</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Mathematics olympiad and quiz contests</li>
                  <li>• Science project competitions</li>
                  <li>• General knowledge championships</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Community Service Events</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">🌳</div>
                  <h3 className="font-medium mb-2">Environmental Drive</h3>
                  <p className="text-sm">Tree plantation and cleanliness</p>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="font-medium mb-2">Health Camps</h3>
                  <p className="text-sm">Medical check-ups for community</p>
                </div>
              </div>
            </div>
            <div className="bg-school-primary/10 p-4 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Service Initiatives:</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Village cleanliness drives and plastic-free campaigns</li>
                <li>• Free health check-up camps for elderly residents</li>
                <li>• Adult literacy programs conducted by senior students</li>
                <li>• Blood donation camps organized with local hospitals</li>
                <li>• Awareness programs on health, education, and digital literacy</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">National & Religious Celebrations</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">🇮🇳</div>
                  <h3 className="font-medium text-xs">Independence Day</h3>
                </div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-medium text-xs">Republic Day</h3>
                </div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">🪔</div>
                  <h3 className="font-medium text-xs">Diwali</h3>
                </div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">🌸</div>
                  <h3 className="font-medium text-xs">Holi</h3>
                </div>
              </div>
            </div>
            <div className="bg-school-primary/10 p-4 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Celebration Highlights:</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Patriotic song performances and flag hoisting ceremonies</li>
                <li>• Cultural programs showcasing India's diversity and heritage</li>
                <li>• Traditional dress days and cultural food festivals</li>
                <li>• Essay and art competitions on national themes</li>
                <li>• Guest speakers sharing stories of freedom fighters and national heroes</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Event Participation & Updates</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Stay Updated</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check school notice board for upcoming events</li>
                  <li>• Follow our social media for live updates</li>
                  <li>• Subscribe to school newsletter</li>
                  <li>• Parent WhatsApp groups for instant notifications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Get Involved</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Volunteer for event organization and management</li>
                  <li>• Share your expertise as guest speakers</li>
                  <li>• Sponsor events and support student activities</li>
                  <li>• Document events through photography and videography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;