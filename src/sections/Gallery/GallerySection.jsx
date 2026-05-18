import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import LazyImage from '../../components/ui/LazyImage';

const GallerySection = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('exterior'); // Default to exterior as requested by user to prioritize real plaza photos
  const [selectedImg, setSelectedImg] = useState(null);

  const tabs = [
    { id: 'exterior', label: 'The Landmark Exterior' },
    { id: 'interior', label: 'The Studio Interior' }
  ];

  const galleryData = {
    exterior: [
      {
        src: "/plaza_hero_dusk.webp",
        title: "Skyline & Roads",
        tag: "Surrounding & Skyline",
        desc: "Wide-angle view of Galaxy Blue Sapphire Plaza showing high-speed road light trails and its towering presence at dusk."
      },
      {
        src: "/plaza_facade.webp",
        title: "Main Building Facade",
        tag: "Architecture",
        desc: "The real glass facade and striking three-side open plot architecture, showcasing premier high-street retail visibility."
      },
      {
        src: "/plaza_night.webp",
        title: "Illuminated at Night",
        tag: "Night Lighting",
        desc: "Stunning night lighting system illuminating the Noida Extension skyline with premium multi-colored glass reflections."
      },
      {
        src: "/plaza_entrance.webp",
        title: "Grand Entrance Plaza",
        tag: "Entrance Area",
        desc: "Real street-level entry plaza showing convenient parking drops and premium shopping facade."
      },
      {
        src: "/plaza_entrance_lobby.webp",
        title: "Atrium & Corridors",
        tag: "Plaza Lobby",
        desc: "Ultra-modern, highly polished luxury retail walkways and massive open atrium designed inside the plaza."
      },
      {
        src: "/plaza_environment.webp",
        title: "Plaza Environment",
        tag: "Urban Environment",
        desc: "A lively, premium urban environment surrounded by beautifully designed modern commercial spaces."
      }
    ],
    interior: [
      {
        src: theme === 'dark' ? "/lounge.webp" : "/lounge_day.webp",
        title: "The Luxury Lounge",
        tag: "Lounge Area",
        desc: "Bespoke designer seating with cozy ambient highlights, optimized for relaxation or content creation."
      },
      {
        src: theme === 'dark' ? "/suite.webp" : "/suite_day.webp",
        title: "The Draped Suite",
        tag: "Bespoke Suite",
        desc: "Cloud-like plush king bed styled in rich linen, matching the deep dark tones of the apartment."
      },
      {
        src: "/workspace.webp",
        title: "Creator's Corner",
        tag: "Workspace Desk",
        desc: "Ergonomic, minimalist workspace designed to spark creative flow with high-speed fiber connectivity."
      },
      {
        src: "/interior.webp",
        title: "Cinematic Details",
        tag: "Interior Ambiance",
        desc: "Warm spotlight accents and premium shadow control, evoking a true luxury Airbnb feeling."
      },
      {
        src: "/city_view.webp",
        title: "Balcony Skyline View",
        tag: "City Skyline",
        desc: "Floor-to-ceiling glass windows opening directly to Noida Extension's sparkling urban evening horizon."
      },
      {
        src: "/architectural.webp",
        title: "Modern Kitchenette",
        tag: "Dining & Bar",
        desc: "Sleek matte kitchen finishes, custom glassware, and modern amenities for fine private dining."
      }
    ]
  };

  const activeImages = galleryData[activeTab];

  return (
    <section id="gallery" className="py-28 relative bg-theme-bg z-10 transition-colors duration-700">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-warm-beige text-xs tracking-[0.4em] uppercase mb-4 block font-semibold">Exquisite Showcases</span>
            <h2 className="font-heading text-4xl md:text-5xl text-theme-text">
              The <span className="italic text-warm-beige text-glow">Visual Story</span>
            </h2>
          </motion.div>

          {/* Luxury Tab Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-2 p-1.5 rounded-full border border-glass-border glass backdrop-blur-md relative"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-500 cursor-pointer ${
                  activeTab === tab.id 
                    ? 'text-[#111111]' 
                    : 'text-theme-text/75 hover:text-theme-text'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 bg-warm-beige rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {activeImages.map((img, idx) => (
              <motion.div 
                layout
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-2xl cursor-zoom-in group glass-card border border-glass-border aspect-[4/3]"
                onClick={() => setSelectedImg(img)}
              >
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-95 transition-all duration-500 z-20 flex flex-col justify-end p-6">
                  <span className="text-[9px] uppercase tracking-widest text-warm-beige font-mono mb-1">{img.tag}</span>
                  <h3 className="font-heading text-xl text-white mb-2">{img.title}</h3>
                  <p className="text-[11px] text-white/80 leading-relaxed font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {img.desc}
                  </p>
                </div>

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full border border-white/10 z-10 text-[9px] uppercase font-mono tracking-widest text-white/90">
                  {img.tag}
                </div>

                {/* Lazy Image */}
                <LazyImage 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Preview with Details */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-theme-bg/95 backdrop-blur-2xl p-4 md:p-8 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-w-5xl w-full h-full flex flex-col justify-center items-center gap-6" onClick={e => e.stopPropagation()}>
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-h-[70vh] flex justify-center items-center"
              >
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.title} 
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-glass-border"
                />
              </motion.div>
              
              {/* Detailed Caption inside modal */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-2xl text-center space-y-3 px-6 select-none"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-warm-beige font-mono font-bold block">{selectedImg.tag}</span>
                <h3 className="font-heading text-2xl md:text-3xl text-theme-text font-medium">{selectedImg.title}</h3>
                <p className="text-sm text-theme-text-secondary leading-relaxed font-normal max-w-xl mx-auto">
                  {selectedImg.desc}
                </p>
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-warm-beige hover:text-theme-text border-b border-warm-beige/30 transition-colors"
                >
                  Close Preview
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
