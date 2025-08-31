import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, X } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const ProjectCards3D = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              z: 50
            }}
            className="perspective-1000"
          >
            <Card 
              className="bg-card/40 backdrop-blur border-border/40 hover:border-accent/40 transition-all duration-500 cursor-pointer transform-gpu"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-accent">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.summary}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent/70 font-medium">
                    Click to explore
                  </span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-accent/50"
                  >
                    ⚡
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: 30 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: -30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="bg-card border-accent/30 shadow-2xl">
                <CardContent className="p-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold mb-4 text-accent">
                    {selectedProject.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.summary}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-muted-foreground text-sm">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.links.repo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.links.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {selectedProject.links.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.links.report && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.links.report} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Report
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCards3D;