import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen flex flex-col">
      <Navbar />
      <main className="relative flex-grow flex items-center justify-center py-32 px-6 md:px-12 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
            alt="Our Team Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-[8rem] font-heading font-black leading-[0.85] tracking-tighter text-[#d8ff75] uppercase mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-4xl font-sans leading-relaxed text-white font-medium">
              We are a digital marketing agency focused on creating beautiful, functional, and impactful digital experiences. Our team of experts is dedicated to helping brands grow and succeed in the digital world.
            </p>
            <p className="text-lg md:text-2xl font-sans text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Founded with a passion for innovation and creativity, weloveweb combines data-driven strategies with stunning design to deliver results that matter. We believe in the power of digital to transform businesses and connect with audiences on a deeper level.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

