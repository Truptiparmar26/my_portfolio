import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlayCircle } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    id: 1,
    title: 'AI Enterprise Architecture',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    description: 'An AI-driven enterprise dashboard integrating LLMs for automated data analysis and predictive modeling. Built with scalable microservices.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'MERN E-Commerce Ecosystem',
    category: 'MERN',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
    description: 'A comprehensive e-commerce platform with a fully-featured admin panel, advanced filtering, JWT authentication, and real-time inventory management.',
    technologies: ['Next.js', 'Express', 'MongoDB', 'Redux'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Neural Vision Processor',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop',
    description: 'Real-time computer vision application capable of tracking objects and analyzing spatial data using customized YOLOv8 models deployed on the edge.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'FinTech Analytics Dashboard',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    description: 'A robust financial dashboard visualizing massive datasets with sub-second latency, integrating WebSocket feeds for live market updates.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
  }
];

const categories = ['All', 'MERN', 'AI', 'Machine Learning', 'Full Stack'];

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
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-blue/20 mb-6">
              <span className="text-sm font-medium text-electric-blue uppercase tracking-wider">Portfolio</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Featured <span className="text-gradient">Work</span>
            </h3>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-3">
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
                    <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-midnight-blue/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Video Play Overlay */}
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 backdrop-blur-sm">
                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
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
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors text-sm">
                          Live Demo <FiExternalLink />
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium transition-colors text-sm">
                          Source Code <FiGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 rounded-full border border-white/10 glass hover:bg-white/5 transition-all text-white font-medium flex items-center gap-2">
            View Full Archive <FiExternalLink />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
