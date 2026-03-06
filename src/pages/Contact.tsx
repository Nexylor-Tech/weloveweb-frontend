import { motion } from "framer-motion";

export default function Contact() {
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

            <form className="flex flex-col gap-8 mt-16">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-2 flex-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold uppercase tracking-widest"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-b border-border bg-transparent py-2 outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
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
                    className="border-b border-border bg-transparent py-2 outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
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
                  className="border-b border-border bg-transparent py-2 outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="button"
                className="bg-fg text-bg font-bold uppercase tracking-widest py-4 px-8 w-max hover:bg-accent hover:text-white transition-colors"
              >
                Send Message
              </button>
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
              New York
            </h4>
            <p className="text-muted font-serif">
              123 Broadway St, Suite 400
              <br />
              New York, NY 10001
              <br />
              USA
            </p>
            <a
              href="mailto:ny@weloveweb.com"
              className="text-accent hover:underline font-bold"
            >
              ny@weloveweb.com
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black uppercase tracking-tighter">
              London
            </h4>
            <p className="text-muted font-serif">
              45 Oxford St, Floor 2<br />
              London W1D 2DZ
              <br />
              UK
            </p>
            <a
              href="mailto:london@weloveweb.com"
              className="text-accent hover:underline font-bold"
            >
              london@weloveweb.com
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

