import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-32"
    >
      <section className="w-full">
        <h1 className="text-[9vw] sm:text-[10vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase mb-16 whitespace-nowrap">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Our Story
            </h2>
          </div>
          <div className="w-full md:w-3/4 flex flex-col gap-8">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              We started with a simple idea: to make the web a more beautiful
              and functional place.
            </h3>
            <p className="text-lg text-muted leading-relaxed font-serif">
              Founded in 2018, Weloveweb has grown from a small team of
              passionate designers into a full-service web agency. We believe
              that every brand has a unique story to tell, and our mission is to
              help them tell it through stunning digital experiences.
            </p>
            <p className="text-lg text-muted leading-relaxed font-serif">
              Our approach is collaborative and transparent. We work closely
              with our clients to understand their goals, challenges, and
              vision. This allows us to create custom solutions that not only
              look great but also deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full relative h-[60vh] bg-muted overflow-hidden rounded-[5px] group">
        <img
          src="https://picsum.photos/seed/teamwork/1920/1080?grayscale"
          alt="Teamwork"
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
          <p className="text-2xl md:text-4xl font-serif max-w-3xl text-fg drop-shadow-md">
            Meet the passionate individuals who make the magic happen.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-accent"></span> Our Values
          </h2>
        </div>
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black uppercase tracking-tighter">
              Creativity
            </h4>
            <p className="text-muted font-serif">
              We push boundaries and explore new ideas to deliver innovative
              solutions that stand out.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black uppercase tracking-tighter">
              Quality
            </h4>
            <p className="text-muted font-serif">
              We are committed to excellence in everything we do, from design to
              development.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black uppercase tracking-tighter">
              Collaboration
            </h4>
            <p className="text-muted font-serif">
              We believe in the power of teamwork and work closely with our
              clients to achieve their goals.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black uppercase tracking-tighter">
              Integrity
            </h4>
            <p className="text-muted font-serif">
              We are honest, transparent, and always act in the best interests
              of our clients.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

