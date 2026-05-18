import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header';
import MobileStickyCTA from './components/layout/MobileStickyCTA';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import FloatingOrbs from './components/animations/FloatingOrbs';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorLight = document.getElementById('cursor-light');
      if (cursorLight) {
        cursorLight.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(214, 194, 168, 0.05), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Luxury Loading Animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website View (faded-in after preloader completes) */}
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-theme-bg min-h-screen text-theme-text overflow-x-hidden font-body transition-colors duration-700"
        >
          {/* Custom Luxury Magnet Cursor */}
          <CustomCursor />

          {/* Luxury Floating Orbs Background */}
          <FloatingOrbs />
          
          {/* Dynamic Cursor Light (Cinematic Mouse-based Lighting Movement) */}
          <div 
            id="cursor-light"
            className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 hidden md:block"
            style={{
              background: 'radial-gradient(700px circle at -1000px -1000px, rgba(214, 194, 168, 0.05), transparent 80%)'
            }}
          />
          
          {/* Premium Floating Header */}
          <Header />

          {/* Dynamic Page Views */}
          <main className="relative z-10">
            <AppRoutes />
          </main>

          {/* Sticky Mobile CTA Actions */}
          <MobileStickyCTA />
        </motion.div>
      )}
    </>
  );
}

export default App;
