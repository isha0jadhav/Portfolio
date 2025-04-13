
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github, Download, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-28 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            className="w-full md:w-1/3 lg:w-1/4 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl transform hover:scale-105 transition-all duration-300">
              <img
                src="/Image-uploads/5b6ef064-7deb-4e4b-b3c0-9beb858047b1.png"
                alt="Isha Jadhav"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-primary font-medium">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-2">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Isha Sachin Jadhav</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-primary mb-6 font-medium">
              Computer Engineering Student
            </h2>
            
            <p className="text-lg mb-8 max-w-2xl">
              Proactive Computer Engineering student with excellent teamwork,
              communication, and programming abilities. Eager to apply academic
              learning in real-world contexts while continuously growing through
              new challenges.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <Button className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 hover:scale-105 transition-all" asChild>
                <a href="#contact">
                  Contact Me <ChevronRight size={16} />
                </a>
              </Button>
              <Button variant="outline" className="gap-2 border-primary hover:bg-primary/10 hover:scale-105 transition-all" asChild>
                <a href="/Image-uploads/Isha_Jadhav_One_Page_Resume_Styled_page-0001.jpg" download="Isha_Jadhav_CV.jpg">
                  <Download size={16} />
                  CV
                </a>
              </Button>
            </div>
            
            <motion.div 
              className="flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="https://github.com/isha0jadhav" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary transition-colors hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=isha21789@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary transition-colors hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/isha-jadhav-626b51265" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary transition-colors hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
