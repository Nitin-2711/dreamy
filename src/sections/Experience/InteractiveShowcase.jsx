import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import LazyImage from '../../components/ui/LazyImage';

const InteractiveShowcase = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const showcaseImages = [
    {
      id: 1,
      src: theme === 'dark' ? "/lounge.webp" : "/lounge_day.webp",
      title: "The Lounge",
      desc: "Curated furniture with ambient lighting."
    },
    {
      id: 2,
      src: theme === 'dark' ? "/suite.webp" : "/suite_day.webp",
      title: "The Suite",
      desc: "A plush, cloud-like bed for perfect rest."
    },
    {
      id: 3,
      src: "/workspace.webp", // reusing workspace for both themes
      title: "The Workspace",
      desc: "Designed for deep focus and creativity."
    }
  ];

  return (
    <section id="showcase" ref={containerRef} className="py-24 relative z-10 bg-theme-bg transition-colors duration-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl text-theme-text mb-4">
              Designed in <br />
              <span className="italic text-warm-beige">Details.</span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-theme-text-secondary max-w-sm md:text-right font-normal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Hover to discover the meticulously crafted spaces inside the studio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseImages.map((item, index) => (
            <motion.div
              key={item.id}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className="relative group cursor-none"
            >
              <div className="overflow-hidden rounded-2xl aspect-[3/4] relative glass">
                <motion.div className="absolute inset-0 bg-theme-bg/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <LazyImage
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-heading text-2xl text-soft-white mb-2">{item.title}</h3>
                  <div className="h-[1px] w-0 group-hover:w-full bg-warm-beige transition-all duration-700 ease-out mb-4"></div>
                  <p className="text-soft-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;
