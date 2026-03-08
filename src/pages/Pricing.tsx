import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Calendar, Code, ChevronDown } from "lucide-react";

export default function Pricing() {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [activeManagementTab, setActiveManagementTab] = useState<'frontend' | 'backend'>('frontend');

  const toggleDropdown = (id: string) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(id);
    }
  };

  const websitePackages = [
    {
      id: 'basic',
      title: 'Basic Website',
      description: 'For small business who are starting out',
      dropdownLabel: 'What you getting?',
      price: '₹10k',
      features: [
        '.com/.in domain + hosting included',
        '4 pages'
      ]
    },
    {
      id: 'premium',
      title: 'Premium Website',
      description: 'For medium businesses who wanna grow larger',
      dropdownLabel: 'What you getting?',
      price: '₹15k',
      features: [
        '.com/.in domain + hosting included',
        '8 pages',
        'Cool animations and background'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Website',
      description: 'If basic or premium is not suiting your need',
      dropdownLabel: 'What you getting',
      price: 'above ₹25k',
      features: [
        '.com/.in domain + hosting included',
        'Tell us about your requirements'
      ]
    }
  ];

  const backendPackages = [
    {
      id: 'basic-backend',
      title: 'Basic Backend',
      description: 'For simple data management and forms',
      dropdownLabel: 'What you getting?',
      price: '₹12k',
      features: [
        'Simple database setup',
        'Basic API endpoints',
        'Form submissions handling'
      ]
    },
    {
      id: 'premium-backend',
      title: 'Premium Backend',
      description: 'For dynamic applications requiring user auth',
      dropdownLabel: 'What you getting?',
      price: '₹20k',
      features: [
        'User authentication & authorization',
        'Advanced database modeling',
        'Third-party API integrations'
      ]
    },
    {
      id: 'custom-backend',
      title: 'Custom Backend',
      description: 'Complex architecture and scalable solutions',
      dropdownLabel: 'What you getting?',
      price: 'above ₹40k',
      features: [
        'Microservices architecture',
        'Real-time features (WebSockets)',
        'Advanced security & caching'
      ]
    }
  ];

  const managementPlans = {
    frontend: [
      {
        duration: '1 Month',
        price: '₹3.5k',
        popular: false,
        features: [
          'Unlimited frontend changes',
          'Priority support',
          'Performance monitoring'
        ]
      },
      {
        duration: '6 Months',
        price: '₹3k',
        popular: true,
        features: [
          'Unlimited frontend changes',
          'Priority support',
          'Performance monitoring',
          'Monthly strategy call'
        ]
      },
      {
        duration: '12 Months',
        price: '₹2.2k',
        popular: false,
        features: [
          'Unlimited frontend changes',
          'Priority support',
          'Performance monitoring',
          'Quarterly site audit'
        ]
      }
    ],
    backend: [
      {
        duration: '1 Month',
        price: '₹12k',
        popular: false,
        features: [
          'Server hosting included',
          'Unlimited backend changes',
          'Priority support',
          'Performance monitoring'
        ]
      },
      {
        duration: '6 Months',
        price: '₹10k',
        popular: true,
        features: [
          'Server hosting inlcuded',
          'Unlimited backend changes',
          'Priority support',
          'Performance monitoring',
          'Monthly strategy call'
        ]
      },
      {
        duration: '12 Months',
        price: '₹9k',
        popular: false,
        features: [
          'Server hosting included',
          'Unlimited backend changes',
          'Priority support',
          'Performance monitoring',
          'Quarterly system audit'
        ]
      }
    ]
  };

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
          Pricing
        </h1>
        <div className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Investment
            </h2>
          </div>
          <div className="w-full md:w-3/4 flex flex-col gap-8">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              Transparent pricing for premium web design and management services.
            </h3>
            <p className="text-lg text-muted leading-relaxed font-serif">
              Choose the plan that best fits your business needs. We offer flexible management options and clear pricing for one-off services.
            </p>
          </div>
        </div>
      </section>

      {/* Website Creation Section */}
      <section className="flex flex-col gap-16 border-t border-border pt-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Creation
            </h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Creating a Website
            </h3>
            <p className="text-lg text-muted font-serif mb-12">
              Our comprehensive website creation package includes everything you need to launch a premium digital presence.
            </p>

            {/* service charge */}
            <div className="flex flex-col border-t border-border">
              {websitePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group flex flex-col py-8 border-b border-border hover:bg-fg hover:text-bg transition-colors px-4 -mx-4 cursor-pointer"
                  onClick={() => toggleDropdown(pkg.id)}
                >
                  <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                      <div className="flex items-center gap-3">
                        <Code className="w-8 h-8" />
                        <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                          {pkg.title}
                        </h4>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-sm font-medium uppercase tracking-widest text-muted group-hover:text-bg/70">
                          {pkg.description}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-muted group-hover:text-bg/70">
                          {pkg.dropdownLabel} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdownId === pkg.id ? 'rotate-180' : ''}`} />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-right mt-4 md:mt-0 w-full md:w-auto">
                      <span className="text-2xl md:text-3xl font-black tracking-tighter">
                        {pkg.price}
                      </span>
                      <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 mt-2 group-hover:text-bg">
                        Book a session <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {openDropdownId === pkg.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden w-full"
                      >
                        <div className="pt-6 mt-6 border-t border-border/20">
                          <ul className="flex flex-col gap-3 text-muted group-hover:text-bg/80 pl-2">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Backend Service Section */}
      <section className="flex flex-col gap-16 border-t border-border pt-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Systems
            </h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Backend Service
            </h3>
            <p className="text-lg text-muted font-serif mb-12">
              Robust, secure, and scalable server-side solutions to power your applications and manage your data.
            </p>

            {/* backend service charge */}
            <div className="flex flex-col border-t border-border">
              {backendPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group flex flex-col py-8 border-b border-border hover:bg-fg hover:text-bg transition-colors px-4 -mx-4 cursor-pointer"
                  onClick={() => toggleDropdown(pkg.id)}
                >
                  <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                      <div className="flex items-center gap-3">
                        <Code className="w-8 h-8" />
                        <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                          {pkg.title}
                        </h4>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-sm font-medium uppercase tracking-widest text-muted group-hover:text-bg/70">
                          {pkg.description}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-muted group-hover:text-bg/70">
                          {pkg.dropdownLabel} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdownId === pkg.id ? 'rotate-180' : ''}`} />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-right mt-4 md:mt-0 w-full md:w-auto">
                      <span className="text-2xl md:text-3xl font-black tracking-tighter">
                        {pkg.price}
                      </span>
                      <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 mt-2 group-hover:text-bg">
                        Book a session <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {openDropdownId === pkg.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden w-full"
                      >
                        <div className="pt-6 mt-6 border-t border-border/20">
                          <ul className="flex flex-col gap-3 text-muted group-hover:text-bg/80 pl-2">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Management Section */}
      <section className="flex flex-col gap-16 border-t border-border pt-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Management
            </h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Additional Management
            </h3>
            <p className="text-lg text-muted font-serif mb-8">
              Keep your website fresh and up-to-date with our flexible management plans or one-off separate changes.
            </p>

            <div className="flex gap-4 mb-12 border-b border-border pb-4">
              <button
                onClick={() => setActiveManagementTab('frontend')}
                className={`text-xl font-bold uppercase tracking-widest transition-colors ${activeManagementTab === 'frontend' ? 'text-fg border-b-2 border-fg pb-1' : 'text-muted hover:text-fg'}`}
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveManagementTab('backend')}
                className={`text-xl font-bold uppercase tracking-widest transition-colors ${activeManagementTab === 'backend' ? 'text-fg border-b-2 border-fg pb-1' : 'text-muted hover:text-fg'}`}
              >
                Backend
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeManagementTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {managementPlans[activeManagementTab].map((plan, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${plan.popular ? 'border-2 border-fg p-8 bg-fg text-bg relative transform md:-translate-y-4 shadow-xl' : 'border border-border p-8 hover:bg-muted/30 transition-colors'}`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                          Most Popular
                        </div>
                      )}
                      <div className="flex items-center gap-3 mb-6">
                        <Calendar className={`w-6 h-6 ${plan.popular ? 'text-bg' : 'text-accent'}`} />
                        <h4 className="text-xl font-bold uppercase tracking-widest">{plan.duration}</h4>
                      </div>
                      <div className={`flex items-baseline gap-2 mb-8 border-b ${plan.popular ? 'border-bg/20' : 'border-border'} pb-8`}>
                        <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                        <span className={`${plan.popular ? 'text-bg/70' : 'text-muted'} font-medium uppercase tracking-widest text-sm`}>/mo</span>
                      </div>
                      <ul className={`flex flex-col gap-4 ${plan.popular ? '-grow' : 'grow'}`}>
                        {plan.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-bg' : 'text-accent'}`} />
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col border-t border-border">
                  {/* Separate Changes */}
                  <div className="group flex flex-col md:flex-row justify-between items-center py-8 border-b border-border hover:bg-fg hover:text-bg transition-colors px-4 -mx-4 cursor-pointer">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                        Separate {activeManagementTab === 'frontend' ? 'Frontend' : 'Backend'} Changes
                      </h4>
                      <span className="text-sm font-medium uppercase tracking-widest text-muted group-hover:text-bg/70">
                        Per change request
                      </span>
                    </div>
                    <div className="flex flex-col items-end text-right mt-4 md:mt-0">
                      <span className="text-2xl md:text-3xl font-black tracking-tighter">
                        ₹500 - ₹2k
                      </span>
                      <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 mt-2 group-hover:text-bg">
                        Talk to us <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>

      <section className="w-full bg-fg text-bg p-12 md:p-24 flex flex-col items-center text-center gap-8 mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-4xl">
          Ready to discuss your requirements?
        </h2>
        <p className="text-xl font-serif text-bg/80 max-w-2xl">
          Book a session with our team to explore how we can help elevate your digital presence.
        </p>
        <button className="mt-8 px-8 py-4 bg-bg text-fg font-bold uppercase tracking-widest hover:bg-bg/90 transition-colors flex items-center gap-3 text-lg">
          Book a Session <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </motion.div>
  );
}

