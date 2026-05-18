import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40 mix-blend-screen">
      {/* Orb 1: Warm Champagne Glow (Uses highly optimized GPU radial-gradient instead of expensive blur filters) */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] rounded-full"
        animate={{
          x: ['-10%', '15%', '-5%'],
          y: ['-10%', '10%', '-5%'],
          scale: [1, 1.1, 0.95],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          top: '10%', 
          left: '5%',
          background: 'radial-gradient(circle, rgba(214, 194, 168, 0.08) 0%, rgba(214, 194, 168, 0.02) 40%, transparent 70%)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }}
      />

      {/* Orb 2: Soft Golden Ray */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] rounded-full"
        animate={{
          x: ['15%', '-10%', '10%'],
          y: ['25%', '5%', '20%'],
          scale: [1.05, 0.95, 1.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          bottom: '15%', 
          right: '10%',
          background: 'radial-gradient(circle, rgba(214, 194, 168, 0.05) 0%, rgba(214, 194, 168, 0.01) 50%, transparent 70%)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }}
      />

      {/* Orb 3: Middle subtle ray */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] rounded-full"
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['10%', '25%', '10%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          top: '40%', 
          left: '35%',
          background: 'radial-gradient(circle, rgba(214, 194, 168, 0.04) 0%, transparent 70%)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0,0,0)'
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
