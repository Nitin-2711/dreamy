import { motion } from 'framer-motion';
import LazyImage from '../../components/ui/LazyImage';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Cozy Nights",
      desc: "Dim the lights, cast a warm glow, and unwind in absolute comfort.",
      img: "/interior.webp"
    },
    {
      title: "City Lights",
      desc: "Watch the energy of Noida West from the serenity of your high-rise retreat.",
      img: "/city_view.webp"
    },
    {
      title: "Calm Productivity",
      desc: "A dedicated minimalist workspace designed to spark your best ideas.",
      img: "/workspace.webp"
    },
    {
      title: "Urban Pulse",
      desc: "Step down directly into a thriving premium hub of shopping, dining, and world-class entertainment.",
      img: "/plaza_night.webp"
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-theme-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-theme-text">
            The <span className="italic text-warm-beige">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <LazyImage 
                      src={exp.img} 
                      alt={exp.title} 
                      className="w-full h-full"
                      imageClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/80 to-transparent"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="w-full md:w-1/2 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="text-warm-beige text-sm font-mono tracking-widest">0{idx + 1}</div>
                <h3 className="font-heading text-3xl md:text-4xl text-theme-text">{exp.title}</h3>
                <p className="text-theme-text-secondary text-lg max-w-md font-normal leading-relaxed">
                  {exp.desc}
                </p>
                <div className="pt-4">
                  <div className="w-12 h-[1px] bg-warm-beige/40"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
