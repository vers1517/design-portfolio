import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Menu, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isExpanded = isHovered || isClicked;

  const navLinks = [
    { name: 'I miei lavori', href: '#work', num: '01' },
    { name: 'Cosa faccio', href: '#services', num: '02' },
    { name: 'Scrivimi', href: '#contact', num: '03' },
  ];

  return (
    <>
      {/* LEFT SIDEBAR NAV - Desktop and Tablet */}
      <motion.nav 
        initial={false}
        animate={{ 
          width: isExpanded ? '260px' : '72px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "fixed top-0 left-0 bottom-0 z-50 hidden md:flex flex-col bg-[#fcfcfb] border-r border-black/[0.06] transition-all duration-300 ease-in-out",
          isExpanded ? "shadow-lg shadow-black/[0.02]" : ""
        )}
      >
        {/* Brand/Logo Area */}
        <div className="h-24 flex items-center justify-center border-b border-black/[0.04]">
          {isExpanded ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-6 w-full flex items-center justify-between"
            >
              <a href="#" className="flex flex-col">
                <span className="font-sans text-base font-bold tracking-tight text-neutral-900">
                  D. TROIANI
                </span>
                <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">
                  UX WRITER | UX DESIGNER
                </span>
              </a>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsClicked(!isClicked);
                }}
                className="p-1 hover:bg-neutral-100 rounded text-neutral-400 hover:text-black transition-colors"
                title={isClicked ? "Blocca chiuso" : "Blocca aperto"}
              >
                <div className={cn(
                  "w-2 h-2 rounded-full transition-all", 
                  isClicked ? "bg-emerald-500 scale-125" : "bg-neutral-300"
                )} />
              </button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center"
            >
              <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <svg viewBox="0 0 100 80" className="w-[28px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 20 15 H 52 C 72 15, 85 25, 85 40 C 85 55, 72 65, 52 65 H 20 Z M 38 32 H 52 C 57 32, 61 35, 61 40 C 61 45, 57 48, 52 48 H 38 Z" 
                    fill="#1a1a1a" 
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </div>

        {/* Navigation center list */}
        <div className="flex-1 flex flex-col justify-center gap-2 px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "group flex items-center h-12 rounded transition-all duration-200",
                isExpanded ? "px-4 hover:bg-neutral-100" : "justify-center"
              )}
            >
              {isExpanded ? (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-neutral-300 group-hover:text-neutral-500 font-bold">
                      [{link.num}]
                    </span>
                    <span className="text-xs font-sans text-neutral-600 group-hover:text-black font-medium tracking-wide">
                      {link.name}
                    </span>
                  </div>
                  <ChevronRight size={12} className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all" />
                </div>
              ) : (
                <div className="relative flex items-center justify-center">
                  <span className="font-mono text-[10px] text-neutral-400 group-hover:text-black transition-colors">
                    {link.num}
                  </span>
                  {/* Floating pure tooltip */}
                  <div className="absolute left-10 px-3 py-1.5 rounded bg-white border border-neutral-100 text-[10px] tracking-wider font-mono text-neutral-800 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-md">
                    {link.name}
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Collapse button and contact trigger */}
        <div className="p-4 border-t border-black/[0.04]">
          {isExpanded ? (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center"
            >
              <a 
                href="#contact" 
                className="text-[10px] font-mono text-neutral-400 hover:text-black uppercase tracking-wider transition-colors"
              >
                Parliamo? →
              </a>
              <span className="text-[9px] font-mono text-neutral-300">© 2026</span>
            </motion.div>
          ) : (
            <div className="flex justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            </div>
          )}
        </div>
      </motion.nav>

      {/* MOBILE TOP BAR (visible on screens <= md) */}
      <motion.div 
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-0 left-0 right-0 h-16 px-6 flex items-center justify-between z-40 bg-[#fcfcfb]/90 backdrop-blur-md border-b border-black/[0.05]"
      >
        <span className="font-sans text-sm font-bold tracking-tight text-neutral-900">
          DAMIANO TROIANI
        </span>
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-1.5 hover:bg-neutral-100 rounded text-neutral-800 focus:outline-none transition-colors"
          aria-label="Apri menu"
        >
          <Menu size={20} />
        </button>
      </motion.div>

      {/* MOBILE MENU FULL OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#fcfcfb] z-50 flex flex-col md:hidden"
          >
            {/* Top Bar inside overlay */}
            <div className="flex justify-between items-center p-6 border-b border-black/[0.05] h-16">
              <span className="font-sans text-sm font-bold tracking-tight text-neutral-900">
                DAMIANO TROIANI
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-neutral-800 hover:bg-neutral-100 rounded-full transition-colors focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease: "easeOut" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-sans font-light text-neutral-800 hover:text-black transition-colors flex items-baseline gap-4"
                >
                  <span className="font-mono text-xs text-neutral-300">0{i+1}.</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Footer on Mobile Overlay */}
            <div className="p-8 border-t border-black/[0.05] bg-neutral-50/50 flex flex-col gap-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">
                Contatto Diretto
              </span>
              <a href="mailto:dmntroiani@gmail.com" className="text-base text-neutral-800 hover:text-black transition-all">
                dmntroiani@gmail.com
              </a>
              <div className="flex gap-6 mt-2">
                <a 
                  href="https://www.linkedin.com/in/damianotroiani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono hover:text-black transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
