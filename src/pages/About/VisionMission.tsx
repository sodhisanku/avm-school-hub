const VisionMission = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Vision & Mission
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold text-school-primary mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading educational institution that empowers rural students with world-class English 
              medium education, fostering global citizenship while preserving cultural roots and values.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold text-school-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide holistic education that develops academic excellence, character, and life skills, 
              preparing students to become responsible citizens and future leaders who contribute positively 
              to society.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-school-primary mb-4">Core Values</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="font-medium text-school-primary mr-2">Excellence:</span>
              Striving for the highest standards in education and character development.
            </li>
            <li className="flex items-start">
              <span className="font-medium text-school-primary mr-2">Integrity:</span>
              Building honesty, transparency, and ethical behavior in all our actions.
            </li>
            <li className="flex items-start">
              <span className="font-medium text-school-primary mr-2">Innovation:</span>
              Embracing modern teaching methods while respecting traditional wisdom.
            </li>
            <li className="flex items-start">
              <span className="font-medium text-school-primary mr-2">Inclusivity:</span>
              Providing equal opportunities for all students regardless of their background.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;