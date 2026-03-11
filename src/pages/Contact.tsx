import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<any>(null);

  useEffect(() => {
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
          theme: 'dark'
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
  }, []);

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
        ...formData,
        'cf-turnstile-response': turnstileToken
      });
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
      if (widgetIdRef.current && (window as any).turnstile) {
        (window as any).turnstile.reset(widgetIdRef.current);
      }
      setTurnstileToken(null);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Get in Touch
            </h2>
          </div>
          <div className="w-full md:w-3/4 flex flex-col gap-8">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              We'd love to hear from you. Whether you have a project in mind or
              just want to say hello, feel free to reach out.
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-16">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold uppercase tracking-widest"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-b border-border bg-transparent py-2 outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-2 flex-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-widest"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-b border-border bg-transparent py-2 outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label
                    htmlFor="number"
                    className="text-sm font-bold uppercase tracking-widest"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="border-b border-border bg-transparent py-2 outline-none focus:border-accent transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-bold uppercase tracking-widest"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-b border-border bg-transparent py-2 outline-none focus:border-accent transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-b border-border bg-transparent py-2 outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div ref={turnstileRef}></div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-fg text-bg font-bold uppercase tracking-widest py-4 px-8 w-max hover:bg-accent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitStatus === 'success' && (
                  <span className="text-green-500 font-bold uppercase tracking-widest text-sm">Message sent successfully!</span>
                )}
                {submitStatus === 'error' && (
                  <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Failed to send message.</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-accent"></span> Our Offices
          </h2>
        </div>
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black uppercase tracking-tighter">
              Durgapur
            </h4>
            <p className="text-muted font-serif">
              PS-39 Benachity
              <br />
              Durgapur, WB 713213
              <br />
              India
            </p>
            <a
              href="https://wa.link/830ff9"
              className="text-accent hover:underline font-bold"
            >
              +91 7908237625
            </a>
            <a
              href="https://wa.link/6fwxkm"
              className="text-accent hover:underline font-bold"
            >
              +91 7583918246
            </a>
            <br />
            <a
              href="mailto:support.dgp@weloveweb.in"
              className="text-accent hover:underline font-bold"
            >
              support.dgp@weloveweb.in
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

