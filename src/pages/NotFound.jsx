import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] flex flex-col justify-between p-8 md:p-16 select-none relative overflow-hidden">
      {/* Background ambient glows (Optimized GPU radial-gradients) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
        <div 
          className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(214, 194, 168, 0.08) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(214, 194, 168, 0.04) 0%, transparent 70%)' }}
        />
      </div>

      {/* Top Header details */}
      <div className="flex justify-between items-center relative z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-warm-beige/60">
        <span>Dreamy Studio</span>
        <span>Error 404</span>
      </div>

      {/* Main 404 Content */}
      <div className="flex flex-col items-center justify-center relative z-10 my-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-8xl sm:text-9xl md:text-[12rem] font-light tracking-[0.1em] text-glow text-warm-beige mb-6"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg sm:text-xl text-theme-text font-light tracking-wide max-w-md mx-auto leading-relaxed mb-12"
        >
          The luxury experience you are seeking resides in another destination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link
            to="/"
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-warm-beige/30 transition-all duration-500 hover:border-warm-beige/80 inline-flex items-center gap-3 cursor-pointer"
          >
            <div className="absolute inset-0 bg-warm-beige/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
            <span className="relative flex items-center gap-3 text-warm-beige text-xs tracking-widest uppercase font-medium">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Return to Sanctuary
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Footer details */}
      <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-warm-beige/60 gap-4 sm:gap-0">
        <span>Galaxy Blue Sapphire Plaza</span>
        <span>© 2026 Dreamy Studio</span>
      </div>
    </div>
  );
};

export default NotFound;
