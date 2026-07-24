// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiAward, FiExternalLink } from 'react-icons/fi';
// import Tilt from 'react-parallax-tilt';

// const certificates = [
//   {
//     title: 'Deep Learning Specialization',
//     organization: 'DeepLearning.AI / Coursera',
//     date: 'Oct 2023',
//     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
//     link: '#'
//   },
//   {
//     title: 'AWS Certified Machine Learning – Specialty',
//     organization: 'Amazon Web Services',
//     date: 'Aug 2023',
//     image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
//     link: '#'
//   },
//   {
//     title: 'Advanced React Patterns',
//     organization: 'Frontend Masters',
//     date: 'Jan 2023',
//     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
//     link: '#'
//   }
// ];

// const CertificatesSection = () => {
//   return (
//     <section className="relative py-24 px-4 bg-background z-10 overflow-hidden" id="certificates">
//       {/* Background Decor */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

//       <div className="max-w-7xl w-full mx-auto">
        
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-royal-violet/20 mb-6">
//             <span className="text-sm font-medium text-royal-violet uppercase tracking-wider">Achievements</span>
//           </div>
//           <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
//             Licenses & <span className="text-gradient">Certifications</span>
//           </h3>
//         </motion.div>

//         {/* CSS Carousel / Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certificates.map((cert, index) => (
//             <Tilt
//               key={cert.title}
//               tiltMaxAngleX={5}
//               tiltMaxAngleY={5}
//               scale={1.02}
//               transitionSpeed={2000}
//             >
//               <motion.div
//                 className="glass-card h-full p-6 rounded-3xl flex flex-col relative overflow-hidden group border border-white/5 hover:border-electric-blue/30"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 {/* Image */}
//                 <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
//                   <div className="absolute inset-0 bg-midnight-blue/40 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
//                   <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  
//                   {/* Floating Icon */}
//                   <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-20 shadow-lg border border-white/20">
//                     <FiAward />
//                   </div>
//                 </div>
                
//                 {/* Content */}
//                 <div className="flex flex-col flex-grow">
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-electric-blue transition-colors">
//                     {cert.title}
//                   </h4>
//                   <p className="text-sm text-gray-400 mb-6">{cert.organization}</p>
                  
//                   <div className="flex items-center justify-between mt-auto">
//                     <span className="text-xs font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">
//                       Issued {cert.date}
//                     </span>
//                     <a href={cert.link} target="_blank" rel="noreferrer" className="text-sm text-white hover:text-electric-blue flex items-center gap-1 transition-colors">
//                       Verify <FiExternalLink />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </Tilt>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificatesSection;
