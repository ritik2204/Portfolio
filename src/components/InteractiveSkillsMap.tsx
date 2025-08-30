import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, BarChart3, Cloud, Wrench } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const skillCategories = [
  { 
    title: "Programming", 
    skills: portfolioData.skills.programming, 
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    description: "Core programming languages for data science"
  },
  { 
    title: "Machine Learning", 
    skills: portfolioData.skills.ml, 
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    description: "ML frameworks and algorithms"
  },
  { 
    title: "Data Processing", 
    skills: portfolioData.skills.data, 
    icon: Database,
    color: "from-green-500 to-emerald-500",
    description: "Big data processing and manipulation"
  },
  { 
    title: "Visualization", 
    skills: portfolioData.skills.viz, 
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    description: "Data visualization and business intelligence"
  },
  { 
    title: "Cloud Platforms", 
    skills: portfolioData.skills.cloud, 
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
    description: "Cloud services and deployment"
  },
  { 
    title: "Tools & DevOps", 
    skills: portfolioData.skills.tools, 
    icon: Wrench,
    color: "from-indigo-500 to-purple-500",
    description: "Development and deployment tools"
  }
];

const InteractiveSkillsMap = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Interactive Skills Ecosystem
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my technical expertise across the data science pipeline. Click on categories to dive deeper into specific skills and technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          const isHovered = hoveredCategory === category.title;
          
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group"
            >
              <Card className={`
                bg-card/40 backdrop-blur-md border-border/40 
                hover:bg-card/60 transition-all duration-300 cursor-pointer
                ${isHovered ? 'scale-105 shadow-2xl' : ''}
              `}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-accent">{category.title}</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant={selectedSkill === skill ? "default" : "secondary"}
                          className={`
                            text-xs cursor-pointer transition-all duration-200
                            ${selectedSkill === skill ? `bg-gradient-to-r ${category.color} text-white` : ''}
                            ${isHovered ? 'shadow-lg' : ''}
                          `}
                          onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-border/30"
                    >
                      <div className={`h-2 bg-gradient-to-r ${category.color} rounded-full`} />
                      <p className="text-xs text-muted-foreground mt-2">
                        {category.skills.length} technologies mastered
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <Card className="bg-accent/10 border-accent/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-accent mb-2">
                Selected: {selectedSkill}
              </h3>
              <p className="text-muted-foreground">
                Click on different skills to explore my expertise or view related projects in my portfolio.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveSkillsMap;