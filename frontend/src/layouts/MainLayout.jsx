import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import AnimatedCursor from '../components/AnimatedCursor';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
