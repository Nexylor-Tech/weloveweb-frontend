import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
export function GetAQuote() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_GET_A_QUOTE_KEY);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData.get('bot-field')) {
      return;
    }
    handleSubmit(e);
  };

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-[10px] md:text-sm">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Get a Quote
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              Let's build something <span className="text-orange-500">extraordinary</span> together.
            </h1>

            <p className="text-lg md:text-2xl text-black/40 leading-relaxed font-medium max-w-lg">
              Tell us about your project goals and we'll provide a tailored proposal within 48 hours. No strings attached, just pure creative strategy.
            </p>

            <div className="space-y-4 md:space-y-8">
              {[
                'Free initial consultation',
                'Detailed project roadmap',
                'Transparent pricing structure',
                'Dedicated account manager'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-bold">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-orange-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white p-6 md:p-12 rounded-sm border border-white/10 shadow-2xl"
          >
            {state.succeeded ? (
              <div className="text-center py-16 space-y-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Quote Requested!</h3>
                <p className="text-white/60 text-lg px-6">
                  Thank you for laying out your vision. We'll be in touch with a proposal within 48 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-6 md:space-y-8" onSubmit={handleFormSubmit}>
                <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="John"
                      className="w-full border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent"
                    />
                    <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent"
                    />
                    <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 (0) 000 000 000"
                      className="w-full border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40">Project Type</label>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
                    {['Branding', 'UI/UX Design', 'Marketing', 'Web Development'].map((type) => (
                      <label key={type} className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                        <input type="checkbox" name="projectType" value={type} className="w-4 h-4 md:w-5 md:h-5 rounded-sm border-white/20 bg-transparent checked:bg-orange-500 transition-all" />
                        <span className="text-base md:text-lg font-medium group-hover:text-orange-500 transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                  <ValidationError prefix="Project Type" field="projectType" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40">Estimated Budget</label>
                  <select id="budget" name="budget" required className="w-full border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent appearance-none">
                    <option value="" disabled selected className="text-black">Select a budget</option>
                    <option className="text-black" value="₹10,000 - ₹15,000">₹10,000 - ₹15,000</option>
                    <option className="text-black" value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                    <option className="text-black" value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
                    <option className="text-black" value="₹50,000+">₹50,000+</option>
                  </select>
                  <ValidationError prefix="Budget" field="budget" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40">Project Details</label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    placeholder="Tell us about your project goals..."
                    className="w-full border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent resize-none"
                  />
                  <ValidationError prefix="Details" field="details" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-orange-500 text-white px-8 py-4 md:py-5 rounded-sm text-base md:text-lg font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300 group shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending Request...' : 'Request Quote'}
                  {!state.submitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

