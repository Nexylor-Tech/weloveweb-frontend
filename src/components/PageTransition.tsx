import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const layers = [
  { color: '#e8d5d5', z: 105 },
  { color: '#8abeb3', z: 104 },
  { color: '#e0f0e3', z: 103 },
  { color: '#b0a8e6', z: 102 },
  { color: '#ffffff', z: 101 },
];

export default function PageTransition() {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-full h-[120vh]"
              style={{ zIndex: layer.z }}
              initial={{ y: "0%" }}
              animate={{ y: "-100%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: i * 0.15 }}
            >
              <div className="w-full h-full relative" style={{ backgroundColor: layer.color }}>
                <svg className="absolute top-full left-0 w-full h-[15vh] -mt-[2px]" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,0 C25,100 75,100 100,0 L100,0 L0,0 Z" fill={layer.color} />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

