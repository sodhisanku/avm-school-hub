const Achievements = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Student Achievements
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            The students of Aastha Vidya Mandir have consistently excelled in academics, sports, 
            cultural activities, and social service. Their achievements reflect the quality of 
            education and holistic development fostered by our institution.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Academic Excellence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Board Examination Results</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 98% pass rate in Class X (2023-24)</li>
                  <li>• 95% pass rate in Class XII (2023-24)</li>
                  <li>• 15 students scored above 90% in Class X</li>
                  <li>• 8 students scored above 85% in Class XII</li>
                  <li>• District rank holders in Mathematics and Science</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Competitive Examinations</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 5 students qualified for JEE Mains (2024)</li>
                  <li>• 3 students cleared NEET entrance exam</li>
                  <li>• Multiple selections in state-level scholarships</li>
                  <li>• National Talent Search Examination qualifiers</li>
                  <li>• Olympiad medal winners in Science & Math</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Sports Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Cricket</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• District Champions (Under-16)</li>
                  <li>• State-level participation</li>
                  <li>• Individual batting records</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Athletics</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regional gold medals</li>
                  <li>• Long jump state record</li>
                  <li>• Marathon participants</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Team Sports</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Football district runners-up</li>
                  <li>• Volleyball championship</li>
                  <li>• Basketball regional playoffs</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Cultural & Literary Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Arts & Culture</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• First prize in district cultural festival</li>
                  <li>• Classical dance competition winners</li>
                  <li>• Inter-school drama competition champions</li>
                  <li>• Traditional music ensemble state participation</li>
                  <li>• Art exhibition featured in local media</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Literary Excellence</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• English debate competition district winners</li>
                  <li>• Poetry writing contest state-level recognition</li>
                  <li>• School magazine awarded best publication</li>
                  <li>• Essay competition multiple prize winners</li>
                  <li>• Storytelling competition regional champions</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Social Service & Leadership</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">Community Service Projects</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Our students have led numerous community service initiatives:
                </p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Village literacy program - taught 200+ adults basic reading</li>
                  <li>• Environmental conservation - planted 1000+ trees</li>
                  <li>• Health awareness campaigns in 5 neighboring villages</li>
                  <li>• COVID-19 relief distribution to 300 families</li>
                  <li>• Digital literacy training for elderly residents</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2">Leadership Recognition</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Student council members in district youth parliament</li>
                  <li>• Recognition from District Collector for social service</li>
                  <li>• Featured in state education department newsletter</li>
                  <li>• Youth leadership awards from local government</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Notable Alumni Success</h2>
            <p className="text-muted-foreground mb-3">
              Our graduates continue to make us proud with their achievements:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Dr. Priya Sharma (Class of 2010) - Currently pursuing MBBS at AIIMS</li>
              <li>• Eng. Rajesh Kumar (Class of 2008) - Software Engineer at multinational company</li>
              <li>• Ms. Anita Verma (Class of 2012) - IAS officer serving in district administration</li>
              <li>• Mr. Suresh Patel (Class of 2015) - Successful entrepreneur in agricultural technology</li>
              <li>• Dr. Meera Singh (Class of 2009) - PhD in Environmental Science, research scholar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;