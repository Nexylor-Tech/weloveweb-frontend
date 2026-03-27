import React, { useState, useEffect, createContext, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GetInTouchModal } from './GetInTouchModal';

const TransitionContext = createContext<{
  isTransitioning: boolean;
  startTransition: (to: string) => void;
}>({
  isTransitioning: false,
  startTransition: () => { },
});

export const useTransition = () => useContext(TransitionContext);

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const brandName = "weloveweb";

  useEffect(() => {
    // Initial load transition
    const timer = setTimeout(() => setIsTransitioning(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const startTransition = (to: string) => {
    if (to === location.pathname) return;
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(to);
      setTimeout(() => setIsTransitioning(false), 1500);
    }, 1000);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-500 selection:text-white">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />

        <main className={cn(location.pathname === '/' ? "pt-0" : "pt-20")}>
          {children}
        </main>

        <Footer />

        <GetInTouchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <AnimatePresence mode="wait">
          {isTransitioning && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
            >
              <motion.div className="text-4xl md:text-6xl font-bold tracking-tighter flex overflow-hidden">
                {brandName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: index * 0.08,
                      ease: "easeOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-1 h-10 md:h-14 bg-orange-500 ml-1"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TransitionContext.Provider>
  );
}

