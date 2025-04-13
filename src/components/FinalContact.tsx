import React, { useState } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { motion } from "framer-motion";

export const FinalContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast({
      title: "Message sent!",
      description: "This is a mock submission. Check console for data.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-sans tracking-tight text-gray-900">
          Get In Touch
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-6 p-6 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="h-7 w-7 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Email</h3>
                <p className="text-lg font-semibold text-gray-800">isha21789@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="h-7 w-7 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Phone</h3>
                <p className="text-lg font-semibold text-gray-800">+91 7588688292</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 rounded-lg hover:bg-gray-100 transition-colors">
              <Linkedin className="h-7 w-7 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-600">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/isha-jadhav-626b51265" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 hover:underline transition-all duration-200">
                  isha-jadhav-626b51265
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 rounded-lg hover:bg-gray-100 transition-colors">
              <MapPin className="h-7 w-7 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Location</h3>
                <p className="text-lg font-semibold text-gray-800">Shirpur, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <Input
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="py-3 px-4 text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="py-3 px-4 text-base"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="py-3 px-4 text-base"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90 transition-colors"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
