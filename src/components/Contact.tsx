import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
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

  return (
    <section id="contact" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            
            <div className="flex items-start space-x-4">
              <Phone className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">Phone</p>
                <p>+91 7588688292</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:isha21789@gmail.com" 
                  className="text-primary hover:underline"
                >
                  isha21789@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Linkedin className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/isha-jadhav-626b51265" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/isha-jadhav-626b51265
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <p className="font-medium">Location</p>
                <p>Shirpur, India</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
