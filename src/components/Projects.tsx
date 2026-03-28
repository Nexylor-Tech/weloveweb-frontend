import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useId } from 'react';
import { projects } from '../lib/projectList';
import { useTransition } from './Layout';

export function Projects({ showAll = false }: { showAll?: boolean } = {}) {
  const componentId = useId();
  const { startTransition } = useTransition();
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-[10px] md:text-sm">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Our Projects
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
              <span className="block">Selected Projects from</span>
              <span className="block">the <span className="text-orange-500">weloveweb</span> team</span>
            </h2>
          </div>

          <div className="lg:w-1/3 space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl text-black/40 leading-relaxed">
              From bold branding to immersive web experiences, we craft what connects. Our work is a testament to our passion for design and technology.
            </p>
            {!showAll && (
              <button
                onClick={() => startTransition('/projects')}
                className="w-full md:w-auto bg-orange-500 text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-3 hover:bg-black transition-all duration-300"
              >
                View All Work
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={`${componentId}-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-sm overflow-hidden border border-black/10 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-end gap-4">
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-[10px] md:text-sm text-orange-500 font-bold uppercase tracking-widest">{project.category}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1.5 md:pt-2">
                      {project.tags.map((tag) => (
                        <span key={`${componentId}-${project.id}-${tag}`} className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 px-1.5 md:px-2 py-0.5 md:py-1 border border-white/10 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all shrink-0">
                    <a href={project.link} target='_blank'>
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

