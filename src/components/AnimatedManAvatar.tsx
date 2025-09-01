import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedManAvatar = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      // Move towards contact section after showing message
      setCurrentPosition({ x: window.innerWidth * 0.6, y: window.innerHeight * 0.6 });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const floatingVariants = {
    initial: { 
      x: -300, 
      y: 200, 
      opacity: 0,
      rotate: 0 
    },
    floating: {
      x: currentPosition.x,
      y: [currentPosition.y - 20, currentPosition.y + 20, currentPosition.y - 20],
      opacity: 1,
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const
        },
        x: {
          duration: 2,
          ease: "easeOut" as const
        }
      }
    }
  };

  return (
    <motion.div
      className="fixed top-20 left-10 z-50 scale-150"
      variants={floatingVariants}
      initial="initial"
      animate="floating"
    >
      {/* Realistic Male Character */}
      <div className="relative">
        
        {/* Head with realistic proportions */}
        <motion.div 
          className="relative w-24 h-28 mx-auto mb-1"
          animate={{ 
            rotateY: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Face */}
          <div className="w-20 h-24 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-full relative mx-auto border border-amber-400/30 shadow-lg">
            
            {/* Hair - Professional style */}
            <div className="absolute -top-2 -left-1 w-22 h-16 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-700 rounded-t-full border border-amber-900/20" />
            <div className="absolute -top-1 left-1 w-18 h-12 bg-gradient-to-b from-amber-800 to-amber-700 rounded-t-full opacity-80" />
            
            {/* Forehead shadow */}
            <div className="absolute top-6 left-2 w-16 h-4 bg-gradient-to-b from-amber-300/0 to-amber-400/30 rounded-full" />
            
            {/* Eyes - More realistic */}
            <div className="absolute top-8 left-4 flex gap-6">
              <motion.div 
                className="relative"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-4 h-2 bg-white rounded-full shadow-inner" />
                <div className="absolute top-0 left-1 w-2 h-2 bg-amber-900 rounded-full" />
                <div className="absolute top-0 left-1.5 w-1 h-1 bg-black rounded-full" />
                <div className="absolute top-0 left-2 w-0.5 h-0.5 bg-white rounded-full" />
                {/* Eyebrow */}
                <div className="absolute -top-1 -left-0.5 w-5 h-1 bg-amber-800 rounded-full" />
              </motion.div>
              
              <motion.div 
                className="relative"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              >
                <div className="w-4 h-2 bg-white rounded-full shadow-inner" />
                <div className="absolute top-0 left-1 w-2 h-2 bg-amber-900 rounded-full" />
                <div className="absolute top-0 left-1.5 w-1 h-1 bg-black rounded-full" />
                <div className="absolute top-0 left-2 w-0.5 h-0.5 bg-white rounded-full" />
                {/* Eyebrow */}
                <div className="absolute -top-1 -left-0.5 w-5 h-1 bg-amber-800 rounded-full" />
              </motion.div>
            </div>
            
            {/* Nose */}
            <div className="absolute top-11 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-4 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full shadow-sm" />
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-amber-400 rounded-full opacity-60" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-amber-400 rounded-full opacity-60" />
            </div>
            
            {/* Mouth */}
            <motion.div 
              className="absolute top-16 left-1/2 transform -translate-x-1/2"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-6 h-2 bg-gradient-to-b from-red-300 to-red-400 rounded-full border border-red-400/40" />
              <div className="absolute top-0 left-1 w-4 h-1 bg-red-200 rounded-full opacity-60" />
            </motion.div>
            
            {/* Facial structure lines */}
            <div className="absolute top-12 left-2 w-1 h-6 bg-gradient-to-b from-amber-300/0 to-amber-400/20 rounded-full" />
            <div className="absolute top-12 right-2 w-1 h-6 bg-gradient-to-b from-amber-300/0 to-amber-400/20 rounded-full" />
            
            {/* Ears */}
            <div className="absolute top-9 -left-1 w-3 h-6 bg-gradient-to-r from-amber-200 to-amber-300 rounded-full border border-amber-400/30" />
            <div className="absolute top-9 -right-1 w-3 h-6 bg-gradient-to-l from-amber-200 to-amber-300 rounded-full border border-amber-400/30" />
          </div>
        </motion.div>

        {/* Neck */}
        <div className="w-8 h-6 bg-gradient-to-b from-amber-200 to-amber-300 mx-auto rounded-b-lg border border-amber-400/30" />
        
        {/* Collar and Tie */}
        <div className="relative w-12 h-4 bg-white mx-auto border border-gray-200 rounded-t-lg">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-8 bg-gradient-to-b from-red-600 to-red-800 border border-red-700 rounded-sm" />
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-red-500 rounded-full opacity-60" />
        </div>

        {/* Torso - Business Suit */}
        <motion.div 
          className="w-20 h-32 bg-gradient-to-b from-gray-800 via-gray-900 to-black mx-auto relative rounded-lg border border-gray-700 shadow-xl"
          animate={{ 
            scaleY: [1, 1.01, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Suit jacket details */}
          <div className="absolute top-2 left-2 w-4 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-sm border border-gray-600" />
          <div className="absolute top-2 right-2 w-4 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-sm border border-gray-600" />
          
          {/* Suit buttons */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full border border-gray-500" />
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full border border-gray-500" />
          <div className="absolute top-18 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full border border-gray-500" />
          
          {/* Breast pocket */}
          <div className="absolute top-4 left-3 w-6 h-3 bg-gray-700 border border-gray-600 rounded-sm" />
          <div className="absolute top-4 left-4 w-4 h-1 bg-white rounded-sm opacity-80" />
          
          {/* Suit lapels */}
          <div className="absolute top-0 left-0 w-6 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-tl-lg border border-gray-600" />
          <div className="absolute top-0 right-0 w-6 h-8 bg-gradient-to-bl from-gray-700 to-gray-800 rounded-tr-lg border border-gray-600" />
        </motion.div>

        {/* Arms - Realistic positioning and movement */}
        <motion.div 
          className="absolute top-20 -left-12 w-8 h-20 bg-gradient-to-b from-gray-800 to-black rounded-lg border border-gray-700 shadow-lg"
          animate={{ 
            rotate: [0, -15, 15, 0],
            x: [0, -2, 2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "top center" }}
        >
          {/* Sleeve details */}
          <div className="absolute bottom-2 left-0 w-full h-4 bg-white rounded-lg border border-gray-200" />
          <div className="absolute bottom-1 left-1 w-6 h-1 bg-gray-300 rounded-full" />
          
          {/* Hand */}
          <motion.div 
            className="absolute -bottom-6 left-1 w-6 h-8 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg border border-amber-400/30"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Fingers */}
            <div className="absolute top-0 left-1 w-1 h-4 bg-amber-200 rounded-full" />
            <div className="absolute top-0 left-2.5 w-1 h-5 bg-amber-200 rounded-full" />
            <div className="absolute top-0 left-4 w-1 h-4.5 bg-amber-200 rounded-full" />
            <div className="absolute top-1 left-0 w-1 h-3 bg-amber-200 rounded-full" />
            
            {/* Briefcase in hand */}
            <div className="absolute -top-2 -left-2 w-8 h-6 bg-gradient-to-b from-amber-900 to-amber-800 rounded-sm border border-amber-700 shadow-lg">
              <div className="absolute top-1 left-1 w-6 h-1 bg-amber-700 rounded-full" />
              <div className="absolute top-3 left-2 w-4 h-1 bg-amber-600 rounded-full" />
              <div className="absolute top-1 left-3 w-2 h-2 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-sm border border-yellow-700" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute top-20 -right-12 w-8 h-20 bg-gradient-to-b from-gray-800 to-black rounded-lg border border-gray-700 shadow-lg"
          animate={{ 
            rotate: [0, 15, -15, 0],
            x: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          style={{ transformOrigin: "top center" }}
        >
          {/* Sleeve details */}
          <div className="absolute bottom-2 left-0 w-full h-4 bg-white rounded-lg border border-gray-200" />
          <div className="absolute bottom-1 left-1 w-6 h-1 bg-gray-300 rounded-full" />
          
          {/* Hand */}
          <motion.div 
            className="absolute -bottom-6 left-1 w-6 h-8 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg border border-amber-400/30"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            {/* Fingers */}
            <div className="absolute top-0 left-1 w-1 h-4 bg-amber-200 rounded-full" />
            <div className="absolute top-0 left-2.5 w-1 h-5 bg-amber-200 rounded-full" />
            <div className="absolute top-0 left-4 w-1 h-4.5 bg-amber-200 rounded-full" />
            <div className="absolute top-1 left-0 w-1 h-3 bg-amber-200 rounded-full" />
            
            {/* CV/Resume in hand */}
            <div className="absolute -top-4 -left-1 w-6 h-8 bg-white rounded-sm border border-gray-300 shadow-md">
              <div className="absolute top-1 left-1 w-4 h-0.5 bg-gray-400 rounded-full" />
              <div className="absolute top-2 left-1 w-3 h-0.5 bg-gray-400 rounded-full" />
              <div className="absolute top-3 left-1 w-4 h-0.5 bg-gray-400 rounded-full" />
              <div className="absolute top-4 left-1 w-2 h-0.5 bg-gray-400 rounded-full" />
              <div className="absolute top-0 left-0 w-1 h-1 bg-blue-500 rounded-sm" />
            </div>
          </motion.div>
        </motion.div>

        {/* Legs - Formal trousers */}
        <div className="flex gap-2 justify-center mt-2">
          <motion.div 
            className="w-6 h-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg border border-gray-700 shadow-lg relative"
            animate={{ 
              rotateZ: [0, 2, -2, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Trouser details */}
            <div className="absolute top-0 left-0 w-full h-4 bg-gray-700 rounded-t-lg border border-gray-600" />
            <div className="absolute top-2 left-1 w-4 h-16 bg-gradient-to-b from-gray-800 to-black rounded-sm border border-gray-700" />
            <div className="absolute top-10 left-2 w-2 h-8 bg-gray-700 rounded-sm opacity-40" />
            
            {/* Formal Shoe */}
            <div className="absolute -bottom-4 -left-2 w-10 h-6 bg-gradient-to-b from-black to-gray-900 rounded-lg border border-gray-800 shadow-xl">
              <div className="absolute top-1 left-1 w-8 h-2 bg-black rounded-lg border border-gray-700" />
              <div className="absolute top-2 left-2 w-6 h-1 bg-gray-800 rounded-full opacity-60" />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-900 rounded-b-lg" />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-6 h-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg border border-gray-700 shadow-lg relative"
            animate={{ 
              rotateZ: [0, -2, 2, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            {/* Trouser details */}
            <div className="absolute top-0 left-0 w-full h-4 bg-gray-700 rounded-t-lg border border-gray-600" />
            <div className="absolute top-2 left-1 w-4 h-16 bg-gradient-to-b from-gray-800 to-black rounded-sm border border-gray-700" />
            <div className="absolute top-10 left-2 w-2 h-8 bg-gray-700 rounded-sm opacity-40" />
            
            {/* Formal Shoe */}
            <div className="absolute -bottom-4 -left-2 w-10 h-6 bg-gradient-to-b from-black to-gray-900 rounded-lg border border-gray-800 shadow-xl">
              <div className="absolute top-1 left-1 w-8 h-2 bg-black rounded-lg border border-gray-700" />
              <div className="absolute top-2 left-2 w-6 h-1 bg-gray-800 rounded-full opacity-60" />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-900 rounded-b-lg" />
            </div>
          </motion.div>
        </div>

        {/* Professional Speech Bubble */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="absolute -top-32 -left-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 shadow-2xl border-2 border-blue-200 min-w-max"
          >
            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
              🎯 Seeking Data Science Opportunities!
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Ready to drive insights with AI/ML 🚀
            </p>
            <div className="absolute bottom-0 left-12 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-200 transform translate-y-full"></div>
            <div className="absolute bottom-0 left-12 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white transform translate-y-full ml-1"></div>
          </motion.div>
        )}

        {/* Professional floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -40, 40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{
              left: `${30 + i * 8}px`,
              top: `${20 + i * 6}px`,
            }}
          />
        ))}

        {/* Professional aura effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedManAvatar;