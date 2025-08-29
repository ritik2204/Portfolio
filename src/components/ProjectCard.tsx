import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  tags: string[];
  summary: string;
  highlights: string[];
  links: {
    repo?: string;
    demo?: string;
    report?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
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
  );
};

export default ProjectCard;