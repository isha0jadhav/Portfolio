



import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

export const TestContact = () => {
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
    <section className="py-16">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <Input
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <Input
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <Textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};
