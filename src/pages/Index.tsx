import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground text-center">
        <p>&copy; 2024 Jeffrey Rufus. Built with passion and modern web technologies.</p>
      </footer>
    </div>
  );
};

export default Index;
