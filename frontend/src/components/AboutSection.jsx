import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile-about.jpg';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen py-28 px-4 flex flex-col items-center justify-center z-10 overflow-hidden" id="about">
      {/* Background Ambient Decor */}
      <div className="absolute right-1/4 top-10 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[160px] -z-10 pointer-events-none"></div>
      <div className="absolute left-10 bottom-10 w-[450px] h-[450px] bg-neon-purple/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Centered Section Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/30 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse"></span>
            <span className="text-xs md:text-sm font-outfit font-semibold text-gray-200 uppercase tracking-wider">The Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extrabold tracking-tight text-white">
            About <span className="text-gradient drop-shadow-[0_0_30px_rgba(185,33,255,0.3)]">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Round Circular Profile Photo with Open Status Badge (5 Columns) */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center items-center py-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            {/* Ambient Background Blur Aura */}
            <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[410px] lg:h-[410px] bg-gradient-to-tr from-electric-blue via-neon-purple to-royal-violet rounded-full blur-[75px] opacity-45 group-hover:opacity-75 transition-opacity duration-700 -z-10 pointer-events-none animate-pulse-slow"></div>

            {/* Glowing Neon Gradient Ring Border */}
            <div className="relative w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full p-[4px] bg-gradient-to-tr from-electric-blue via-neon-purple to-indigo-500 shadow-[0_0_60px_rgba(0,229,255,0.3)] hover:shadow-[0_0_90px_rgba(185,33,255,0.5)] transition-all duration-700 group">
              
              {/* Inner Circular Portrait Frame */}
              <div className="w-full h-full rounded-full overflow-hidden bg-midnight-blue border-[4px] border-black/80 relative">
                <img 
                  src={profileImage} 
                  alt="Trupti Parmar" 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating "Open for Opportunities" Status Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full glass bg-midnight-blue/95 border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.35)] flex items-center gap-2.5 z-20 whitespace-nowrap hover:scale-105 transition-transform duration-300 cursor-default">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
                </span>
                <span className="text-xs sm:text-sm font-outfit font-bold tracking-wide text-white">
                  Open for Opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Executive Summary & Highlights Grid (7 Columns) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="space-y-5 text-gray-300">
              <p className="text-lg sm:text-xl font-outfit text-gray-200 leading-relaxed">
                Hello! I'm <strong className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-indigo-300 to-neon-purple font-black">Trupti Parmar</strong>, a passionate <strong className="text-electric-blue font-bold">AI/ML Enthusiast</strong> and <strong className="text-white font-bold">Full Stack MERN Developer</strong> dedicated to engineering intelligent, high-performance web experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                My expertise lies in architecting robust, responsive server and frontend ecosystems using <strong className="text-white font-semibold">MongoDB, Express.js, React.js, and Node.js</strong>, while continuously exploring real-world innovations in <strong className="text-neon-purple font-semibold">Artificial Intelligence</strong>. I excel at solving intricate architectural problems and transforming complex ideas into elegant software products.
              </p>
            </div>

            {/* Interactive 2x2 Core Proficiencies Card Grid (Always 2x2 on Mobile & Desktop!) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
              
              {/* Card 1: MERN Architecture */}
              <div className="p-3.5 sm:p-4 rounded-2xl glass bg-midnight-blue/40 border border-white/10 hover:border-electric-blue/60 hover:bg-white/5 transition-all duration-300 group flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 shadow-sm">
                <div className="p-2 sm:p-2.5 rounded-xl bg-electric-blue/10 text-electric-blue border border-electric-blue/20 group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-black transition-all duration-300 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-base font-outfit font-bold text-white group-hover:text-electric-blue transition-colors leading-tight sm:leading-normal">MERN Stack Mastery</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 leading-relaxed sm:leading-normal">Full-stack SPAs & scalable RESTful APIs</p>
                </div>
              </div>

              {/* Card 2: AI / ML Exploration */}
              <div className="p-3.5 sm:p-4 rounded-2xl glass bg-midnight-blue/40 border border-white/10 hover:border-neon-purple/60 hover:bg-white/5 transition-all duration-300 group flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 shadow-sm">
                <div className="p-2 sm:p-2.5 rounded-xl bg-neon-purple/10 text-neon-purple border border-neon-purple/20 group-hover:scale-110 group-hover:bg-neon-purple group-hover:text-white transition-all duration-300 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-base font-outfit font-bold text-white group-hover:text-neon-purple transition-colors leading-tight sm:leading-normal">AI & Neural Systems</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 leading-relaxed sm:leading-normal">Exploring machine learning & smart models</p>
                </div>
              </div>

              {/* Card 3: Database & Cloud Systems (Vibrant Golden Amber Palette!) */}
              <div className="p-3.5 sm:p-4 rounded-2xl glass bg-midnight-blue/40 border border-white/10 hover:border-amber-400/60 hover:bg-white/5 transition-all duration-300 group flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 shadow-sm">
                <div className="p-2 sm:p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-base font-outfit font-bold text-white group-hover:text-amber-300 transition-colors leading-tight sm:leading-normal">Database & Cloud Systems</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 leading-relaxed sm:leading-normal">Robust MongoDB schemas & cloud deployment</p>
                </div>
              </div>

              {/* Card 4: Career Ready */}
              <div className="p-3.5 sm:p-4 rounded-2xl glass bg-midnight-blue/40 border border-white/10 hover:border-emerald-400/60 hover:bg-white/5 transition-all duration-300 group flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 shadow-sm">
                <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-black transition-all duration-300 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-base font-outfit font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight sm:leading-normal">Career & Impact Ready</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 leading-relaxed sm:leading-normal">Eager for impactful full-stack roles</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
