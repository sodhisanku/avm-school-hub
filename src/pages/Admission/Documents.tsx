const Documents = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Required Documents
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Please ensure all documents are ready before starting the admission process. All certificates 
            and documents must be original or attested copies from the issuing authority. Incomplete 
            documentation may result in admission delay or rejection.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Essential Documents for All Applicants</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">Student Documents</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="text-school-primary mr-2">•</span>
                      <span><strong>Birth Certificate:</strong> Municipal/Registrar issued (Original + 2 copies)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-primary mr-2">•</span>
                      <span><strong>Passport Size Photos:</strong> 6 recent colored photographs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-primary mr-2">•</span>
                      <span><strong>Aadhar Card:</strong> Student's Aadhar card copy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-primary mr-2">•</span>
                      <span><strong>Medical Certificate:</strong> General health and fitness certificate</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Parent/Guardian Documents</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="text-school-primary mr-2">•</span>
                      <span><strong>Father's Aadhar Card:</strong> Copy required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-primary mr-2">•</span>
                      <span><strong>Mother's Aadhar Card:</strong> Copy required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-primary mr-2">•</span>
                      <span><strong>Address Proof:</strong> Voter ID/Utility Bill/Ration Card</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-primary mr-2">•</span>
                      <span><strong>Income Certificate:</strong> For fee concession applicants</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Academic Documents by Class Level</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Pre-Primary (Nursery to UKG)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Immunization record/vaccination certificate</li>
                  <li>• Pediatric health check-up report</li>
                  <li>• Previous school certificate (if applicable)</li>
                  <li>• Development assessment form (school provided)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-3">Primary Level (Class I-V)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Transfer Certificate (TC) from previous school</li>
                  <li>• Progress report/report card of last academic year</li>
                  <li>• Character certificate from previous school</li>
                  <li>• School leaving certificate with reason for leaving</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-3">Middle School (Class VI-VIII)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Mark sheets of last 2 academic years</li>
                  <li>• Transfer Certificate with leaving date</li>
                  <li>• Character certificate from Principal</li>
                  <li>• Migration certificate (if changing board)</li>
                  <li>• Medium of instruction certificate</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-3">Secondary & Senior Secondary (Class IX-XII)</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Class VIII/X Board examination mark sheet</li>
                  <li>• Class IX marks (for Class XI admission)</li>
                  <li>• Transfer Certificate from previous school</li>
                  <li>• Migration certificate from respective board</li>
                  <li>• Conduct and character certificate</li>
                  <li>• Stream eligibility certificate (for Class XI)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Category-Specific Documents</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Reserved Category Students</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>SC/ST Category:</strong></li>
                  <li>• Caste certificate from competent authority</li>
                  <li>• Non-creamy layer certificate (if applicable)</li>
                  <li><strong>OBC Category:</strong></li>
                  <li>• OBC certificate with validity date</li>
                  <li>• Non-creamy layer certificate</li>
                  <li><strong>EWS Category:</strong></li>
                  <li>• Income and asset certificate</li>
                  <li>• Residence proof within jurisdiction</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-3">Special Cases</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>PWD (Persons with Disability):</strong></li>
                  <li>• Disability certificate from medical board</li>
                  <li>• Special needs assessment report</li>
                  <li><strong>Sports/Cultural Quota:</strong></li>
                  <li>• Achievement certificates and medals</li>
                  <li>• Performance video/portfolio</li>
                  <li>• Coaching institute certificates</li>
                  <li><strong>Sibling Quota:</strong></li>
                  <li>• Current student enrollment certificate</li>
                  <li>• School ID card copy of sibling</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Financial Documents</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Fee Payment Documents</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Demand Draft for admission fees</li>
                  <li>• Bank account details for auto-debit setup</li>
                  <li>• Previous fee payment receipts (transfers)</li>
                  <li>• Security deposit payment proof</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-3">Scholarship/Concession</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Family income certificate (last 3 years)</li>
                  <li>• Employment certificate of parents</li>
                  <li>• Bank statements (last 6 months)</li>
                  <li>• Property ownership documents</li>
                  <li>• BPL card (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Document Submission Guidelines</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Original Documents Required</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Birth certificate</li>
                  <li>• Transfer certificate</li>
                  <li>• Mark sheets/report cards</li>
                  <li>• Migration certificate</li>
                  <li>• Character certificate</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <em>Originals will be verified and returned after admission confirmation.</em>
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-3">Attestation Requirements</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Gazetted Officer signature</li>
                  <li>• School Principal certification</li>
                  <li>• Notary public attestation</li>
                  <li>• Self-attestation for copies</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <em>All photocopies must be clearly legible and properly attested.</em>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Important Instructions</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• All documents must be submitted in a clear plastic folder with student's name labeled</li>
              <li>• Ensure all photocopies are clear and readable; blurred copies will be rejected</li>
              <li>• Documents in regional languages must be accompanied by English translations</li>
              <li>• Any discrepancy in documents may lead to admission cancellation</li>
              <li>• Keep additional copies of all documents for your personal records</li>
              <li>• Submit documents in the order listed in the checklist provided with admission form</li>
              <li>• Late submission of documents may result in forfeiture of admission seat</li>
              <li>• Contact admission office for any clarification on document requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;