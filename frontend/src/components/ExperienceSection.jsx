import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const experiences = [
  {
    id: 1,
    role: 'B.Sc. Information Technology',
    company: 'K S School of Business Management and Information Technology, Gujarat University',
    duration: '2023 - 2026',
    description: 'Built a strong foundation in software development, data structures, databases, web technologies, and problem-solving while actively working on practical projects.',
    skills: ['c','Java', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Git']
  },
  {
    id: 2,
    role: 'Full Stack MERN Developer',
    company: 'Independent Projects & Freelance',
    duration: '2025 - Present',
    description: 'Developing responsive, scalable web applications using the MERN Stack. Building REST APIs, authentication systems, admin dashboards, and modern user interfaces while focusing on clean, maintainable code.',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    id: 3,
    role: 'AI/ML Enthusiast & Open to Opportunities',
    company: 'Self-Taught & Exploration',
    duration: '2026 - Present',
    description: 'Exploring Artificial Intelligence, Machine Learning, and Generative AI while integrating AI-powered features into web applications. Continuously learning through hands-on projects and preparing for a software development career.',
    skills: ['Python', 'AI/ML', 'OpenAI APIs', 'GitHub', 'REST APIs']
  }
];

const ExperienceSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-24 px-4 bg-midnight-blue/50 z-10" id="experience" ref={containerRef}>
      <div className="max-w-4xl w-full mx-auto">
        
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-blue/20 mb-6">
            <span className="text-sm font-medium text-electric-blue uppercase tracking-wider">Experience</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            My <span className="text-gradient">Journey</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Animated Glowing Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-electric-blue via-neon-purple to-cyan-glow origin-top shadow-[0_0_15px_#00E5FF]"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-electric-blue -translate-x-1/2 shadow-[0_0_15px_#00E5FF] z-10 group-hover:bg-electric-blue transition-colors duration-300"></div>
                
                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-[calc(50%-3rem)] w-[calc(100%-3rem)]">
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                    <div className="glass-card relative overflow-hidden group-hover:border-electric-blue/30 transition-colors duration-500">
                      
                      {/* Inner Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 blur-[50px] -z-10 group-hover:bg-electric-blue/20 transition-colors duration-500"></div>
                      
                      <div className="flex flex-col mb-4">
                        <span className="text-sm font-medium text-electric-blue mb-1 uppercase tracking-wider">
                          {exp.duration}
                        </span>
                        <h4 className="font-bold text-2xl text-white tracking-tight">{exp.role}</h4>
                        <h5 className="text-gray-400 font-medium">{exp.company}</h5>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Tilt>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ExperienceSection;
