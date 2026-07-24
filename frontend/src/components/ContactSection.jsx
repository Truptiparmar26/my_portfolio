import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiMail, FiMapPin, FiBriefcase, FiClock, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiSend, FiCheck, FiArrowRight } from 'react-icons/fi';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for conditional tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Magnetic effect wrapper
const Magnetic = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className={cn("relative inline-block", className)}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

// Reusable floating label input
const FloatingInput = ({ id, label, type = "text", value, onChange, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative group w-full">
      <div 
        className={cn(
          "absolute inset-0 rounded-[18px] transition-all duration-500 blur-xl opacity-0 pointer-events-none",
          isFocused && "opacity-20 bg-neon-purple"
        )}
      />
      
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
            "w-full bg-white/[0.02] border border-white/[0.08] rounded-[18px] px-6 py-5 text-white outline-none transition-all duration-300 resize-none",
            "hover:bg-white/[0.04] hover:border-white/[0.12]",
            isFocused && "bg-white/[0.05] border-neon-purple/50 shadow-[0_0_0_1px_rgba(185,33,255,0.5)]"
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
            "w-full h-[64px] bg-white/[0.02] border border-white/[0.08] rounded-[18px] px-6 text-white outline-none transition-all duration-300",
            "hover:bg-white/[0.04] hover:border-white/[0.12]",
            isFocused && "bg-white/[0.05] border-neon-purple/50 shadow-[0_0_0_1px_rgba(185,33,255,0.5)]"
          )}
        />
      )}
      
      <label
        htmlFor={id}
        className={cn(
          "absolute left-6 text-gray-400 transition-all duration-300 pointer-events-none font-medium",
          isActive 
            ? "-top-3 bg-background px-2 text-xs text-neon-purple" 
            : "top-[20px] text-base group-hover:text-gray-300"
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
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    { icon: <FiMail />, title: 'Email', value: 'truptiofficial.it@gmail.com', gradient: 'from-neon-purple to-royal-violet' },
    { icon: <FiMapPin />, title: 'Location', value: 'Ahmedabad, India', gradient: 'from-electric-blue to-accent-blue' },
    { icon: <FiBriefcase />, title: 'Freelance', value: 'Available for work', gradient: 'from-soft-gold to-yellow-600' },
    { icon: <FiClock />, title: 'Response Time', value: 'Within 24 Hours', gradient: 'from-neon-purple to-electric-blue' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/Truptiparmar26' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/trupti-parmar-46a5082a0' },
    { icon: <FiMail />, href: 'mailto:truptiofficial.it@gmail.com' },
  ];

  return (
    <section 
      className="relative w-full bg-background overflow-hidden py-[140px] px-6 lg:px-12 selection:bg-neon-purple/30" 
      id="contact"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-neon-purple/20 blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-electric-blue/20 blur-[150px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-glow/20 blur-[120px]"
        />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center mb-24"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8 inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Contact <span className="text-gradient">Information</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-medium">
Ready to bring your vision to life? I'd love to hear about your next project.          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative p-1 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent group hover:from-neon-purple/30 transition-all duration-700">
              <div className="bg-background/90 backdrop-blur-[25px] p-8 md:p-10 rounded-[28px] border border-white/[0.05] relative overflow-hidden">
                
                {/* Form Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] -z-10 group-hover:bg-electric-blue/20 transition-all duration-700 pointer-events-none" />

                {submitError && (
                  <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput id="name" label="Full Name" value={formData.name} onChange={handleChange} />
                    <FloatingInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} />
                  </div>
                  
                  <FloatingInput id="subject" label="Subject" value={formData.subject} onChange={handleChange} />
                  <FloatingInput id="message" label="Your Message" value={formData.message} onChange={handleChange} isTextArea />
                  
                  <div className="mt-4">
                    <Magnetic>
                      <button 
                        type="submit" 
                        disabled={isSubmitting || isSubmitted}
                        className={cn(
                          "relative w-full h-[64px] rounded-full overflow-hidden transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3",
                          isSubmitting || isSubmitted ? "cursor-not-allowed" : "hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]",
                          isSubmitted ? "bg-emerald-500 text-white" : "bg-white text-black hover:bg-transparent hover:text-white"
                        )}
                      >
                        {/* Gradient outline on hover when transparent */}
                        {!isSubmitted && (
                          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-neon-purple via-electric-blue to-royal-violet opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10">
                            <div className="w-full h-full bg-background rounded-full" />
                          </div>
                        )}
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                              Sending...
                            </motion.span>
                          ) : isSubmitted ? (
                            <motion.span key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                              Message Sent <FiCheck className="text-xl" />
                            </motion.span>
                          ) : (
                            <motion.span key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 group/btn z-10">
                              Send Message 
                              <FiArrowRight className="text-xl transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </Magnetic>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {infoCards.map((card, idx) => (
                <Tilt 
                  key={idx}
                  tiltMaxAngleX={10} 
                  tiltMaxAngleY={10} 
                  perspective={1000} 
                  scale={1.02} 
                  transitionSpeed={2000} 
                  gyroscope={true}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group h-full p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-start gap-4 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-10 group-hover:bg-white/10 transition-all duration-500" />
                    
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.2)] bg-gradient-to-br relative transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", card.gradient)}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent" />
                      <div className="absolute inset-x-2 bottom-0 h-1/2 bg-black/20 rounded-b-2xl blur-sm" />
                      <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{card.icon}</span>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-1">{card.title}</p>
                      <p className="text-base text-gray-200 font-semibold">{card.value}</p>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </div>

            {/* Socials row */}
            <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.05] flex flex-col items-center justify-center gap-6 relative z-50">
              <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">Connect Elsewhere</p>
              <div className="flex items-center gap-4 flex-wrap justify-center relative z-50">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    target={social.href !== '#' ? "_blank" : undefined}
                    rel={social.href !== '#' ? "noopener noreferrer" : undefined}
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
                    className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-xl text-gray-300 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300 relative group overflow-hidden shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] cursor-pointer z-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 pointer-events-none flex items-center justify-center w-full h-full">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-4 px-6 py-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-emerald-500/30 shadow-[0_8px_32px_rgba(16,185,129,0.2)]"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <FiCheck className="text-xl" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Success</h4>
              <p className="text-sm text-gray-400">Message sent successfully!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
