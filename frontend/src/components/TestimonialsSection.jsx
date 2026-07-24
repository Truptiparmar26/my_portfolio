// import React from 'react';
// import { motion } from 'framer-motion';

// const testimonials = [
//   {
//     name: 'Sarah Jenkins',
//     role: 'Product Manager @ TechFlow',
//     content: 'An absolute pleasure to work with. They bridged the gap between complex AI models and a beautiful frontend interface flawlessly.',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
//   },
//   {
//     name: 'Michael Chen',
//     role: 'CEO @ StartupAI',
//     content: 'The level of polish and attention to detail in the MERN architecture is incredible. Scalable, secure, and blazing fast.',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
//   },
//   {
//     name: 'Emma Rodriguez',
//     role: 'Lead Designer @ CreativeSpace',
//     content: 'Rarely do you find a developer who understands design so well. The micro-interactions and 3D implementations are world-class.',
//     avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
//   },
//   {
//     name: 'David Kim',
//     role: 'CTO @ DataDriven',
//     content: 'Outstanding problem solver. Integrated our complex machine learning pipelines into a seamless user-facing dashboard.',
//     avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d'
//   }
// ];

// const TestimonialsSection = () => {
//   return (
//     <section className="relative py-24 bg-midnight-blue/30 overflow-hidden z-10 border-y border-white/5">
//       <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/20 mb-6">
//           <span className="text-sm font-medium text-neon-purple uppercase tracking-wider">Testimonials</span>
//         </div>
//         <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
//           What People <span className="text-gradient">Say</span>
//         </h3>
//       </div>

//       {/* Infinite Slider Wrapper */}
//       <div className="relative w-full overflow-hidden flex">
//         {/* CSS Marquee Animation */}
//         <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
//           {[...testimonials, ...testimonials].map((testimonial, idx) => (
//             <div key={idx} className="w-[350px] md:w-[450px] flex-shrink-0 mx-4">
//               <div className="glass-card h-full p-8 rounded-3xl border border-white/5">
//                 <div className="text-4xl text-electric-blue mb-4 opacity-50">"</div>
//                 <p className="text-gray-300 text-lg leading-relaxed mb-8">
//                   {testimonial.content}
//                 </p>
//                 <div className="flex items-center gap-4 mt-auto">
//                   <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
//                     <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
//                   </div>
//                   <div>
//                     <h5 className="text-white font-bold">{testimonial.name}</h5>
//                     <p className="text-sm text-gray-500">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Add Marquee Keyframes to global CSS or Tailwind config, but we can also use inline styles or just rely on a plugin. 
//           Assuming we add it to tailwind.config.js later, but for now we'll inject a quick style block */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}} />
//     </section>
//   );
// };

// export default TestimonialsSection;
