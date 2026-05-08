import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';
import { 
  ArrowUpRight, 
  ArrowDown,
  ArrowRight,
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Cpu, 
  Palette, 
  Layout, 
  Globe
} from 'lucide-react';
import { Navbar } from './components/Navbar';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Green-Zine",
      description: "Un progetto editoriale digitale dedicato alla sostenibilità. Focalizzato su una ricerca UX approfondita e un content design curato per sensibilizzare all'ecologia.",
      tags: ["ux research", "ux design", "content design"],
      imageUrl: "/green-zine-cover.png",
      link: "https://www.figma.com/deck/OKbXZOpSw6VvlPvybG1uA2/Green-Zine?node-id=2233-245&t=hpK4zKIwsiwssh7I-1"
    },
    {
      title: "ConTe",
      description: "Un'esplorazione di design focalizzata sull'interazione e l'accessibilità, mirata a semplificare processi complessi per l'utente finale.",
      tags: ["ux research", "ux design", "wcag design principles"],
      imageUrl: "/conte-cover.png",
      link: "https://www.figma.com/deck/F91mmJNBAiIxqUtPWk2Fx5/ConTe?node-id=0-1&t=s2slahbvo3zM8pYy-1"
    },
    {
      title: "Daily Brief",
      description: "Un'interfaccia curata progettata per il consumo rapido di informazioni. Fornisce riassunti quotidiani delle notizie globali con un'estetica editoriale pulita.",
      tags: ["vibe coding", "news api", "ux ritual"],
      imageUrl: "/daily-brief-cover.png",
      link: "https://dmntroiani.github.io/Daily-Brief/"
    }
  ];

  const expertise = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "1. Content Design & UX Writing",
      desc: "Progetto contenuti chiari e accessibili integrati nei flussi, per guidare le persone nelle interazioni digitali."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "2. Service Design Thinking",
      desc: "Analizzo bisogni e contesti per progettare servizi utili, semplici e centrati sulle persone."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "3. User Flows & Interaction",
      desc: "Ottimizzo percorsi e micro-interazioni per ridurre attriti e semplificare esperienze complesse."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "4. Collaboration & Systems Thinking",
      desc: "Lavoro con team cross-funzionali per costruire soluzioni coerenti, scalabili e orientate agli obiettivi."
    }
  ];

  return (
    <div className={cn(
      "min-h-screen font-sans selection:bg-zinc-200 bg-brand-bg text-brand-text overflow-x-hidden transition-[padding] duration-500",
      isScrolled ? "md:pl-20" : "md:pl-[300px]"
    )}>
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden pt-20">
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 md:gap-6 mb-8 md:mb-16"
          >
            <div className="w-8 md:w-12 h-[1px] bg-black opacity-20" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold">
              Selected Works
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-[clamp(64px,18vw,210px)] leading-[0.75] font-extrabold tracking-tighter text-black mb-12 md:mb-12 uppercase select-none">
              Port<br/>folio
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-8 md:mt-0"
          >
            <div className="md:col-span-6 lg:col-span-5">
              <p className="text-[11px] md:text-xs text-black/40 leading-[1.8] font-medium uppercase tracking-[0.25em] max-w-sm md:max-w-md balance">
                Progetto contenuti e servizi digitali che <br className="hidden md:block" /> 
                <span className="text-black/60">semplificano la complessità</span> e guidano <br className="hidden md:block" />
                le persone nelle interazioni.
              </p>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:hidden z-30"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-black/30">
            <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>

        {/* Large background text accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[30vw] font-black text-black/[0.02] leading-none uppercase whitespace-nowrap">
            Selected
          </span>
        </div>
      </section>

      {/* Intro Section - Chi sono */}
      <section id="about" className="scroll-mt-20 pt-16 pb-8 md:py-32 px-6 md:px-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">About me</span>
                </div>
                <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-medium tracking-tight text-black mb-10 md:mb-16 leading-[1.1] md:leading-[0.9]">
                  Progetto per le <span className="italic font-serif opacity-70 sm:text-[1.1em] lowercase">persone,</span> <br className="hidden sm:block"/>
                  non solo per gli schermi.
                </h2>
                <div className="max-w-3xl text-black/50 text-sm md:text-lg leading-relaxed font-medium space-y-6">
                  <p>
                    Ciao, sono un designer con una forte passione per l’interazione umana. Il mio percorso è iniziato esplorando come anche il più piccolo dettaglio — un pixel, un micro-movimento — possa influenzare emozioni e percezioni.
                  </p>
                  <p>
                    Credo in un design invisibile: quando funziona davvero, non si fa notare. L’utente non si ferma a pensare all’interfaccia, ma percepisce semplicemente che tutto è al posto giusto.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section Heading */}
      <section id="work" className="scroll-mt-24 pt-8 pb-16 md:py-24 px-6 md:px-24 bg-brand-surface border-t border-black/5 relative z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-32">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">Portfolio</h2>
            <h3 className="font-display text-6xl md:text-[12rem] font-bold tracking-tighter text-black uppercase leading-none select-none">
              Works
            </h3>
          </div>

          <div className="space-y-20 md:space-y-48">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center max-w-5xl mx-auto"
              >
                {/* Image */}
                <div className="w-full mb-6 md:mb-12">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/10] overflow-hidden rounded-sm border border-black/5 bg-brand-surface group">
                    <motion.img 
                      src={project.imageUrl} 
                      alt={project.title}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Information */}
                <div className="flex flex-col items-center max-w-2xl px-4">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="text-xs font-mono text-black/20">0{index + 1}</span>
                    <h4 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tight">{project.title}</h4>
                  </div>
                  
                  <p className="text-black/50 text-sm md:text-lg font-medium leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] md:text-[9px] uppercase tracking-widest px-4 py-1.5 border border-black/10 rounded-full text-black/40 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] group/btn border-b border-black/20 pb-2 hover:border-black transition-colors">
                    Explore Case Study <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="scroll-mt-20 py-20 md:py-32 px-6 md:px-24 border-t border-black/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">Expertise</h2>
            <h3 className="font-display text-7xl md:text-[10rem] font-bold tracking-tight text-black uppercase leading-[0.85] select-none">
              Skills <br/>
              <span className="italic font-serif opacity-30 text-[0.8em] lowercase">capabilities</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-1px bg-black/10 border border-black/10">
            {expertise.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="bg-brand-bg p-8 md:p-12 group hover:bg-black transition-colors duration-500"
              >
                <div className="text-black group-hover:text-white mb-8 transition-colors">{item.icon}</div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-black group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-sm text-black/40 group-hover:text-white/60 leading-relaxed font-medium transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>


      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 md:py-32 px-6 md:px-24 border-t border-black/5 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-12 mb-24 md:mb-32">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Contact</h2>
            
            <a 
              href="mailto:dmntroiani@gmail.com"
              className="group flex flex-col items-start"
            >
              <span className="font-display text-4xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white transition-transform duration-700 group-hover:-translate-y-2 inline-block">
                Let's work<br />
                <span className="text-orange-500 italic font-serif lowercase opacity-90">together</span>
              </span>

              <div className="mt-12 md:mt-24 flex items-center gap-6 md:gap-12 group-hover:gap-16 transition-all duration-700 ease-out">
                <span className="text-xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight border-b-2 md:border-b-4 border-white/10 group-hover:border-white transition-all">
                  dmntroiani@gmail.com
                </span>
                <div className="w-12 h-12 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 md:w-12 md:h-12 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-12 border-t border-white/10">
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/damianotroiani" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity">LinkedIn</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity">Resume</a>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
              Damiano Troiani © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

