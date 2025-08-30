import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Briefcase, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolioData from "@/data/portfolio.json";
import Experience from "./Experience";
import DataVisualization from "./DataVisualization";
import ScholasticAchievements from "./ScholasticAchievements";
import CodeVisualization from "./CodeVisualization";
import InteractiveSkillsMap from "./InteractiveSkillsMap";
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
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        {/* Enhanced 3D Background */}
        <div className="absolute inset-0 z-0">
          <Experience />
        </div>
        
        {/* Additional Data Visualization Layer - Reduced opacity for better text visibility */}
        <div className="absolute inset-0 z-0 opacity-20">
          <DataVisualization />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Main hero content */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Badge variant="outline" className="mb-8 px-6 py-3 bg-accent/10 border-accent/30 text-accent font-medium text-sm animate-pulse">
                🚀 Available for Data Science Opportunities
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  {portfolioData.name}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-accent font-semibold mb-8 flex items-center justify-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-accent"
                >
                  🧠
                </motion.div>
                {portfolioData.role}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-accent"
                >
                  <CodeVisualization />
                </motion.div>
              </h2>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {portfolioData.summary}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Button size="lg" className="glow-on-hover" asChild>
                  <a href={portfolioData.contact.links.resume_pdf} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="glow-on-hover" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 justify-center"
              >
                <Button variant="ghost" size="icon" className="glow-on-hover" asChild>
                  <a href={portfolioData.contact.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="glow-on-hover" asChild>
                  <a href={portfolioData.contact.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="glow-on-hover" asChild>
                  <a href={`mailto:${portfolioData.contact.email}`} aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Overview Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div variants={cardVariants}>
                <Card className="bg-card/40 backdrop-blur border-border/40 hover:border-accent/40 transition-all duration-300 glow-on-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold text-accent">Latest Project</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {portfolioData.projects[0].title}
                    </p>
                    <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                      <Link to="/projects" className="text-accent hover:text-accent/80 flex items-center">
                        View Projects <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="bg-card/40 backdrop-blur border-border/40 hover:border-accent/40 transition-all duration-300 glow-on-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold text-accent">Experience</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Co-founder at Solcielo Innovacion
                    </p>
                    <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                      <Link to="/about" className="text-accent hover:text-accent/80 flex items-center">
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="bg-card/40 backdrop-blur border-border/40 hover:border-accent/40 transition-all duration-300 glow-on-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold text-accent">Location</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {portfolioData.location}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {portfolioData.skills.ml.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scholastic Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Scholastic Achievements
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic excellence and competitive programming accomplishments
            </p>
          </motion.div>
          <ScholasticAchievements />
        </div>
      </section>

      {/* Interactive Skills Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-6">
          <InteractiveSkillsMap />
        </div>
      </section>
    </div>
  );
};

export default Hero;