const Principal = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Principal's Desk
        </h1>
        
        <div className="bg-card p-8 rounded-lg border">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed italic mb-6">
              "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Dear Parents, Students, and Well-wishers,
            </p>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              As the Principal of Aastha Vidya Mandir, Jawanga, I am honored to lead this remarkable institution 
              that has been transforming lives through quality education for nearly four decades. Our commitment 
              to providing English medium education in a rural setting has opened doors of opportunity for 
              countless students who have gone on to achieve success in various fields.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              Education at Aastha Vidya Mandir goes beyond textbooks and examinations. We focus on developing 
              well-rounded individuals who are academically proficient, morally upright, and socially responsible. 
              Our dedicated teachers work tirelessly to nurture each child's unique potential, ensuring they 
              develop both confidence and competence.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              I invite you to be part of our journey as we continue to build a brighter future for our children 
              and our community. Together, we can achieve excellence and make a lasting impact.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mt-6">
              Warm regards,<br />
              <span className="font-semibold">Principal</span><br />
              <span className="text-school-primary">Aastha Vidya Mandir, Jawanga</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;