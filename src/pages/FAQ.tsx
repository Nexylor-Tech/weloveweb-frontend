import { motion } from 'framer-motion';

export function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of marketing services including brand strategy, digital advertising, social media management, content creation, and web design."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on the scope. A brand strategy might take 4-6 weeks, while a full website redesign could take 8-12 weeks."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with brands globally, leveraging digital communication tools to ensure seamless collaboration regardless of location."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer both project-based pricing and monthly retainer options, tailored to the specific needs and goals of your business."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">FAQ</h1>
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black/10 pb-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{faq.question}</h3>
                <p className="text-black/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

