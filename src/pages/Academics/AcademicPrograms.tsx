const AcademicPrograms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Academic Programs
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Aastha Vidya Mandir offers comprehensive academic programs designed to provide students with 
            a strong foundation in English medium education while ensuring holistic development through 
            various co-curricular and extracurricular activities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Primary Education (Classes I-V)</h2>
            <p className="text-muted-foreground">
              Building strong fundamentals in English, Mathematics, Science, and Social Studies with 
              emphasis on reading, writing, and basic computational skills.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Middle School (Classes VI-VIII)</h2>
            <p className="text-muted-foreground">
              Advanced curriculum including specialized subjects, practical learning, and preparation 
              for higher secondary education with focus on critical thinking.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Secondary Education (Classes IX-X)</h2>
            <p className="text-muted-foreground">
              Board examination preparation with comprehensive coverage of CBSE curriculum, practical 
              sessions, and career guidance for future academic choices.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-school-primary mb-3">Higher Secondary (Classes XI-XII)</h2>
            <p className="text-muted-foreground">
              Stream-wise education in Science, Commerce, and Arts with specialized faculty and 
              preparation for competitive examinations and higher education.
            </p>
          </div>
        </div>
        
        <div className="bg-school-primary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-school-primary mb-3">Special Features</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• English medium instruction with Hindi and local language support</li>
            <li>• Computer education and digital literacy programs</li>
            <li>• Sports and physical education activities</li>
            <li>• Arts, music, and cultural programs</li>
            <li>• Value education and moral development</li>
            <li>• Regular assessments and parent-teacher interactions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicPrograms;