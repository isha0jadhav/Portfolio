import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { FinalContact } from "../components/FinalContact";
import Footer from "../components/Footer";
import { Moon, Sun } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check for user preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Apply theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save preference
    localStorage.setItem("theme", theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 top-20 z-50"
        >
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 shadow-lg hover:scale-110 transition-all"
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
        </motion.div>
      </AnimatePresence>
      
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <FinalContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
