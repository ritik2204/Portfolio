import { motion } from "framer-motion";
import { Briefcase, FileText } from "lucide-react";
import { useState } from "react";

const AnimatedManAvatar = () => {
  const [showMessage, setShowMessage] = useState(false);

  const floatingVariants = {
    initial: { 
      x: -200, 
      y: 100, 
      opacity: 0,
      rotate: 0 
    },
    floating: {
      x: 0,
      y: [0, -20, 0],
      opacity: 1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const
        },
        rotate: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    }
  };

  return (
    <motion.div
      className="fixed top-20 left-10 z-50"
      variants={floatingVariants}
      initial="initial"
      animate="floating"
      onAnimationComplete={() => {
        setTimeout(() => setShowMessage(true), 3000);
      }}
    >
      {/* Avatar Body */}
      <div className="relative">
        {/* Head */}
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full relative mb-2 border-2 border-amber-300"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Eyes */}
          <div className="absolute top-5 left-3 w-2 h-2 bg-black rounded-full animate-pulse"></div>
          <div className="absolute top-5 right-3 w-2 h-2 bg-black rounded-full animate-pulse"></div>
          {/* Smile */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-full"></div>
          {/* Hair */}
          <div className="absolute -top-2 left-2 w-12 h-6 bg-gradient-to-r from-amber-800 to-amber-900 rounded-t-full"></div>
        </motion.div>

        {/* Body */}
        <motion.div 
          className="w-12 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg mx-auto relative"
          animate={{ 
            scaleY: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Shirt details */}
          <div className="absolute top-2 left-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-6 left-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-10 left-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
        </motion.div>

        {/* Legs */}
        <div className="flex gap-1 justify-center">
          <motion.div 
            className="w-4 h-12 bg-gradient-to-b from-gray-800 to-black rounded-b-lg"
            animate={{ 
              rotateZ: [0, 2, -2, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="w-4 h-12 bg-gradient-to-b from-gray-800 to-black rounded-b-lg"
            animate={{ 
              rotateZ: [0, -2, 2, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        {/* Arms with Briefcase and CV */}
        <motion.div 
          className="absolute top-8 -left-8 flex items-center"
          animate={{ 
            rotate: [0, -10, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Briefcase className="w-6 h-6 text-amber-800" />
        </motion.div>

        <motion.div 
          className="absolute top-8 -right-8 flex items-center"
          animate={{ 
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <FileText className="w-6 h-6 text-blue-600" />
        </motion.div>

        {/* Speech Bubble */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-20 -left-10 bg-white rounded-lg p-3 shadow-lg border-2 border-accent"
          >
            <p className="text-xs font-medium text-foreground whitespace-nowrap">
              Looking for job opportunities! 🚀
            </p>
            <div className="absolute bottom-0 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
          </motion.div>
        )}

        {/* Floating particles around avatar */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -30, 30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              left: `${20 + i * 10}px`,
              top: `${10 + i * 5}px`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedManAvatar;