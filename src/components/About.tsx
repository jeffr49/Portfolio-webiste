import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Python", "C/C++", "JavaScript", "Machine Learning", "TensorFlow", 
    "PyTorch", "Computer Vision", "Deep Learning", "Neural Networks", 
    "NLP", "Docker", "Git", "HTML/CSS"
  ];

  const experiences = [
    {
      title: "Deep Learning Lead",
      organization: "Bionary Club VIT Chennai",
      period: "May 2024 - Present",
      description: "Building neural network projects and mentoring club members on their applications in real-world scenarios."
    },
    {
      title: "Technical Team Member",
      organization: "Artificial Intelligence Club VIT Chennai",
      period: "Jan 2024 - Present",
      description: "Researching and building projects as part of the club."
    },
    {
      title: "Management Team Member",
      organization: "ACM VIT Chennai",
      period: "Jul 2024 - Present",
      description: "Actively managing various departments and its members."
    },
    {
      title: "AI Engineer Intern",
      organization: "Finari Services Pvt Ltd",
      period: "May 2025 – July 2025",
      description: (
        <>
          <details className="mb-2">
            <summary className="cursor-pointer text-accent font-medium">Read more</summary>
            <div className="mt-2">
              <div className="font-semibold mb-1">Project 1: AI-powered Task Management Bot</div>
              <ul className="list-disc ml-6 mb-2">
                <li>Developed a smart task assistant that understands natural language queries and returns real-time tabular task reports.</li>
                <li>Built a conversational interface using Amazon Lex (V2) and AWS Lambda (Node.js) for backend queries.</li>
                <li>Implemented slot-filling, intent chaining, and context-aware dialogues for natural user flow.</li>
                <li>Rendered tabular reports in chat using structured message responses.</li>
                <li>Integrated Amazon Cognito for secure, role-based access control.</li>
              </ul>
              <div className="font-semibold mb-1">Project 2: Future Expense Forecasting with FFNN & SageMaker</div>
              <ul className="list-disc ml-6">
                <li>Designed a deep learning model (FFNN in TensorFlow) to forecast consumer expenses using economic data.</li>
                <li>Applied time-series preprocessing, feature engineering, and model optimization for accuracy.</li>
                <li>Deployed the model to AWS SageMaker for real-time inference and built a user interface for live predictions.</li>
                <li>Monitored usage and latency with Amazon CloudWatch.</li>
              </ul>
            </div>
          </details>
          <div>Worked as an AI Engineer Intern at Finari Services Pvt Ltd.</div>
        </>
      ),
    }
  ];

  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate AI/ML student with hands-on expertise in computer vision and deep learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am an enthusiastic Computer Science Engineering student at VIT Chennai specializing in 
                Artificial Intelligence and Machine Learning. With a strong CGPA of 9.02, I've developed 
                hands-on expertise in computer vision and object detection through various challenging projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a semifinalist in the Flipkart GRiD 6.0 Robotics Track, I've proven my ability to build 
                real-world solutions like brand detection systems and mobile applications for plant disease detection. 
                I excel in dataset creation, model training, optimization, and deployment.
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-semibold text-lg">Bachelor's in Computer Science Engineering</h4>
                <p className="text-accent font-medium">Vellore Institute of Technology, Chennai</p>
                <p className="text-muted-foreground">2023 - 2027 | CGPA: 9.02</p>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-accent pl-6">
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-accent font-medium">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;