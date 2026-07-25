import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiLayers, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const services = [
  {
    title: 'Frontend Development',
    category: 'UI/UX & Web Architecture',
    icon: <FiLayout className="w-8 h-8 text-[#00E5FF] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />,
    gradient: 'from-[#00E5FF] to-[#0072ff]',
    description: 'Building responsive, interactive, and highly optimized user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.',
    features: ['React & Next.js', 'Framer Motion 3D', 'Three.js Elements', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    category: 'Cloud & API Systems',
    icon: <FiServer className="w-8 h-8 text-[#3B82F6] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />,
    gradient: 'from-[#0072ff] via-[#3B82F6] to-[#8B5CF6]',
    description: 'Creating robust, scalable, and secure server-side applications and RESTful APIs using Node.js, Express, and databases like MongoDB.',
    features: ['Node.js & Express', 'RESTful APIs', 'Auth & Security', 'Database Design'],
  },
  {
    title: 'Full Stack Solutions',
    category: 'End-to-End Engineering',
    icon: <FiLayers className="w-8 h-8 text-[#8B5CF6] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />,
    gradient: 'from-[#3B82F6] to-[#D500F9]',
    description: 'Delivering complete, production-ready web applications, handling everything from database architecture to frontend UI deployment.',
    features: ['MERN Stack', 'Admin Dashboards', 'E-Commerce Platforms', 'CI/CD & Deployment'],
  },
  {
    title: 'Machine Learning & AI',
    category: 'Intelligent Algorithms',
    icon: <FiCpu className="w-8 h-8 text-[#D500F9] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />,
    gradient: 'from-[#8B5CF6] via-[#D500F9] to-[#FF2A85]',
    description: 'Integrating intelligent features, automated pipelines, and neural predictive models into web apps using cutting-edge ML & Deep Learning.',
    features: ['Machine Learning', 'Deep Learning (DL)', 'AI Integration', 'Data Analytics'],
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-32 bg-[#050811] z-10 overflow-hidden" id="services">
      {/* Background Cybernetic Decor */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1222] border border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.25)] mb-5">
            <HiSparkles className="w-4 h-4 text-electric-blue animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs font-extrabold text-electric-blue uppercase tracking-widest">Core Capabilities</span>
          </div>
          
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Web & <span className="text-gradient font-black">AI Solutions</span>
          </h3>
          
          <p className="max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            Bridging state-of-the-art full-stack engineering with intelligent artificial intelligence models to architect secure, high-performance digital solutions.
          </p>
        </motion.div>

      </div>
        
      {/* Infinite Marquee Console Wrapper */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Left & Right Edge Fades for Seamless Floating Illusion */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#050811] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#050811] to-transparent z-20 pointer-events-none"></div>

        {/* CSS Marquee Animation */}
        <div className="flex animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="w-[340px] sm:w-[420px] lg:w-[460px] shrink-0 mx-4 sm:mx-6 flex">
              
              <div className="glass-card bg-[#0b101f]/90 backdrop-blur-2xl flex flex-col group transition-all duration-500 w-full p-7 sm:p-8 rounded-[2.2rem] border border-white/10 hover:border-[#00E5FF]/60 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),_0_0_35px_rgba(0,229,255,0.25)] relative overflow-hidden transform hover:-translate-y-2">
                
                {/* Glowing Top Beam Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${service.gradient} opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Ambient Interior Background Glow */}
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br from-[#00E5FF]/15 via-transparent to-purple-500/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>

                {/* Header Icon Pedestal & Category */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#12182c] border border-white/15 group-hover:border-[#00E5FF]/50 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6),_inset_0_2px_10px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all duration-500 shrink-0">
                    {service.icon}
                  </div>

                  <span className="text-[11px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full bg-[#141a2e] text-cyan-300 border border-white/10 shadow-sm mt-1">
                    {service.category}
                  </span>
                </div>

                <h4 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow font-medium">
                  {service.description}
                </p>
                
                {/* Professional 2-Column Skill Capsule Badges (Replaces Plain Bullets) */}
                <div className="grid grid-cols-2 gap-2.5 mt-auto pt-6 border-t border-white/10">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#121626] border border-white/10 group-hover:border-[#00E5FF]/35 transition-all duration-300 shadow-inner group/pill"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#D500F9] shadow-[0_0_8px_#00E5FF] shrink-0 group-hover/pill:scale-125 transition-transform"></div>
                      <span className="text-xs font-bold text-gray-200 truncate tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default ServicesSection;
