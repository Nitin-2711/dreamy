import { motion } from 'framer-motion';
import { Wifi, Tv, Monitor, Wind, Coffee, Lightbulb, Building, Moon, Sunset } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import LazyImage from '../../components/ui/LazyImage';

const AmenitiesSection = () => {
  const { theme } = useTheme();

  const amenities = [
    { icon: Wifi, label: "High-Speed WiFi", desc: "Seamless and secure fiber connectivity." },
    { icon: Tv, label: "Smart TV", desc: "Premium streaming access for cinema nights." },
    { icon: Monitor, label: "Workspace Desk", desc: "Creator-focused, ergonomic setup." },
    { icon: Wind, label: "Climate Control AC", desc: "Whisper-quiet luxury cooling." },
    { icon: Coffee, label: "Kitchenette", desc: "Modern amenities for quick dining." },
    { icon: Lightbulb, label: "Ambient Lighting", desc: "Customizable warm hue control." },
    { icon: Building, label: "City View", desc: "Mesmerizing views of Greater Noida West." },
    { icon: Moon, label: "Cozy Night Lighting", desc: "Perfect evening wind-down setting." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="amenities" className="py-32 relative bg-theme-bg overflow-hidden z-10 transition-colors duration-700">
      {/* Background Subtle Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-warm-beige/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-warm-beige/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-warm-beige text-xs tracking-[0.4em] uppercase mb-4 block font-semibold"
          >
            The Space & Comforts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-theme-text tracking-tight font-medium"
          >
            Curated <span className="italic text-warm-beige text-glow hover:text-glow-intense transition-all duration-300">Amenities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-theme-text-secondary mt-4 max-w-md mx-auto font-normal leading-relaxed"
          >
            Tailored to provide a premium Airbnb aesthetic with a cozy creator-focused atmosphere.
          </motion.p>
        </div>

        {/* 8 Standard Amenities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {amenities.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col p-6 rounded-2xl glass-card border border-glass-border hover:border-warm-beige/40 hover:shadow-[0_10px_30px_rgba(214,194,168,0.08)] transition-all duration-500 relative group overflow-hidden"
            >
              {/* Inner ambient glow behind icon on hover */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-warm-beige/5 rounded-full group-hover:bg-warm-beige/10 blur-xl transition-all duration-500"></div>
              
              <div className="w-12 h-12 rounded-xl bg-warm-beige/5 flex items-center justify-center mb-6 group-hover:bg-warm-beige/10 transition-colors duration-500">
                <item.icon 
                  size={24} 
                  strokeWidth={1.5} 
                  className="text-theme-text group-hover:text-warm-beige transition-colors duration-500" 
                />
              </div>

              <h3 className="text-base font-semibold text-theme-text tracking-wide mb-2 group-hover:text-glow transition-all duration-300">
                {item.label}
              </h3>
              <p className="text-xs text-theme-text-secondary leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cinematic Balcony View Showcase Row (Amenity 9) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl border border-glass-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative group"
        >
          {/* Glowing border effects */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-warm-beige/30 to-transparent"></div>
          
          {/* Visual Showcase - Column 7 */}
          <div className="lg:col-span-7 aspect-video lg:aspect-auto relative overflow-hidden min-h-[350px]">
            <LazyImage 
              src={theme === 'dark' ? "/city_view.webp" : "/hero_day.webp"} 
              alt="Cinematic Balcony view" 
              className="w-full h-full"
              imageClassName="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            {/* Ambient overlay and reflections */}
            <div className="absolute inset-0 bg-gradient-to-r from-theme-bg via-transparent to-transparent opacity-90 lg:opacity-75"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent opacity-80 lg:hidden"></div>
            
            {/* Floating Glass Reflection Tag */}
            <div className="absolute top-6 left-6 glass border border-white/10 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-warm-beige animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-white">Live Ambiance</span>
            </div>
          </div>

          {/* Descriptive Content - Column 5 */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-warm-beige/10 flex items-center justify-center text-warm-beige mb-2">
              <Sunset size={24} />
            </div>

            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-warm-beige block mb-2 font-mono">Premium Spotlight</span>
              <h3 className="font-heading text-2xl md:text-3xl text-theme-text leading-tight">
                Cinematic <span className="italic text-warm-beige">Balcony View</span>
              </h3>
            </div>

            <p className="text-theme-text-secondary text-sm md:text-base leading-relaxed font-normal">
              Indulge in a calm luxury atmosphere overlooking the sparkling night city lights of Greater Noida West. With floor-to-ceiling windows stepping out to a peaceful viewing balcony.
            </p>

            {/* Coffee aesthetic text detail */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-warm-beige/5 border border-glass-border">
              <span className="text-2xl">☕</span>
              <div className="text-xs text-theme-text-secondary leading-relaxed font-normal">
                Perfect for your morning coffee rituals or romantic evening wind-downs high above the urban hustle.
              </div>
            </div>

            {/* Micro Interaction Element */}
            <div className="flex items-center gap-2 text-xs text-warm-beige font-mono uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
              <span>Calm Lifestyle Escape</span>
              <span>→</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
