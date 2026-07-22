import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const AbstractShape = () => {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial 
          color="#00E5FF" 
          emissive="#B921FF" 
          emissiveIntensity={0.5}
          distort={0.4} 
          speed={2} 
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative min-h-screen py-24 px-4 flex items-center justify-center z-10 overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: 3D Element */}
        <motion.div 
          className="relative w-full h-[400px] lg:h-[600px] rounded-[2.5rem] glass overflow-hidden flex items-center justify-center border border-white/5 group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ y }}
        >
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-midnight-blue via-transparent to-midnight-blue opacity-50 z-10 pointer-events-none"></div>
          
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={2} color="#00E5FF" />
            <directionalLight position={[-2, -2, -2]} intensity={2} color="#B921FF" />
            <AbstractShape />
          </Canvas>
          
          {/* Stats Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between z-20">
            <div className="glass px-4 py-3 rounded-2xl border border-white/10 flex flex-col items-center">
              <span className="text-2xl font-bold text-electric-blue">20+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Projects</span>
            </div>
            <div className="glass px-4 py-3 rounded-2xl border border-white/10 flex flex-col items-center">
              <span className="text-2xl font-bold text-neon-purple">500+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Hours Coding</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/20 mb-6">
            <span className="text-sm font-medium text-neon-purple uppercase tracking-wider">The Journey</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tighter leading-tight">
            Bridging <span className="text-gradient">Logic</span> & <span className="text-gradient">Creativity</span>
          </h3>
          
          <div className="space-y-6 text-gray-400 text-lg">
            <p>
              I am a <strong className="text-white font-medium">Full Stack MERN Developer</strong> and an <strong className="text-electric-blue font-medium">AI/ML Enthusiast</strong> with a relentless passion for building scalable, intelligent systems. My journey started with a fascination for how data shapes our world, leading me to dive deep into both web engineering and artificial intelligence.
            </p>
            <p>
              I don't just write code; I craft digital experiences. From architecting robust RESTful APIs in Node.js to designing cinematic, interactive frontend interfaces using React, Three.js, and Framer Motion, I strive to make the web feel alive.
            </p>
            <p>
              My exploration into Machine Learning and Generative AI allows me to integrate intelligent features into traditional applications. I believe the future of software lies at the intersection of beautiful UI/UX and powerful AI-driven backends.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-bold mb-2">My Philosophy</h4>
              <p className="text-sm text-gray-500">"Code should be poetry. Systems should be scalable. Interfaces should be unforgettable."</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Current Focus</h4>
              <p className="text-sm text-gray-500">Integrating LLMs into production-grade MERN applications while maintaining ultra-low latency.</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
