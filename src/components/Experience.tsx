
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Google Developer Groups (On Campus) RCPIT",
      role: "Design and Media Team",
      period: "2023 - Present",
      details: [
        "Created engaging graphics and promotional content for community engagement",
        "Designed event materials for GDG activities",
        "Organized CodeCraze 2025 hackathon event"
      ]
    },
    {
      title: "E-Cell RCPIT",
      role: "Content Creation Team",
      period: "2023 - Present",
      details: [
        "Hosted Tycoon Tank event as Auctioneer",
        "Developed content strategies to boost engagement",
        "Built relationships with investors and stakeholders"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="text-primary" size={28} />
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <motion.div 
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 md:pl-0 timeline-item"
              variants={itemVariants}
            >
              <div className="md:grid md:grid-cols-[200px_1fr] gap-6 items-start">
                <div className="mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <p className="text-foreground/80 font-medium">{exp.title}</p>
                  {exp.period && (
                    <p className="text-muted-foreground text-sm flex items-center gap-1 md:justify-end">
                      <Calendar size={14} className="inline md:order-2" />
                      <span>{exp.period}</span>
                    </p>
                  )}
                </div>
                
                <div className="bg-card border border-primary/10 rounded-lg p-5 shadow-md hover:shadow-lg transition-all hover:border-primary/30 hover:-translate-y-1 duration-300">
                  <ul className="list-disc ml-5 space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="text-foreground/90">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
