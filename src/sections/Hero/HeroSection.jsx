import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Parallax & Zoom effect */}
      <motion.div
        className="absolute inset-0 z-0 brightness-[0.5]"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      >
        <img
          src={theme === 'dark' ? "/hero.webp" : "/hero_day.webp"}
          alt="Luxury Studio Interior"
          className="w-full h-full object-cover"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,13,13,0.8)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-theme-bg opacity-90 transition-colors duration-700"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-warm-beige text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium">
            A Luxury Escape Inside Galaxy Blue Sapphire
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-theme-text max-w-5xl mx-auto leading-[1.1] mb-8 text-glow">
            Dreamy <br className="md:hidden" />
            <span className="italic text-warm-beige font-light">Studio</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button 
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#story');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-warm-beige/30 transition-all duration-500 hover:border-warm-beige/80 cursor-pointer"
          >
            <div className="absolute inset-0 bg-warm-beige/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
            <span className="relative flex items-center gap-3 text-warm-beige text-sm tracking-widest uppercase font-medium">
              Explore The Space
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="text-[10px] tracking-widest text-warm-beige/60 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-warm-beige/20 overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-warm-beige"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
