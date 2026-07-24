import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlayCircle } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    id: 1,
    title: 'Taskora - Workflow Management',
    category: 'MERN',
    image: '/taskora.png',
    description: 'The all-in-one platform to manage your tasks, notes, and daily workflow seamlessly. Features a modern, intuitive interface with secure user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'PlaceHub - Campus Recruitment Platform',
    category: 'MERN',
    image: '/placehub.jpg',
    description: 'A unified ecosystem empowering students, companies, and placement cells to connect, collaborate, and cultivate future success stories.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'OncoDetect - Breast Cancer Prediction',
    category: 'Machine Learning',
    image: '/oncodetect.png',
    description: 'Advanced AI Breast Cancer Prediction. Leveraging Machine Learning algorithms to assist in early diagnosis with fast, accurate, and secure cell analysis.',
    technologies: ['Python', 'Machine Learning', 'Scikit-Learn'],
    githubUrl: '#'
    // liveUrl: '#',
  },
  {
    id: 4,
    title: 'Om Shanti Travels',
    category: 'Full Stack',
    image: '/omshanti.png',   
    description: 'A premium car rental platform for city tours, airport transfers, and outstation trips. Built with a modern UI and a seamless booking experience.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Git'],
    githubUrl: '#',
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
      <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-background via-background to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-16 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-blue/20 mb-6">
              <span className="text-sm font-medium text-electric-blue uppercase tracking-wider">Portfolio</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Featured <span className="text-gradient">Work</span>
            </h3>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white shadow-[0_0_15px_rgba(0,229,255,0.4)] border border-transparent' 
                    : 'glass text-gray-400 hover:text-white border border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  tiltMaxAngleX={3} 
                  tiltMaxAngleY={3} 
                  scale={1.01} 
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div className="glass-card p-4 rounded-[2rem] h-full flex flex-col group overflow-hidden border border-white/5 hover:border-electric-blue/30 transition-colors duration-500">
                    
                    {/* Image Container with Video Play Icon Overlay */}
                    <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden mb-6 bg-black/40">
                      <div className="absolute inset-0 bg-midnight-blue/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Video Play Overlay */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                        <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-md transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl">
                          <FiPlayCircle className="text-3xl" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="px-4 pb-4 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-bold text-white tracking-tight">{project.title}</h4>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20 whitespace-nowrap">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map(tech => (
                          <span key={tech} className="text-xs font-mono text-gray-300 bg-white/5 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Links */}
                      <div className="flex gap-4 mt-auto pt-6 border-t border-white/5">
                        {project.liveUrl && project.liveUrl !== '#' ? (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors text-sm">
                            Live Demo <FiExternalLink />
                          </a>
                        ) : (
                          <a href={project.githubUrl || '#'} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium transition-colors text-sm">
                            Source Code <FiGithub />
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
