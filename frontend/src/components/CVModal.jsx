import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi';
import { useCV } from '../context/CVContext';

const CVModal = () => {
  const { isCVModalOpen, closeCVModal, handleDownloadCV } = useCV();
  const iframeRef = useRef(null);

  // Close modal on Escape key press, lock body overflow when modal is active, and automatically focus the viewer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCVModalOpen) {
        closeCVModal();
      }
    };

    if (isCVModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      
      // Give immediate focus to the PDF document so arrow keys and scroll wheels work natively
      const focusTimer = setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.focus();
        }
      }, 200);
      
      return () => clearTimeout(focusTimer);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCVModalOpen, closeCVModal]);

  return (
    <AnimatePresence>
      {isCVModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl font-outfit"
          onClick={closeCVModal}
        >
          {/* Main Modal Card Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl h-[94vh] flex flex-col glass-card bg-[#070b17]/95 border border-cyan-500/45 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,229,255,0.25),_0_20px_70px_rgba(0,0,0,0.95)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Luminous Executive Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 px-6 border-b border-white/15 bg-[#0a0f1e] relative shrink-0 z-20 shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-[#00E5FF]/20 via-[#3B82F6]/20 to-[#8B5CF6]/20 border border-[#00E5FF]/40 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                  <FiFileText className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
                    Trupti Parmar <span className="text-[#00E5FF] font-black">— CV & Resume</span>
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">AI/ML & Full-Stack MERN Developer</p>
                </div>
              </div>

              {/* Action Toolbar Buttons */}
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                {/* Download CV Action Button */}
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6] hover:from-[#00FFFF] hover:to-[#B921FF] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.8)] transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  title="Directly Download CV (PDF)"
                >
                  <FiDownload className="w-4 h-4 sm:w-4 sm:h-4 text-white shrink-0 animate-bounce" />
                  <span className="font-outfit font-black">Download CV</span>
                </button>

                {/* Open in New Tab Action Link */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full bg-[#0d1322] hover:bg-[#151c33] text-gray-200 hover:text-white font-bold text-xs sm:text-sm tracking-wide border border-white/20 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 cursor-pointer"
                  title="Open CV in new browser tab"
                >
                  <FiExternalLink className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>New Tab</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={closeCVModal}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-rose-500/20 text-gray-300 hover:text-rose-400 border border-white/15 hover:border-rose-500/50 flex items-center justify-center transition-all duration-300 transform hover:rotate-90 hover:scale-110 cursor-pointer"
                  title="Close CV Preview"
                >
                  <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body: Smoothly Scrollable Document Workspace */}
            <div 
              className="relative flex-1 w-full bg-[#04070e] overflow-y-auto overflow-x-hidden flex flex-col items-center p-3 sm:p-6 md:p-8 custom-scrollbar"
              data-lenis-prevent="true"
            >
              {/* Document Paper Frame - native A4 aspect ratio height guarantees frictionless mouse wheel and touch scrolling! */}
              <div className="w-full max-w-[900px] bg-white rounded-xl shadow-[0_15px_60px_rgba(0,0,0,0.9),_0_0_25px_rgba(0,229,255,0.15)] border border-white/25 overflow-hidden flex flex-col min-h-[780px] sm:h-[1220px] shrink-0 mb-4">
                <iframe
                  ref={iframeRef}
                  src="/resume.pdf#toolbar=1&navpan=0&scrollbar=1&view=FitH"
                  className="w-full h-full border-none block bg-white"
                  title="Trupti Parmar CV & Resume Viewer"
                />
              </div>
              
              {/* Mobile & Touch Helper Banner */}
              <div className="w-full max-w-[900px] py-3 px-5 rounded-xl bg-white/5 border border-white/10 text-center flex flex-wrap items-center justify-center gap-2.5 text-xs text-gray-300 shrink-0 mb-2">
                <span>Want full screen view or offline access?</span>
                <button 
                  onClick={handleDownloadCV} 
                  className="text-[#00E5FF] font-black underline hover:text-white transition-colors cursor-pointer"
                >
                  Download CV (PDF)
                </button>
                <span className="text-gray-500">•</span>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neon-purple font-black underline hover:text-white transition-colors cursor-pointer"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;


