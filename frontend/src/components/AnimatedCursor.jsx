import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default browser cursor globally on desktop
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId;

    const updateMousePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0px)`;
      }
    };

    const animateRing = () => {
      // Fast, ultra-snappy 0.45 interpolation factor guarantees zero trailing/lag
      ringX += (mouseX - ringX) * 0.45;
      ringY += (mouseY - ringY) * 0.45;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0px)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    rafId = requestAnimationFrame(animateRing);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName?.toLowerCase() === 'button' || 
        target.tagName?.toLowerCase() === 'a' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = 'auto';
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Outer Circle - Fast tracking & ultra-high z-index above navbar */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-300/80 pointer-events-none z-[999998] flex items-center justify-center mix-blend-difference hidden md:flex will-change-transform"
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(0, 229, 255, 0.15)' : 'rgba(0, 0, 0, 0)',
          borderColor: isHovering ? 'rgba(0, 229, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
        }}
        transition={{ type: 'tween', duration: 0.15 }}
      />
      {/* Inner Dot - 0ms instant tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-electric-blue rounded-full pointer-events-none z-[999999] shadow-[0_0_8px_#00E5FF] mix-blend-difference hidden md:block will-change-transform"
      />
    </>
  );
};

export default AnimatedCursor;
