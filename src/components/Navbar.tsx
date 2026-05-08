import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, FileText, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isInitial, setIsInitial] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsInitial(false);
      } else {
        setIsInitial(true);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isExpanded = isInitial || isClicked;

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
    { name: 'About me', href: '#about' },
    { name: 'Works', href: '#work' },
    { name: 'Skills', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav 
        initial={false}
        animate={{ 
          width: isExpanded ? '300px' : '80px',
        }}
        className={cn(
          "fixed top-0 left-0 bottom-0 z-[100] hidden md:flex flex-col bg-white border-r border-black/5 transition-all duration-500 ease-in-out",
          isClicked ? "shadow-2xl" : "shadow-none"
        )}
      >
        {/* Brand/Logo Vertical */}
        <div className="h-32 flex flex-col items-center justify-center relative">
          <motion.div className="flex flex-col items-center">
            {isExpanded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => !isInitial && setIsClicked(false)}
              >
                <span className="font-display text-2xl font-black tracking-tighter uppercase text-orange-500 leading-none">DAMIANO</span>
                <span className="text-[8px] text-black/40 uppercase tracking-[0.4em] mt-2 font-bold whitespace-nowrap">
                  UX Content Designer
                </span>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setIsClicked(true)}
              >
                <span className="font-display text-4xl font-black text-orange-500">D</span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Nav Links */}
        <div className="flex-1 flex flex-col justify-center gap-2 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "group flex items-center h-12 rounded-lg transition-all duration-300",
                isExpanded ? "px-6 hover:bg-black/5" : "justify-center"
              )}
            >
              {isExpanded ? (
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black transition-colors">
                  {link.name}
                </span>
              ) : (
                <div className="w-4 h-[1px] bg-black/20 group-hover:bg-orange-500 transition-colors" />
              )}
            </a>
          ))}
        </div>

        {/* Socials/Bottom */}
        <div className="p-6 flex flex-col gap-6 items-center">
          {isExpanded ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-8"
            >
              <a href="https://www.linkedin.com/in/damianotroiani" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold tracking-widest text-black/30 hover:text-black transition-colors">
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold tracking-widest text-black/30 hover:text-black transition-colors">
                Resume
              </a>
            </motion.div>
          ) : null}
        </div>
      </motion.nav>

      {/* Mobile Top Bar & Menu Toggle */}
      <motion.div 
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-0 left-0 right-0 h-20 px-6 flex items-center justify-between z-[100] bg-white/80 backdrop-blur-md border-b border-black/5"
      >
        <span className="font-display text-2xl font-black text-orange-500">D</span>
        <button 
          className="p-2 text-orange-500"
          onClick={() => setMobileMenuOpen(true)}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <div className="h-[2px] w-full bg-current" />
            <div className="h-[2px] w-full bg-current" />
          </div>
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[120] flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-6">
              <span className="font-display text-xl font-black tracking-tighter uppercase text-orange-500">DAMIANO</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-black hover:bg-black/5 rounded-full"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center p-8 gap-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-5xl font-display font-bold text-black uppercase tracking-tighter hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="p-8 border-t border-black/10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold mb-4">Get in touch</p>
              <a href="mailto:dmntroiani@gmail.com" className="text-xl font-bold text-black">dmntroiani@gmail.com</a>
              <div className="flex gap-6 mt-8">
                <a href="https://www.linkedin.com/in/damianotroiani" target="_blank" rel="noopener noreferrer" className="text-[10px] text-black/40 uppercase tracking-widest font-bold">LinkedIn</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[10px] text-black/40 uppercase tracking-widest font-bold">Resume</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
