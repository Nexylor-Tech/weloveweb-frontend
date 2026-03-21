import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Calendar } from "lucide-react";

export default function SMM() {
  const smmPlans = [
    {
      duration: '1 Month',
      price: '₹6k',
      popular: false,
      features: [
        '15 reels',
        '15 posts',
        'Custom edits',
        'Ad posts'
      ]
    },
    {
      duration: '6 Months',
      price: '₹5.5k',
      popular: true,
      features: [
        '15 reels',
        '15 posts',
        'Custom edits',
        'Ad posts'
      ]
    },
    {
      duration: '12 Months',
      price: '₹5k',
      popular: false,
      features: [
        '15 reels',
        '15 posts',
        'Custom edits',
        'Ad posts'
      ]
    }
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
          SMM
        </h1>
        <div className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Social Media
            </h2>
          </div>
          <div className="w-full md:w-3/4 flex flex-col gap-8">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              Grow your brand with our Social Media Management plans.
            </h3>
            <p className="text-lg text-muted leading-relaxed font-serif">
              Consistent, high-quality content designed to engage your audience and drive growth. Choose the commitment that fits your strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-16 border-t border-border pt-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Management
            </h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Monthly Plans
            </h3>
            <p className="text-lg text-muted font-serif mb-12">
              Our comprehensive SMM packages ensure your brand stays active and relevant across all platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {smmPlans.map((plan, idx) => (
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

          </div>
        </div>
      </section>

      <section className="w-full bg-fg text-bg p-12 md:p-24 flex flex-col items-center text-center gap-8 mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-4xl">
          Ready to elevate your socials?
        </h2>
        <p className="text-xl font-serif text-bg/80 max-w-2xl">
          Book a session with our team to explore how we can help elevate your digital presence.
        </p>
        <Link to="/contact" className="mt-8 px-8 py-4 bg-bg text-fg font-bold uppercase tracking-widest hover:bg-bg/90 transition-colors flex items-center gap-3 text-lg">
          Book a Session <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </motion.div>
  );
}
