import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../constants/projects';

export default function Projects() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-brand-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.h1
          className="text-6xl md:text-[8rem] font-heading font-black leading-[0.85] tracking-tighter text-brand-green uppercase mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-none shadow-xl cursor-pointer block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 ${project.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10`}></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                <p className="text-sm font-heading font-bold uppercase tracking-widest mb-2 opacity-80">{project.client}</p>
                <h3 className="text-3xl font-heading font-black uppercase tracking-tighter">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

