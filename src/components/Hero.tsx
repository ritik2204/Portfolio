import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Experience from "./Experience";
import portfolioData from "@/data/portfolio.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Experience />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          {/* Main Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-6 text-accent border-accent/40">
                Currently pursuing MSc Big Data Science @ QMUL
              </Badge>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
            >
              {portfolioData.name}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-accent font-medium mb-6"
            >
              {portfolioData.role}
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              {portfolioData.summary}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" asChild>
                <a href={portfolioData.contact.links.resume_pdf} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start mt-8"
            >
              <Button variant="ghost" size="icon" asChild>
                <a href={portfolioData.contact.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={portfolioData.contact.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${portfolioData.contact.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Quick Overview Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div variants={cardVariants}>
              <Card className="bg-card/40 backdrop-blur border-border/40 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-accent mb-2">Latest Project</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {portfolioData.projects[0].title}
                  </p>
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                    <Link to="/projects" className="text-accent hover:text-accent/80">
                      View Projects <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-card/40 backdrop-blur border-border/40 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-accent mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Co-founder at Solcielo Innovacion
                  </p>
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                    <Link to="/about" className="text-accent hover:text-accent/80">
                      Learn More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-card/40 backdrop-blur border-border/40 hover:border-accent/40 transition-colors sm:col-span-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-accent mb-3">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.ml.slice(0, 6).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto mt-3">
                    <Link to="/about" className="text-accent hover:text-accent/80">
                      View All Skills <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;