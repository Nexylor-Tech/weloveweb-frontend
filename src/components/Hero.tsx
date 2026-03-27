import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTransition } from './Layout';

export function Hero() {
  const { startTransition } = useTransition();

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
      {/* Background with technical grid pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-30%) scale(2.5)',
            transformOrigin: 'center top'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050505_100%)]" />
      </div>

      <div className="max-w-[100vw] mx-auto w-full relative z-10">
        <div className="relative mb-8 md:mb-12">
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] font-display font-normal tracking-[-0.02em] leading-[0.9] text-white uppercase whitespace-nowrap text-center w-full"
          >
            weloveweb
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 text-white/90 uppercase font-bold tracking-widest text-[10px] md:text-xs leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl space-y-1"
          >
            <p>
              WE ARE A <span className="text-white">[MARKETING AGENCY]</span> THAT HELPS YOU
            </p>
            <p>
              <span className="text-white">[STAND OUT]</span> BY CRAFTING <span className="text-white">[UNIQUE BRAND EXPERIENCES]</span>
            </p>
            <p>
              AND CONNECTING WITH YOUR <span className="text-white">[TARGET AUDIENCE]</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-right"
          >
            <p className="text-white">[Durgapur, INDIA]</p>
          </motion.div>
        </div>

        {/* Stats and CTA */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-white/10 pt-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
              <img src="https://picsum.photos/seed/founder/200/200" alt="Founder" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="font-bold text-white"><a href='https://nilanjan.site' target='_blank'>Nilanjan</a></h3>
              <p className="text-xs text-white/40 uppercase tracking-widest">Founder weloveweb</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => startTransition('/get-a-quote')}
              className="bg-orange-500 text-white px-10 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-white hover:text-black transition-all duration-500 group shadow-2xl shadow-orange-500/20"
            >
              START A PROJECT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex justify-end gap-8 text-white">
            <div className="text-right">
              <p className="text-2xl font-bold">100<span className="text-orange-500">+</span></p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Projects</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">10<span className="text-orange-500">+</span></p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
