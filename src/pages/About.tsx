import { motion } from "framer-motion";
import { MapPin, Calendar, Award, BookOpen, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import portfolioData from "@/data/portfolio.json";

const About = () => {
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

  const skillCategories = [
    { title: "Programming Languages", skills: portfolioData.skills.programming, icon: "💻" },
    { title: "Machine Learning", skills: portfolioData.skills.ml, icon: "🤖" },
    { title: "Data Processing", skills: portfolioData.skills.data, icon: "📊" },
    { title: "Visualization", skills: portfolioData.skills.viz, icon: "📈" },
    { title: "Cloud & Tools", skills: [...portfolioData.skills.cloud, ...portfolioData.skills.tools], icon: "☁️" },
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
          About Me
        </h1>
        <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{portfolioData.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            <span>{portfolioData.role}</span>
          </div>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {portfolioData.summary}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-3 gap-8"
      >
        {/* Experience Section */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-2xl text-accent flex items-center gap-2">
                <Users className="h-6 w-6" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-accent/30 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  <div className="pb-6">
                    <h3 className="text-lg font-semibold text-accent">{exp.title}</h3>
                    <p className="text-foreground font-medium">{exp.company}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.dates}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div variants={itemVariants} className="space-y-8">
          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-xl text-accent flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {portfolioData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.dates}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                  {edu.note && (
                    <Badge variant="secondary" className="text-xs mt-2">{edu.note}</Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-xl text-accent flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {portfolioData.achievements.slice(0, 5).map((achievement, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <Award className="h-3 w-3 text-accent mt-1 shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                      <span>{category.icon}</span>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <Card className="bg-card/40 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-xl text-accent flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {portfolioData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                    <Award className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;