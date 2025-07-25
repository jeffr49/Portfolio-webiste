import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "jeffreyrufus2005@gmail.com",
      href: "mailto:jeffreyrufus2005@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7548856679",
      href: "tel:+917548856679"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jeffrey-rufus-506446287/",
      href: "https://www.linkedin.com/in/jeffrey-rufus-506446287/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jeffr49",
      href: "https://github.com/jeffr49"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or exciting AI/ML projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a passionate AI/ML engineer, want to collaborate on a project, 
                or just want to chat about the latest developments in artificial intelligence, I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <method.icon className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{method.label}</p>
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Quick Actions</h3>
              
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:jeffreyrufus2005@gmail.com">
                    <Mail size={20} />
                    Send me an Email
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="https://drive.google.com/file/d/1H1FWxVhHpTby6MoMap_GVnOO0rEWYhZd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
                
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <a href="https://www.linkedin.com/in/jeffrey-rufus-506446287/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-4 bg-secondary rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-accent" size={16} />
                  <span className="font-medium text-foreground">Current Location</span>
                </div>
                <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Open to remote opportunities and relocation
                </p>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-hero-gradient rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary-foreground">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              I'm currently seeking opportunities to apply my AI/ML expertise in challenging real-world projects. 
              Let's discuss how we can create innovative solutions together.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:jeffreyrufus2005@gmail.com">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;