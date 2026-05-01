import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Cpu, 
  Database, 
  Eye, 
  Layers, 
  Droplets, 
  Fish, 
  Microscope, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Facebook,
  Activity
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-background/95 backdrop-blur-xl py-4 border-b border-olive/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-terracotta flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
          </div>
          <span className="text-xl font-serif tracking-tight text-olive font-semibold">Hydro-Homies <span className="font-sans text-[10px] align-top text-terracotta ml-1 font-normal">v.2.04</span></span>
        </div>
        
        <div className="hidden md:flex space-x-12">
          {['Symbiosis', 'Tech', 'Mission', 'Impact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F9F8F5] border-b border-olive/5">
      {/* Background Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3B3F36 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center"
      >
        <img 
          src="front cover.png" 
          alt="Technical glass and water" 
          className="w-full h-full object-contain scale-90 opacity-15"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1] tracking-tighter max-w-5xl mx-auto italic"
        >
          Hydrohomies: Aquaponics-based Supplemental Nutrition
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl font-sans font-light tracking-wide text-sage mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          An integrated aquaponics system designed to sustainably grow supplemental nutrition through a symbiotic relationship between aquatic and plant cultivation. The system consists of a fish tank supporting aquaculture and algae growth, with an upper hydroponic grow bed that utilizes nutrient-rich water circulated from the aquatic environment. Environmental sensors and embedded control systems maintain water temperature, plant temperature, and irrigation flow to ensure stable growing conditions.
        </motion.p>
      </div>

      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-sage/30" />
        <span className="text-[10px] tracking-widest uppercase text-sage">Descent</span>
      </motion.div>
    </section>
  );
};

const SymbiosisTrinity = () => (
  <section id="symbiosis" className="py-32 px-6 max-w-7xl mx-auto border-b border-olive/5">
    <div className="mb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">The Biological Trinity</h2>
      <p className="max-w-xl mx-auto text-sage font-light">As detailed in our theory of operation, our system creates a perfect loop between aquatic life, oxygen-producing algae, and high-nutrition microgreens.</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-16">
      {[
        { 
          icon: Fish, 
          title: "Aquatic Life", 
          desc: "Fish waste provides essential nitrogen and ammonia, processed by nitrifying bacteria into plant-available nitrates.",
          ref: "Biological Load Balance"
        },
        { 
          icon: Database, 
          title: "Microgreens", 
          desc: "Harvesting nutrient-dense varieties (Kale, Arugula) that provide critical Vitamin A and C for urban diets.",
          ref: "Supplemental Nutrition"
        },
        { 
          icon: Activity, 
          title: "Algae Growth", 
          desc: "Controlled algae cultivation serves as a secondary bio-filter and potential nutrient supplement for the aquatic habitat.",
          ref: "Vertical Stack Interaction"
        }
      ].map((item, i) => (
        <motion.div 
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="relative group p-10 bg-white/40 border border-olive/5 rounded-3xl hover:border-terracotta/20 transition-all duration-500"
        >
          <div className="w-12 h-12 mb-8 text-terracotta bg-terracotta/5 rounded-full flex items-center justify-center">
            <item.icon size={24} strokeWidth={1.5} />
          </div>
          <span className="text-[9px] font-mono tracking-widest text-sage mb-4 block">{item.ref}</span>
          <h3 className="text-2xl font-serif mb-4 text-olive">{item.title}</h3>
          <p className="font-sans font-light text-sage text-sm leading-relaxed mb-6">{item.desc}</p>
          <div className="w-0 group-hover:w-full h-[1px] bg-terracotta/30 transition-all duration-700" />
        </motion.div>
      ))}
    </div>
  </section>
);

const TechSpecs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const width = useSpring(useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]), { stiffness: 100, damping: 30 });

  return (
    <section id="tech" ref={containerRef} className="py-32 px-6 bg-olive text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-10">The Intelligence Behind the Growth.</h2>
            
            <div className="space-y-12">
              {[
                { icon: Cpu, title: "Dual-Controller Architecture", desc: "Raspberry Pi nodes coordinating with Arduino microcontrollers for localized sensor feedback loops." },
                { icon: Eye, title: "Computer Vision & ROS 2", desc: "Real-time plant health monitoring and irrigation control integrated via Robot Operating System 2." },
                { icon: Microscope, title: "Precision Sensing", desc: "Redundant moisture, pH, and dissolved oxygen sensors ensure constant environmental stasis." }
              ].map((spec, i) => (
                <motion.div 
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="text-terracotta mt-1 group-hover:scale-110 transition-transform">
                    <spec.icon size={28} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{spec.title}</h4>
                    <p className="text-white/60 font-light text-sm leading-relaxed max-w-md">{spec.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              style={{ rotate: 1 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
               <img 
                src="system.17.04.png" 
                alt="System Diagram" 
                className="w-full h-auto object-contain opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive via-transparent to-transparent" />
            </motion.div>
            
            <motion.div 
              style={{ height: width, width: '1px' }}
              className="absolute -right-12 top-0 bg-terracotta opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionImpact = () => (
    <section id="mission" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-5 gap-16 items-start">
        <div className="md:col-span-2 sticky top-32">
          <h2 className="text-5xl font-serif mb-8 italic">Addressing the Food Desert.</h2>
          <p className="text-sage font-light leading-relaxed mb-10">Inspired by Pittsburgh's Hill District initiative, our system targets urban areas with limited access to fresh produce. We providing essential Vitamin A, C, and Omega-3s through high-yield autonomous growth.</p>
          
          <div className="space-y-6">
            <div className="p-6 border border-olive/5 rounded-2xl bg-sage/5">
               <p className="text-xs text-sage leading-relaxed">Providing supplemental nutrition to low-access urban populations through scalable vertical architecture.</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-12">
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src="malnutrition.15.54.png" 
                  alt="Urban community farming" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-olive/10" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src="map 1.15.39.png" 
                  alt="Research documentation" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-olive/10" />
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "390+", label: "Plants per m²", sub: "Vertical Stack Density" },
                { val: "90%", label: "Water Reduction", sub: "Compared to Field" },
                { val: "24/7", label: "Monitoring", sub: "Autonomous Feedback" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-olive/5 rounded-2xl text-center"
                >
                  <span className="text-3xl font-serif text-olive block mb-2">{stat.val}</span>
                  <span className="text-[10px] tracking-widest uppercase text-sage block mb-1">{stat.label}</span>
                  <span className="text-[9px] text-sage/40 block leading-tight">{stat.sub}</span>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
);

const ImpactGallery = () => (
  <section id="impact" className="py-24 px-6 bg-[#FDFDFB]">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 border-b border-olive/5 pb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif italic">Product Gallery</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-24">
        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative cursor-crosshair"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
            <img 
              src="imagine of future.16.01.png" 
              alt="Vertical growth unit" 
              className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-8 right-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-background/80 backdrop-blur-md p-4 rounded-xl border border-olive/10 shadow-lg">
              <span className="text-[9px] font-mono text-olive mb-1 block">UNIT_COMP_ID: AX-12</span>
              <span className="text-[9px] font-mono text-terracotta block">REALTIME: MONITORING...</span>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair md:mt-24 lg:mt-0"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="rock wool trace.16.15.png" 
                alt="Indoor farming lab" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair lg:mt-24"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="time line.16.38.png" 
                alt="System interface" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="system explaine.16.51.png" 
                alt="Microgreen growth" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair md:mt-24"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="iterations.16.59.png" 
                alt="System plumbing" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair lg:mt-24"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="system.17.04.png" 
                alt="Data visualization" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="assemble.17.40.png" 
                alt="Lab setup" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair md:mt-24"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="microgreem.17.46.png" 
                alt="Sensor module" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair lg:mt-24"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="section.17.59.png" 
                alt="Architecture diagram" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>

        <motion.div 
            whileHover={{ y: -10 }}
            className="group relative cursor-crosshair md:mt-24 lg:mt-0"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-sage/5 mb-8 flex items-center justify-center">
              <img 
                src="explode.17.24.png" 
                alt="System explosion" 
                className="max-w-full max-h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-end items-center">
              <ArrowRight className="text-sage group-hover:translate-x-2 transition-transform" />
            </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="selection:bg-terracotta/20 selection:text-terracotta">
      {/* Progress Bar "Water Flow" Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-terracotta z-[100] origin-left" style={{ scaleX }} />
      
      <Navbar />
      <Hero />
      <SymbiosisTrinity />
      <TechSpecs />
      <MissionImpact />
      <ImpactGallery />
    </main>
  );
}
