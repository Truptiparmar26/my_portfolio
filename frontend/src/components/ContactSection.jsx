import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';
import Globe from 'react-globe.gl';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotate
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1;
      globeRef.current.pointOfView({ lat: 37.7749, lng: -122.4194, altitude: 2 }, 4000);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const markers = [
    { lat: 37.7749, lng: -122.4194, size: 20, color: '#00E5FF' }, // SF
    { lat: 40.7128, lng: -74.0060, size: 15, color: '#B921FF' },  // NY
    { lat: 51.5074, lng: -0.1278, size: 15, color: '#00FFFF' },   // London
  ];

  return (
    <section className="relative py-32 px-4 bg-background z-10 overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-electric-blue/10 to-transparent -z-10 pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-blue/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-ping"></span>
            <span className="text-sm font-medium text-electric-blue uppercase tracking-wider">Get In Touch</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Let's Build the <span className="text-gradient">Future</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            {/* Success Overlay */}
            {isSubmitted && (
              <motion.div 
                className="absolute inset-0 bg-background/90 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-20 h-20 rounded-full bg-electric-blue/20 flex items-center justify-center mb-6">
                  <FiSend className="text-4xl text-electric-blue" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">I will get back to you within 24 hours.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                  <input type="text" id="name" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all text-white" placeholder="John Doe" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input type="email" id="email" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all text-white" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input type="text" id="subject" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all text-white" placeholder="Project Inquiry" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea id="message" rows="5" className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all text-white resize-none" placeholder="Tell me about your project..." required></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 mt-4">
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="glass-card p-6 rounded-3xl flex flex-col items-start hover:border-electric-blue/30 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-4 group-hover:scale-110 transition-transform">
                  <FiMail className="text-xl" />
                </div>
                <h5 className="text-gray-400 text-sm mb-1">Email Me</h5>
                <a href="mailto:hello@example.com" className="text-white font-medium hover:text-electric-blue transition-colors">hello@example.com</a>
              </div>
              <div className="glass-card p-6 rounded-3xl flex flex-col items-start hover:border-neon-purple/30 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple mb-4 group-hover:scale-110 transition-transform">
                  <FiMapPin className="text-xl" />
                </div>
                <h5 className="text-gray-400 text-sm mb-1">Location</h5>
                <span className="text-white font-medium">San Francisco, CA</span>
              </div>
            </div>
            
            {/* 3D Globe Wrapper */}
            <div className="relative flex-grow h-[300px] md:h-[400px] rounded-3xl overflow-hidden glass border border-white/5 flex items-center justify-center cursor-move">
              <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_50px_rgba(5,5,5,0.8)]"></div>
              
              <Globe
                ref={globeRef}
                height={400}
                width={400}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere={true}
                atmosphereColor="#00E5FF"
                atmosphereAltitude={0.25}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                htmlElementsData={markers}
                htmlElement={(d) => {
                  const el = document.createElement('div');
                  el.innerHTML = `<div style="width: ${d.size}px; height: ${d.size}px; background-color: ${d.color}; border-radius: 50%; box-shadow: 0 0 15px ${d.color}; animation: pulse 2s infinite;"></div>`;
                  return el;
                }}
              />
            </div>

            <div className="flex gap-4 mt-10 justify-center lg:justify-start">
              <a href="#" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-gray-300 hover:text-white">
                <FiGithub className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-gray-300 hover:text-white">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-gray-300 hover:text-white">
                <FiTwitter className="text-xl" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
