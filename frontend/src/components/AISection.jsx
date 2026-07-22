import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const aiTopics = [
  {
    title: 'Machine Learning',
    icon: '🤖',
    description: 'Developing predictive models and algorithms that learn from complex datasets.',
    tools: ['Scikit Learn', 'Pandas', 'NumPy']
  },
  {
    title: 'Deep Learning',
    icon: '🧠',
    description: 'Building and training deep neural networks for advanced pattern recognition.',
    tools: ['TensorFlow', 'PyTorch', 'Keras']
  },
  {
    title: 'Computer Vision',
    icon: '👁️',
    description: 'Processing and analyzing visual data for object detection and image segmentation.',
    tools: ['OpenCV', 'YOLO', 'MediaPipe']
  },
  {
    title: 'Generative AI',
    icon: '✨',
    description: 'Creating novel content, images, and text using state-of-the-art generative models.',
    tools: ['Stable Diffusion', 'Midjourney', 'DALL-E']
  },
  {
    title: 'Large Language Models',
    icon: '💬',
    description: 'Integrating and fine-tuning LLMs to build intelligent conversational agents.',
    tools: ['OpenAI API', 'LangChain', 'Hugging Face']
  },
  {
    title: 'Data Engineering',
    icon: '📊',
    description: 'Designing robust data pipelines for scalable AI model training and deployment.',
    tools: ['Python', 'SQL', 'Apache Spark']
  }
];

const AISection = () => {
  return (
    <section className="relative py-24 px-4 z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-blue/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
            <span className="text-sm font-medium text-electric-blue uppercase tracking-wider">Artificial Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Intelligent <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Building the next generation of applications powered by modern AI technologies, bridging the gap between complex algorithms and seamless user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTopics.map((topic, index) => (
            <Tilt 
              key={topic.title}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
              gyroscope={true}
              className="h-full"
            >
              <motion.div
                className="glass-card h-full flex flex-col relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-electric-blue/0 to-neon-purple/0 group-hover:from-electric-blue/20 group-hover:to-neon-purple/20 transition-all duration-500 rounded-2xl -z-10"></div>
                
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {topic.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  {topic.title}
                </h3>
                
                <p className="text-gray-400 mb-8 flex-grow">
                  {topic.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {topic.tools.map(tool => (
                    <span 
                      key={tool} 
                      className="text-xs font-mono text-cyan-glow bg-cyan-glow/10 border border-cyan-glow/20 px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
