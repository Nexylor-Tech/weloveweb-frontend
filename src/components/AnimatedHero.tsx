import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Zap } from 'lucide-react';

export default function AnimatedHero() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ${isToggled ? 'bg-[#d0f0c0]' : 'bg-[#F8F9FA]'}`}>

      {/* Floating Shapes - Always visible but change position/color */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-4 ${isToggled ? 'border-white' : 'border-[#c4ff47]'} opacity-50`}
        animate={{
          y: isToggled ? [0, 20, 0] : [0, -20, 0],
          x: isToggled ? [0, 50, 0] : [0, 0, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute bottom-1/4 left-1/3 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[69px] ${isToggled ? 'border-b-[#8a2be2]' : 'border-b-[#b0a8e6]'} -rotate-12`}
        animate={{
          y: isToggled ? [0, -30, 0] : [0, 20, 0],
          rotate: isToggled ? [-12, 45, -12] : [-12, 0, -12]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-1/3 right-1/4 ${isToggled ? 'text-white' : 'text-[#8a2be2]'}`}
        animate={{
          y: isToggled ? [0, 20, 0] : [0, -15, 0],
          scale: isToggled ? [1, 1.2, 1] : [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap size={64} fill="currentColor" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center h-full">
        <AnimatePresence mode="wait">
          {!isToggled ? (
            <motion.div
              key="state1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-[12vw] md:text-[8rem] leading-[0.85] font-black tracking-tighter uppercase text-[#b0a8e6]">
                Your Wishes<br />Our Solutions
              </h1>
            </motion.div>
          ) : (
            <motion.div
              key="state2"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between w-full gap-12"
            >
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl lg:text-[5rem] leading-[0.9] font-black tracking-tighter uppercase text-[#1a1a2e]">
                  Advanced<br />Digital Tools<br />
                  <span className="text-[#8a2be2]">For Maximizing<br />Customer Expectations</span>
                </h1>
              </div>

              <div className="flex-1 relative h-[400px] w-full">
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-xl z-20"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-10 w-72 h-48 rounded-2xl overflow-hidden border-8 border-white shadow-xl z-10"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Strategy" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Toggle Button */}
      <motion.button
        onClick={() => setIsToggled(!isToggled)}
        className="absolute left-[10%] md:left-1/4 bottom-1/4 md:bottom-1/3 w-20 h-20 bg-[#c4ff47] rounded-full flex items-center justify-center hover:scale-110 transition-transform z-30 shadow-[0_0_30px_rgba(196,255,71,0.5)]"
        animate={{ rotate: isToggled ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Play fill="black" size={24} className={isToggled ? "mr-1 rotate-180" : "ml-1"} />
      </motion.button>
    </div>
  );
}

