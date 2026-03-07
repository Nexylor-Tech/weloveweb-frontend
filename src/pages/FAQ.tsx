import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of web design and development services, including UI/UX design, front-end and back-end development, e-commerce solutions, and website maintenance.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "The cost of a website varies depending on its complexity, features, and the time required to build it. We offer custom quotes based on your specific needs.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "A typical website project takes anywhere from 2 days to 12 weeks, depending on the scope and complexity. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer ongoing support and maintenance packages to ensure your website remains secure, up-to-date, and performing optimally.",
    },
    {
      question: "Can you help with SEO?",
      answer:
        "Absolutely. We incorporate SEO best practices into all our web design and development projects to help improve your search engine rankings.",
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
      <section className="w-full">
        <h1 className="text-[9vw] sm:text-[10vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase mb-16 whitespace-nowrap">
          FAQ
        </h1>
        <div className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Common Questions
            </h2>
          </div>
          <div className="w-full md:w-3/4 flex flex-col gap-8">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              Find answers to the most common questions about our services and
              processes.
            </h3>

            <div className="flex flex-col mt-16 border-t border-border">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center py-8 text-left focus:outline-none group"
                  >
                    <span className="text-2xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-2xl font-black group-hover:text-accent transition-colors">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-lg text-muted font-serif leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

