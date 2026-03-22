import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe } from 'lucide-react';
import VerticalScrollingCards from './VerticalScrollingCards';
import { useContactModal } from './ContactModalProvider';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { openModal } = useContactModal();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const text = "weloveweb";

  // Scroll-based text for all devices
  const textValue = useTransform(scrollYProgress, (latest) => {
    // Types out faster (0.6) so it finishes before scrolling out of view
    const progress = Math.min(1, Math.max(0, latest / 0.6));
    const length = Math.round(progress * text.length);
    return text.substring(0, length);
  });

  return (
    <section ref={containerRef} className="relative h-[150vh] md:h-[200vh] bg-[#F8F9FA]">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden pt-0 md:pt-0 pb-0 md:pb-0">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center px-6 md:px-8 pt-16 md:pt-0 pb-2 md:pb-6">

          {/* Hero Content */}
          <div className="max-w-xl mb-6 md:mb-6 w-full">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3rem] lg:text-[5rem] font-sans font-medium tracking-tight text-black leading-[1.05] mb-6">
              Your business<br />
              success starts<br />
              <span className="flex items-center gap-4">
                here
                <span className="flex-1 h-[2px] bg-black mt-2"></span>
                <Globe className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black mt-2 shrink-0" strokeWidth={1.5} />
              </span>
            </h2>

            <p className="text-gray-500 text-base md:text-base lg:text-xl font-sans mb-8 leading-relaxed max-w-md">
              Grow your client base with
              <span className='text-lg font-heading font-bold tracking-tighter z-50 transition-colors text-brand-dark p-2'>
                weloveweb<span className="text-brand-purple">.</span>
              </span>and targeted strategies
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openModal}
                className="px-6 py-3 md:px-6 md:py-3 bg-gradient-to-b from-[#d8ff75] to-[#b8f531] border border-[#9acc2b] shadow-[0_4px_0_#8ab827,0_5px_10px_rgba(0,0,0,0.2),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_0_rgba(0,0,0,0.1)] active:shadow-[0_0px_0_#8ab827,inset_0_3px_5px_rgba(0,0,0,0.2)] active:translate-y-[4px] transition-all text-black font-medium rounded-none text-sm md:text-sm text-center"
              >
                Get in touch
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById('horizontal-scroll-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 md:px-6 md:py-3 bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-[0_4px_0_#cbd5e1,0_5px_10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,0,0,0.05)] active:shadow-[0_0px_0_#cbd5e1,inset_0_3px_5px_rgba(0,0,0,0.1)] active:translate-y-[4px] transition-all text-black font-medium rounded-none text-sm md:text-sm"
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Huge Text */}
          <div className="mt-4 md:mt-2 w-full overflow-hidden">
            <h1 className="text-[10vw] sm:text-[9vw] md:text-[5vw] lg:text-[4.5vw] xl:text-[5vw] font-heading font-black text-brand-purple leading-[0.8] tracking-tighter uppercase relative break-words text-center md:text-left">
              <span className="invisible">{text}</span>
              <motion.span className="absolute left-0 top-0 w-full text-center md:text-left">{textValue}</motion.span>
            </h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
          <VerticalScrollingCards />
        </div>
      </div>
    </section>
  );
}

