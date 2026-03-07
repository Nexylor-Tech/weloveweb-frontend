import { motion } from "framer-motion";
import { Check, ArrowRight, Calendar, Globe, Code } from "lucide-react";

export default function Pricing() {
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

            <div className="flex flex-col border-t border-border">
              {/* Service Charge */}
              <div className="group flex flex-col md:flex-row justify-between items-center py-8 border-b border-border hover:bg-fg hover:text-bg transition-colors px-4 -mx-4 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Code className="w-8 h-8" />
                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                      Service Cost
                    </h4>
                  </div>
                  <span className="text-sm font-medium uppercase tracking-widest text-muted group-hover:text-bg/70">
                    Base project fee for design & development
                  </span>
                </div>
                <div className="flex flex-col items-end text-right mt-4 md:mt-0">
                  <span className="text-2xl md:text-3xl font-black tracking-tighter">
                    ₹6k
                  </span>
                </div>
              </div>

              {/* Domain + Hosting */}
              <div className="group flex flex-col md:flex-row justify-between items-center py-8 border-b border-border hover:bg-fg hover:text-bg transition-colors px-4 -mx-4 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8" />
                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                      Domain + Hosting
                    </h4>
                  </div>
                  <span className="text-sm font-medium uppercase tracking-widest text-muted group-hover:text-bg/70">
                    Setup & configuration
                  </span>
                </div>
                <div className="flex flex-col items-end text-right mt-4 md:mt-0">
                  <span className="text-xl font-bold uppercase tracking-widest">
                    Custom Quote
                  </span>
                  <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 mt-2 group-hover:text-bg">
                    Book a session <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
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
            <p className="text-lg text-muted font-serif mb-12">
              Keep your website fresh and up-to-date with our flexible management plans or one-off separate changes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* 1 Month Plan */}
              <div className="flex flex-col border border-border p-8 hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h4 className="text-xl font-bold uppercase tracking-widest">1 Month</h4>
                </div>
                <div className="flex items-baseline gap-2 mb-8 border-b border-border pb-8">
                  <span className="text-5xl font-black tracking-tighter">₹3.5k</span>
                  <span className="text-muted font-medium uppercase tracking-widest text-sm">/mo</span>
                </div>
                <ul className="flex flex-col gap-4 grow">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">Unlimited changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">Performance monitoring</span>
                  </li>
                </ul>
              </div>

              {/* 6 Months Plan */}
              <div className="flex flex-col border-2 border-fg p-8 bg-fg text-bg relative transform md:-translate-y-4 shadow-xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-bg" />
                  <h4 className="text-xl font-bold uppercase tracking-widest">6 Months</h4>
                </div>
                <div className="flex items-baseline gap-2 mb-8 border-b border-bg/20 pb-8">
                  <span className="text-5xl font-black tracking-tighter">₹3k</span>
                  <span className="text-bg/70 font-medium uppercase tracking-widest text-sm">/mo</span>
                </div>
                <ul className="flex flex-col gap-4 -grow">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-bg shrink-0 mt-0.5" />
                    <span className="font-medium">Unlimited changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-bg shrink-0 mt-0.5" />
                    <span className="font-medium">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-bg shrink-0 mt-0.5" />
                    <span className="font-medium">Performance monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-bg shrink-0 mt-0.5" />
                    <span className="font-medium">Monthly strategy call</span>
                  </li>
                </ul>
              </div>

              {/* 12 Months Plan */}
              <div className="flex flex-col border border-border p-8 hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h4 className="text-xl font-bold uppercase tracking-widest">12 Months</h4>
                </div>
                <div className="flex items-baseline gap-2 mb-8 border-b border-border pb-8">
                  <span className="text-5xl font-black tracking-tighter">₹2.2k</span>
                  <span className="text-muted font-medium uppercase tracking-widest text-sm">/mo</span>
                </div>
                <ul className="flex flex-col gap-4 grow">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">Unlimited changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">Performance monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">Quarterly site audit</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col border-t border-border">
              {/* Separate Changes */}
              <div className="group flex flex-col md:flex-row justify-between items-center py-8 border-b border-border hover:bg-fg hover:text-bg transition-colors px-4 -mx-4 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                    Separate Changes
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

