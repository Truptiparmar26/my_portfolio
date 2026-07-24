import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 px-4 bg-background z-10 border-t border-white/10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-b from-electric-blue/5 to-transparent -z-10 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-12">
          
          {/* About Column */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-start text-left">
            <h4 className="text-2xl md:text-3xl font-outfit font-bold tracking-wide text-white mb-4">
              Trupti<span className="text-gradient"> Parmar</span>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Passionate AI Enthusiast and Full-Stack MERN Developer. I love building intelligent, scalable, and beautifully designed web applications that solve real-world problems.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div className="col-span-1 md:col-span-3">
            <h5 className="text-lg font-semibold text-white mb-6">Quick Links</h5>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-electric-blue hover:translate-x-1 transition-transform w-fit">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Let's Connect Column */}
          <div className="col-span-1 md:col-span-4">
            <h5 className="text-lg font-semibold text-white mb-6">Let's Connect</h5>
            <p className="text-sm text-gray-400 mb-4">
Have a project, collaboration, or opportunity in mind? I'd love to hear from you. Let's create something amazing together.            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Truptiparmar26" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-electric-blue hover:-translate-y-1 transition-all text-gray-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/trupti-parmar-46a5082a0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-electric-blue hover:-translate-y-1 transition-all text-gray-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <FiLinkedin />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-electric-blue hover:-translate-y-1 transition-all text-gray-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <FiTwitter />
              </a> */}
              <a href="mailto:truptiofficial.it@gmail.com" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-electric-blue hover:-translate-y-1 transition-all text-gray-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <FiMail />
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Trupti Parmar. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-electric-blue hover:-translate-y-2 transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.1)]"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
