import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-gradient"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-up">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Jeffrey Rufus
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Data Science & AI/ML Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about building intelligent systems that solve real-world problems. 
              Specializing in computer vision, deep learning, and creating impactful AI solutions.
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/jeffr49"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/jeffrey-rufus-506446287/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-foreground" />
              </a>
              <a
                href="mailto:jeffreyrufus2005@gmail.com"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;