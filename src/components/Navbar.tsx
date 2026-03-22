import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useContactModal } from './ContactModalProvider';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 ease-in-out flex items-center h-24',
        isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="w-full flex items-center justify-center lg:justify-between px-4 lg:px-6 relative">
        <Link to="/" className="text-2xl font-heading font-bold tracking-tighter z-50 transition-colors text-brand-dark">
          weloveweb<span className="text-brand-purple">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-heading font-medium tracking-wide uppercase transition-colors hover:text-brand-purple",
                location.pathname === link.path ? "text-brand-purple" : "text-brand-dark"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={openModal}
            className="px-6 py-2.5 font-heading text-sm font-medium rounded-none bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-900 shadow-[0_4px_0_#111827,0_5px_10px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.4)] active:shadow-[0_0px_0_#111827,inset_0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-[4px] transition-all text-white"
          >
            Get in touch
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 transition-colors text-brand-dark absolute right-4 lg:right-6"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <motion.div
          className={cn(
            "fixed top-0 left-0 w-full h-[100dvh] bg-white z-40 flex flex-col items-center justify-start pt-32 pb-8 overflow-y-auto gap-6 lg:hidden",
            isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
          initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            clipPath: isMobileMenuOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)'
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ delay: isMobileMenuOpen ? 0.1 * i : 0 }}
            >
              <Link
                to={link.path}
                className={cn(
                  "text-3xl font-heading font-bold tracking-tight",
                  location.pathname === link.path ? "text-brand-purple" : "text-brand-dark"
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
            transition={{ delay: isMobileMenuOpen ? 0.1 * navLinks.length : 0 }}
          >
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="px-8 py-4 bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-900 shadow-[0_4px_0_#111827,0_5px_10px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.4)] active:shadow-[0_0px_0_#111827,inset_0_3px_5px_rgba(0,0,0,0.5)] active:translate-y-[4px] transition-all text-white font-heading text-lg font-medium rounded-none"
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}

