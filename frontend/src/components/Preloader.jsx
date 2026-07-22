import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Small delay before hiding
          return 100;
        }
        // Random increment for a more realistic loading feel
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Glowing Neural Node Animation */}
        <div className="relative flex items-center justify-center w-32 h-32 mb-12">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-electric-blue/30"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner reverse rotating ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-t border-b border-neon-purple/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Center core */}
          <motion.div
            className="w-10 h-10 bg-electric-blue rounded-full shadow-[0_0_30px_#00E5FF]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Data particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-glow rounded-full shadow-[0_0_10px_#00FFFF]"
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100]
              }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Loading Text & Bar */}
        <div className="w-64 max-w-[80vw]">
          <div className="flex justify-between items-end mb-2 text-sm font-mono">
            <span className="text-electric-blue">INIT_SYSTEM</span>
            <span className="text-white font-bold">{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-electric-blue to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
