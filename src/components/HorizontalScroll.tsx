import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BringIdeasToLife from './BringIdeasToLife';
import { horizontalScrollProjects as projects } from '../constants/horizontalScroll';

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="horizontal-scroll-section" ref={targetRef} className="relative h-[400vh] bg-[#B2A4FF]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-6 md:px-24">

          {/* Intro Slide */}
          <BringIdeasToLife />

          {/* Service Cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className={`w-[85vw] md:w-[60vw] lg:w-[45vw] h-[80vh] flex-shrink-0 flex flex-col justify-center relative rounded-none p-8 md:p-16 ${project.color} shadow-2xl overflow-hidden group`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className={`text-4xl md:text-6xl lg:text-7xl font-heading font-black uppercase tracking-tighter mix-blend-multiply`}>
                    {project.title}
                  </h3>
                  <span className="text-2xl font-mono font-bold text-brand-dark opacity-50">{project.id}</span>
                </div>

                <div className="mt-auto max-w-md">
                  <p className="text-xl md:text-2xl font-sans text-brand-dark font-medium mb-8 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border-[40px] border-white/20 rounded-none" />
              <div className="absolute top-20 right-20 w-16 h-16 bg-white/30 rounded-none rotate-12" />
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}

