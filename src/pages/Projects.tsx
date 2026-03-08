import { motion } from 'framer-motion';
import eventmanagementImg from '../assets/eventmanagement.png';
import confectionaryImg from '../assets/confectionary.png';
import restaurantImg from '../assets/restaurant.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Roy's Fine Dining",
      category: 'LANDING PAGE',
      image: restaurantImg,
      link: 'https://roysfinedining.pages.dev/',
    },
    {
      id: 2,
      title: 'Bash & Bloom Event Organiser',
      category: 'Event Management Landing Page',
      image: eventmanagementImg,
      link: 'https://bashandbloomeventorganisers.pages.dev',
    },
    {
      id: 3,
      title: 'CONFECTIONERY',
      category: 'DASHBOARD',
      image: confectionaryImg,
      link: 'https://ritasovendemopage.pages.dev',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-32"
    >
      <section className="w-full flex flex-col gap-8">
        <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-accent"></span> PORTFOLIO
        </h2>
        <h1 className="text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5rem] leading-[1.1] font-black tracking-tighter uppercase max-w-6xl">
          WE AT WELOVEWEB WEBSITE DESIGN AGENCY HAVE A DEDICATED TEAM OF EXPERTS.
        </h1>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-6 group cursor-pointer">
            <div className="w-full aspect-4/3 border border-border overflow-hidden bg-muted/30 p-4 md:p-8 lg:p-12 flex items-center justify-center transition-colors group-hover:bg-muted/50">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-full relative overflow-hidden border border-border/20 shadow-sm rounded-[5px] block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </a>
              </h3>
              <p className="text-sm md:text-base font-medium text-muted uppercase tracking-widest">{project.category}</p>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
}

