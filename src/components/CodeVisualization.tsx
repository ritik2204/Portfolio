import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CodeVisualization = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
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
    if (currentLineIndex >= codeLines.length) {
      const resetTimer = setTimeout(() => {
        setCurrentLineIndex(0);
        setCurrentText("");
        setIsTyping(true);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }

    const currentLine = codeLines[currentLineIndex];
    
    if (currentText.length < currentLine.length && isTyping) {
      const typingTimer = setTimeout(() => {
        setCurrentText(currentLine.substring(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(typingTimer);
    } else if (currentText.length === currentLine.length) {
      const nextLineTimer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentText("");
      }, 1000);
      return () => clearTimeout(nextLineTimer);
    }
  }, [currentText, currentLineIndex, isTyping, codeLines]);

  const getLineColor = (line: string) => {
    if (line.startsWith('#')) return 'text-green-400';
    if (line.startsWith('import') || line.startsWith('from')) return 'text-blue-400';
    if (line.includes('def ') || line.includes('print(')) return 'text-purple-400';
    if (line.includes('=')) return 'text-yellow-400';
    return 'text-foreground/80';
  };

  return (
    <div className="relative w-80 h-48 bg-card/90 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden shadow-xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 border-b border-border/30">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="text-xs text-muted-foreground ml-2 font-mono">data_science.py</span>
      </div>
      
      {/* Code content */}
      <div className="p-4 font-mono text-xs overflow-hidden h-full">
        {/* Previous lines (faded) */}
        {codeLines.slice(Math.max(0, currentLineIndex - 5), currentLineIndex).map((line, index) => (
          <motion.div
            key={`prev-${index}`}
            className={`${getLineColor(line)} opacity-40 mb-1`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
          >
            <span className="text-muted-foreground/40 mr-3">
              {String(Math.max(0, currentLineIndex - 5) + index + 1).padStart(2, '0')}
            </span>
            {line}
          </motion.div>
        ))}
        
        {/* Current typing line */}
        <motion.div className={`${getLineColor(currentText)} flex items-center mb-1`}>
          <span className="text-muted-foreground mr-3">
            {String(currentLineIndex + 1).padStart(2, '0')}
          </span>
          <span>{currentText}</span>
          <motion.span
            className="ml-1 w-2 h-4 bg-accent"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Next lines (very faded) */}
        {codeLines.slice(currentLineIndex + 1, currentLineIndex + 3).map((line, index) => (
          <div
            key={`next-${index}`}
            className="text-muted-foreground/20 mb-1"
          >
            <span className="mr-3">
              {String(currentLineIndex + index + 2).padStart(2, '0')}
            </span>
            {line}
          </div>
        ))}
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default CodeVisualization;