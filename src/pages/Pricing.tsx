import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContactModal } from '../components/ContactModalProvider';

const webPlans = [
  {
    name: 'Basic',
    price: '₹25,000',
    period: '/project',
    description: 'Perfect for small businesses looking to establish a digital presence.',
    features: [
      'Domain + Hosting included',
      'Custom website with 4 pages',
      'Nice animations',
      'SEO',
      '2 weeks priority support',
      'Basic Backend Server with forms and authentication, low capacity server'
    ],
    color: 'bg-brand-pink text-brand-dark',
    buttonColor: 'bg-brand-dark text-white hover:bg-white hover:text-brand-dark'
  },
  {
    name: 'Premium',
    price: '₹50,000',
    period: '/project',
    description: 'Ideal for growing companies needing comprehensive marketing strategies.',
    features: [
      'Domain + Hosting included',
      'Custom website with 8 pages',
      'Better animation with motion',
      'SEO and weekly reports',
      '1 month priority support',
      'Advanced backend with auth and authorization, database, high capacity server'
    ],
    color: 'bg-brand-dark text-white',
    buttonColor: 'bg-brand-purple text-brand-dark hover:bg-white hover:text-brand-dark',
    popular: true
  },
  {
    name: 'Custom',
    price: 'Custom',
    period: '',
    description: 'If the basic and premium didn\'t meet your requirements contact us.',
    features: [
      'Tailored solutions',
      'Complex functionality',
      'Custom integrations',
      'Dedicated support'
    ],
    color: 'bg-brand-yellow text-brand-dark',
    buttonColor: 'bg-brand-dark text-white hover:bg-white hover:text-brand-dark'
  }
];

const socialMediaPlans = [
  {
    name: 'Standard',
    price: '₹5,000',
    period: '/month',
    description: 'Essential social media management.',
    features: [
      '5 Reels',
      '10 Posts',
      'User engaging content',
      'SEO based keywords'
    ],
    color: 'bg-brand-purple text-brand-dark',
    buttonColor: 'bg-brand-dark text-white hover:bg-white hover:text-brand-dark'
  },
  {
    name: 'Advanced',
    price: '₹8,000',
    period: '/month',
    description: 'Enhanced social media management for better engagement.',
    features: [
      '10 Reels',
      '15 Posts',
      'Custom edited reels',
      'SEO based keywords',
      'Weekly performance reports'
    ],
    color: 'bg-brand-dark text-white',
    buttonColor: 'bg-brand-purple text-brand-dark hover:bg-white hover:text-brand-dark'
  }
];

export default function Pricing() {
  const { openModal } = useContactModal();

  const renderPlan = (plan: any, index: number) => (
    <motion.div
      key={plan.name}
      className={`relative rounded-none p-8 shadow-xl flex flex-col ${plan.color}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-brand-dark font-heading font-bold uppercase tracking-widest text-xs px-4 py-1 rounded-none">
          Most Popular
        </div>
      )}

      <h3 className="text-3xl font-heading font-black uppercase tracking-tighter mb-2">{plan.name}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl font-heading font-black">{plan.price}</span>
        <span className="text-lg font-sans opacity-80">{plan.period}</span>
      </div>
      <p className="font-sans text-lg opacity-90 mb-8">{plan.description}</p>

      <ul className="space-y-4 mb-12 flex-grow">
        {plan.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-3 font-sans">
            <Check className="shrink-0 mt-1" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={openModal}
        className={`w-full py-4 font-heading font-bold uppercase tracking-widest text-sm rounded-none transition-colors ${plan.buttonColor}`}
      >
        Contact Us
      </button>
    </motion.div>
  );

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-brand-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.h1
          className="text-6xl md:text-[8rem] font-heading font-black leading-[0.85] tracking-tighter text-brand-pink uppercase mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Pricing
        </motion.h1>

        <h2 className="text-4xl font-heading font-black uppercase tracking-tighter mb-12 text-center">Web Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {webPlans.map(renderPlan)}
        </div>

        <h2 className="text-4xl font-heading font-black uppercase tracking-tighter mb-12 text-center">Social Media Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialMediaPlans.map(renderPlan)}
        </div>
      </main>
      <Footer />
    </div>
  );
}

