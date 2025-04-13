import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const EnhancedContact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactItems = [
    {
      icon: <Phone className="text-white mt-1" size={20} />,
      title: "Phone",
      content: "+91 7588688292"
    },
    {
      icon: <Mail className="text-white mt-1" size={20} />,
      title: "Email",
      content: (
        <a 
          href="mailto:isha21789@gmail.com" 
          className="text-white hover:underline"
        >
          isha21789@gmail.com
        </a>
      )
    },
    {
      icon: <Linkedin className="text-white mt-1" size={20} />,
      title: "LinkedIn",
      content: (
        <a 
          href="https://www.linkedin.com/in/isha-jadhav-626b51265" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          linkedin.com/in/isha-jadhav-626b51265
        </a>
      )
    },
    {
      icon: <MapPin className="text-white mt-1" size={20} />,
      title: "Location",
      content: "Shirpur, India"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-16 bg-gradient-to-br from-indigo-900 to-purple-800 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            {contactItems.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-full bg-white/10">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-white/90">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50"
              />
              {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50"
              />
              {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 resize-none"
              />
              {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message}</p>}
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-white text-indigo-900 hover:bg-white/90 transition-all duration-300 hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};
