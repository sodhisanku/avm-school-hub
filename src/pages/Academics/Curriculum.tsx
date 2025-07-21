const Curriculum = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Curriculum
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Our curriculum at Aastha Vidya Mandir follows the CBSE pattern, providing students with 
            a well-rounded education that balances academic excellence with practical skills and 
            character development. The curriculum is designed to meet the needs of rural students 
            while maintaining international standards.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Core Subjects</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">Languages</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• English (Primary Language)</li>
                  <li>• Hindi (Second Language)</li>
                  <li>• Sanskrit (Optional)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Sciences</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mathematics</li>
                  <li>• Physics</li>
                  <li>• Chemistry</li>
                  <li>• Biology</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Social Sciences</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• History</li>
                  <li>• Geography</li>
                  <li>• Political Science</li>
                  <li>• Economics</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Specialized Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Technology Integration</h3>
                <p className="text-muted-foreground text-sm">
                  Computer science, digital literacy, and basic programming to prepare students 
                  for the digital age.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Environmental Studies</h3>
                <p className="text-muted-foreground text-sm">
                  Practical learning about local ecology, sustainability, and environmental 
                  conservation projects.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Life Skills Education</h3>
                <p className="text-muted-foreground text-sm">
                  Communication skills, leadership development, and practical life skills 
                  for personal growth.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Cultural Studies</h3>
                <p className="text-muted-foreground text-sm">
                  Local history, traditional arts, and cultural heritage preservation 
                  integrated with modern education.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-school-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Assessment Methods</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Continuous and Comprehensive Evaluation (CCE)</li>
              <li>• Regular unit tests and periodic examinations</li>
              <li>• Project-based learning and practical assessments</li>
              <li>• Skill-based evaluations in arts, sports, and extracurricular activities</li>
              <li>• Parent-teacher conferences for holistic development tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;