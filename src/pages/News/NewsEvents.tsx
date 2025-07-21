const NewsEvents = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Upcoming Events
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Mark your calendars! Here are the exciting upcoming events at Aastha Vidya Mandir. 
            From academic activities and cultural programs to sports competitions and community 
            initiatives, there's always something happening at our vibrant school.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-school-primary/10 text-school-primary px-3 py-1 rounded-full text-sm font-medium">
                Admission
              </span>
              <span className="text-muted-foreground text-sm">January 15 - March 15, 2025</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Admission Process for Academic Year 2025-26
            </h2>
            <p className="text-muted-foreground mb-4">
              Applications are now open for admission to all classes from Nursery to Class XI. 
              Experience our English medium education in a nurturing rural environment. Early 
              applications encouraged as seats are limited.
            </p>
            <div className="bg-muted p-3 rounded text-sm text-muted-foreground mb-4">
              <strong>Key Dates:</strong> Application Start: Jan 15 | Deadline: Mar 15 | 
              Entrance Test: Mar 25 | Results: Apr 10
            </div>
            <a href="/admission" className="text-school-primary hover:underline font-medium">
              Apply Now →
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Academic
              </span>
              <span className="text-muted-foreground text-sm">February 1, 2025</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Parent-Teacher Conference - First Term Results
            </h2>
            <p className="text-muted-foreground mb-4">
              Comprehensive discussion of student progress, academic performance, and 
              individual development plans. Teachers will share insights on each child's 
              strengths and areas for improvement.
            </p>
            <div className="bg-muted p-3 rounded text-sm text-muted-foreground mb-4">
              <strong>Schedule:</strong> Classes I-V: 9 AM - 12 PM | Classes VI-X: 2 PM - 5 PM | 
              Classes XI-XII: 10 AM - 1 PM
            </div>
            <a href="#" className="text-school-primary hover:underline font-medium">
              Book Appointment →
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Science
              </span>
              <span className="text-muted-foreground text-sm">February 10-12, 2025</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Annual Science Exhibition & Innovation Fair
            </h2>
            <p className="text-muted-foreground mb-4">
              Three-day science extravaganza featuring student projects, working models, 
              live experiments, and innovation displays. Guest scientists and educators 
              will judge and interact with young innovators.
            </p>
            <div className="bg-muted p-3 rounded text-sm text-muted-foreground mb-4">
              <strong>Themes:</strong> Renewable Energy | Environmental Solutions | 
              Health Innovations | Space Technology | Rural Development
            </div>
            <a href="#" className="text-school-primary hover:underline font-medium">
              View Project Guidelines →
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Sports
              </span>
              <span className="text-muted-foreground text-sm">February 18-20, 2025</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Inter-House Sports Championship 2025
            </h2>
            <p className="text-muted-foreground mb-4">
              Annual sports meet featuring athletics, team sports, and traditional games. 
              All four houses - Arjuna, Bhima, Krishna, and Rama - will compete for the 
              overall championship trophy. Community participation welcome.
            </p>
            <div className="bg-muted p-3 rounded text-sm text-muted-foreground mb-4">
              <strong>Events:</strong> Track & Field | Cricket | Football | Basketball | 
              Volleyball | Badminton | Traditional Games
            </div>
            <a href="#" className="text-school-primary hover:underline font-medium">
              Registration Details →
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Cultural
              </span>
              <span className="text-muted-foreground text-sm">February 25-27, 2025</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Spring Cultural Festival - "Vasant Utsav"
            </h2>
            <p className="text-muted-foreground mb-4">
              Celebrate the arrival of spring with classical and folk performances, art 
              exhibitions, poetry recitations, and cultural competitions. Local artists 
              and community members will join students in this vibrant celebration.
            </p>
            <div className="bg-muted p-3 rounded text-sm text-muted-foreground mb-4">
              <strong>Highlights:</strong> Classical Dance | Folk Music | Drama Performances | 
              Art Exhibition | Poetry Slam | Cultural Food Festival
            </div>
            <a href="#" className="text-school-primary hover:underline font-medium">
              Participation Form →
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Community
              </span>
              <span className="text-muted-foreground text-sm">March 5, 2025</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Village Health & Literacy Drive
            </h2>
            <p className="text-muted-foreground mb-4">
              Students and teachers will organize health check-ups, basic literacy classes, 
              and awareness programs for community members. Medical professionals and 
              government officials will participate in this social service initiative.
            </p>
            <div className="bg-muted p-3 rounded text-sm text-muted-foreground mb-4">
              <strong>Services:</strong> Free Health Check-ups | Basic Education Classes | 
              Digital Literacy | Government Scheme Awareness
            </div>
            <a href="#" className="text-school-primary hover:underline font-medium">
              Volunteer Registration →
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                Environmental
              </span>
              <span className="text-muted-foreground text-sm">March 12, 2025</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              "Green Jawanga" Environmental Conservation Day
            </h2>
            <p className="text-muted-foreground mb-4">
              Large-scale tree plantation drive, waste management workshop, and renewable 
              energy awareness program. Goal: Plant 500 trees and establish waste 
              segregation systems in surrounding villages.
            </p>
            <div className="bg-muted p-3 rounded text-sm text-muted-foreground mb-4">
              <strong>Activities:</strong> Tree Plantation | Waste Management Workshop | 
              Solar Energy Demo | Organic Farming Session
            </div>
            <a href="#" className="text-school-primary hover:underline font-medium">
              Join the Initiative →
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                Academic
              </span>
              <span className="text-muted-foreground text-sm">March 20, 2025</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Career Guidance Workshop for Classes IX-XII
            </h2>
            <p className="text-muted-foreground mb-4">
              Comprehensive career counseling session with industry experts, successful 
              alumni, and educational consultants. Focus on career paths after rural 
              English medium education and scholarship opportunities.
            </p>
            <div className="bg-muted p-3 rounded text-sm text-muted-foreground mb-4">
              <strong>Topics:</strong> Engineering & Medical Entrances | Commerce & Management | 
              Arts & Humanities | Skill Development | Entrepreneurship
            </div>
            <a href="#" className="text-school-primary hover:underline font-medium">
              Register Interest →
            </a>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Event Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Stay Updated</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Follow our website for latest event updates</li>
                  <li>• Join parent WhatsApp groups for reminders</li>
                  <li>• Check school notice board daily</li>
                  <li>• Subscribe to our event newsletter</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Participation</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Register early as events have limited capacity</li>
                  <li>• Volunteer opportunities available for parents</li>
                  <li>• Community members welcome at public events</li>
                  <li>• Contact school office for special arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;