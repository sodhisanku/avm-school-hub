const OurTeachers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Our Teachers
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            The strength of Aastha Vidya Mandir lies in our dedicated team of qualified and experienced 
            teachers who are committed to providing quality English medium education in our rural setting. 
            Our faculty combines academic excellence with compassionate teaching, ensuring every student 
            receives personalized attention and guidance.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Faculty Qualifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Academic Credentials</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 100% teachers hold Bachelor's degrees in their subject areas</li>
                  <li>• 75% possess Master's degrees in specialized subjects</li>
                  <li>• 40% have completed B.Ed. professional training</li>
                  <li>• 20% hold M.Ed. degrees in educational methodology</li>
                  <li>• Regular participation in continuing education programs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Experience & Expertise</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Average teaching experience: 12 years</li>
                  <li>• Expertise in English medium instruction</li>
                  <li>• Understanding of rural educational challenges</li>
                  <li>• Multilingual communication abilities</li>
                  <li>• Technology integration in teaching methods</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Subject Specializations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Languages</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• English Literature specialists</li>
                  <li>• Hindi language experts</li>
                  <li>• Sanskrit scholars</li>
                  <li>• Communication skills trainers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Sciences</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mathematics with advanced degrees</li>
                  <li>• Physics & Chemistry M.Sc. holders</li>
                  <li>• Biology & Environmental Science experts</li>
                  <li>• Computer Science professionals</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Humanities</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• History & Geography specialists</li>
                  <li>• Political Science & Economics experts</li>
                  <li>• Arts & Culture instructors</li>
                  <li>• Physical Education trainers</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Teaching Philosophy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">Student-Centered Approach</h3>
                <p className="text-muted-foreground text-sm">
                  Our teachers believe in personalized learning, recognizing that each student has unique 
                  strengths, learning styles, and potential. They adapt their teaching methods to meet 
                  individual needs while maintaining high academic standards.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2">Cultural Integration</h3>
                <p className="text-muted-foreground text-sm">
                  While delivering English medium education, our faculty ensures that local culture, 
                  values, and traditions are woven into the learning experience, creating a balanced 
                  educational environment.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2">Holistic Development</h3>
                <p className="text-muted-foreground text-sm">
                  Beyond academic subjects, our teachers focus on character building, life skills 
                  development, and preparing students to become responsible citizens and future leaders.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Teacher Recognition & Awards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Recent Achievements</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• District Best Teacher Award (Mathematics) - 2023</li>
                  <li>• State Excellence in English Teaching - 2022</li>
                  <li>• Innovative Teaching Methods Recognition - 2024</li>
                  <li>• Community Service Award for Rural Education - 2023</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Professional Development</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Quarterly teacher training workshops</li>
                  <li>• Summer vacation skill enhancement programs</li>
                  <li>• Technology integration training</li>
                  <li>• Educational research and publication support</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Faculty Support System</h2>
            <p className="text-muted-foreground mb-3">
              We provide comprehensive support to our teaching staff to ensure they can deliver their best:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Competitive salaries and performance incentives</li>
              <li>• Professional development opportunities and conference attendance</li>
              <li>• Modern teaching aids and technology resources</li>
              <li>• Collaborative work environment and peer mentoring</li>
              <li>• Health insurance and retirement benefits</li>
              <li>• Recognition programs for outstanding performance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;