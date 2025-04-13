
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    { icon: <Github size={18} />, url: "https://github.com/isha0jadhav", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/isha-jadhav-626b51265", label: "LinkedIn" },
    { icon: <Mail size={18} />, url: "mailto:isha21789@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-r from-primary/90 to-purple-600/90 text-primary-foreground py-12 relative">
      <div className="container mx-auto px-4 text-center">
        <Button 
          variant="secondary" 
          size="icon" 
          className="absolute top-0 right-8 transform -translate-y-1/2 rounded-full hover:animate-bounce transition-all"
          onClick={scrollToTop}
        >
          <ArrowUp size={18} />
        </Button>
        
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                aria-label={link.label}
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 p-3 rounded-full transition-all hover:scale-125"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
          
          <motion.p 
            className="flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Isha Sachin Jadhav. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
