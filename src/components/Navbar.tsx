import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { useTransition } from './Layout';
import logo from '../assets/weloveweb.png';

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const { startTransition } = useTransition();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/10 h-16"
          : isHome
            ? "bg-transparent h-20"
            : "bg-white/80 backdrop-blur-md border-b border-black/10 h-20"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-8">
              <button
                onClick={() => startTransition('/')}
                className="flex items-center gap-2 group"
              >
                <img 
                  src={logo} 
                  alt="weloveweb logo" 
                  className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-110" 
                />
                <span className={cn(
                  "text-xl font-bold tracking-tighter transition-colors hidden md:block",
                  scrolled || !isHome ? "text-black" : "text-white"
                )}>weloveweb</span>
              </button>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => startTransition(link.path)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-orange-500",
                      location.pathname === link.path
                        ? "text-orange-500"
                        : (scrolled || !isHome ? "text-black/60" : "text-white/90")
                    )}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={onOpenModal}
                className={cn(
                  "px-6 py-2.5 rounded-sm text-sm font-medium flex items-center gap-2 transition-all duration-300",
                  scrolled || !isHome
                    ? "bg-black text-white hover:bg-orange-500"
                    : "bg-white text-black hover:bg-orange-500 hover:text-white"
                )}
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  "p-2 rounded-full transition-colors relative z-[100]",
                  scrolled || !isHome || isMenuOpen ? "hover:bg-black/5 text-black" : "hover:bg-white/10 text-white"
                )}
              >
                {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-[80] flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    startTransition(link.path);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "text-4xl font-bold tracking-tighter transition-colors",
                    location.pathname === link.path ? "text-orange-500" : "text-white"
                  )}
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => {
                  onOpenModal();
                  setIsMenuOpen(false);
                }}
                className="mt-8 bg-orange-500 text-white px-10 py-4 rounded-sm text-xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
              >
                Get in touch
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="p-8 border-t border-white/10 text-center">
              <p className="text-sm text-white/40 font-medium tracking-widest uppercase">weloveweb © {new Date().getFullYear()}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

