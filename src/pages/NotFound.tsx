import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-brand-dark flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-8xl md:text-[10rem] font-heading font-black leading-[0.85] tracking-tighter text-brand-green uppercase mb-6">
            404
          </h1>
          <p className="text-2xl md:text-3xl font-sans font-medium text-brand-dark mb-12">
            Oops! This page went missing.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white font-heading font-bold rounded-none hover:bg-brand-purple hover:text-brand-dark transition-colors uppercase tracking-widest text-sm"
          >
            Go back Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
