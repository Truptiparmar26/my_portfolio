import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-[#050811] z-10 overflow-hidden text-gray-300 border-t border-white/10">
      {/* Glowing Top Beam Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF]/70 to-transparent shadow-[0_0_20px_#00E5FF]"></div>

      {/* Ambient Cyber-Auras */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-[#00E5FF]/10 rounded-full blur-[170px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[180px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Branding, Status Pill & Executive Bio (5 Columns) */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-start text-left">
            <h4 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4 drop-shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center gap-2">
              <span>Trupti</span><span className="text-gradient font-black">Parmar</span>
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
            </h4>
            
            {/* Live Career Readiness Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d1527] border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Open for Work & Collaborations</span>
            </div>

            <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-md">
              Passionate AI Enthusiast and Full-Stack MERN Developer. Dedicated to engineering intelligent, scalable, and beautifully architected digital solutions that solve real-world challenges.
            </p>
          </div>
          
          {/* Column 2: Interactive Navigation (3 Columns) */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h5 className="text-base font-extrabold text-white uppercase tracking-widest mb-5 pb-2 border-b border-white/10 w-fit flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
              <span>Navigation</span>
            </h5>
            <ul className="space-y-3 font-semibold text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Me', href: '#about' },
                { name: 'Tech Stack & Skills', href: '#skills' },
                { name: 'Featured Projects', href: '#projects' },
                { name: 'Get In Touch', href: '#contact' }
              ].map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-[#00E5FF] transition-all duration-300 group py-0.5 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] group-hover:bg-[#00E5FF] group-hover:scale-150 transition-all"></span>
                    <span className="group-hover:translate-x-1.5 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Unification of Let's Connect & Social Profiles (4 Columns) */}
          <div className="col-span-1 md:col-span-4">
            
            <div className="glass-card bg-[#0b101f]/95 backdrop-blur-2xl p-6 sm:p-7 rounded-[2.2rem] border border-white/15 hover:border-[#00E5FF]/60 shadow-[0_15px_40px_rgba(0,0,0,0.85),_0_0_30px_rgba(0,229,255,0.15)] relative overflow-hidden transition-all duration-500 group/box">
              
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6]"></div>

              {/* Ambient Interior Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#00E5FF]/15 rounded-full blur-2xl group-hover/box:scale-125 transition-transform duration-700 pointer-events-none"></div>

              <div className="flex items-center justify-between mb-5">
                <h5 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <HiSparkles className="w-4 h-4 text-[#00E5FF] animate-pulse" />
                  <span>Let's Connect</span>
                </h5>
                <span className="text-[10px] font-extrabold text-cyan-300 uppercase px-2.5 py-1 rounded-full bg-[#12182c] border border-cyan-500/30">
                  Direct Hub
                </span>
              </div>
              
              {/* Interactive Email Action Pill Card */}
              <a 
                href="mailto:truptiofficial.it@gmail.com" 
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#11172a]/90 border border-white/10 hover:border-[#00E5FF]/70 hover:bg-[#161e38] transition-all duration-300 group/mail shadow-inner mb-6 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00E5FF] via-[#0072ff] to-[#8B5CF6] text-white flex items-center justify-center text-lg shadow-[0_0_18px_rgba(0,229,255,0.45)] group-hover/mail:scale-110 group-hover/mail:rotate-6 transition-all duration-300 shrink-0">
                  <FiMail />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Send Direct Email</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover/mail:text-cyan-300 transition-colors truncate block">
                    truptiofficial.it@gmail.com
                  </span>
                </div>
                <FiExternalLink className="w-4 h-4 text-gray-400 group-hover/mail:text-cyan-300 group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5 transition-all ml-auto shrink-0" />
              </a>

              {/* Labeled High-Tech Social Profiles Grid */}
              <div className="pt-5 border-t border-white/10">
                <span className="text-[11px] font-extrabold text-gray-300 tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                  <span>Social Profiles</span>
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  {/* GitHub Capsule */}
                  <a 
                    href="https://github.com/Truptiparmar26" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2.5 py-3 px-3.5 rounded-xl bg-[#13182b] hover:bg-[#1a223a] text-gray-200 hover:text-white font-extrabold text-xs sm:text-sm border border-white/15 hover:border-[#00E5FF]/60 shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 group/git cursor-pointer"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub className="text-base text-[#00E5FF] group-hover/git:scale-125 transition-transform duration-300" />
                    <span>GitHub</span>
                  </a>

                  {/* LinkedIn Capsule */}
                  <a 
                    href="https://www.linkedin.com/in/trupti-parmar-46a5082a0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2.5 py-3 px-3.5 rounded-xl bg-[#13182b] hover:bg-[#1a223a] text-gray-200 hover:text-white font-extrabold text-xs sm:text-sm border border-white/15 hover:border-[#D500F9]/60 shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(213,0,249,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 group/in cursor-pointer"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin className="text-base text-[#D500F9] group-hover/in:scale-125 transition-transform duration-300" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
        
        {/* Bottom Copyright Bar & Floating Back-To-Top Pill */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-medium">
          <p className="text-xs sm:text-sm text-gray-300 font-semibold">
            © {new Date().getFullYear()} Trupti Parmar. <span className="text-gray-500 font-normal">All rights reserved.</span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-full bg-[#0f1629] border border-white/20 hover:border-[#00E5FF] flex items-center gap-2.5 text-white hover:text-[#00E5FF] hover:shadow-[0_0_25px_rgba(0,229,255,0.45)] hover:scale-105 transition-all duration-300 font-bold text-xs uppercase tracking-wider group cursor-pointer shadow-md"
            aria-label="Back to top"
          >
            <span>Back To Top</span>
            <div className="w-5 h-5 rounded-full bg-[#00E5FF] text-black flex items-center justify-center group-hover:-translate-y-0.5 transition-transform font-black text-xs shadow-[0_0_8px_#00E5FF]">
              ↑
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
