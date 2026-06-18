import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';
import { 
  ArrowUpRight, 
  ArrowRight
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
      term: "Scrittura funzionale",
      desc: "Scrivo microtesti utili e diretti. Elimino le parole inutili. Rendo le istruzioni veloci da capire."
    },
    {
      term: "Inclusione visiva",
      desc: "Progetto flussi per tutti. Rispetto i contrasti di colore e offro percorsi facili da navigare."
    },
    {
      term: "Architettura chiara",
      desc: "Un buon design non si fa notare. Organizzo lo spazio e guido le persone in modo naturale."
    }
  ];

  const works = [
    {
      title: "Green-Zine",
      subtitle: "Progetto di editoria digitale",
      collaboration: "Design per l'ecologia",
      period: "Progetto — 2025",
      description: "Un giornale digitale focalizzato sullo sviluppo sostenibile. È ispirato alla carta stampata ma si legge sullo schermo del telefono.",
      editorialAnalysis: "Ho ideato testi brevi e immediati. Ho eliminato i termini tecnici pesanti. Ho usato esempi di tutti i giorni per visualizzare i concetti chiave.",
      methodology: ["Strategia testi", "Semplificazione", "Scrittura ecologica"],
      imageUrl: "/green-zine-cover.png",
      link: "https://www.figma.com/deck/OKbXZOpSw6VvlPvybG1uA2/Green-Zine?node-id=2233-245&t=hpK4zKIwsiwssh7I-1",
      catalogNum: "01"
    },
    {
      title: "ConTe",
      subtitle: "Servizio di cura inclusivo",
      collaboration: "Salute e accessibilità",
      period: "Progetto — 2025",
      description: "Una app progettata per connettere persone anziane e medici. Permette di richiedere assistenza in modo rapido, calmo e intuitivo.",
      editorialAnalysis: "Ho scelto caratteri spaziosi e chiari. Ho scritto messaggi di conferma rassicuranti. Ho rimosso il linguaggio medico per evitare dubbi.",
      methodology: ["Scrittura inclusiva", "Accessibilità", "Design dei servizi"],
      imageUrl: "/conte-cover.png",
      link: "https://www.figma.com/deck/F91mmJNBAiIxqUtPWk2Fx5/ConTe?node-id=0-1&t=s2slahbvo3zM8pYy-1",
      catalogNum: "02"
    },
    {
      title: "Daily Brief",
      subtitle: "Esperimento editoriale",
      collaboration: "Cura dei contenuti",
      period: "Progetto — 2026",
      description: "Un portale minimalista che sintetizza gli eventi del mondo. Riformula i titoli sensazionalistici per offrire informazioni pulite e oneste.",
      editorialAnalysis: "Ho curato sommari con frasi precise e brevi. L'interfaccia elimina il superfluo. L'intero riassunto si legge in meno di due minuti.",
      methodology: ["Sintesi prototipo", "Interfacce chiare", "Flussi di lettura"],
      imageUrl: "/daily-brief-cover.png",
      link: "https://dmntroiani.github.io/Daily-Brief/",
      catalogNum: "03"
    }
  ];

  const services = [
    {
      num: "01",
      category: "Microcopy e testi per interfacce",
      summary: "Scrivo le scritte dei bottoni, i testi di aiuto e i messaggi del sistema. Aiuto le persone a capire cosa fare e a non sbagliare.",
      curatedFocus: ["Bottoni intuitivi", "Errori facili", "Istruzioni rapide", "Tono di voce curato"]
    },
    {
      num: "02",
      category: "Semplificazione dei flussi",
      summary: "Studio come le persone usano un servizio digitale. Elimino le parti complesse per renderlo immediato e gradevole.",
      curatedFocus: ["Mappe d'esperienza", "Coinvolgimento utenti", "Moduli immediati", "Test di utilizzo"]
    },
    {
      num: "03",
      category: "Architettura dei contenuti",
      summary: "Riordino le informazioni del sito e i menu. Rendo veloce trovare i collegamenti e i dati importanti.",
      curatedFocus: ["Menu semplici", "Ricerche facilitate", "Nomi di pagina chiari", "Logica visiva"]
    },
    {
      num: "04",
      category: "Sistemi di dialogo e AI",
      summary: "Scrivo le strutture di conversazione per gli assistenti automatici. Rendo la tecnologia facile da usare come un dialogo informale.",
      curatedFocus: ["Risposte immediate", "Conversazioni fluide", "Chiarezza digitale", "Linguaggio comune"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-neutral-900 selection:text-neutral-100 transition-all duration-300">
      
      {/* Barra laterale sinistra richidibile per desktop ed overlay responsive */}
      <Navbar />

      {/* Area principale del contenuto */}
      <div className="md:pl-[72px] min-h-screen flex flex-col transition-all duration-300">
        
        {/* HERO - Il mio Manifesto di Progettazione */}
        <section className="relative px-6 md:px-16 lg:px-20 pt-28 md:pt-36 pb-20 md:pb-28 border-b border-black/[0.05]">
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
                [ UX Content Designer ]
              </span>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-neutral-900 tracking-tight">
                Disegno testi semplici per prodotti digitali. <br />
                <span className="text-neutral-400 font-light">Elimino il rumore visivo.</span> <br />
                Miglioro l'uso delle piattaforme.
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

          </div>
        </section>

        {/* WORKS - I miei lavori (Sezione 01) */}
        <section id="work" className="scroll-mt-16 py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-[#faf9f8] border-b border-black/[0.05]">
          <div className="max-w-4xl mx-auto">
            
            {/* Intestazione della sezione */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16 pb-4 border-b border-black/10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-neutral-400">01.</span>
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
                          "w-6 h-6 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 text-neutral-400 group-hover:text-neutral-900",
                          isOpen ? "bg-neutral-900 border-neutral-900 text-white rotate-45" : "bg-transparent"
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
                                  className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-neutral-900 hover:text-neutral-500 border-b border-neutral-900 pb-0.5 transition-all duration-200 font-bold"
                                >
                                  VEDI IL CASO STUDIO
                                  <ArrowUpRight size={10} />
                                </a>
                              </div>
                            </div>

                            {/* Anteprima visiva dal sapore neutro e professionale */}
                            <div className="lg:col-span-7 rounded overflow-hidden border border-black/[0.04] bg-neutral-50 relative group">
                              <img 
                                src={work.imageUrl} 
                                alt={work.title} 
                                className="w-full h-auto object-cover aspect-[16/10] grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
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

          </div>
        </section>

        {/* SERVICES - I miei servizi (Sezione 02) */}
        <section id="services" className="scroll-mt-16 py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-brand-bg border-b border-black/[0.05]">
          <div className="max-w-4xl mx-auto">
            
            <div className="flex flex-col gap-2 mb-16">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-neutral-400">02.</span>
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

          </div>
        </section>

        {/* FOOTER - Minimal, Pure Dialog (Sezione 03) */}
        <footer id="contact" className="py-20 md:py-28 px-6 md:px-16 lg:px-20 bg-neutral-950 text-neutral-100 relative overflow-hidden z-10 mt-auto">
          <div className="max-w-4xl mx-auto relative z-10">
            
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-neutral-400">03.</span>
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
                  <span className="text-neutral-400 font-mono font-bold">dialogo_</span>
                </h2>

                <div className="mt-10 flex items-center gap-4 group-hover:gap-8 transition-all duration-300">
                  <span className="text-sm sm:text-lg md:text-xl font-mono tracking-tight border-b border-white/25 group-hover:border-white text-neutral-300 group-hover:text-white pb-0.5 transition-all">
                    dmntroiani@gmail.com
                  </span>
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-neutral-900 transition-all duration-300 text-white">
                    <ArrowRight className="w-3 md:w-4 h-3 md:h-4 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </a>
            </div>

            {/* Collegamenti e note legali di firma */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8 border-t border-white/5">
              <div className="flex gap-6">
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
              </div>

              <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-neutral-500">
                <div>Damiano Troiani © {new Date().getFullYear()} – Scrittore di interfacce.</div>
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
