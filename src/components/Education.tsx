
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "R.C. Patel Institute of Technology",
      location: "Shirpur (SY B.Tech)",
      gpa: "CGPA: 8.19 (current semester)"
    },
    {
      degree: "HSC",
      institution: "PBM Highschool",
      location: "Shirpur",
      gpa: "Percentage: 84.17%"
    },
    {
      degree: "AISSC",
      institution: "Amrishbhai R. Patel School",
      location: "Shirpur",
      gpa: "Percentage: 91%"
    }
  ];

  const certifications = [
    {
      name: "Programming in Java",
      issuer: "NPTEL Certification"
    },
    {
      name: "Infosys Springboard Certificate",
      details: "Advanced Functional Data Structures and Algorithms"
    },
    {
      name: "Internal Smart India Hackathon 2023",
      details: "Participated and contributed in problem-solving tasks"
    },
    {
      name: "Mastering Java (Full Beginners to Advanced)"
    },
    {
      name: "SQL (Basic) Certification",
      issuer: "HackerRank"
    },
    {
      name: "Great Learning Certification",
      details: "MySQL Basic"
    },
    {
      name: "Great Learning Certification",
      details: "Statistics for Data Science"
    },
    {
      name: "Programming in C",
      issuer: "GDSC Certification"
    }
  ];

  const achievements = [
    "2-Star CodeChef Profile",
    "Mukesh Patel Charitable Trust Women's Cricket League - Best Bowler Award",
    "District Level Taekwondo Champion",
    "All India Open Mathematics Scholarship Examination - Qualified"
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="text-primary" size={28} />
          <h2 className="section-title">Education & Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <h4 className="font-bold">{edu.degree}</h4>
                  <p>{edu.institution}, {edu.location}</p>
                  <p className="text-primary">{edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card p-3 rounded shadow-sm">
                  <p className="font-semibold">{cert.name}</p>
                  {cert.issuer && <p className="text-sm text-muted-foreground">{cert.issuer}</p>}
                  {cert.details && <p className="text-sm">{cert.details}</p>}
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Achievements & Awards</h3>
            <ul className="list-disc ml-5 space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
