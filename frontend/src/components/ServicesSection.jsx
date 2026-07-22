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
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 px-4 bg-dark-navy z-10 flex justify-center">
      <div className="max-w-6xl w-full">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-accent-purple uppercase mb-2">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Premium <span className="text-gradient">Services</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card flex flex-col group hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center text-3xl mb-6 border border-white/10 group-hover:border-accent-blue/50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
