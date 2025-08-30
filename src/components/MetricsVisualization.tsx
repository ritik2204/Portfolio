import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Target, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend: string;
  color: string;
  delay: number;
}

const MetricCard = ({ icon, value, label, trend, color, delay }: MetricCardProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, delay * 100);
    
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group"
    >
      <Card className="bg-card/20 backdrop-blur-md border-border/30 hover:bg-card/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${color} group-hover:scale-110 transition-transform`}>
              {icon}
            </div>
            <Badge variant="secondary" className="text-xs font-medium">
              {trend}
            </Badge>
          </div>
          <div className="space-y-2">
            <motion.div 
              className="text-3xl font-bold text-foreground"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay * 0.1 + 0.3, type: "spring" }}
            >
              {displayValue}
            </motion.div>
            <p className="text-sm text-muted-foreground font-medium">{label}</p>
          </div>
          <div className="mt-4 h-1 bg-muted-foreground/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${color}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: delay * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const MetricsVisualization = () => {
  const metrics = [
    {
      icon: <Target className="h-6 w-6 text-white" />,
      value: "98.7%",
      label: "Model Accuracy",
      trend: "+12%",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      value: "99.9%",
      label: "System Uptime",
      trend: "+2.1%",
      color: "from-green-500 to-emerald-500", 
      delay: 1
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      value: "71%",
      label: "Deployment Speed",
      trend: "+45%",
      color: "from-purple-500 to-pink-500",
      delay: 2
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      value: "10K+",
      label: "Daily Predictions",
      trend: "+180%",
      color: "from-orange-500 to-red-500",
      delay: 3
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </motion.div>
  );
};

export default MetricsVisualization;