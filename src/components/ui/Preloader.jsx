import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // Super fast 1.8 seconds duration
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progressPercent = (elapsed / duration) * 100;

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300); // Quick elegant fade-out transition
          return 100;
        }

        // Lightweight smooth loading curve
        let targetProgress = progressPercent;
        if (progressPercent < 40) {
          targetProgress = progressPercent * 1.25;
        } else if (progressPercent >= 40 && progressPercent < 80) {
          targetProgress = 50 + (progressPercent - 40) * 0.75;
        } else {
          targetProgress = 80 + (progressPercent - 80) * 1.0;
        }

        // Add micro-jitter for organic feel
        const jitter = (Math.random() - 0.5) * 1.0;
        const nextVal = Math.min(Math.max(prev + Math.random() * 2, targetProgress + jitter), 99.8);

        if (elapsed >= duration) {
          return 100;
        }
        return nextVal;
      });
    }, 30); // Faster ticking for smooth percentage counter

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        opacity: 0,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Optimized background ambient glows (No expensive blur filters) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
        <div 
          className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(214, 194, 168, 0.1) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(214, 194, 168, 0.05) 0%, transparent 70%)' }}
        />
      </div>

      {/* Top Details */}
      <div className="flex justify-between items-center relative z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-warm-beige/50">
        <span>Galaxy Blue Sapphire Plaza</span>
        <span>Luxury Studio Space</span>
      </div>

      {/* Middle logo + progress */}
      <div className="flex flex-col items-center justify-center relative z-10 my-auto text-center">
        {/* Simple elegant logo with breathing pulse glow */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: [0.8, 1, 0.8], scale: 1 }}
          transition={{ 
            opacity: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-[#FAF6F0] mb-4 text-glow-light"
        >
          DREAMY STUDIO
        </motion.h2>

        {/* Elegant Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs sm:text-sm text-warm-beige italic max-w-sm mx-auto font-normal leading-relaxed mb-12"
        >
          "A handcrafted urban sanctuary designed for refined living."
        </motion.p>

        {/* Loading Bar Container */}
        <div className="w-48 sm:w-64 h-[1px] bg-warm-beige/10 relative overflow-hidden rounded-full mb-3">
          <div 
            className="absolute h-full left-0 top-0 bg-warm-beige transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numeric Progress */}
        <span className="font-mono text-[9px] tracking-widest text-warm-beige/80">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Bottom Details */}
      <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-warm-beige/50 gap-4 sm:gap-0">
        <span>Greater Noida West</span>
        <span>© 2026 Dreamy Studio</span>
      </div>
    </motion.div>
  );
};

export default Preloader;
