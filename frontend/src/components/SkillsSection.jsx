import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const skillCategories = [
  { id: 'all', name: 'All Skills' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'ai', name: 'AI / ML' },
  { id: 'tools', name: 'Tools & DevOps' }
];

const skills = [
  // Frontend
  { name: 'React', category: 'frontend', icon: '⚛️', color: 'from-[#61DAFB]/20 to-[#61DAFB]/5' },
  { name: 'Next.js', category: 'frontend', icon: '▲', color: 'from-white/20 to-white/5' },
  { name: 'TypeScript', category: 'frontend', icon: 'TS', color: 'from-[#3178C6]/20 to-[#3178C6]/5' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '💨', color: 'from-[#38B2AC]/20 to-[#38B2AC]/5' },
  { name: 'Three.js', category: 'frontend', icon: '🧊', color: 'from-white/20 to-white/5' },
  { name: 'Framer Motion', category: 'frontend', icon: '✨', color: 'from-[#FF0055]/20 to-[#FF0055]/5' },
  
  // Backend
  { name: 'Node.js', category: 'backend', icon: '🟢', color: 'from-[#339933]/20 to-[#339933]/5' },
  { name: 'Express', category: 'backend', icon: '🚂', color: 'from-white/20 to-white/5' },
  { name: 'MongoDB', category: 'backend', icon: '🍃', color: 'from-[#47A248]/20 to-[#47A248]/5' },
  { name: 'REST APIs', category: 'backend', icon: '🔌', color: 'from-electric-blue/20 to-electric-blue/5' },
  { name: 'JWT Auth', category: 'backend', icon: '🔐', color: 'from-neon-purple/20 to-neon-purple/5' },
  
  // AI / ML
  { name: 'Python', category: 'ai', icon: '🐍', color: 'from-[#3776AB]/20 to-[#3776AB]/5' },
  { name: 'TensorFlow', category: 'ai', icon: '🧠', color: 'from-[#FF6F00]/20 to-[#FF6F00]/5' },
  { name: 'OpenCV', category: 'ai', icon: '👁️', color: 'from-[#5C3EE8]/20 to-[#5C3EE8]/5' },
  { name: 'Prompt Eng.', category: 'ai', icon: '💬', color: 'from-cyan-glow/20 to-cyan-glow/5' },
  { name: 'Generative AI', category: 'ai', icon: '🎨', color: 'from-royal-violet/20 to-royal-violet/5' },
  
  // Tools
  { name: 'Git', category: 'tools', icon: '🌳', color: 'from-[#F05032]/20 to-[#F05032]/5' },
  { name: 'Docker', category: 'tools', icon: '🐳', color: 'from-[#2496ED]/20 to-[#2496ED]/5' },
  { name: 'Postman', category: 'tools', icon: '🚀', color: 'from-[#FF6C37]/20 to-[#FF6C37]/5' },
  { name: 'Vercel', category: 'tools', icon: 'V', color: 'from-white/20 to-white/5' },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center z-10" id="skills">
      
      <div className="max-w-6xl w-full mx-auto">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-royal-violet/20 mb-6">
            <span className="text-sm font-medium text-royal-violet uppercase tracking-wider">Tech Stack</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Weapons of <span className="text-gradient">Choice</span>
          </h3>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white shadow-[0_0_20px_rgba(0,229,255,0.3)]' 
                  : 'glass text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={2000}
                className="col-span-1"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card relative overflow-hidden group flex flex-col items-center justify-center p-8 h-full"
                >
                  {/* Dynamic Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                  
                  <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">
                    {skill.icon}
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white text-center">{skill.name}</h4>
                  
                </motion.div>
              </Tilt>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
