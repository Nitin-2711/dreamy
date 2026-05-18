import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from '../../components/ui/LazyImage';

const GallerySection = () => {
  const images = [
    "/hero.png",
    "/architectural.png",
    "/lounge.png",
    "/city_view.png",
    "/suite.png",
    "/interior.png",
    "/workspace.png",
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 relative bg-theme-bg z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-theme-text">
            The <span className="italic text-warm-beige">Gallery</span>
          </h2>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid animate-fadeIn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedImg(src)}
            >
              <div className="absolute inset-0 bg-warm-beige/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
              <LazyImage 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-auto"
                imageClassName="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Preview */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-theme-bg/90 backdrop-blur-xl p-4 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImg} 
              alt="Fullscreen Preview" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
