import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive suite of digital marketing services including SEO, Social Media Management, Content Creation, Paid Advertising (PPC), Email Marketing, and Brand Strategy.'
  },
  {
    question: 'How do you measure success?',
    answer: 'Success is measured through key performance indicators (KPIs) tailored to your specific goals. These may include website traffic, conversion rates, lead generation, social engagement, and return on ad spend (ROAS).'
  },
  {
    question: 'Do you work with startups?',
    answer: 'Absolutely! We love working with startups to help them establish their brand identity and build a strong foundation for growth in the digital landscape.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'The timeline varies depending on the service. SEO typically takes 3-6 months to show significant results, while paid advertising campaigns can generate traffic and leads almost immediately.'
  },
  {
    question: 'What makes weloveweb different?',
    answer: 'Our approach combines data-driven insights with creative excellence. We don\'t just execute campaigns; we partner with you to understand your business deeply and create strategies that deliver measurable impact.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-brand-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <motion.h1
          className="text-6xl md:text-[8rem] font-heading font-black leading-[0.85] tracking-tighter text-brand-yellow uppercase mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          FAQ
        </motion.h1>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-2xl font-heading font-bold tracking-tight pr-8">{faq.question}</span>
                <span className="text-brand-purple shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-lg text-gray-600 pb-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

