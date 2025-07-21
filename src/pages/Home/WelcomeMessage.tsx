const WelcomeMessage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Welcome Message
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Dear Students, Parents, and Community Members,
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            It gives me immense pleasure to welcome you to Aastha Vidya Mandir, Jawanga. Our school stands 
            as a beacon of hope and excellence in rural education, committed to providing world-class learning 
            opportunities in an English medium environment while preserving our local values and traditions.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            At Aastha Vidya Mandir, we believe that education is the foundation for personal growth and 
            community development. Our dedicated faculty, modern facilities, and comprehensive curriculum 
            ensure that every child receives the best possible education, preparing them to face global 
            challenges with confidence and integrity.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Together, let us build a brighter future for our children and our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;