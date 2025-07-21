const Process = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Admission Process
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Aastha Vidya Mandir follows a transparent and merit-based admission process designed to 
            ensure equal opportunities for all students. We welcome applications from families who 
            share our commitment to academic excellence and holistic development.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Admission Timeline</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">For Academic Year 2025-26</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Application Start:</strong> January 15, 2025</li>
                  <li><strong>Application Deadline:</strong> March 15, 2025</li>
                  <li><strong>Entrance Test:</strong> March 25, 2025</li>
                  <li><strong>Interview:</strong> April 1-5, 2025</li>
                  <li><strong>Merit List Publication:</strong> April 10, 2025</li>
                  <li><strong>Admission Confirmation:</strong> April 20, 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Important Dates</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Fee Payment:</strong> By April 30, 2025</li>
                  <li><strong>Document Verification:</strong> May 1-10, 2025</li>
                  <li><strong>Orientation Program:</strong> April 12, 2025</li>
                  <li><strong>Classes Begin:</strong> April 15, 2025</li>
                  <li><strong>Parent Meeting:</strong> April 20, 2025</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Step-by-Step Process</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-school-primary text-school-text-light rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Application Submission</h3>
                  <p className="text-muted-foreground text-sm">
                    Submit the completed application form along with required documents and application fee.
                    Forms are available at the school office or can be downloaded from our website.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-school-primary text-school-text-light rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Entrance Assessment</h3>
                  <p className="text-muted-foreground text-sm">
                    Age-appropriate entrance test covering basic concepts in English, Mathematics, and General Knowledge.
                    For kindergarten admissions, informal interaction and observation activities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-school-primary text-school-text-light rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Parent Interview</h3>
                  <p className="text-muted-foreground text-sm">
                    Interaction with parents to understand family values, educational expectations, and 
                    commitment to the school's vision and mission.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-school-primary text-school-text-light rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Merit List & Selection</h3>
                  <p className="text-muted-foreground text-sm">
                    Selection based on entrance test performance, interaction results, and document verification.
                    Merit list published on the school notice board and website.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-school-primary text-school-text-light rounded-full flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Admission Confirmation</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete the admission formalities by paying fees, submitting original documents,
                    and attending the orientation program.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Application Form</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">How to Obtain</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• School Office: Monday to Saturday, 9 AM - 4 PM</li>
                  <li>• Online Download: Available on school website</li>
                  <li>• Application Fee: ₹500 (Non-refundable)</li>
                  <li>• Payment: Cash, DD, or Online Transfer</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Submission Methods</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• In Person: School Administrative Office</li>
                  <li>• By Post: Registered/Speed Post only</li>
                  <li>• Email: admissions@asthavidyamandir.edu.in</li>
                  <li>• Office Hours: 9:00 AM to 4:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Special Considerations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Reserved Categories</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SC/ST: 25% reservation as per government norms</li>
                  <li>• OBC: 15% reservation</li>
                  <li>• EWS: 10% reservation</li>
                  <li>• PWD: 3% reservation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Special Provisions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sibling preference (5% weightage)</li>
                  <li>• Staff children (as per policy)</li>
                  <li>• Local area students preference</li>
                  <li>• Girl child encouragement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;