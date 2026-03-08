import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      text: "Working with this agency was a game changer for my parlour. They built a beautiful, easy-to-navigate website that perfectly captures our brand's aesthetic. Online bookings have doubled since the launch!",
      name: "Nilu Tiwari",
      role: "Salon Owner",
      avatar: "https://images.pexels.com/photos/3993293/pexels-photo-3993293.jpeg"
    },
    {
      id: 3,
      text: "As an event planner, I need a site that showcases my portfolio beautifully. The team delivered a stunning, highly responsive website that wows my clients before we even meet. Highly recommended!",
      name: "Chandan Sen",
      role: "Event Planner",
      avatar: "https://images.pexels.com/photos/1233720/pexels-photo-1233720.jpeg"
    },
    {
      id: 4,
      text: "Our restaurant's new website has significantly boosted our online visibility. The integrated reservation system and dynamic menu display are flawless. It's clear they understand exactly what local businesses need.",
      name: "Suchona Roy",
      role: "Restaurant Manager",
      avatar: "https://images.pexels.com/photos/2079443/pexels-photo-2079443.jpeg"
    }
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-32"
    >
      <div className="min-h-[calc(100vh-9rem)] flex flex-col justify-between pb-8 md:pb-12">
        <section className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-widest">
            <a
              href="https://instagram.com/we.loveweb"
              target="_blank"
              className="hover:text-accent transition-colors border-b border-fg w-max"
            >
              Instagram
            </a>
          </div>
          <div className="max-w-xl text-right flex flex-col items-end gap-8">
            <p className="text-xl md:text-2xl font-serif font-medium leading-relaxed">
              We are a web design agency that brings limitless creativity to every
              project. With a talented and experienced team, we are ready to turn
              your ideas into extraordinary websites.
            </p>
            <button
              onClick={() => {
                document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-fg rounded-[5px] px-6 py-2 text-sm font-medium uppercase tracking-widest hover:bg-fg hover:text-bg transition-colors flex items-center gap-2"
            >
              Scroll Down <span>↓</span>
            </button>
          </div>
        </section>

        <section className="w-full overflow-hidden">
          <h1 className="text-[9vw] min-[400px]:text-[6vw] sm:text-[8vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase whitespace-nowrap">
            Unlimited
            <br />
            Creativity With
            <br />
            Our Web Agency
          </h1>
        </section>
      </div>

      <section className="w-full relative h-[60vh] bg-muted overflow-hidden rounded-[5px] group">
        <img
          src="https://picsum.photos/id/4/1920/1080?grayscale"
          alt="Workspace"
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
          <p className="text-2xl md:text-4xl font-serif max-w-3xl text-fg drop-shadow-md">
            We are ready to turn your ideas into inspiring designs and help you
            achieve your creative vision. Discover unlimited creativity with us!
          </p>
        </div>
        <div className="absolute top-8 left-8 right-8 flex justify-between text-sm font-medium uppercase tracking-widest text-bg mix-blend-difference">
          <span>UI UX Design</span>
          <span>Web Dev</span>
          <span>Maintainance</span>
          <span>SEO</span>
        </div>
      </section>

      <section id="about-us" className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-accent"></span> About Us
          </h2>
        </div>
        <div className="w-full md:w-3/4 flex flex-col gap-16">
          <h3 className="text-3xl md:text-5xl font-serif leading-tight">
            Welcome to Weloveweb website design agency! We are a team of
            professionals committed to creating a great web experience for your
            business. With boundless creativity and deep technical expertise, we
            make your vision a reality in the digital world.
          </h3>
          <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-6xl font-black">10+</span>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                Projects
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-6xl font-black">15+</span>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                Clients
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-6xl font-black">2+</span>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                Years Exp
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-16 border-t border-border pt-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Service
            </h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              We provide a number of creative services to help you achieve
              success in the digital world.
            </h3>
          </div>
        </div>

        <div className="flex flex-col border-t border-border">
          {[
            {
              title: "UI UX Design",
              desc: "Crafting intuitive and beautiful user interfaces.",
              year: "2025",
            },
            {
              title: "Web Development",
              desc: "Building robust and scalable web applications.",
              year: "2025",
            },
            {
              title: "Web maintainance",
              desc: "Creating memorable brand identities.",
              year: "2025",
            },
            {
              title: "SEO Optimization",
              desc: "Improving your visibility on search engines.",
              year: "2025",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row justify-between items-center py-8 border-b border-border hover:bg-fg hover:text-bg transition-colors px-4 -mx-4 cursor-pointer"
            >
              <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                {service.title}
              </h4>
              <div className="flex flex-col items-end text-right mt-4 md:mt-0">
                <span className="text-sm font-medium uppercase tracking-widest">
                  {service.desc}
                </span>
                <span className="text-xs text-muted group-hover:text-bg/70">
                  {service.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-16 border-t border-border pt-16 pb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Testimonials
            </h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              Why users choose us
            </h3>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 -mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[85vw] sm:w-87.5 md:w-100 shrink-0 snap-center bg-muted/30 p-8 rounded-2xl flex flex-col gap-6 border border-border/50 shadow-sm whitespace-normal"
              >
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-muted/50 fill-muted/50 rotate-180" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed font-medium grow">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">{testimonial.name}</span>
                    <span className="text-xs text-muted">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

