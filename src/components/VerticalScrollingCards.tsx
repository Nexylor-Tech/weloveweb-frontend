import { motion } from 'framer-motion';
import { projects } from '../constants/projects';

export default function VerticalScrollingCards() {
  const scrollingProjects = [...projects, ...projects, ...projects];

  return (
    <div className="w-[calc(100%-4rem)] h-[calc(100%-4rem)] md:h-[70vh] md:w-[80%] m-8 md:m-8 lg:h-[85vh] lg:m-12 flex justify-center items-center relative border-2 border-black p-4 overflow-hidden">
      {/* Gradient Masks for smooth fade at top and bottom */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex flex-col gap-8 py-4 w-full max-w-md px-8"
        animate={{ y: ["0%", "-33.33%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity
        }}
      >
        {scrollingProjects.map((project, idx) => (
          <div key={`${project.id}-${idx}`} className="w-full aspect-video rounded-none overflow-hidden shrink-0">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

