import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aarav Patel",
    role: "CEO, TechFlow",
    content: "WeLoveWeb completely transformed our digital presence. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Priya Sharma",
    role: "Founder, Artisan Collective",
    content: "Working with them was a game-changer. Our website now converts effortlessly.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul Verma",
    role: "Marketing Director, Lumina",
    content: "Their attention to detail and creative vision is unmatched. Brilliant work!",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Ananya Desai",
    role: "Product Lead, Nexus",
    content: "Incredible attention to detail. They delivered a seamless user journey.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Rohan Kapoor",
    role: "Creative Director, Vogue",
    content: "A masterclass in modern design. They pushed our brand boundaries beautifully.",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Kavita Reddy",
    role: "CTO, DataScale",
    content: "Technical excellence meets creative brilliance. Exceptional performance.",
    image: "https://randomuser.me/api/portraits/women/79.jpg"
  },
  {
    name: "Vikram Singh",
    role: "Founder, EcoStyle",
    content: "Our conversion rates have doubled since the launch of the new identity.",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Neha Gupta",
    role: "Manager, GlobalLogistics",
    content: "Professional, efficient, and visionary. Simplified our complex interface.",
    image: "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    name: "Aditya Joshi",
    role: "Head of Growth, Spark",
    content: "The best agency we've ever worked with. True partners in our growth.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !gridRef.current || !contentRef.current) return;

    const grid = gridRef.current;
    const cards = grid.querySelectorAll('.testimonial-card');
    const centerCard = cards[4]; // Middle card

    // Set initial state
    gsap.set(grid, { scale: 0.8 });
    gsap.set(contentRef.current, { y: 100, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // Longer scroll for smoother transition
        pin: true,
        scrub: 1,
      }
    });

    tl.to(grid, {
      scale: 1,
      duration: 1,
      ease: "none"
    })
      .to(cards, {
        opacity: (i) => i === 4 ? 1 : 0, // Fade out all but center
        scale: (i) => i === 4 ? 1.2 : 0.8,
        duration: 1,
        stagger: {
          amount: 0.5,
          from: "center"
        }
      })
      .to(grid, {
        scale: 15, // Massive zoom through
        duration: 3,
        ease: "power2.in"
      }, "-=0.5")
      .to(centerCard, {
        opacity: 0,
        duration: 0.5,
      }, "-=1")
      .to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      }, "-=1.5");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      {/* The Grid Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={gridRef}
          className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8 w-[100vw] h-[100vh] md:w-[90vw] md:h-[90vh] lg:w-[100vw] lg:h-[100vh] p-4 md:p-8"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`testimonial-card relative group rounded-lg md:rounded-xl overflow-hidden bg-[#111] border border-white/5 flex flex-col items-center justify-center text-center p-4 md:p-8 lg:p-12 ${i === 4 ? 'z-20 border-orange-500/50 shadow-[0_0_50px_rgba(255,99,33,0.2)]' : 'z-0'}`}
            >
              {/* Background Image for the card */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                <img
                  src={`https://picsum.photos/seed/testi-${i}/600/600`}
                  alt=""
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/70" />
              </div>

              <div className="relative z-10 px-2">
                {i === 4 && (
                  <div className="mb-3 md:mb-6 inline-block p-2 md:p-3 rounded-full bg-orange-500/10 border border-orange-500/20">
                    <Quote className="w-5 h-5 md:w-8 md:h-8 text-orange-500" />
                  </div>
                )}
                <p className={`text-white font-medium leading-tight mb-4 md:mb-6 ${i === 4 ? 'text-sm md:text-xl lg:text-2xl' : 'text-[10px] md:text-xs lg:text-sm opacity-50'}`}>
                  "{testimonial.content.split(' ').slice(0, i === 4 ? 15 : 8).join(' ')}..."
                </p>
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`rounded-full object-cover border border-white/10 ${i === 4 ? 'w-10 h-10 md:w-16 md:h-16' : 'w-6 h-6 md:w-10 md:h-10'}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="leading-tight">
                    <h4 className={`font-bold text-white ${i === 4 ? 'text-xs md:text-lg' : 'text-[9px] md:text-xs'}`}>{testimonial.name}</h4>
                    <p className="text-[8px] md:text-[10px] text-orange-500 uppercase tracking-widest font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Reveal Content Layer */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none"
      >
        <div className="max-w-4xl text-center">
          <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8">
            Built on <span className="text-orange-500">Trust</span>.
          </h3>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12">
            We don't just deliver projects; we build lasting partnerships. Our clients' success is the ultimate metric of our creative vision and technical precision.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">98%</div>
              <div className="text-xs uppercase tracking-widest text-orange-500 font-bold">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">100+</div>
              <div className="text-xs uppercase tracking-widest text-orange-500 font-bold">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

