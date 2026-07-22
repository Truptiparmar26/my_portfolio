import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 bg-background z-10 border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-6 md:mb-0">
          <h4 className="text-2xl font-bold tracking-tighter text-white">
            <span className="text-gradient">3D</span>Portfolio
          </h4>
          <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 mb-6 md:mb-0">
          {['Home', 'About', 'Projects', 'Services'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-accent-blue hover:-translate-y-2 transition-all duration-300"
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
