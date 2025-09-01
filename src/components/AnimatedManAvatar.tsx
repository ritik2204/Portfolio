import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedManAvatar = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed top-32 left-16 z-50"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -15, 15, 0],
        x: [0, 10, -10, 0]
      }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 1 },
        rotate: { duration: 1.5 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {/* Space Background Effect */}
      <div className="absolute -inset-8 bg-gradient-to-r from-purple-900/20 via-blue-900/30 to-purple-900/20 rounded-full blur-xl animate-pulse" />
      
      {/* Stars around character */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          style={{
            left: `${Math.cos(i * 30 * Math.PI / 180) * 60 + 30}px`,
            top: `${Math.sin(i * 30 * Math.PI / 180) * 60 + 30}px`,
          }}
        />
      ))}

      {/* Simple Cartoon Character */}
      <div className="relative">
        {/* Head */}
        <motion.div 
          className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full relative mb-1 border-2 border-amber-300 shadow-lg"
          animate={{ 
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Hair */}
          <div className="absolute -top-1 left-1 w-10 h-6 bg-gradient-to-b from-amber-900 to-amber-700 rounded-t-full" />
          
          {/* Eyes with glasses */}
          <div className="absolute top-4 left-2 flex gap-3 items-center">
            <motion.div 
              className="relative"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="absolute -inset-1 border border-gray-600 rounded-full bg-white/20" />
            </motion.div>
            <motion.div 
              className="relative"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.1 }}
            >
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="absolute -inset-1 border border-gray-600 rounded-full bg-white/20" />
            </motion.div>
          </div>
          
          {/* Glasses bridge */}
          <div className="absolute top-4 left-4 w-2 h-0.5 bg-gray-600" />
          
          {/* Smile */}
          <motion.div 
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Simple Body */}
        <motion.div 
          className="w-8 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg mx-auto relative shadow-lg"
          animate={{ 
            scaleY: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Simple shirt pattern */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white/30 rounded-full" />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-white/30 rounded-full" />
        </motion.div>

        {/* Arms with Laptop */}
        <motion.div 
          className="absolute top-8 -left-6 w-4 h-8 bg-blue-600 rounded-lg"
          animate={{ 
            rotate: [0, -20, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "top center" }}
        >
          {/* Hand */}
          <div className="absolute -bottom-2 left-0 w-3 h-3 bg-amber-200 rounded-full" />
        </motion.div>

        <motion.div 
          className="absolute top-8 -right-6 w-4 h-8 bg-blue-600 rounded-lg"
          animate={{ 
            rotate: [0, 20, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          style={{ transformOrigin: "top center" }}
        >
          {/* Hand */}
          <div className="absolute -bottom-2 right-0 w-3 h-3 bg-amber-200 rounded-full" />
        </motion.div>

        {/* Laptop - floating in front */}
        <motion.div
          className="absolute top-6 -left-2 z-10"
          animate={{ 
            rotateY: [0, 10, -10, 0],
            y: [0, -2, 2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Laptop base */}
          <div className="w-8 h-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg border border-gray-600 shadow-lg">
            {/* Keyboard */}
            <div className="absolute top-1 left-1 w-6 h-4 bg-black rounded grid grid-cols-6 gap-0.5 p-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-gray-300 rounded-sm h-0.5" />
              ))}
            </div>
            
            {/* Trackpad */}
            <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-400 rounded-sm" />
          </div>
          
          {/* Laptop screen */}
          <div className="absolute -top-5 left-0 w-8 h-5 bg-gradient-to-b from-blue-900 to-black rounded-t-lg border border-gray-600">
            {/* Screen content - code/data */}
            <div className="absolute top-1 left-1 text-xs">
              <motion.div 
                className="text-green-400 font-mono text-[4px] leading-tight"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {'>'} import pandas as pd<br/>
                {'>'} df.analyze()<br/>
                {'>'} model.train()
              </motion.div>
            </div>
            
            {/* Screen glow */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-t-lg animate-pulse" />
          </div>
        </motion.div>

        {/* Simple Legs */}
        <div className="flex gap-1 justify-center mt-1">
          <motion.div 
            className="w-3 h-8 bg-gradient-to-b from-gray-700 to-black rounded-lg"
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="w-3 h-8 bg-gradient-to-b from-gray-700 to-black rounded-lg"
            animate={{ 
              rotate: [0, -5, 5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        {/* Speech Bubble */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="absolute -top-16 -left-8 bg-white rounded-xl p-3 shadow-xl border-2 border-blue-300 min-w-max"
          >
            <p className="text-xs font-bold text-gray-800 whitespace-nowrap">
              🚀 Seeking Data Science Jobs!
            </p>
            <p className="text-xs text-gray-600">
              Python • ML • AI ready! 💻
            </p>
            <div className="absolute bottom-0 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-300 transform translate-y-full"></div>
            <div className="absolute bottom-0 left-6 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-white transform translate-y-full ml-0.5"></div>
          </motion.div>
        )}

        {/* Data science particles floating around */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs"
            animate={{
              x: [0, 25, -25, 0],
              y: [0, -35, 35, 0],
              opacity: [0.4, 1, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{
              left: `${20 + i * 8}px`,
              top: `${15 + i * 6}px`,
            }}
          >
            {['📊', '🤖', '📈', '🔬', '💡', '⚡'][i]}
          </motion.div>
        ))}

        {/* Space dust/cosmic particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${Math.cos(i * 45 * Math.PI / 180) * 40 + 20}px`,
                top: `${Math.sin(i * 45 * Math.PI / 180) * 40 + 20}px`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedManAvatar;