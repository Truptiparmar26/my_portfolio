import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiMail, FiMapPin, FiBriefcase, FiClock, FiGithub, FiLinkedin, FiSend, FiCheck, FiArrowRight } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import apiClient from '../services/apiClient';

// Helper for conditional tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Reusable high-tech floating label input
const FloatingInput = ({ id, label, type = "text", value, onChange, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative group w-full">
      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          rows={5}
          className={cn(
            "w-full bg-[#0d1222]/90 border border-white/15 rounded-2xl px-6 py-5 text-white outline-none transition-all duration-300 resize-none font-medium text-sm sm:text-base shadow-inner",
            "hover:border-white/30",
            isFocused && "bg-[#11172c] border-[#00E5FF]/80 shadow-[0_0_20px_rgba(0,229,255,0.25)]"
          )}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          className={cn(
            "w-full h-16 bg-[#0d1222]/90 border border-white/15 rounded-2xl px-6 text-white outline-none transition-all duration-300 font-medium text-sm sm:text-base shadow-inner",
            "hover:border-white/30",
            isFocused && "bg-[#11172c] border-[#00E5FF]/80 shadow-[0_0_20px_rgba(0,229,255,0.25)]"
          )}
        />
      )}
      
      <label
        htmlFor={id}
        className={cn(
          "absolute left-6 transition-all duration-300 pointer-events-none font-bold tracking-wide",
          isActive 
            ? "-top-2.5 bg-[#0a0f1d] px-2.5 text-xs text-[#00E5FF] border border-[#00E5FF]/40 rounded-full shadow-sm" 
            : "top-5 text-sm sm:text-base text-gray-400 group-hover:text-gray-300"
        )}
      >
        {label}
      </label>
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // 1. Send email directly from the browser via Web3Forms
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '48a61441-0889-4040-b894-e64647d0cdba',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Website"
        })
      });

      // 2. Save message to database
      await apiClient.post('/messages', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      setSubmitError(error.response?.data?.message || error.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    { icon: <FiMail />, title: 'Email', value: 'truptiofficial.it@gmail.com', gradient: 'from-[#D500F9] to-[#8B5CF6]', shadow: 'shadow-[0_0_22px_rgba(213,0,249,0.45)]' },
    { icon: <FiMapPin />, title: 'Location', value: 'Ahmedabad, India', gradient: 'from-[#00E5FF] to-[#0072ff]', shadow: 'shadow-[0_0_22px_rgba(0,229,255,0.45)]' },
    { icon: <FiBriefcase />, title: 'Freelance', value: 'Available for work', gradient: 'from-[#F59E0B] to-[#D97706]', shadow: 'shadow-[0_0_22px_rgba(245,158,11,0.45)]' },
    { icon: <FiClock />, title: 'Response Time', value: 'Within 24 Hours', gradient: 'from-[#3B82F6] to-[#8B5CF6]', shadow: 'shadow-[0_0_22px_rgba(59,130,246,0.45)]' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/Truptiparmar26', name: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/trupti-parmar-46a5082a0', name: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:truptiofficial.it@gmail.com', name: 'Email' },
  ];

  return (
    <section className="relative w-full bg-[#04070e] overflow-hidden py-32 px-4 sm:px-8 z-10" id="contact">
      {/* Ambient Cybernetic Lighting Blobs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1222] border border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.25)] mb-5">
            <HiSparkles className="w-4 h-4 text-electric-blue animate-pulse" />
            <span className="text-xs font-extrabold text-electric-blue uppercase tracking-widest">Connect With Me</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5">
            Contact <span className="text-gradient font-black">Information</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl font-medium leading-relaxed">
            Ready to bring your architectural vision to life? Get in touch today—I would love to discuss how we can build something extraordinary together.
          </p>
        </motion.div>

        {/* Main Content Grid - EXACT SAME LAYOUT STRUCTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
          
          {/* Form Console Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card bg-[#080d1a]/95 backdrop-blur-2xl p-7 sm:p-11 rounded-[2.5rem] border border-white/15 hover:border-[#00E5FF]/50 shadow-[0_20px_60px_rgba(0,0,0,0.85),_0_0_35px_rgba(0,229,255,0.15)] relative overflow-hidden transition-all duration-500 group/form">
              
              {/* Top Neon Accent Beam */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6]"></div>

              {/* Interior Background Aura */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none group-hover/form:bg-[#00E5FF]/15 transition-colors duration-700"></div>

              {submitError && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput id="name" label="Full Name" value={formData.name} onChange={handleChange} />
                  <FloatingInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} />
                </div>
                
                <FloatingInput id="subject" label="Subject" value={formData.subject} onChange={handleChange} />
                <FloatingInput id="message" label="Your Message" value={formData.message} onChange={handleChange} isTextArea />
                
                <div className="mt-2 flex items-center justify-start">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || isSubmitted}
                    className={cn(
                      "relative min-w-[240px] h-14 sm:h-16 px-8 rounded-full transition-all duration-300 font-extrabold text-sm sm:text-base tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.7)] transform hover:-translate-y-0.5 uppercase",
                      isSubmitting || isSubmitted ? "cursor-not-allowed opacity-80" : "hover:scale-105",
                      isSubmitted ? "bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)]" : "bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6] text-white"
                    )}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <span>Transmission...</span>
                        </motion.span>
                      ) : isSubmitted ? (
                        <motion.span key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2 font-bold">
                          <span>Message Transmitted!</span> <FiCheck className="text-xl text-white" />
                        </motion.span>
                      ) : (
                        <motion.span key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3 group/btn">
                          <span>Send Message</span> 
                          <FiArrowRight className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </form>

            </div>
          </motion.div>

          {/* Info Cards Side (Right) - EXACT SAME 2x2 + SOCIAL HUB STRUCTURE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* 2x2 Info Grid (Always 2x2 on both Mobile Phones and Desktops!) */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-6">
              {infoCards.map((card, idx) => (
                <Tilt 
                  key={idx}
                  tiltMaxAngleX={4} 
                  tiltMaxAngleY={4} 
                  scale={1.02} 
                  transitionSpeed={2000} 
                  className="h-full"
                >
                  <div className="glass-card bg-[#080e1d]/90 backdrop-blur-2xl p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#00E5FF]/60 transition-all duration-500 flex flex-col justify-between items-start gap-4 sm:gap-5 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.85),_0_0_25px_rgba(0,229,255,0.2)] transform hover:-translate-y-1.5 group/card h-full">
                    
                    {/* Glowing Icon Pedestal */}
                    <div className={cn("w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl text-white bg-gradient-to-br transform transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-6 shrink-0", card.gradient, card.shadow)}>
                      <span>{card.icon}</span>
                    </div>
                    
                    <div className="w-full">
                      <p className="text-[10px] sm:text-xs text-gray-400 font-extrabold uppercase tracking-wider sm:tracking-widest mb-1">{card.title}</p>
                      <p className="text-xs sm:text-base text-white font-bold break-all sm:break-normal leading-snug group-hover/card:text-cyan-300 transition-colors duration-300">{card.value}</p>
                    </div>

                  </div>
                </Tilt>
              ))}
            </div>

            {/* "CONNECT ELSEWHERE" High-Tech Social Console */}
            <div className="glass-card bg-[#080e1d]/95 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 hover:border-white/25 flex flex-col items-center justify-center gap-6 relative overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.85)] group/social">
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/5 via-transparent to-[#8B5CF6]/5 opacity-50 group-hover/social:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <p className="text-cyan-300 font-black text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
                <span>Connect Elsewhere</span>
              </p>

              <div className="flex items-center gap-5 flex-wrap justify-center relative z-10">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    target={social.href !== '#' ? "_blank" : undefined}
                    rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                    aria-label={social.name}
                    onClick={(e) => {
                      if (social.href !== '#') {
                        e.preventDefault();
                        if (social.href.startsWith('mailto:')) {
                          window.location.href = social.href;
                        } else {
                          window.open(social.href, '_blank', 'noopener,noreferrer');
                        }
                      }
                    }}
                    className="w-16 h-16 rounded-2xl bg-[#101528] border border-white/15 hover:border-[#00E5FF]/70 flex items-center justify-center text-2xl text-gray-300 hover:text-white transition-all duration-300 relative group/icon shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(0,229,255,0.45)] hover:scale-110 hover:-translate-y-1 cursor-pointer"
                  >
                    <span className="relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Success Notification Toast */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0b1222]/95 backdrop-blur-2xl border border-emerald-500/50 shadow-[0_12px_40px_rgba(16,185,129,0.35)]"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.4)]">
              <FiCheck className="text-xl" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Transmission Confirmed</h4>
              <p className="text-xs text-gray-300 font-medium">Your message has been sent successfully!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
