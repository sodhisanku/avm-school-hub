const Eligibility = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Eligibility Criteria
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Aastha Vidya Mandir has established clear eligibility criteria to ensure that admitted students 
            can successfully participate in our English medium academic programs. These criteria are designed 
            to maintain educational standards while providing opportunities for deserving students from rural backgrounds.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Age Criteria</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-foreground">Class</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">Minimum Age</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">Maximum Age</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">Cut-off Date</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 px-4">Nursery</td>
                    <td className="py-3 px-4">2 years 6 months</td>
                    <td className="py-3 px-4">3 years 6 months</td>
                    <td className="py-3 px-4">31st March</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">LKG</td>
                    <td className="py-3 px-4">3 years 6 months</td>
                    <td className="py-3 px-4">4 years 6 months</td>
                    <td className="py-3 px-4">31st March</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">UKG</td>
                    <td className="py-3 px-4">4 years 6 months</td>
                    <td className="py-3 px-4">5 years 6 months</td>
                    <td className="py-3 px-4">31st March</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Class I</td>
                    <td className="py-3 px-4">5 years 6 months</td>
                    <td className="py-3 px-4">7 years</td>
                    <td className="py-3 px-4">31st March</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Class II onwards</td>
                    <td className="py-3 px-4">As per previous class + 1 year</td>
                    <td className="py-3 px-4">Age appropriate + 2 years</td>
                    <td className="py-3 px-4">31st March</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Academic Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Pre-Primary (Nursery to UKG)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• No formal academic requirements</li>
                  <li>• Basic developmental readiness assessment</li>
                  <li>• Toilet training completion preferred</li>
                  <li>• Basic communication skills in any language</li>
                  <li>• Social interaction capabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Primary (Class I-V)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Previous class completion certificate</li>
                  <li>• Basic reading and writing skills</li>
                  <li>• Simple mathematical concepts understanding</li>
                  <li>• Willingness to learn in English medium</li>
                  <li>• Age-appropriate communication skills</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Middle School (Class VI-VIII)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Minimum 60% marks in previous class</li>
                  <li>• Transfer certificate from previous school</li>
                  <li>• English language comprehension test</li>
                  <li>• Mathematics and Science aptitude</li>
                  <li>• Good conduct certificate</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Secondary & Sr. Secondary (Class IX-XII)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Minimum 65% marks in Class VIII/X</li>
                  <li>• CBSE or equivalent board certification</li>
                  <li>• Subject-specific entrance test</li>
                  <li>• Stream selection aptitude (for Class XI)</li>
                  <li>• Character certificate from previous school</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Transfer Student Requirements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">From Other Schools</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Valid transfer certificate with leaving date</li>
                  <li>• Mark sheets of last three academic years</li>
                  <li>• Character certificate from previous school</li>
                  <li>• Medical fitness certificate</li>
                  <li>• No objection certificate (if applicable)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2">From Other Boards</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Board equivalency certificate for non-CBSE students</li>
                  <li>• Migration certificate (for Class XI/XII transfers)</li>
                  <li>• Syllabi difference assessment and bridging course completion</li>
                  <li>• Additional entrance test for subject proficiency</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Special Category Eligibility</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Financial Assistance Category</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Family income below ₹2,00,000 per annum</li>
                  <li>• Income certificate from competent authority</li>
                  <li>• Academic merit requirement: 70% in previous class</li>
                  <li>• Local residence proof (within 15 km radius)</li>
                  <li>• Commitment to complete full academic course</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Sports & Cultural Quota</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• District/State level achievement certificates</li>
                  <li>• Performance demonstration/audition</li>
                  <li>• Minimum 55% marks in academics</li>
                  <li>• Commitment to represent school in competitions</li>
                  <li>• Good physical and mental health certification</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Important Notes</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Age calculations are based on the cut-off date of 31st March of the admission year</li>
              <li>• Birth certificate issued by Municipal Corporation/Registrar is mandatory for age proof</li>
              <li>• Mid-session admissions are considered only for Classes I-IX, subject to seat availability</li>
              <li>• Students with learning disabilities will be assessed for special support requirements</li>
              <li>• All certificates must be original or attested copies from issuing authorities</li>
              <li>• Non-compliance with eligibility criteria will result in admission cancellation</li>
              <li>• School reserves the right to verify all submitted documents and information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;