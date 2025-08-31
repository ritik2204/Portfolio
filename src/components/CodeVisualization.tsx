import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CodeVisualization = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  
  const codeLines = [
    "import numpy as np",
    "from sklearn.ensemble import RandomForestClassifier",
    "from tensorflow import keras",
    "",
    "# Building ML pipeline",
    "def train_model(X_train, y_train):",
    "    model = RandomForestClassifier(n_estimators=100)",
    "    model.fit(X_train, y_train)",
    "    return model",
    "",
    "# Deploy to production",
    "accuracy = model.score(X_test, y_test)",
    "print(f'Model accuracy: {accuracy:.2%}')"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => (prev + 1) % (codeLines.length + 5));
    }, 800);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-64 h-40 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 border-b border-border/30">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="text-xs text-muted-foreground ml-2">data_science.py</span>
      </div>
      
      {/* Simplified code icon */}
      <div className="p-2 flex items-center justify-center h-full">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent text-lg"
        >
          &lt;/&gt;
        </motion.div>
      </div>
      
      {/* Floating code elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['{}', '[]', '()', '+=', '==', '!='].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-accent/30 font-mono text-xs"
            initial={{ 
              x: Math.random() * 200,
              y: Math.random() * 100,
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * 200,
              y: Math.random() * 100,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodeVisualization;