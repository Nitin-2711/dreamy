import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-45 mix-blend-screen">
      {/* Orb 1: Warm Champagne Glow */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] rounded-full bg-gradient-to-tr from-warm-beige/10 to-warm-beige/3 blur-[120px]"
        animate={{
          x: ['-10%', '20%', '-5%'],
          y: ['-15%', '10%', '-10%'],
          scale: [1, 1.15, 0.95],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          top: '10%', 
          left: '5%',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }}
      />

      {/* Orb 2: Soft Golden Ray */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] rounded-full bg-gradient-to-br from-warm-beige/5 to-transparent blur-[150px]"
        animate={{
          x: ['20%', '-10%', '15%'],
          y: ['30%', '5%', '25%'],
          scale: [1.1, 0.9, 1.15],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          bottom: '15%', 
          right: '10%',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }}
      />

      {/* Orb 3: Middle subtle ray */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] rounded-full bg-warm-beige/4 blur-[100px]"
        animate={{
          x: ['-5%', '10%', '-10%'],
          y: ['15%', '35%', '10%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          top: '40%', 
          left: '35%',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
