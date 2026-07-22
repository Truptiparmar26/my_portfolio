import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import HeroCanvas from './HeroCanvas';
import MagneticButton from './MagneticButton';
import { FiDownload, FiArrowRight, FiGithub } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroCanvas />
      
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start text-left">
          
          {/* Availability Badge */}
          <motion.div 
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-blue"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Available for Full-Time Opportunities</span>
          </motion.div>

          <motion.h2 
            className="text-xl md:text-2xl text-gray-400 mb-2 font-medium"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm Your Name
          </motion.h2>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AI Enthusiast &<br />
            <span className="text-gradient">MERN Stack</span> Dev.
          </motion.h1>

          <motion.div 
            className="text-lg md:text-2xl text-gray-300 mb-10 h-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Creating Intelligent Digital Experiences.',
                2000,
                'Building Scalable AI Solutions.',
                2000,
                'Engineering the Future of the Web.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-300"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <MagneticButton className="btn-primary flex items-center gap-2">
              Explore Projects <FiArrowRight />
            </MagneticButton>
            
            <MagneticButton className="px-6 py-3 rounded-full border border-white/10 glass hover:border-electric-blue/50 hover:bg-white/5 transition-all flex items-center gap-2 text-white">
              Download Resume <FiDownload />
            </MagneticButton>

            <MagneticButton className="w-12 h-12 rounded-full border border-white/10 glass flex items-center justify-center hover:border-neon-purple/50 hover:bg-white/5 transition-all text-white hover:text-neon-purple">
              <FiGithub className="text-xl" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Side: 3D Hologram / Brain Placeholder */}
        <motion.div 
          className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          {/* This is a visual representation of the AI Brain / Tech Stack Hologram */}
          <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 to-transparent blur-3xl opacity-50"></div>
          
          <div className="relative w-64 h-64 rounded-full border border-white/5 glass animate-spin-slow flex items-center justify-center">
            <div className="absolute w-72 h-72 rounded-full border-t border-b border-neon-purple/30 animate-[spin_10s_reverse_linear_infinite]"></div>
            
            {/* Core */}
            <div className="w-24 h-24 bg-gradient-to-br from-electric-blue to-neon-purple rounded-full blur-sm animate-pulse-slow"></div>
            <div className="absolute w-20 h-20 bg-background rounded-full z-10 flex items-center justify-center border border-white/10">
              <span className="text-2xl">🧠</span>
            </div>
            
            {/* Orbiting Tech Nodes */}
            <div className="absolute -top-4 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center shadow-[0_0_15px_#00E5FF] animate-pulse">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center shadow-[0_0_15px_#B921FF] animate-pulse" style={{ animationDelay: '1s' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" className="w-6 h-6" />
            </div>
            <div className="absolute -left-4 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center shadow-[0_0_15px_#FFD700] animate-pulse" style={{ animationDelay: '2s' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-6 h-6" />
            </div>
            <div className="absolute -right-4 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center shadow-[0_0_15px_#00FFFF] animate-pulse" style={{ animationDelay: '3s' }}>
              <span className="text-sm font-bold text-white">AI</span>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 z-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/10 flex justify-center p-2 glass">
          <motion.div 
            className="w-2 h-2 bg-electric-blue rounded-full shadow-[0_0_10px_#00E5FF]"
            animate={{ y: [0, 15, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
