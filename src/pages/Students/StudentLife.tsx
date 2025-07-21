const StudentLife = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Student Life
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Life at Aastha Vidya Mandir is vibrant and enriching, offering students numerous opportunities 
            to grow academically, socially, and personally. Our rural setting provides a unique environment 
            where students can connect with nature while receiving world-class education in English medium.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold text-school-primary mb-4">Daily Routine</h2>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Morning Assembly:</strong> 8:00 AM - 8:30 AM</li>
                <li><strong>Classes:</strong> 8:30 AM - 2:30 PM</li>
                <li><strong>Lunch Break:</strong> 12:30 PM - 1:15 PM</li>
                <li><strong>Activities:</strong> 2:30 PM - 4:00 PM</li>
                <li><strong>Study Hours:</strong> 4:00 PM - 5:00 PM</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold text-school-primary mb-4">House System</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-muted-foreground">Arjuna House (Red)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-muted-foreground">Bhima House (Blue)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-muted-foreground">Krishna House (Green)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-muted-foreground">Rama House (Yellow)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Extracurricular Activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Sports</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cricket & Football</li>
                  <li>• Basketball & Volleyball</li>
                  <li>• Athletics & Running</li>
                  <li>• Traditional Games</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Arts & Culture</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Music & Dance</li>
                  <li>• Drama & Theatre</li>
                  <li>• Art & Craft</li>
                  <li>• Cultural Programs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Academic Clubs</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Science Club</li>
                  <li>• Mathematics Club</li>
                  <li>• English Literary Society</li>
                  <li>• Environmental Club</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Student Support Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Academic Support</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Remedial classes for weak students</li>
                  <li>• Advanced learning programs</li>
                  <li>• Career counseling sessions</li>
                  <li>• Study material and library access</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Personal Development</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Leadership training programs</li>
                  <li>• Personality development workshops</li>
                  <li>• Health and wellness programs</li>
                  <li>• Community service projects</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Student Welfare</h2>
            <p className="text-muted-foreground mb-3">
              We prioritize the overall well-being of our students through comprehensive support systems:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Nutritious mid-day meal program</li>
              <li>• Regular health check-ups and medical facilities</li>
              <li>• Safe and comfortable transportation</li>
              <li>• Scholarship programs for deserving students</li>
              <li>• Anti-bullying and counseling support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;