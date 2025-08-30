import { motion } from "framer-motion";
import { Award, Trophy, Target, Users, Code, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolioData from "@/data/portfolio.json";

const ScholasticAchievements = () => {
  const achievementIcons = [
    { icon: Award, color: "text-yellow-400" },
    { icon: Trophy, color: "text-amber-400" },
    { icon: Medal, color: "text-orange-400" },
    { icon: Target, color: "text-red-400" },
    { icon: Users, color: "text-blue-400" },
    { icon: Code, color: "text-purple-400" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {portfolioData.achievements.map((achievement, index) => {
        const IconComponent = achievementIcons[index % achievementIcons.length].icon;
        const iconColor = achievementIcons[index % achievementIcons.length].color;
        
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
              <CardContent className="p-6 flex flex-col items-start h-full">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className={`p-3 rounded-full bg-accent/10 mb-4 ${iconColor} group-hover:bg-accent/20 transition-colors`}
                >
                  <IconComponent className="h-6 w-6" />
                </motion.div>
                
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                </div>

                {/* Animated badge based on achievement type */}
                <div className="mt-4">
                  {achievement.includes("Rank") && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-600 border-yellow-500/30">
                      Top Performer
                    </Badge>
                  )}
                  {achievement.includes("Winner") && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 border-green-500/30">
                      Champion
                    </Badge>
                  )}
                  {achievement.includes("Runner-up") && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 border-blue-500/30">
                      Finalist
                    </Badge>
                  )}
                  {achievement.includes("Qualified") && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-600 border-purple-500/30">
                      Qualified
                    </Badge>
                  )}
                  {achievement.includes("Codeforces") && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-600 border-orange-500/30">
                      Competitive Programming
                    </Badge>
                  )}
                </div>

                {/* Floating particles effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent rounded-full"
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ScholasticAchievements;