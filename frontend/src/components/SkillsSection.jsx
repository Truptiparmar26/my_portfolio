import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const skillCategories = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' },
  { id: 'ai', name: 'AI / ML' },
  { id: 'tools', name: 'Tools & DevOps' },
  { id: 'soft', name: 'Professional Skills' }
];

const skills = [
  // Frontend
  { name: 'React 19', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', desc: 'SPA Architecture', color: 'from-[#61DAFB]/20 to-[#61DAFB]/5' },
  { name: 'Next.js', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true, desc: 'SSR & Full Stack', color: 'from-white/20 to-white/5' },
  { name: 'JavaScript (ES6+)', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', desc: 'Core Language', color: 'from-[#F7DF1E]/20 to-[#F7DF1E]/5' },
  { name: 'TypeScript', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', desc: 'Type-Safe Scaling', color: 'from-[#3178C6]/20 to-[#3178C6]/5' },
  { name: 'HTML5', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', desc: 'Semantic Markup', color: 'from-[#E34F26]/20 to-[#E34F26]/5' },
  { name: 'CSS3 / Flex & Grid', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', desc: 'Modern Styling', color: 'from-[#1572B6]/20 to-[#1572B6]/5' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', desc: 'Utility-First UI', color: 'from-[#38B2AC]/20 to-[#38B2AC]/5' },
  { name: 'Redux Toolkit', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg', desc: 'Global State Mgmt', color: 'from-[#764ABC]/20 to-[#764ABC]/5' },
  { name: 'Framer Motion', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg', desc: 'Fluid Animations', color: 'from-[#FF0055]/20 to-[#FF0055]/5' },
  { name: 'Three.js / WebGL', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', invert: true, desc: '3D Graphics & Canvas', color: 'from-white/20 to-white/5' },
  
  // Backend
  { name: 'Node.js', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', desc: 'Server Runtime', color: 'from-[#339933]/20 to-[#339933]/5' },
  { name: 'Express.js', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true, desc: 'RESTful Web Framework', color: 'from-white/20 to-white/5' },
  { name: 'RESTful APIs', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', desc: 'Modular API Endpoints', color: 'from-[#009688]/20 to-[#009688]/5' },
  { name: 'GraphQL', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', desc: 'Flexible Data Queries', color: 'from-[#E10098]/20 to-[#E10098]/5' },
  { name: 'WebSockets', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', invert: true, desc: 'Real-Time Data Streams', color: 'from-white/20 to-white/5' },
  { name: 'JWT & OAuth2', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg', desc: 'Secure Authentication', color: 'from-neon-purple/20 to-neon-purple/5' },
  { name: 'MVC Architecture', category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', desc: 'Clean Design Pattern', color: 'from-[#6DB33F]/20 to-[#6DB33F]/5' },
  
  // Database
  { name: 'MongoDB', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', desc: 'NoSQL Document DB', color: 'from-[#47A248]/20 to-[#47A248]/5' },
  { name: 'Mongoose ODM', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg', desc: 'Data & Schema Modeling', color: 'from-[#880000]/20 to-[#880000]/5' },
  { name: 'PostgreSQL', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', desc: 'Relational SQL DB', color: 'from-[#336791]/20 to-[#336791]/5' },
  { name: 'Redis Cache', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', desc: 'In-Memory Speed & Cache', color: 'from-[#DC382D]/20 to-[#DC382D]/5' },
  { name: 'Mongo Atlas & Cloud', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', desc: 'Cloud DB Cluster Mgmt', color: 'from-[#4285F4]/20 to-[#4285F4]/5' },
  { name: 'Firebase Data', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', desc: 'Realtime Cloud Storage', color: 'from-[#FFCA28]/20 to-[#FFCA28]/5' },

  // AI / ML
  { name: 'Python AI/ML', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', desc: 'Core ML Language', color: 'from-[#3776AB]/20 to-[#3776AB]/5' },
  { name: 'TensorFlow', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', desc: 'Deep Learning Models', color: 'from-[#FF6F00]/20 to-[#FF6F00]/5' },
  { name: 'PyTorch', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', desc: 'Neural Network Research', color: 'from-[#EE4C2C]/20 to-[#EE4C2C]/5' },
  { name: 'OpenCV', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg', desc: 'Computer Vision Systems', color: 'from-[#5C3EE8]/20 to-[#5C3EE8]/5' },
  { name: 'Pandas & NumPy', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', desc: 'Data Engineering & Math', color: 'from-[#150458]/20 to-[#150458]/5' },
  { name: 'Scikit-Learn', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikit-learn/scikit-learn-original.svg', desc: 'Predictive Algorithms', color: 'from-[#F7931E]/20 to-[#F7931E]/5' },
  { name: 'OpenAI / LLM APIs', category: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredatastudio/azuredatastudio-original.svg', desc: 'Prompt Eng. & Agents', color: 'from-[#00A67E]/20 to-[#00A67E]/5' },
  
  // Tools & DevOps
  { name: 'Git Versioning', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', desc: 'Code Version Control', color: 'from-[#F05032]/20 to-[#F05032]/5' },
  { name: 'GitHub & CI/CD', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true, desc: 'Collaborative Pipelines', color: 'from-white/20 to-white/5' },
  { name: 'Docker Containers', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', desc: 'Containerized Deployment', color: 'from-[#2496ED]/20 to-[#2496ED]/5' },
  { name: 'Postman API Suite', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', desc: 'API Testing & Docs', color: 'from-[#FF6C37]/20 to-[#FF6C37]/5' },
  { name: 'VS Code IDE', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', desc: 'Workflow & Debugging', color: 'from-[#007ACC]/20 to-[#007ACC]/5' },
  { name: 'Vite Bundler', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', desc: 'Next-Gen Fast Builds', color: 'from-[#646CFF]/20 to-[#646CFF]/5' },
  { name: 'Vercel / Netlify / Cloud', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invert: true, desc: 'Serverless & Edge Deploy', color: 'from-white/20 to-white/5' },

  // Professional Skills (Architectural SVGs instead of emojis)
  { 
    name: 'Problem Solving', 
    category: 'soft', 
    desc: 'Algorithmic Solutions & Debugging', 
    color: 'from-electric-blue/20 to-electric-blue/5',
    svgIcon: <svg className="w-7 h-7 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
  },
  { 
    name: 'Team Collaboration', 
    category: 'soft', 
    desc: 'Cross-Functional Teamwork', 
    color: 'from-neon-purple/20 to-neon-purple/5',
    svgIcon: <svg className="w-7 h-7 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  { 
    name: 'Agile & Scrum', 
    category: 'soft', 
    desc: 'Iterative Sprints & Adaptability', 
    color: 'from-cyan-400/20 to-cyan-400/5',
    svgIcon: <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
  },
  { 
    name: 'Effective Comm.', 
    category: 'soft', 
    desc: 'Technical Docs & Presentation', 
    color: 'from-emerald-400/20 to-emerald-400/5',
    svgIcon: <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
  },
  { 
    name: 'Continuous Learning', 
    category: 'soft', 
    desc: 'Fast Adaptability to New Tech', 
    color: 'from-yellow-400/20 to-yellow-400/5',
    svgIcon: <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
  },
  { 
    name: 'Detail Oriented', 
    category: 'soft', 
    desc: 'Code Reviews & High Standards', 
    color: 'from-rose-400/20 to-rose-400/5',
    svgIcon: <svg className="w-7 h-7 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center z-10 overflow-hidden" id="skills">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-electric-blue/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-neon-purple/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-6xl w-full mx-auto">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-royal-violet/30 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
            <span className="text-xs md:text-sm font-outfit font-semibold text-gray-200 uppercase tracking-wider">Tech Stack</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extrabold tracking-tight text-white">
            Technical <span className="text-gradient drop-shadow-[0_0_30px_rgba(185,33,255,0.3)]">Expertise</span>
          </h3>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-outfit font-bold tracking-wide transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-electric-blue via-indigo-500 to-neon-purple text-white shadow-[0_0_25px_rgba(0,229,255,0.4)] scale-105' 
                  : 'glass bg-midnight-blue/60 text-gray-400 hover:text-white hover:border-white/25 hover:bg-white/5'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Professional Tech Skills Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                scale={1.03}
                transitionSpeed={2000}
                className="col-span-1"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card relative overflow-hidden group flex flex-col items-center justify-between p-6 h-[180px] border border-white/10 hover:border-electric-blue/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] transition-all duration-500 rounded-2xl bg-midnight-blue/50 backdrop-blur-md cursor-pointer"
                >
                  {/* Dynamic Brand Background Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Top: Official Tech Emblem / SVG */}
                  <div className="w-16 h-14 flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 my-auto">
                    {skill.svgIcon ? (
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/25 transition-all shadow-inner">
                        {skill.svgIcon}
                      </div>
                    ) : (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className={`max-w-[48px] max-h-[48px] object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] ${
                          skill.invert ? 'invert brightness-200' : ''
                        }`} 
                      />
                    )}
                  </div>

                  {/* Bottom: Skill Title & Engineering Specialization */}
                  <div className="text-center w-full mt-3">
                    <h4 className="text-sm md:text-base font-outfit font-bold text-white tracking-wide group-hover:text-electric-blue transition-colors truncate">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-gray-400 block mt-0.5 group-hover:text-gray-200 transition-colors truncate">
                      {skill.desc}
                    </span>
                  </div>

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
