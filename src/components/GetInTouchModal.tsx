import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export function GetInTouchModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_GET_IN_TOUCH_KEY);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData.get('bot-field')) {
      return;
    }
    handleSubmit(e);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-lg bg-white shadow-2xl overflow-y-auto"
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold tracking-tighter">Get in touch</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <p className="text-lg text-black/60 mb-12 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {state.succeeded ? (
                <div className="text-center py-16 space-y-6 bg-orange-500/5 rounded-2xl border border-orange-500/10">
                  <div className="w-20 h-20 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">Message Sent!</h3>
                  <p className="text-black/60 text-lg px-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 bg-black text-white px-8 py-4 rounded-sm font-bold hover:bg-orange-500 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleFormSubmit}>
                  <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-black/40">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full border-b border-black/10 py-4 text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-black/40">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full border-b border-black/10 py-4 text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-black/40">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 (0) 000 000 000"
                      className="w-full border-b border-black/10 py-4 text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-black/40">Subject</label>
                    <select id="subject" name="subject" required className="w-full border-b border-black/10 py-4 text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent appearance-none">
                      <option value="" disabled selected>Select a subject</option>
                      <option>Branding &amp; Identity</option>
                      <option>Web Development</option>
                      <option>UI/UX Design</option>
                      <option>Digital Marketing</option>
                      <option>Other</option>
                    </select>
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-black/40">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full border-b border-black/10 py-4 text-lg focus:outline-none focus:border-orange-500 transition-colors bg-transparent resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-black text-white px-8 py-5 rounded-sm text-lg font-bold flex items-center justify-center gap-3 hover:bg-orange-500 transition-all duration-300 group shadow-lg hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                    {!state.submitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              )}

              <div className="mt-24 pt-12 border-t border-black/10 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Prefer email?</h4>
                    <p className="text-black/60">info@weloveweb.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

