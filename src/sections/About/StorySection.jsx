import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
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
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
