import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    id: 1,
    title: 'Taskora - Workflow Management',
    category: 'MERN',
    image: '/taskora.png',
    description: 'The all-in-one platform to manage your tasks, notes, and daily workflow seamlessly. Features a modern, intuitive interface with secure user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Truptiparmar26/taskora.git',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'PlaceHub - Campus Recruitment Platform',
    category: 'MERN',
    image: '/placehub.jpg',
    description: 'A unified ecosystem empowering students, companies, and placement cells to connect, collaborate, and cultivate future success stories.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Truptiparmar26/placement_portal.git',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'OncoDetect - Breast Cancer Prediction',
    category: 'Machine Learning',
    image: '/oncodetect.png',
    description: 'Advanced AI Breast Cancer Prediction. Leveraging Machine Learning algorithms to assist in early diagnosis with fast, accurate, and secure cell analysis.',
    technologies: ['Python', 'Machine Learning', 'Scikit-Learn'],
    githubUrl: 'https://github.com/Truptiparmar26/breast_cancer.git',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Om Shanti Travels',
    category: 'Full Stack',
    image: '/omshanti.png',   
    description: 'A premium car rental platform for city tours, airport transfers, and outstation trips. Built with a modern UI and a seamless booking experience.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Git'],
    githubUrl: null,
    liveUrl: 'https://car-rental-website-1-mnnp.onrender.com/',
  }
];

const categories = ['All', 'MERN', 'Machine Learning', 'Full Stack'];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="relative py-32 px-4 z-10" id="projects">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-full h-[600px] bg-gradient-to-t from-background via-background/80 to-transparent z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111627] border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] mb-4">
              <HiSparkles className="w-4 h-4 text-electric-blue animate-pulse" />
              <span className="text-xs font-bold text-electric-blue uppercase tracking-widest">Portfolio Architecture</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Featured <span className="text-gradient font-black">Work</span> & Projects
            </h3>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 bg-[#0a0f1d]/80 p-2 rounded-full border border-white/10 shadow-inner backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(0,229,255,0.45)] scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="col-span-1"
              >
                <Tilt 
                  tiltMaxAngleX={4} 
                  tiltMaxAngleY={4} 
                  scale={1.01} 
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div className="glass-card bg-[#0b101f]/90 rounded-[2.2rem] p-6 h-full flex flex-col group overflow-hidden border border-white/10 hover:border-[#00E5FF]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),_0_0_35px_rgba(0,229,255,0.25)] transition-all duration-500 transform hover:-translate-y-2">
                    
                    {/* Glowing Accent Top Border Line on Hover */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Image Container WITHOUT Video Play Icon Overlay */}
                    <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-black/50 border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
                      
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3 gap-2">
                        <h4 className="text-2xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <span className="text-xs font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full bg-[#151a2f] text-cyan-300 border border-[#00E5FF]/40 whitespace-nowrap shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>
                      
                      {/* Technologies Pill Hub */}
                      <div className="flex flex-wrap gap-2.5 mb-8">
                        {project.technologies.map(tech => (
                          <span 
                            key={tech} 
                            className="text-xs font-semibold tracking-wide text-purple-200 bg-[#151227] border border-purple-500/35 px-3.5 py-1 rounded-full shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Professional Action Buttons Console */}
                      <div className={`grid ${project.githubUrl ? 'grid-cols-2' : 'grid-cols-1'} gap-3.5 mt-auto pt-5 border-t border-white/10`}>
                        
                        {/* Source Code Button (Hidden if githubUrl is null/empty) */}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="group/btn flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#121626] hover:bg-[#1a2035] text-gray-200 hover:text-white font-bold text-xs sm:text-sm border border-white/15 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transform hover:-translate-y-0.5 cursor-pointer w-full"
                          >
                            <FiGithub className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover/btn:text-electric-blue group-hover/btn:scale-110 transition-all duration-300" />
                            <span>Source Code</span>
                          </a>
                        )}

                        {/* Live Demo Button */}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="group/demo flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-electric-blue via-indigo-600 to-neon-purple hover:from-cyan-400 hover:to-fuchsia-600 text-white font-extrabold text-xs sm:text-sm border border-[#00E5FF]/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transform hover:-translate-y-0.5 cursor-pointer w-full"
                          >
                            <span>Live Demo</span>
                            <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform duration-300" />
                          </a>
                        )}

                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
