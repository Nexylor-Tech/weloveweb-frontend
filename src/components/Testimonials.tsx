import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Founder, RetailHub',
    quote: 'Their SEO strategies completely transformed our online visibility. We saw a 3x increase in organic traffic within months.',
    color: 'bg-green-200'
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Director, EduTech India',
    quote: 'The web design team delivered a stunning, user-friendly platform that perfectly captures our brand identity.',
    color: 'bg-lime-200'
  },
  {
    name: 'Rohan Gupta',
    role: 'CEO, NextGen Solutions',
    quote: 'Incredible ROI on our social media campaigns. They truly understand how to engage the target audience.',
    color: 'bg-purple-300'
  },
  {
    name: 'Neha Desai',
    role: 'Owner, Blossom Boutique',
    quote: 'Our e-commerce sales have skyrocketed since they took over our digital marketing and performance tuning.',
    color: 'bg-blue-200'
  },
  {
    name: 'Vikram Singh',
    role: 'Lead Strategist, FinServe',
    quote: 'Professional, data-driven, and highly responsive. The best digital agency partner we have worked with.',
    color: 'bg-yellow-200'
  },
  {
    name: 'Ananya Reddy',
    role: 'Creative Head, Artistry Co.',
    quote: 'They brought our vision to life with brilliant web development and an unmatched attention to detail.',
    color: 'bg-pink-200'
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-4">
            What Others Say!?
          </h2>
          <div className="w-32 h-2 bg-purple-600 mx-auto rounded-full" />
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden">
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-8">
            {testimonials.map((t, i) => (
              <div key={i} className={`flex-shrink-0 w-[300px] p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${t.color} snap-center`}>
                <Quote className="mb-4" size={32} />
                <p className="font-sans mb-6 text-lg">{t.quote}</p>
                <div className="font-heading font-bold uppercase tracking-widest text-sm">
                  {t.name}
                  <br />
                  <span className="opacity-70">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => scroll('left')} className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <motion.div
          className="hidden lg:block relative h-[600px] w-full max-w-6xl mx-auto"
          initial="scrambled"
          whileHover="arranged"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`absolute p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${t.color} w-[300px]`}
              variants={{
                scrambled: {
                  rotate: (i - 2.5) * 5,
                  top: 0,
                  left: "50%",
                  x: `calc(-50% + ${(i - 2.5) * 20}px)`,
                  zIndex: i
                },
                arranged: {
                  rotate: 0,
                  scale: 0.8,
                  top: Math.floor(i / 3) * 280,
                  left: "50%",
                  x: `calc(-50% - 260px + ${(i % 3) * 260}px)`,
                  zIndex: 1
                }
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Quote className="mb-4" size={32} />
              <p className="font-sans mb-6 text-lg">{t.quote}</p>
              <div className="font-heading font-bold uppercase tracking-widest text-sm">
                {t.name}
                <br />
                <span className="opacity-70">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
