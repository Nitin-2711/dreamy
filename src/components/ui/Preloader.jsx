import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3500; // 3.5 seconds target duration
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progressPercent = (elapsed / duration) * 100;

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 700); // Premium exit timeout
          return 100;
        }

        // Luxury non-linear loading curve:
        // - 0% to 35%: Fast, snappy initial bootstrap
        // - 35% to 75%: Slower pacing to let the elegant quotes fade in
        // - 75% to 92%: Simulation of high-fidelity luxury asset calibration (holds/slower)
        // - 92% to 100%: Smooth final resolution sweep
        let targetProgress = progressPercent;

        if (progressPercent < 35) {
          targetProgress = progressPercent * 1.3;
        } else if (progressPercent >= 35 && progressPercent < 75) {
          targetProgress = 45.5 + (progressPercent - 35) * 0.75;
        } else if (progressPercent >= 75 && progressPercent < 92) {
          targetProgress = 75.5 + (progressPercent - 75) * 0.35;
        } else {
          targetProgress = 81.45 + (progressPercent - 92) * 2.32;
        }

        // Add micro-jitter to make progress feel organically active
        const jitter = (Math.random() - 0.5) * 1.5;
        const nextVal = Math.min(Math.max(prev + Math.random() * 1.2, targetProgress + jitter), 99.6);

        if (elapsed >= duration) {
          return 100;
        }
        return nextVal;
      });
    }, 45); // Faster ticking for ultra-smooth percentage counter rendering

    return () => clearInterval(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const text = "DREAMY STUDIO";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        opacity: 0,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Background ambient orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-warm-beige/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-warm-beige/5 blur-[150px]"></div>
      </div>

      {/* Top Details */}
      <div className="flex justify-between items-center relative z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-warm-beige/60">
        <span>Galaxy Blue Sapphire Plaza</span>
        <span>Luxury Creator Escapes</span>
      </div>

      {/* Middle logo + progress */}
      <div className="flex flex-col items-center justify-center relative z-10 my-auto text-center">
        {/* Title */}
        <div className="flex overflow-hidden mb-6">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={`font-heading text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.25em] text-[#FAF6F0] ${char === " " ? "mr-4" : ""}`}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Elegant Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xs sm:text-sm text-warm-beige italic max-w-sm mx-auto font-normal leading-relaxed mb-12"
        >
          "A handcrafted urban sanctuary designed for creators, dreamers, and refined living."
        </motion.p>

        {/* Loading Bar Container */}
        <div className="w-48 sm:w-64 h-[1px] bg-warm-beige/10 relative overflow-hidden rounded-full mb-3">
          <motion.div 
            className="absolute h-full left-0 top-0 bg-warm-beige"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Numeric Progress */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          className="font-mono text-[10px] tracking-widest text-warm-beige"
        >
          {Math.round(progress)}%
        </motion.span>
      </div>

      {/* Bottom Details */}
      <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-warm-beige/60 gap-4 sm:gap-0">
        <span>Greater Noida West</span>
        <span>© 2026 Dreamy Studio</span>
      </div>
    </motion.div>
  );
};

export default Preloader;
