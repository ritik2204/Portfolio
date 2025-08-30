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
    <div className="relative w-full h-32 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 border-b border-border/30">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="text-xs text-muted-foreground ml-2">data_science.py</span>
      </div>
      
      {/* Code content */}
      <div className="p-4 font-mono text-xs overflow-hidden">
        {codeLines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="leading-5"
          >
            <span className="text-muted-foreground mr-3">{String(index + 1).padStart(2, '0')}</span>
            <span className={`
              ${line.startsWith('import') || line.startsWith('from') ? 'text-blue-400' : ''}
              ${line.startsWith('#') ? 'text-green-400' : ''}
              ${line.includes('def ') ? 'text-purple-400' : ''}
              ${line.includes('=') && !line.startsWith('#') ? 'text-yellow-400' : ''}
              ${!line.startsWith('#') && !line.startsWith('import') && !line.startsWith('from') && !line.includes('def ') ? 'text-foreground' : ''}
            `}>
              {line || '\u00A0'}
            </span>
          </motion.div>
        ))}
        
        {/* Typing cursor */}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-accent ml-1"
        />
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