import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion GPU-Accelerated Live Scroll Progress Telemetry
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPos > 20);

      // High-precision scroll-spy section recognition
      const scanPosition = scrollPos + 300;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scanPosition >= top && scanPosition <= top + height + 100) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger instantly on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setActiveSection(id);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* 
        Ultra-Crisp Top Neon Scroll Progress Line (Like Image 2)
      */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-black/60 z-[9999] pointer-events-none">
        <motion.div 
          className="h-full w-full bg-gradient-to-r from-[#00E5FF] via-[#068FFF] via-[#8B5CF6] to-[#D500F9] shadow-[0_0_15px_#00E5FF,_0_0_25px_#8B5CF6,_0_0_30px_#D500F9] origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Clean Edge-to-Edge Dark Header Band (Removes double-box clunkiness) */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-outfit px-4 sm:px-8 ${
          isScrolled
            ? 'bg-[#050811]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
            : 'bg-gradient-to-b from-[#050811]/95 to-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* 1. Left Side: Brand Logo with Glowing Cyan Dot Next to .dev */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home', 'home')} 
            className="text-xl sm:text-2xl font-extrabold tracking-wide text-white flex items-center group cursor-pointer shrink-0"
          >
            <span>Trupti</span>
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#B921FF] bg-clip-text text-transparent ml-0.5 opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 font-black">.dev</span>
          </a>

          {/* 2. Center: Image 2 Style Title Case Dark Navigation Capsule */}
          <nav className="hidden md:flex items-center bg-[#0d121f]/90 border border-white/15 rounded-full p-1.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] backdrop-blur-xl gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-4 lg:px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-[#00c6ff]/25 via-[#0072ff]/35 to-[#8b5cf6]/30 border border-[#00E5FF]/50 shadow-[0_0_18px_rgba(0,229,255,0.35)]' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* 3. Right Side: Signature Resume & Hire Me Executive Action Buttons */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            {/* Professional Executive Resume Capsule */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group/res hidden lg:flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0d1322]/90 hover:bg-[#151c33] text-gray-200 hover:text-white font-extrabold text-xs sm:text-sm tracking-wide border border-cyan-500/35 hover:border-[#00E5FF] shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_0_25px_rgba(0,229,255,0.45)] transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <FiFileText className="w-4 h-4 text-[#00E5FF] group-hover/res:scale-110 group-hover/res:-rotate-12 transition-transform duration-300 shrink-0 shadow-[0_0_8px_#00E5FF]" />
              <span>Resume</span>
            </a>

            {/* Luminous Cyber-Luxury Hire Me Button */}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact', 'contact')} 
              className="group/hire flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6] hover:from-[#00FFFF] hover:to-[#B921FF] text-white font-black text-xs sm:text-sm tracking-wider uppercase border border-white/40 shadow-[0_0_25px_rgba(0,229,255,0.6),_0_0_40px_rgba(185,33,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.9),_0_0_50px_rgba(185,33,255,0.8)] transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-[spin_4s_linear_infinite] drop-shadow-[0_0_8px_#ffffff] shrink-0" />
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover/hire:translate-x-full transition-transform duration-700 pointer-events-none" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden w-10 h-10 rounded-full glass bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:text-electric-blue transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FiX className="w-5 h-5 text-electric-blue" /> : <FiMenu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Nav Overlay Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-16 left-[5%] w-[90%] glass-card bg-midnight-blue/95 border border-white/20 rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9),_0_0_30px_rgba(0,229,255,0.3)] flex flex-col items-center gap-3 z-40 md:hidden font-outfit"
            >
              <div className="w-12 h-1 rounded-full bg-white/20 mb-2"></div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`w-full py-3 px-6 rounded-2xl text-center font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-3 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_0_22px_rgba(0,229,255,0.45)]'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}

              <div className="w-full flex items-center justify-between gap-3 mt-2 pt-3 border-t border-white/10">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-2xl bg-[#0d1322] border border-cyan-500/35 hover:border-[#00E5FF] text-white text-xs font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                >
                  <FiFileText className="text-[#00E5FF] w-4 h-4" />
                  <span>Resume</span>
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6] text-white text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.5)]"
                >
                  <HiSparkles className="w-4 h-4 text-white animate-[spin_4s_linear_infinite]" />
                  <span>Hire Me</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
