import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const Certificates = () => {
  const achievements = [
    {
      title: "Semifinalist Flipkart GRiD 6.0",
      description: "Semifinalist in the Flipkart GRiD 6.0 Robotics Challenge (International), demonstrating expertise in robotics and problem-solving at a competitive level.",
      type: "Competition",
      year: "2024"
    },
    {
      title: "Top 5% in NPTEL Data Science for Engineers",
      description: "Ranked in the Top 5% in the NPTEL Data Science for Engineers course conducted by IIT Madras, showcasing strong understanding of data science and ML concepts.",
      type: "Achievement",
      year: "2024"
    },
    {
      title: "Finalist TensorCraft NIT-Trichy",
      description: "Finalist in the TensorCraft Machine Learning hackathon organised by NIT-Trichy in which I built a custom neural network from scratch for the EMNIST dataset.",
      type: "Competition",
      year: "2024"
    }
  ];

  const certificates = [
    {
      title: "NPTEL Data Science for Engineers",
      issuer: "IIT Madras",
      description: "Comprehensive course covering data science fundamentals and machine learning concepts",
      link: "#"
    },
    {
      title: "Machine Learning Certification",
      issuer: "Kaggle",
      description: "Professional certification in machine learning concepts and practical applications",
      link: "#"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      description: "Specialization in neural networks architecture and deep learning techniques",
      link: "#"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      description: "Foundational course on generative AI models and their applications",
      link: "#"
    },
    {
      title: "Python, C, C++ Certification",
      issuer: "IIT Bombay",
      description: "Programming fundamentals and advanced concepts certification",
      link: "#"
    },
    {
      title: "HTML Essentials",
      issuer: "LinkedIn",
      description: "Web development fundamentals and HTML best practices",
      link: "#"
    },
    {
      title: "AI Foundations: Thinking Machines",
      issuer: "LinkedIn",
      description: "Foundational concepts in artificial intelligence and machine learning",
      link: "#"
    },
    {
      title: "Ethics in AI",
      issuer: "LinkedIn",
      description: "Understanding ethical considerations in AI development and deployment",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Achievements & Certificates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence and continuous learning in AI/ML and software development
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Major Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Award className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium">
                        {achievement.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {achievement.year}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Professional Certificates</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col h-full">
                  <h4 className="font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {cert.description}
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Continuously learning and staying updated with the latest in AI/ML
          </p>
          <Button variant="hero" size="lg">
            View Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;