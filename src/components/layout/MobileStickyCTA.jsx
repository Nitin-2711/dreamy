import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, PhoneCall } from 'lucide-react';

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only when scrolling past the Hero section (usually > 600px on mobile)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#booking');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 w-full z-40 px-4 pb-4 pt-2 md:hidden pointer-events-none"
        >
          <div className="w-full glass shadow-[0_-10px_30px_rgba(0,0,0,0.15)] rounded-2xl border border-glass-border p-4 flex items-center justify-between pointer-events-auto">
            {/* Price detail */}
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-warm-beige font-mono">Dreamy Studio</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-lg font-heading text-theme-text font-bold">₹3,999</span>
                <span className="text-[10px] text-theme-text-secondary">/ night</span>
              </div>
            </div>

            {/* CTA action pills */}
            <div className="flex gap-2">
              <a
                href="https://wa.me/919999999999?text=Hello!%20I%20am%20interested%20in%20booking%20Dreamy%20Studio%20inside%20Galaxy%20Blue%20Sapphire%20Plaza."
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl border border-glass-border flex items-center justify-center text-theme-text hover:bg-warm-beige/5 transition-all"
                aria-label="Contact Concierge"
              >
                <PhoneCall size={16} />
              </a>

              <a
                href="#booking"
                onClick={handleBookClick}
                className="px-5 py-3 rounded-xl bg-warm-beige text-[#111111] font-semibold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:shadow-[0_0_15px_rgba(214,194,168,0.3)] transition-all animate-pulse"
              >
                <Calendar size={14} />
                Reserve
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
