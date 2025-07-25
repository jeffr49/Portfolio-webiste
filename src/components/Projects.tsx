import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Brand Recognition Model and OCR",
      description: "Developed a real-time brand detection system using YOLOv8 and OCR to extract MRP and expiry dates from live feeds. Built a custom-labeled dataset, optimized the YOLO model, and integrated Norfair-based object tracking into a web application for AI-driven retail automation.",
      tech: ["YOLOv8", "OCR", "Norfair", "Python", "Computer Vision"],
      links: {
        github: "https://github.com/jeffr49/Brand-Detection-Model",        
      },
      achievement: "Flipkart GRiD 6.0 Semifinalist"
    },
    {
      title: "AgriScan: AI-Driven Plant Disease Detection",
      description: "Developed AgriScan, a Flutter-based mobile app that uses machine learning and a Dockerized backend (FastAPI, TensorFlow) to detect plant diseases from leaf images. The app enables users to scan or upload images for real-time disease classification and provides detailed disease information.",
      tech: ["Flutter", "FastAPI", "TensorFlow", "Docker", "Computer Vision"],
      links: {
        github: "https://github.com/jeffr49/AgriScan-Plant-Disease-Detection",        
      }
    },
    {
      title: "Fruit Freshness Model Using CNN",
      description: "Developed a CNN-based model in Python using Roboflow to assess the freshness of apples, bananas, and oranges. Collected, labeled, and augmented a balanced dataset of fresh and rotten fruits, and optimized performance through preprocessing and hyperparameter tuning.",
      tech: ["CNN", "Python", "Roboflow", "Data Augmentation", "Deep Learning"],
      links: {
        github: "https://github.com/jeffr49/Fruit-freshness-detection-model-using-CNN",        
      },
      achievement: "Flipkart GRiD 6.0 Semifinalist"
    },
    {
      title: "Building Neural Network from Scratch for EMNIST",
      description: "Developed a custom deep learning model from scratch for EMNIST handwritten character recognition, using a fully connected neural network with skip connections and manual backpropagation. Achieved high accuracy and robust metric tracking in the TensorCraft Hackathon.",
      tech: ["NumPy", "Pandas", "Matplotlib", "Neural Networks", "Backpropagation"],
      links: {
        github: "https://github.com/jeffr49/Building-Neural-Network-from-scratch-for-EMNIST",        
      },
      achievement: "TensorCraft NIT-Trichy Finalist"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my AI/ML projects that demonstrate expertise in computer vision, deep learning, and real-world problem solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col h-full">
                {project.achievement && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                      🏆 {project.achievement}
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/jeffr49" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;