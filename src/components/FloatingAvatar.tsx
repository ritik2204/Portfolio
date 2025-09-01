import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";
import AnimatedAvatar from "./AnimatedAvatar";

const FloatingAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Placeholder avatar with initials
  const avatarContent = (
    <div className="w-full h-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-4xl font-bold text-white">
      RK
    </div>
  );

  return (
    <motion.div
      className="fixed top-20 right-8 z-20 hidden lg:block"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        x: mousePosition.x * 0.01,
        y: mousePosition.y * 0.01
      }}
      transition={{ 
        duration: 0.8,
        x: { type: "spring", stiffness: 100, damping: 30 },
        y: { type: "spring", stiffness: 100, damping: 30 }
      }}
    >
      <div className="relative group">
        {/* Glowing background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Avatar container */}
        <motion.div
          className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={profilePhoto}
            alt="Ritik Kumar"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          
          {/* Fallback animated avatar */}
          <div className="w-full h-full" style={{display: 'none'}}>
            <AnimatedAvatar />
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/60 rounded-full"
              initial={{ 
                x: Math.random() * 140,
                y: Math.random() * 140,
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * 140,
                y: Math.random() * 140,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Status indicator */}
        <motion.div
          className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-background flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FloatingAvatar;