import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import portfolioData from "@/data/portfolio.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone}`,
      description: "Let's have a chat"
    },
    {
      icon: MapPin,
      title: "Location",
      value: portfolioData.location,
      href: "#",
      description: "Based in London, UK"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: portfolioData.contact.links.github,
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: portfolioData.contact.links.linkedin,
      description: "Let's connect professionally"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Interested in collaboration, have a project in mind, or just want to say hello? 
          I'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-5 gap-8"
      >
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
          {/* Contact Methods */}
          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/20">
                  <method.icon className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">{method.title}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    {method.href !== "#" ? (
                      <a 
                        href={method.href} 
                        className="text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm text-accent">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Find Me Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                >
                  <link.icon className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">{link.title}</p>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={portfolioData.contact.links.resume_pdf} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={`mailto:${portfolioData.contact.email}?subject=Collaboration Opportunity`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Quick Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;