import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth, graceful 2.6-second executive loading duration
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 5) + 2;
        
        if (next >= 100) {
          clearInterval(timer);
          // Graceful pause at 100% before elegant gallery entrance
          setTimeout(() => {
            onLoadingComplete();
          }, 600);
          return 100;
        }

        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-b from-[#03060e] via-[#060b18] to-[#020409] overflow-hidden select-none px-4 py-12 sm:py-16 font-sans"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.05, 
          filter: 'blur(15px)',
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
        }}
      >
        {/* Silky Ambient Backlight Auras (Pure Elegance) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#00E5FF]/15 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-[#8B5CF6]/15 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[380px] h-[380px] bg-[#E066FF]/15 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Minimalist Top Header */}
        <div className="w-full flex items-center justify-center relative z-10 opacity-75 font-mono text-[11px] sm:text-xs tracking-[0.35em] uppercase text-cyan-300">
          <span>PORTFOLIO SYSTEM • ESTABLISHED 2026</span>
        </div>

        {/* Centerpiece - Celestial Opal Glass Halo & Royal Monogram */}
        <div className="relative flex flex-col items-center justify-center my-auto z-10">
          
          {/* Floating Opal Glass Pavilion */}
          <div className="relative flex items-center justify-center mb-10 group">
            
            {/* Subtle Pulsing Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00E5FF]/30 via-[#8B5CF6]/30 to-[#E066FF]/30 blur-2xl opacity-60 animate-pulse pointer-events-none"></div>
            
            {/* Soft Ambient Laser Ring */}
            <motion.div 
              className="absolute -inset-3 rounded-full border border-white/10 pointer-events-none"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Opal Glass Jewel Box */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-white/15 via-white/5 to-white/10 p-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.9),_0_0_35px_rgba(0,229,255,0.25)] relative z-10 backdrop-blur-3xl">
              <div className="w-full h-full rounded-full bg-[#060c1d]/95 flex items-center justify-center relative overflow-hidden">
                
                {/* Graceful Spinning Orbital Line */}
                <motion.div 
                  className="absolute inset-2 rounded-full border-[2px] border-t-[#00E5FF] border-r-[#8B5CF6] border-b-transparent border-l-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* Counter-Spinning Inner Line */}
                <motion.div 
                  className="absolute inset-5 rounded-full border border-b-[#E066FF]/70 border-l-[#00E5FF]/70 border-t-transparent border-r-transparent opacity-70"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                />

                {/* Diamond Pearl Initials ("TP") */}
                <h1 className="text-4xl sm:text-5xl font-black tracking-wider text-transparent bg-gradient-to-r from-white via-cyan-100 to-[#00E5FF] bg-clip-text drop-shadow-[0_0_25px_rgba(0,229,255,0.9)] relative z-10 select-none ml-1">
                  TP
                </h1>

                {/* Delicate Internal Light Wave */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full pointer-events-none"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

              </div>
            </div>

          </div>

          {/* Timeless Executive Identity Title */}
          <div className="flex flex-col items-center text-center">
            
            {/* Executive Name */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[0.32em] text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] ml-2 mb-4">
              TRUPTI PARMAR
            </h2>

            {/* Illuminated Signature Role Capsule */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-xl shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping shadow-[0_0_10px_#00E5FF]"></span>
              <span className="text-xs sm:text-sm font-extrabold font-mono text-cyan-300 tracking-[0.2em] uppercase">
                AI & Full-Stack Architect
              </span>
            </div>

          </div>

        </div>

        {/* Liquid Silk Progress Beam & Minimalist Counter */}
        <div className="w-full max-w-[440px] sm:max-w-[480px] flex flex-col items-center z-10">
          
          {/* Header & Percentage */}
          <div className="w-full flex items-center justify-between px-1 mb-2.5 font-mono text-xs font-bold uppercase tracking-widest text-gray-400">
            <span className="text-cyan-300/90 tracking-[0.2em]">INITIALIZING EXPERIENCE</span>
            <span className="text-white font-black text-sm drop-shadow-[0_0_10px_#00E5FF]">{progress}%</span>
          </div>

          {/* Elegant Liquid Glass Progress Track */}
          <div className="w-full h-2 p-[2px] rounded-full bg-white/10 border border-white/15 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.85),_0_0_20px_rgba(0,229,255,0.15)] mb-6">
            <div className="h-full w-full bg-[#03060f] rounded-full overflow-hidden relative">
              
              {/* Luminous Multicolor Silk Progress Beam */}
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] to-[#E066FF] relative shadow-[0_0_25px_rgba(0,229,255,0.9)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.15 }}
              >
                {/* Smooth Shimmer Traveling Light */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_1.5s_infinite]"></div>
              </motion.div>

            </div>
          </div>

          {/* Graceful Footer Branding */}
          <p className="text-[11px] font-mono font-extrabold tracking-[0.3em] text-gray-500 uppercase opacity-90">
            Designed for Excellence & Innovation
          </p>

        </div>

      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
