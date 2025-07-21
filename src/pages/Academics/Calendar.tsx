const Calendar = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Academic Calendar
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            The academic year at Aastha Vidya Mandir is carefully planned to ensure optimal learning 
            outcomes while accommodating local festivals, agricultural seasons, and weather conditions. 
            Our calendar balances academic rigor with cultural celebrations and community events.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Academic Session 2024-25</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">First Term</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><strong>Session Start:</strong> April 15, 2024</li>
                  <li><strong>Unit Tests:</strong> May 20-25, 2024</li>
                  <li><strong>First Term Exams:</strong> August 15-25, 2024</li>
                  <li><strong>Vacation:</strong> September 1-15, 2024</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Second Term</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><strong>Term Begins:</strong> September 16, 2024</li>
                  <li><strong>Unit Tests:</strong> November 10-15, 2024</li>
                  <li><strong>Final Exams:</strong> February 15-28, 2025</li>
                  <li><strong>Session End:</strong> March 31, 2025</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Important Events</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">Cultural & Educational Events</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Independence Day Celebration - August 15</li>
                  <li>• Teachers' Day - September 5</li>
                  <li>• Annual Sports Day - October 15-16</li>
                  <li>• Cultural Festival - November 20-22</li>
                  <li>• Science Exhibition - December 10</li>
                  <li>• Republic Day - January 26</li>
                  <li>• Annual Day Celebration - February 5</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2">Academic Activities</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Parent-Teacher Meetings - Monthly first Saturday</li>
                  <li>• Inter-house Competitions - Ongoing</li>
                  <li>• Educational Tours - December & March</li>
                  <li>• Career Guidance Sessions - Quarterly</li>
                  <li>• Health Check-up Camps - Bi-annually</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Holiday Schedule</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">Major Holidays</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Diwali Vacation: November 1-10</li>
                  <li>• Winter Break: December 25 - January 7</li>
                  <li>• Holi Vacation: March 10-15</li>
                  <li>• Summer Vacation: April 1-14</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Local Festivals</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regional festivals as per local calendar</li>
                  <li>• Agricultural season considerations</li>
                  <li>• Community celebration days</li>
                  <li>• Weather-related adjustments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;