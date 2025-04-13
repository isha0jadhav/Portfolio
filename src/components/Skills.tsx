
import { Star, Code, Laptop, Palette } from "lucide-react";

const Skills = () => {
  const technicalSkills = {
    "Programming Languages": ["C", "Java", "SQL", "Python", "JavaScript", "TypeScript"],
    "Frameworks": ["HTML", "CSS", "Bootstrap"],
    "Tools": [
      "VS Code", 
      "Photoshop", 
      "Canva", 
      "Google Colab", 
      "GitHub", 
      "Eclipse", 
      "MS Excel", 
      "MS Word", 
      "Non-Programmable AI", 
      "Teachable Machines", 
      "Gemini", 
      "Other AI Tools via API"
    ]
  };

  const softSkills = [
    "Public Speaking", 
    "Communication", 
    "Presentation Skills",
    "Team Management", 
    "Leadership", 
    "Event Planning",
    "Creative Content Development", 
    "Networking",
    "Adaptability", 
    "Problem-Solving", 
    "Critical Thinking"
  ];

  const languages = [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" },
    { name: "Marathi", proficiency: "Fluent" },
    { name: "Gujarati", proficiency: "Fluent" },
    { name: "Japanese", proficiency: "Learning" }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Star className="text-primary" size={28} />
          <h2 className="section-title">Skills & Strengths</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-primary" />
              <h3 className="text-xl font-bold">Technical Skills</h3>
            </div>
            
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="mb-6 last:mb-0">
                <h4 className="font-semibold mb-2">{category}:</h4>
                <div className="flex flex-wrap">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-badge bg-primary/10 text-primary">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Laptop size={20} className="text-primary" />
              <h3 className="text-xl font-bold">Soft Skills</h3>
            </div>
            
            <div className="flex flex-wrap">
              {softSkills.map((skill) => (
                <span key={skill} className="skill-badge bg-primary/10 text-primary">{skill}</span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Palette size={20} className="text-primary" />
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            
            <div className="flex flex-wrap">
              {languages.map((lang) => (
                <div key={lang.name} className="skill-badge bg-primary/10 text-primary flex items-center gap-1">
                  {lang.name}
                  {lang.proficiency === "Learning" && (
                    <span className="text-xs text-muted-foreground"> (Learning)</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
