import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';
import { 
  ArrowUpRight, 
  ArrowRight,
  ArrowDown,
  ArrowUp
} from 'lucide-react';
import { Navbar } from './components/Navbar';

export default function App() {
  const [activeProject, setActiveProject] = useState<number | null>(0);
  const [time, setTime] = useState('');

  // Sincronizza l'orologio dell'interfaccia
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('it-IT', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Manifesto di design con alta leggibilità (indice Gulpease > 80)
  const designManifestoPoints = [
    {
      term: "UX Writing & Microcopy",
      desc: "Scrivo parole funzionali, bottoni chiari e messaggi rassicuranti. Rendo i flussi d'uso facili da comprendere per chiunque."
    },
    {
      term: "User Experience Design",
      desc: "Progetto l'architettura logica dello schermo. Elimino le frizioni visive e i passaggi inutili per semplificare la navigazione."
    },
    {
      term: "AI Conversazionale",
      desc: "Disegno dialoghi uomo-macchina naturali. Allineo il tono di voce delle intelligenze artificiali ai bisogni delle persone reali."
    }
  ];

  const works = [
    {
      title: "Green-Zine",
      subtitle: "Editoria digitale e UX Design",
      collaboration: "Design per l'ecologia",
      period: "Progetto — 2025",
      description: "Un giornale digitale focalizzato sullo sviluppo sostenibile. Ho definito l'architettura delle informazioni e la gerarchia visiva delle notizie per una fluidità di lettura totale.",
      editorialAnalysis: "Ho ridisegnato i blocchi di testo e ridotto gli elementi di distrazione visiva. Ho sostituito la terminologia complessa con parole d'uso comune.",
      methodology: ["Architettura contenuti", "UX Layout", "Semplificazione testi"],
      imageUrl: "/green-zine-cover.png",
      link: "https://www.figma.com/deck/OKbXZOpSw6VvlPvybG1uA2/Green-Zine?node-id=2233-245&t=hpK4zKIwsiwssh7I-1",
      catalogNum: "01"
    },
    {
      title: "ConTe",
      subtitle: "Servizio inclusivo e Assistenza vocale",
      collaboration: "Salute e accessibilità",
      period: "Progetto — 2025",
      description: "Un'applicazione mobile nata per connettere persone anziane e medici di base. Unisce flussi protettivi, microtesti molto leggibili e un assistente vocale accessibile.",
      editorialAnalysis: "Ho strutturato pulsanti grandi e contrastati, messaggi di errore privi di gergo tecnico e istruzioni vocali calibrate su un tono di voce calmo e rassicurante.",
      methodology: ["Scrittura inclusiva", "UX Design vocale", "Accessibilità WCAG"],
      imageUrl: "/conte-cover.png",
      link: "https://www.figma.com/deck/F91mmJNBAiIxqUtPWk2Fx5/ConTe?node-id=0-1&t=s2slahbvo3zM8pYy-1",
      catalogNum: "02"
    },
    {
      title: "Daily Brief",
      subtitle: "Personalized News Hub",
      collaboration: "Cura dei contenuti & Identità",
      period: "Progetto — 2026",
      description: "Un hub editoriale dove le notizie non vengono uniformate o riprodotte in blocco. L'utente seleziona le testate preferite e accede ai siti originali tramite collegamenti diretti.",
      editorialAnalysis: "Il design di una pagina è parte dell'informazione stessa. Rispettare la grafica originale di ogni quotidiano è essenziale per capire il contesto delle notizie. È una scelta per combattere l'appiattimento visivo dei soliti aggregatori.",
      methodology: ["Identità visiva", "Architettura notizie", "Flussi liberi"],
      imageUrl: "/daily-brief-cover.png",
      link: "https://dmntroiani.github.io/Daily-Brief/",
      catalogNum: "03"
    }
  ];

  const services = [
    {
      num: "01",
      category: "UX Writing & Content Strategy",
      summary: "Scrivo i microtesti delle interfacce: bottoni, avvisi di errore, flussi di attivazione e guide d'uso. Elimino le barriere linguistiche e guido le persone a destinazione.",
      curatedFocus: ["Tono di voce unico", "Copy dei bottoni", "Semplificazione istruzioni", "Contrasto e accessibilità"]
    },
    {
      num: "02",
      category: "UX Design & Flussi di Prodotto",
      summary: "Studio le mappe d'esperienza e l'ordine delle schermate. Rendo i siti web e le applicazioni mobili intuitive, piacevoli da navigare e prive di blocchi visivi.",
      curatedFocus: ["Mappe di navigazione", "Wireframe geometrici", "Test di usabilità", "Inclusione visiva"]
    },
    {
      num: "03",
      category: "AI Conversazionale & Prompt Design",
      summary: "Costruisco la personalità, il tono e gli schemi di dialogo per assistenti virtuali e agenti basati su AI. Traduco la complessità artificiale in un dialogo logico e umano.",
      curatedFocus: ["Flussi conversazionali", "Istruzioni per l'AI", "Prevenzione errori macchina", "Dialoghi naturali"]
    },
    {
      num: "04",
      category: "Architettura dell'Informazione",
      summary: "Organizzo e categorizzo i contenuti, i menu principali e l'albero di navigazione. Permetto alle persone di trovare ciò che cercano nel minor tempo possibile.",
      curatedFocus: ["Menu ad alta leggibilità", "Logica di ricerca", "Sistemi di etichette", "Gerarchie chiare"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-neutral-900 selection:text-neutral-100 transition-all duration-300">
      
      {/* Barra laterale sinistra richidibile per desktop ed overlay responsive */}
      <Navbar />

      {/* Area principale del contenuto */}
      <div className="pl-16 md:pl-[72px] min-h-screen flex flex-col transition-all duration-300">
        
        {/* HERO - Il mio Manifesto di Progettazione */}
        <section className="relative px-6 md:px-16 lg:px-20 pt-16 md:pt-36 pb-12 md:pb-28 border-b border-black/[0.05]">
          <div className="max-w-4xl mx-auto flex flex-col justify-between min-h-[40vh]">
            
            {/* Fascia superiore di tracciamento */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/[0.04] mb-12">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-400">
                  Il mio portfolio
                </span>
              </div>
              <div className="text-[10px] font-mono tracking-[0.15em] text-neutral-400 uppercase">
                Roma / <span className="text-neutral-900 font-medium">{time}</span>
              </div>
            </div>

            {/* Titolo Principale in Helvetica Moderno ed Elegante */}
            <div className="my-6">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-4">
                [ UX Writer <span className="text-brand-accent font-bold">·</span> UX Designer <span className="text-brand-accent font-bold">·</span> Conversational AI ]
              </span>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-neutral-900 tracking-tight">
                Disegno testi, flussi e dialoghi intelligenti. <br />
                <span className="text-neutral-400 font-light">Risolvo problemi di usabilità.</span> <br />
                Progetto ponti naturali tra persone ed AI.
              </h1>
            </div>

            {/* Elementi del Manifesto in griglia geometrica sfalsata */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-black/[0.05] mt-10">
              {designManifestoPoints.map((point, index) => (
                <div key={point.term} className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 font-medium">
                    0{index + 1} — {point.term}
                  </span>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigatore / Indicatori di scorrimento (Accessibilità) */}
            <div className="flex justify-center mt-12 md:mt-16">
              <a 
                href="#work" 
                className="group flex flex-col items-center gap-2.5 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors focus:outline-none"
                aria-label="Scorri ai progetti di lavoro"
              >
                <span className="font-semibold">01<span className="text-brand-accent font-bold">.</span> I miei lavori</span>
                <div className="w-8 h-8 rounded-full border border-black/[0.06] flex items-center justify-center bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:translate-y-0.5 group-hover:border-brand-accent/30">
                  <ArrowDown size={12} className="text-brand-accent" />
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* WORKS - I miei lavori (Sezione 01) */}
        <section id="work" className="scroll-mt-16 py-12 md:py-28 px-6 md:px-16 lg:px-20 bg-[#faf9f8] border-b border-black/[0.05]">
          <div className="max-w-4xl mx-auto">
            
            {/* Intestazione della sezione */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16 pb-4 border-b border-black/10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-neutral-400">01<span className="text-brand-accent font-bold">.</span></span>
                <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-neutral-800">
                  I miei lavori
                </h2>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase font-medium">
                Sotto-archivio progetti — 2025 / 2026
              </span>
            </div>

            {/* Lista a scomparsa dei lavori */}
            <div className="flex flex-col text-neutral-900 border-t border-black/[0.06]">
              {works.map((work, index) => {
                const isOpen = activeProject === index;
                return (
                  <div 
                    key={work.title}
                    className="border-b border-black/[0.06] transition-all duration-200"
                  >
                    {/* Barra di apertura */}
                    <button
                      onClick={() => setActiveProject(isOpen ? null : index)}
                      className="w-full flex flex-col md:flex-row md:items-center justify-between text-left py-6 md:py-8 hover:bg-neutral-200/10 px-3 transition-all duration-200 focus:outline-none group"
                    >
                      <div className="flex items-center gap-6">
                        <span className="font-mono text-xs text-neutral-300 group-hover:text-neutral-800 transition-colors">
                          ({work.catalogNum})
                        </span>
                        <div>
                          <h3 className="font-sans text-lg md:text-xl font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                            {work.title}
                          </h3>
                          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block mt-0.5">
                            {work.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3 md:mt-0 gap-8">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 font-light">
                          {work.collaboration}
                        </span>
                        <span className="text-[9px] font-mono text-neutral-300">
                          {work.period}
                        </span>
                        <div className={cn(
                          "w-6 h-6 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 text-neutral-400 group-hover:text-brand-accent group-hover:border-brand-accent/40",
                          isOpen ? "bg-brand-accent border-brand-accent text-white rotate-45" : "bg-transparent"
                        )}>
                          <ArrowUpRight size={10} />
                        </div>
                      </div>
                    </button>

                    {/* Dettaglio del lavoro selezionato */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#ffffff]"
                        >
                          <div className="p-6 md:p-10 border-t border-black/[0.04] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            
                            {/* Dati testuali di cura editoriale */}
                            <div className="lg:col-span-5 flex flex-col justify-between">
                              <div>
                                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded inline-block mb-4">
                                  {work.subtitle}
                                </span>

                                <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
                                  {work.description}
                                </p>

                                <div className="border-t border-black/[0.04] pt-4 mb-4">
                                  <h4 className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
                                    Soluzioni di copy:
                                  </h4>
                                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                                    {work.editorialAnalysis}
                                  </p>
                                </div>
                              </div>

                              <div className="pt-2">
                                <div className="flex flex-wrap gap-1 mb-4">
                                  {work.methodology.map((m) => (
                                    <span key={m} className="text-[8px] font-mono text-neutral-400 border border-neutral-200 px-2 py-0.5 rounded-full bg-neutral-50 uppercase font-semibold">
                                      {m}
                                    </span>
                                  ))}
                                </div>

                                <a 
                                  href={work.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-neutral-900 hover:text-brand-accent border-b border-brand-accent pb-0.5 transition-all duration-200 font-bold"
                                >
                                  VEDI IL CASO STUDIO
                                  <ArrowUpRight size={10} className="text-brand-accent" />
                                </a>
                              </div>
                            </div>

                            {/* Anteprima visiva dal sapore neutro e professionale */}
                            <div className="lg:col-span-7 rounded overflow-hidden border border-black/[0.04] bg-neutral-50 relative group">
                              <img 
                                src={work.imageUrl} 
                                alt={work.title} 
                                className="w-full h-auto object-cover aspect-[16/10] grayscale-0 opacity-100 md:grayscale md:opacity-90 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-300"
                              />
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center text-[11px] font-sans text-neutral-400">
              * Seleziona un progetto per esaminare in dettaglio il processo di lavoro.
            </div>

            {/* Navigatore / Indicatori di scorrimento (Accessibilità) */}
            <div className="flex justify-center mt-14 pt-8 border-t border-black/[0.04]">
              <a 
                href="#services" 
                className="group flex flex-col items-center gap-2.5 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors focus:outline-none"
                aria-label="Scorri alla sezione servizio/competenze"
              >
                <span className="font-semibold">02<span className="text-brand-accent font-bold">.</span> Cosa faccio</span>
                <div className="w-8 h-8 rounded-full border border-black/[0.06] flex items-center justify-center bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:translate-y-0.5 group-hover:border-brand-accent/30">
                  <ArrowDown size={12} className="text-brand-accent" />
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* SERVICES - I miei servizi (Sezione 02) */}
        <section id="services" className="scroll-mt-16 py-12 md:py-28 px-6 md:px-16 lg:px-20 bg-brand-bg border-b border-black/[0.05]">
          <div className="max-w-4xl mx-auto">
            
            <div className="flex flex-col gap-2 mb-16">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-neutral-400">02<span className="text-brand-accent font-bold">.</span></span>
                <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-neutral-800">
                  Cosa faccio
                </h2>
              </div>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Aree di specializzazione e competenze
              </p>
            </div>

            {/* Struttura Geometrica Pulita in stile Svizzero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 border border-neutral-200/60 rounded overflow-hidden">
              {services.map((service) => (
                <div 
                  key={service.category}
                  className="bg-white p-6 md:p-8 flex flex-col justify-between min-h-[220px]"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-mono text-[10px] text-neutral-300">({service.num})</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-200" />
                    </div>

                    <h3 className="font-sans text-sm font-bold text-neutral-800 mb-2">
                      {service.category}
                    </h3>
                    
                    <p className="text-xs text-neutral-500 leading-relaxed font-light mb-6 font-sans">
                      {service.summary}
                    </p>
                  </div>

                  <div className="border-t border-neutral-100 pt-4 mt-auto">
                    <div className="flex flex-wrap gap-1">
                      {service.curatedFocus.map((focus) => (
                        <span key={focus} className="text-[9px] font-mono text-neutral-400 bg-neutral-50 px-2 py-0.5 rounded border border-black/[0.02] font-medium">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Navigatore / Indicatori di scorrimento (Accessibilità) */}
            <div className="flex justify-center mt-14 pt-8 border-t border-black/[0.04]">
              <a 
                href="#contact" 
                className="group flex flex-col items-center gap-2.5 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors focus:outline-none"
                aria-label="Scorri ai contatti"
              >
                <span className="font-semibold">03<span className="text-brand-accent font-bold">.</span> Mettiti in contatto</span>
                <div className="w-8 h-8 rounded-full border border-black/[0.06] flex items-center justify-center bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:translate-y-0.5 group-hover:border-brand-accent/30">
                  <ArrowDown size={12} className="text-brand-accent" />
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* FOOTER - Minimal, Pure Dialog (Sezione 03) */}
        <footer id="contact" className="py-12 md:py-28 px-6 md:px-16 lg:px-20 bg-neutral-950 text-neutral-100 relative overflow-hidden z-10 mt-auto">
          <div className="max-w-4xl mx-auto relative z-10">
            
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-neutral-400">03<span className="text-brand-accent font-bold">.</span></span>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-500 font-bold">
                  Contatti e scambi di visione
                </span>
              </div>

              <a 
                href="mailto:dmntroiani@gmail.com" 
                className="group flex flex-col items-start transition-opacity"
              >
                <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl font-light text-white select-none leading-tight tracking-tight">
                  Iniziamo un <br />
                  <span className="text-neutral-400 font-mono font-bold">dialogo</span><span className="text-brand-accent font-mono font-bold">_</span>
                </h2>

                <div className="mt-10 flex items-center gap-4 md:group-hover:gap-8 transition-all duration-300">
                  <span className="text-sm sm:text-lg md:text-xl font-mono tracking-tight border-b border-white md:border-white/25 md:group-hover:border-white text-white md:text-neutral-300 md:group-hover:text-white pb-0.5 transition-all">
                    dmntroiani@gmail.com
                  </span>
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border bg-white border-white text-neutral-900 md:bg-transparent md:border-white/15 md:text-white md:group-hover:bg-white md:group-hover:border-white md:group-hover:text-neutral-900 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 md:group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </a>
            </div>

            {/* Collegamenti e note legali di firma */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8 border-t border-white/5">
              <div className="flex gap-6 items-center">
                <a 
                  href="https://www.linkedin.com/in/damianotroiani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors animate-pulse"
                >
                  LinkedIn
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                >
                  Resume
                </a>
                <a 
                  href="#" 
                  className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 hover:text-brand-accent transition-colors flex items-center gap-1.5 ml-2 border-l border-white/10 pl-6 group"
                  aria-label="Torna all'inizio della pagina"
                >
                  <span>Torna su</span>
                  <ArrowUp size={11} className="text-brand-accent transition-transform duration-300 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-neutral-500">
                <div>Damiano Troiani © {new Date().getFullYear()} – Parole, flussi e dialoghi uomo-AI.</div>
                <div className="text-[8px] text-neutral-600 mt-1 uppercase leading-normal">
                  "Autorizzo il trattamento dei dati personali (D. Lgs. 196/2003 e Regolamento UE 2016/679)"
                </div>
              </div>
            </div>

          </div>
        </footer>

      </div>

    </div>
  );
}
