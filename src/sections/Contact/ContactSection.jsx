import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative bg-theme-bg overflow-hidden flex justify-center">
      {/* Background Glow (Optimized GPU radial-gradient) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div 
          className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(214, 194, 168, 0.08) 0%, transparent 70%)' }}
        />
      </div>

      <motion.div 
        className="relative z-10 glass-card p-10 md:p-16 max-w-2xl w-[90%] md:w-full text-center border-warm-beige/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-warm-beige text-xs tracking-[0.3em] uppercase mb-4 block">Reserve Your Stay</span>
        <h2 className="font-heading text-4xl md:text-5xl text-theme-text mb-6">
          Ready to <span className="italic text-warm-beige">Experience?</span>
        </h2>
        <p className="text-theme-text-secondary mb-12 font-normal max-w-md mx-auto leading-relaxed">
          Secure your dates now or reach out to us for any special requests. Your luxury retreat awaits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#booking" className="group relative w-full sm:w-auto px-8 py-4 bg-warm-beige text-theme-bg overflow-hidden rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,194,168,0.4)] flex items-center justify-center gap-3">
            <Calendar size={18} />
            <span className="uppercase tracking-widest text-xs font-semibold">Book Now</span>
          </a>
          
          <a href="https://wa.me/919999999999?text=Hello!%20I%20am%20interested%20in%20booking%20Dreamy%20Studio%20inside%20Galaxy%20Blue%20Sapphire%20Plaza." target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full border border-warm-beige/30 text-theme-text hover:bg-warm-beige hover:text-theme-bg transition-all duration-300 flex items-center justify-center gap-3 group">
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            <span className="uppercase tracking-widest text-xs font-semibold">WhatsApp</span>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-glass-border flex justify-center gap-8">
          <a href="#" className="text-theme-text/50 hover:text-warm-beige transition-colors duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
