import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const StorySection = () => {
  const { theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="story" className="py-32 md:py-48 relative bg-theme-bg z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-warm-beige text-xs tracking-[0.4em] uppercase">The Philosophy</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="font-heading text-3xl md:text-5xl text-theme-text leading-[1.3] font-medium mb-10 text-glow"
          >
            A sanctuary crafted for the <span className="italic text-warm-beige font-normal">modern wanderer.</span> <br className="hidden md:block" />
            Where the pulse of the city meets the calm of a private haven.
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <p className="text-theme-text-secondary text-lg leading-relaxed font-normal">
              Elevated high above the vibrant streets of Galaxy Blue Sapphire Plaza, Dreamy Studio isn’t just a place to stay—it’s a carefully curated escape for urban luxury and creator living. Designed with deep, matte tones and warm highlights, it embraces the beauty of shadow and light, creating an atmosphere that feels intimately yours.
            </p>
          </motion.div>

          {/* Real Plaza Exterior Spotlight Banner */}
          <motion.div 
            variants={itemVariants} 
            className="mt-16 relative aspect-[21/9] w-full rounded-2xl overflow-hidden group border border-glass-border glass-card p-1.5"
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <img 
                src={theme === 'dark' ? "/plaza_hero_dusk.webp" : "/plaza_facade.webp"} 
                alt="Galaxy Blue Sapphire Plaza Exterior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent opacity-80"></div>
              
              {/* Studio Highlight Indicator Overlay */}
              <div className="absolute top-[35%] left-[62%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/dot z-20">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-beige opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-warm-beige shadow-[0_0_15px_#d6c2a8]"></span>
                </span>
                <div className="mt-2 glass px-3 py-1 rounded-full border border-warm-beige/30 backdrop-blur-md scale-95 opacity-0 group-hover/dot:scale-100 group-hover/dot:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-white font-bold whitespace-nowrap">Dreamy Studio Location</span>
                </div>
              </div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[9px] uppercase tracking-widest text-warm-beige font-mono">The Landmark</span>
                <h4 className="font-heading text-lg text-theme-text mt-1">Galaxy Blue Sapphire Plaza</h4>
                <p className="text-xs text-theme-text-secondary mt-1">A stunning glass façade soaring above Noida Extension</p>
              </div>
            </div>
          </motion.div>

          {/* Location & Metro Access Luxury Info Grid */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Address Card */}
            <div className="glass-card p-6 border-warm-beige/10 rounded-2xl flex flex-col items-center justify-center text-center relative group overflow-hidden transition-all duration-300 hover:border-warm-beige/30">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-warm-beige/20 to-transparent"></div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-warm-beige mb-2">Location Address</span>
              <h3 className="text-base text-theme-text font-medium mb-1">Dreamy Studio</h3>
              <p className="text-xs text-theme-text-secondary leading-relaxed">
                Galaxy Blue Sapphire Plaza,<br />Greater Noida West, UP
              </p>
            </div>
            
            {/* Metro Card */}
            <div className="glass-card p-6 border-warm-beige/10 rounded-2xl flex flex-col items-center justify-center text-center relative group overflow-hidden transition-all duration-300 hover:border-warm-beige/30">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-warm-beige/20 to-transparent"></div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-warm-beige mb-2">Metro Access</span>
              <h3 className="text-base text-theme-text font-medium mb-1">Noida Sector 52</h3>
              <p className="text-xs text-theme-text-secondary leading-relaxed">
                Nearest Metro Station<br />(Seamless high-speed city transit)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
