import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Frontend Development',
    icon: '💻',
    description: 'Building responsive, interactive, and highly optimized user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.',
    features: ['React & Next.js', 'Framer Motion Animations', 'Three.js 3D Elements', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    description: 'Creating robust, scalable, and secure server-side applications and RESTful APIs using Node.js, Express, and databases like MongoDB.',
    features: ['Node.js & Express', 'RESTful APIs', 'Authentication & Security', 'Database Design'],
  },
  {
    title: 'Full Stack Solutions',
    icon: '🚀',
    description: 'Delivering end-to-end web applications, handling everything from database architecture to user interface deployment.',
    features: ['MERN Stack', 'Admin Dashboards', 'E-Commerce Solutions', 'Deployment & CI/CD'],
  },
  {
    title: 'Machine Learning & AI',
    icon: '🧠',
    description: 'Integrating intelligent features and predictive models into applications using Machine Learning and Deep Learning techniques.',
    features: ['Machine Learning (ML)', 'Deep Learning (DL)', 'AI Integration', 'Data Analytics'],
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 bg-dark-navy z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/20 mb-6">
            <span className="text-sm font-medium text-neon-purple uppercase tracking-wider">What I Do</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold">
            Premium <span className="text-gradient">Services</span>
          </h3>
        </motion.div>

      </div>
        
      {/* Infinite Slider Wrapper */}
      <div className="relative w-full overflow-hidden flex pb-8">
        {/* CSS Marquee Animation */}
        <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="w-[350px] md:w-[450px] flex-shrink-0 mx-4 flex">
              <div className="glass-card flex flex-col group transition-all duration-300 w-full h-full border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center text-3xl mb-6 border border-white/10 group-hover:border-accent-blue/50 transition-colors flex-shrink-0">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                
                <ul className="space-y-2 mt-auto">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
