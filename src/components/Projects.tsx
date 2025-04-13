
import { FileCode, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Virtual Flip-Flops and Counter Trainer Simulator",
      description: "A Java-based educational simulator for digital logic concepts",
      details: [
        "Designed and implemented a Java-based virtual trainer for flip-flops and counter systems",
        "Simulates different types of flip-flops (SR, D, JK, T) and counters to aid students in understanding digital logic concepts"
      ],
      tags: ["Java", "Digital Logic", "Education", "Simulation"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Monthly Expense Tracker using Python",
      description: "Python application for personal finance management",
      details: [
        "Developed a Python-based application to track monthly expenses efficiently",
        "Integrated data visualization tools to present spending patterns and analytics"
      ],
      tags: ["Python", "Finance", "Data Visualization"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Phishing Domain Detector using Basic Python",
      description: "Security tool to identify suspicious URLs",
      details: [
        "Built a basic tool to detect potential phishing domains based on URL analysis",
        "Implemented rule-based detection techniques to flag suspicious domains"
      ],
      tags: ["Python", "Security", "URL Analysis"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Project and Events by react",
      description: "A showcase project demonstrating key skills",
      details: [
        "Built with modern web technologies",
        "Demonstrates full-stack capabilities"
      ],
      tags: ["React", "TypeScript", "Full-stack"],
      links: {
        github: "https://github.com/isha0jadhav/Project-Demo",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <FileCode className="text-primary" size={28} />
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border-primary/10 overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="list-disc ml-5 space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-foreground/90">{detail}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-secondary px-2 py-1 rounded-full text-foreground/70">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-primary/10 bg-primary/5">
                {index === 3 ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-1"
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
