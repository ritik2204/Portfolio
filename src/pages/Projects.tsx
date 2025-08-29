import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileText, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolioData from "@/data/portfolio.json";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "ML", "Computer Vision", "NLP", "Real-time", "Deep Learning"];

  const filteredProjects = selectedFilter === "All" 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()))
      );

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Projects & Case Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Showcasing real-world applications of machine learning, data science, and AI solutions 
          with measurable impact and technical excellence.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center mb-12"
      >
        <Filter className="h-5 w-5 text-muted-foreground mt-2" />
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={selectedFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFilter(filter)}
            className="transition-all duration-200"
          >
            {filter}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full bg-card/40 backdrop-blur border-border/40 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl text-accent">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.links.repo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.links.report && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.report} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Report
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">No projects found for the selected filter.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;