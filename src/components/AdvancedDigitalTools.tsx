import { motion } from 'framer-motion';
import { useContactModal } from './ContactModalProvider';

export default function AdvancedDigitalTools() {
  const { openModal } = useContactModal();

  return (
    <section className="relative py-32 lg:py-32 overflow-hidden lg:overflow-visible">

      {/* Mobile/Tablet Background Images (Hidden on Desktop) */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <div className="absolute top-0 left-0 w-full h-1/2">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team working" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Strategy meeting" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/80 z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8 uppercase text-white lg:text-brand-dark">
              Advanced<br />Digital Tools<br />
              <span className="text-[#d8ff75] lg:text-brand-purple">For Maximizing<br />Customer Expectations</span>
            </h2>
            <button
              onClick={openModal}
              className="px-8 py-4 bg-white text-brand-dark lg:bg-brand-dark lg:text-white font-heading font-bold rounded-none hover:bg-brand-purple hover:text-white transition-colors uppercase tracking-widest text-sm"
            >
              Get Started
            </button>
          </motion.div>

          <motion.div
            className="hidden lg:block relative h-[600px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-green rounded-none overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team working" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>
            <div className="absolute bottom-10 left-0 w-2/3 h-1/2 bg-brand-yellow rounded-none overflow-hidden shadow-2xl border-8 border-[#F8F9FA]">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Strategy meeting" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-brand-purple rounded-none" />
            <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-brand-pink rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

