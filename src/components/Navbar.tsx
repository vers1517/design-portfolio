import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background appearance
      setIsScrolled(currentScrollY > 50);

      // Hide/Show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Lavori', href: '#work' },
    { name: 'Chi Sono', href: '#about' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
          isScrolled || mobileMenuOpen ? "bg-black md:bg-black/80 md:backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6",
          !isVisible && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="font-display text-xl md:text-2xl font-black tracking-tighter uppercase text-orange-500 leading-none">DAMIANO</span>
            <span className="text-[8px] text-white/20 uppercase tracking-[0.4em] mt-2 font-bold select-none">UX Content & Service Designer</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40 hover:text-white transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white relative z-[110]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[90] flex flex-col md:hidden"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full h-full p-8 pt-32 flex flex-col"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-display font-bold text-white uppercase tracking-tighter"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto border-t border-white/10 pt-8"
              >
                <a 
                  href="mailto:dmntroiani@gmail.com"
                  className="text-white text-lg font-bold underline decoration-white/30 underline-offset-8"
                >
                  dmntroiani@gmail.com
                </a>
                <div className="flex gap-6 mt-8">
                  <a href="https://www.linkedin.com/in/damianotroiani" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/40 uppercase tracking-widest hover:text-white">LinkedIn</a>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/40 uppercase tracking-widest hover:text-white">CV</a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
