import { motion } from "framer-motion";
import { Code, Zap } from "lucide-react";

const AnimatedAvatar = () => {
  return (
    <motion.div
      className="relative"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotate: {
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        },
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Main Avatar Circle */}
      <div className="relative w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-full border-4 border-primary/30 shadow-2xl">
        
        {/* Animated Background Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Avatar Face */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {/* Eyes */}
          <div className="absolute top-5 left-4">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scaleY: [1, 0.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <div className="absolute top-5 right-4">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scaleY: [1, 0.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1
              }}
            />
          </div>

          {/* Smile */}
          <motion.div 
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-white rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Tech Icons */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Code className="w-4 h-4 text-accent" />
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -left-2"
            animate={{
              rotate: [360, 180, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Zap className="w-4 h-4 text-primary" />
          </motion.div>
        </div>

        {/* Orbiting Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent rounded-full"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
            style={{
              transformOrigin: `${40 + i * 5}px center`,
              left: '50%',
              top: '50%',
              marginLeft: '-3px',
              marginTop: '-3px',
            }}
          />
        ))}

        {/* Pulsing Ring */}
        <motion.div
          className="absolute -inset-2 rounded-full border-2 border-primary/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedAvatar;