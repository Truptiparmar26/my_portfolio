import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import AnimatedCursor from '../components/AnimatedCursor';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import { useCV } from '../context/CVContext';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const { isCVModalOpen } = useCV();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Dynamically pause/resume Lenis smooth scrolling when CV Modal is open
  useEffect(() => {
    if (lenisRef.current) {
      if (isCVModalOpen) {
        lenisRef.current.stop();
        document.body.style.overflow = 'hidden';
      } else {
        lenisRef.current.start();
        document.body.style.overflow = 'auto';
      }
    }
  }, [isCVModalOpen]);

  return (
    <div className="relative min-h-screen">
      {loading ? (
        <Preloader onLoadingComplete={() => setLoading(false)} />
      ) : (
        <>
          <AnimatedCursor />
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
