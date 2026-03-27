import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTransition } from '../components/Layout';

export function NotFound() {
  const { startTransition } = useTransition();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-9xl font-display font-bold text-black/5 mb-4">404</h1>
        <div className="relative -mt-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">PAGE NOT FOUND</h2>
          <p className="text-black/60 max-w-md mx-auto mb-12 uppercase tracking-widest text-sm font-medium">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <button
            onClick={() => startTransition('/')}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-sm font-bold hover:bg-orange-500 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            RETURN TO HOME
          </button>
        </div>
      </motion.div>
    </div>
  );
}

