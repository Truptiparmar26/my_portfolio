import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import HeroCanvas from './HeroCanvas';
import MagneticButton from './MagneticButton';
import { FiDownload, FiArrowRight, FiGithub, FiEye } from 'react-icons/fi';
import { useCV } from '../context/CVContext';

const HeroSection = () => {
  const { openCVModal, handleDownloadCV } = useCV();
  // Interactive Mouse & Mobile Scroll / Touch Physics State
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // High-performance passive scroll listener for dynamic mobile rotation
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    // Normalize position between -1 and +1 from center
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    setMouse({ x, y });
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
      const x = ((touch.clientX - left) / width - 0.5) * 2;
      const y = ((touch.clientY - top) / height - 0.5) * 2;
      setMouse({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  // Calculate dynamic rotation by blending cursor position + mobile scroll motion
  const scrollRotateY = Math.sin(scrollY * 0.008) * 15;
  const scrollRotateX = Math.cos(scrollY * 0.008) * 12;
  const totalRotateY = (mouse.x * 22) + scrollRotateY;
  const totalRotateX = (-mouse.y * 22) + scrollRotateX;

  return (
    <div 
      id="home" 
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 perspective-[1200px]"
    >
      {/* Background Star Constellation Canvas with Scroll & Touch Parallax */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out z-0"
        style={{ transform: `translate(${mouse.x * -25 - (scrollY * 0.05)}px, ${mouse.y * -25 - (scrollY * 0.05)}px) scale(1.06)` }}
      >
        <HeroCanvas />
      </div>
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Side: Professional Content (7 Columns on Desktop with Subtle 3D Tilt) */}
        <div 
          className="lg:col-span-7 flex flex-col items-start text-left transition-transform duration-300 ease-out"
          style={{ 
            transform: `perspective(1000px) rotateY(${mouse.x * 5}deg) rotateX(${-mouse.y * 5}deg) translate(${mouse.x * 8}px, ${mouse.y * 8}px)` 
          }}
        >
          
          {/* Glowing Availability Badge */}
          <motion.div 
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-electric-blue/30 shadow-[0_0_20px_rgba(0,229,255,0.15)] mb-8 backdrop-blur-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-blue"></span>
            </span>
            <span className="text-xs md:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-electric-blue via-cyan-300 to-neon-purple bg-clip-text text-transparent">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Greeting Header */}
          <motion.h2 
            className="text-lg md:text-2xl font-semibold text-gray-300 mb-3 tracking-wide flex items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>Hi, I'm</span>
            <span className="text-white font-bold tracking-normal underline decoration-neon-purple decoration-2 underline-offset-4">Trupti Parmar</span>
            <span className="inline-block origin-bottom-right hover:rotate-12 transition-transform duration-300 cursor-pointer">👋</span>
          </motion.h2>

          {/* High-Impact Main Headline with Outfit Font */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-outfit font-extrabold mb-6 tracking-tight leading-[1.14] text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AI/ML Enthusiast &<br />
            <span className="text-gradient font-black tracking-normal drop-shadow-[0_0_40px_rgba(185,33,255,0.35)]">MERN Stack Dev.</span>
          </motion.h1>

          {/* Professional Animated Subtitle & Engineering Summary */}
          <motion.div 
            className="mb-10 w-full max-w-xl text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-lg md:text-2xl font-semibold text-gray-200 min-h-[38px] flex items-center gap-2 mb-3">
              <span className="text-electric-blue font-mono font-bold">❯</span>
              <TypeAnimation
                sequence={[
                  'Creating Intelligent Digital Experiences.',
                  2500,
                  'Building Scalable Full-Stack Web Apps.',
                  2500,
                  'Architecting Modern MERN & AI Solutions.',
                  2500,
                  'Solving Complex Problems with Clean Code.',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-400 font-bold tracking-tight"
              />
            </div>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal">
Combining Artificial Intelligence, Machine Learning, and MERN Stack development to build intelligent, scalable, and high-performance web applications.            </p>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <MagneticButton 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-electric-blue via-indigo-600 to-neon-purple text-white font-bold text-sm md:text-base tracking-wide shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_45px_rgba(185,33,255,0.55)] hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Explore Projects</span>
              <FiArrowRight className="group-hover:translate-x-1.5 transition-transform text-lg" />
            </MagneticButton>
            
            {/* <MagneticButton 
              onClick={openCVModal}
              className="px-6 py-4 rounded-full border border-cyan-400/40 glass bg-cyan-500/10 hover:border-[#00E5FF] hover:bg-cyan-500/20 text-gray-100 hover:text-white font-semibold text-sm md:text-base tracking-wide shadow-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all flex items-center gap-2.5 group"
              title="View & Inspect CV / Resume Online"
            >
              <FiEye className="group-hover:scale-110 transition-transform text-[#00E5FF] text-lg" />
              <span>View CV / Resume</span>
            </MagneticButton> */}

            <MagneticButton 
              onClick={handleDownloadCV}
              className="px-6 py-4 rounded-full border border-white/20 glass hover:border-neon-purple text-gray-200 hover:text-white font-semibold text-sm md:text-base tracking-wide shadow-lg hover:shadow-[0_0_25px_rgba(185,33,255,0.35)] transition-all flex items-center gap-2.5 group"
              title="Directly Download CV (PDF)"
            >
              <FiDownload className="group-hover:-translate-y-0.5 transition-transform text-neon-purple text-lg" />
              <span>Download CV</span>
            </MagneticButton>

            <MagneticButton 
              onClick={() => window.open('https://github.com/Truptiparmar26', '_blank')}
              className="w-13 h-13 p-3.5 rounded-full border border-white/20 glass flex items-center justify-center hover:border-neon-purple hover:bg-white/10 transition-all text-white hover:text-neon-purple shadow-md"
            >
              <FiGithub className="text-xl" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Side: Tech Solar System (ONLY Visible on Desktops - HIDDEN on Mobile Phones) */}
        <motion.div 
          className="hidden lg:col-span-5 lg:flex relative h-[520px] w-full items-center justify-center transition-transform duration-200 ease-out"
          style={{ 
            transform: `perspective(1000px) rotateY(${totalRotateY}deg) rotateX(${totalRotateX}deg) translate(${mouse.x * -12}px, ${mouse.y * -12}px)`,
            transformStyle: 'preserve-3d'
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          {/* Ambient Cosmic Glows */}
          <div className="absolute w-[340px] h-[340px] sm:w-[360px] sm:h-[360px] bg-gradient-to-tr from-electric-blue/25 via-neon-purple/25 to-transparent rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>
          
          {/* Outer Rotating Orbital Rings (Reacting to mouse & scroll tilt) */}
          <div 
            className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full border border-dashed border-white/10 animate-[spin_45s_linear_infinite] pointer-events-none transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px)` }}
          ></div>
          <div 
            className="absolute w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full border border-white/15 glass animate-[spin_30s_reverse_linear_infinite] transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)` }}
          >
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-electric-blue rounded-full shadow-[0_0_12px_#00E5FF]"></div>
            <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_12px_#B921FF]"></div>
          </div>
          
          {/* Inner Orbital Hub & Core */}
          <div 
            className="relative w-56 sm:w-64 h-56 sm:h-64 rounded-full border border-white/20 glass flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)` }}
          >
            
            {/* Holographic Glowing Center Core */}
            <div className="absolute w-36 h-36 bg-gradient-to-br from-electric-blue via-purple-600 to-neon-purple rounded-full blur-md animate-pulse-slow opacity-75"></div>
            <div className="relative w-28 sm:w-32 h-28 sm:h-32 bg-midnight-blue/95 backdrop-blur-2xl rounded-full z-10 flex flex-col items-center justify-center border-2 border-white/20 shadow-[0_0_40px_rgba(185,33,255,0.45)] group hover:scale-105 transition-transform duration-500 cursor-pointer">
              <span className="text-3xl mb-1 filter drop-shadow-[0_0_10px_#00E5FF]">🚀</span>
              <span className="text-[11px] sm:text-xs font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-blue">FULL STACK</span>
              <span className="text-[10px] font-mono text-neon-purple font-bold">MERN + AI</span>
            </div>
            
            {/* Orbiting High-Tech Nodes with Individual Depth Parallax */}
            <motion.div 
              className="absolute -top-6 sm:-top-7 w-14 sm:w-16 h-14 sm:h-16 rounded-2xl glass bg-midnight-blue/90 border border-white/20 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:scale-125 transition-transform duration-300 z-20 cursor-pointer"
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ transform: `translate(${mouse.x * 15}px, ${mouse.y * 15}px)` }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-7 sm:w-8 h-7 sm:h-8 mb-0.5" />
              <span className="text-[9px] font-bold text-cyan-300 tracking-wider">React</span>
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 sm:-bottom-7 w-14 sm:w-16 h-14 sm:h-16 rounded-2xl glass bg-midnight-blue/90 border border-white/20 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(185,33,255,0.35)] hover:scale-125 transition-transform duration-300 z-20 cursor-pointer"
              animate={{ y: [5, -5, -5] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              style={{ transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px)` }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" className="w-6 sm:w-7 h-6 sm:h-7 mb-0.5" />
              <span className="text-[9px] font-bold text-green-400 tracking-wider">Node.js</span>
            </motion.div>

            <motion.div 
              className="absolute -left-6 sm:-left-8 w-14 sm:w-16 h-14 sm:h-16 rounded-2xl glass bg-midnight-blue/90 border border-white/20 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:scale-125 transition-transform duration-300 z-20 cursor-pointer"
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ transform: `translate(${mouse.x * 18}px, ${mouse.y * -12}px)` }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-6 sm:w-7 h-6 sm:h-7 mb-0.5" />
              <span className="text-[9px] font-bold text-yellow-300 tracking-wider">Python</span>
            </motion.div>

            <motion.div 
              className="absolute -right-6 sm:-right-8 w-14 sm:w-16 h-14 sm:h-16 rounded-2xl glass bg-midnight-blue/90 border border-white/20 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:scale-125 transition-transform duration-300 z-20 cursor-pointer"
              animate={{ x: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              style={{ transform: `translate(${mouse.x * -18}px, ${mouse.y * 12}px)` }}
            >
              <span className="text-lg sm:text-xl mb-0.5">🧠</span>
              <span className="text-[9px] font-black text-electric-blue tracking-wider">AI / ML</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
      
      {/* Interactive "Scroll Now" Button */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 z-20 left-1/2 -translate-x-1/2 cursor-pointer transition-transform duration-300"
        style={{ transform: `translate(${mouse.x * -10}px, ${mouse.y * -5}px)` }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="px-5 py-2.5 rounded-full glass border border-white/20 hover:border-electric-blue flex items-center gap-2.5 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:scale-105 bg-midnight-blue/80 backdrop-blur-md">
          <span className="text-xs md:text-sm font-outfit font-bold tracking-wider uppercase text-gray-200 group-hover:text-electric-blue transition-colors">
            Scroll Now
          </span>
          <motion.div 
            className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-electric-blue group-hover:bg-electric-blue group-hover:text-black group-hover:shadow-[0_0_10px_#00E5FF] transition-all"
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
