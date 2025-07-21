const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-primary mb-6">
          Welcome to Aastha Vidya Mandir Dashboard
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Welcome to the official dashboard of Aastha Vidya Mandir, Jawanga. Our English Medium School 
            has been serving the rural community with dedication since 1985, providing quality education 
            and fostering holistic development in every student. Here you can access all important information, 
            announcements, and updates about our school activities, academic programs, and community initiatives.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We believe in nurturing young minds with values, knowledge, and skills that prepare them for 
            future challenges while staying rooted in our cultural heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;