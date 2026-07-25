import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categoryData = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    svgIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: 'React 19 & Ecosystem', percentage: 96 },
      { name: 'JavaScript (ES6+ & Modern JS)', percentage: 95 },
      { name: 'Tailwind CSS & Responsive UI', percentage: 96 },
      { name: 'Next.js & SSR Architecture', percentage: 90 },
      { name: 'TypeScript', percentage: 88 },
      { name: 'HTML5 & Modern CSS3 (Grid/Flex)', percentage: 98 },
      { name: 'Redux Toolkit / State Mgmt', percentage: 86 },
      { name: 'Framer Motion & Web Animations', percentage: 85 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Server Architecture',
    svgIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: 'Express.js Framework', percentage: 95 },
      { name: 'Node.js Server Runtime', percentage: 94 },
      { name: 'RESTful API Design & Endpoints', percentage: 96 },
      { name: 'JWT Auth & Data Security', percentage: 92 },
      { name: 'MVC Architectural Pattern', percentage: 92 },
      { name: 'WebSockets & Real-Time Events', percentage: 84 },
      { name: 'GraphQL Query Integration', percentage: 82 }
    ]
  },
  {
    id: 'database',
    name: 'Database & Cloud Storage',
    svgIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: 'MongoDB (NoSQL Databases)', percentage: 96 },
      { name: 'Mongoose Schema Modeling (ODM)', percentage: 95 },
      { name: 'MongoDB Atlas Cloud Clusters', percentage: 92 },
      { name: 'Firebase Realtime Cloud Data', percentage: 88 },
      { name: 'PostgreSQL & Relational Queries', percentage: 85 },
      { name: 'Redis In-Memory Speed Caching', percentage: 80 }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    svgIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: [
      { name: 'Python for AI & Analytics', percentage: 92 },
      { name: 'OpenAI / LLM API & Prompt Eng.', percentage: 92 },
      { name: 'Pandas & NumPy Data Math', percentage: 88 },
      { name: 'Scikit-Learn Predictive Algorithms', percentage: 85 },
      { name: 'TensorFlow Neural Models', percentage: 84 },
      { name: 'OpenCV Computer Vision Systems', percentage: 82 },
      { name: 'PyTorch Deep Learning', percentage: 80 }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    svgIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: 'VS Code IDE & Debugging', percentage: 96 },
      { name: 'GitHub Repos & CI/CD Actions', percentage: 95 },
      { name: 'Git Version Control', percentage: 94 },
      { name: 'Vercel Edge Cloud Deployment', percentage: 94 },
      { name: 'Postman API Testing Suite', percentage: 92 },
      { name: 'Render & Netlify Serverless', percentage: 90 },
      { name: 'Figma UI/UX & Wireframing', percentage: 86 },
      { name: 'Docker Containerization', percentage: 80 }
    ]
  },
  {
    id: 'soft',
    name: 'Professional Skills',
    svgIcon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    skills: [
      { name: 'Continuous Learning & Adaptability', percentage: 98 },
      { name: 'Algorithmic Problem Solving', percentage: 96 },
      { name: 'Cross-Functional Collaboration', percentage: 95 },
      { name: 'Technical Documentation & Comm.', percentage: 94 },
      { name: 'Code Review Quality Standards', percentage: 93 },
      { name: 'Agile & Scrum Sprint Workflow', percentage: 92 }
    ]
  }
];

const filterTabs = [
  { id: 'all', label: 'All Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'tools', label: 'Tools & DevOps' },
  { id: 'soft', label: 'Professional' },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? categoryData 
    : categoryData.filter(cat => cat.id === activeTab);

  return (
    <section className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center z-10 overflow-hidden" id="skills">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[160px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-20 w-[550px] h-[550px] bg-neon-purple/10 rounded-full blur-[170px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-royal-violet/30 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
            <span className="text-xs sm:text-sm font-outfit font-bold text-gray-200 uppercase tracking-wider">Tech Stack & Proficiency</span>
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold tracking-tight text-white">
            Technical <span className="text-gradient drop-shadow-[0_0_30px_rgba(185,33,255,0.3)]">Expertise</span>
          </h3>
        </motion.div>

        {/* Clean Minimalist Category Filter Pills */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-outfit font-bold tracking-wide transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-electric-blue via-indigo-500 to-neon-purple text-white shadow-[0_0_25px_rgba(0,229,255,0.45)] scale-105' 
                  : 'glass bg-midnight-blue/70 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Clean Categorized Skills Panels with Cyan-to-Purple Neon Bars */}
        <motion.div 
          layout 
          className={`grid gap-8 ${
            activeTab === 'all' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' 
              : 'grid-cols-1 max-w-2xl mx-auto'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-6 sm:p-8 bg-midnight-blue/70 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group"
              >
                {/* Ambient Subtle Card Backing Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-electric-blue/5 via-neon-purple/5 to-transparent rounded-full blur-2xl pointer-events-none -z-10 group-hover:from-electric-blue/15 group-hover:via-neon-purple/15 transition-all duration-700"></div>

                {/* Category Card Top Header */}
                <div className="flex items-center gap-4 mb-7 pb-4 border-b border-white/10">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/15 shadow-[0_0_15px_rgba(0,229,255,0.15)] group-hover:scale-110 group-hover:border-electric-blue/50 transition-all duration-300">
                    {category.svgIcon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-outfit font-extrabold text-white tracking-wide">
                    {category.name}
                  </h4>
                </div>

                {/* Clean Progress Bars List */}
                <div className="space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name} className="group/item">
                      
                      {/* Skill Name & Percentage Label */}
                      <div className="flex justify-between items-center mb-2 font-outfit">
                        <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-200 group-hover/item:text-white transition-colors tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-electric-blue font-bold tracking-wider drop-shadow-[0_0_5px_rgba(0,229,255,0.4)]">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Glowing Progress Bar Track */}
                      <div className="w-full h-2 sm:h-2.5 rounded-full bg-black/60 border border-white/10 overflow-hidden p-[1px]">
                        <motion.div 
                          className="h-full rounded-full bg-gradient-to-r from-electric-blue via-indigo-500 to-neon-purple shadow-[0_0_12px_rgba(0,229,255,0.6)]"
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true, margin: "-20px" }}
                          transition={{ duration: 1.1, delay: idx * 0.08, ease: "easeOut" }}
                        />
                      </div>

                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
