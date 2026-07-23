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
        <icosahedronGeometry args={[1.4, 4]} />
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
    <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center z-10 overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Centered Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/20 mb-4">
            <span className="text-sm font-medium text-neon-purple uppercase tracking-wider">The Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: 3D Element */}
          <motion.div 
            className="relative w-full max-w-lg mx-auto lg:max-w-none h-[350px] lg:h-[450px] rounded-[2.5rem] glass overflow-hidden flex items-center justify-center border border-white/5 group"
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

          {/* Right: Content details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                I'm Trupti Parmar, an aspiring <strong className="text-electric-blue font-medium">AI/ML Enthusiast</strong> and <strong className="text-white font-medium">Full Stack MERN Developer</strong> passionate about creating modern, scalable, and impactful digital experiences.
              </p>
              <p>
                My expertise lies in building responsive web applications using the <strong className="text-white font-medium">MERN Stack (MongoDB, Express.js, React.js, and Node.js)</strong> while continuously exploring <strong className="text-electric-blue font-medium">Artificial Intelligence</strong> and its real-world applications. I enjoy solving complex problems, developing clean and efficient software, and transforming innovative ideas into high-quality products.
              </p>
              <p>
                Driven by curiosity and continuous learning, I enjoy building impactful solutions with modern technologies. I'm seeking an internship or entry-level opportunity where I can contribute, collaborate, and grow as a Full Stack Developer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
