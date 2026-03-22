import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { submitContactForm } from '../api';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen) return;

    const renderWidget = () => {
      const wt = (window as any).turnstile;
      if (wt && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = wt.render(turnstileRef.current, {
          sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY || "",
          callback: (token: string) => {
            setTurnstileToken(token);
          },
          'error-callback': () => {
            setTurnstileToken(null);
          },
          'expired-callback': () => {
            setTurnstileToken(null);
          },
          theme: 'light'
        });
      }
    };

    if ((window as any).turnstile) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if ((window as any).turnstile) {
          renderWidget();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      const wt = (window as any).turnstile;
      if (widgetIdRef.current && wt) {
        wt.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        number: formData.number,
        subject: "Inquiry from Contact Modal",
        message: formData.description,
        'cf-turnstile-response': turnstileToken
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        number: '',
        description: '',
      });
      if (widgetIdRef.current && (window as any).turnstile) {
        (window as any).turnstile.reset(widgetIdRef.current);
      }
      setTurnstileToken(null);
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          />

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-49 shadow-2xl flex flex-col pt-24"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-sans font-medium text-black">Get in touch</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-none transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div ref={turnstileRef}></div>

                <div className="flex flex-col gap-2 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-b from-[#d8ff75] to-[#b8f531] border border-[#9acc2b] shadow-[0_4px_0_#8ab827,0_5px_10px_rgba(0,0,0,0.2),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_0_rgba(0,0,0,0.1)] active:shadow-[0_0px_0_#8ab827,inset_0_3px_5px_rgba(0,0,0,0.2)] active:translate-y-[4px] transition-all text-black font-medium rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {submitStatus === 'success' && (
                    <span className="text-green-600 text-sm text-center">Message sent successfully!</span>
                  )}
                  {submitStatus === 'error' && (
                    <span className="text-red-500 text-sm text-center">Failed to send message. Please try again.</span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
