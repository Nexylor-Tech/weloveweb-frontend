import { motion } from "framer-motion";

export default function Privacy() {
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
          Privacy Policy
        </h1>
        <div className="flex flex-col md:flex-row gap-16 items-start border-t border-border pt-16">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span> Data Protection
            </h2>
          </div>
          <div className="w-full md:w-3/4 flex flex-col gap-8">
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              We are committed to protecting your privacy and ensuring your
              personal information is secure.
            </h3>

            <div className="flex flex-col gap-8 mt-16 font-serif text-muted leading-relaxed">
              <h4 className="text-2xl font-black uppercase tracking-tighter text-fg">
                1. Information We Collect
              </h4>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, subscribe to our newsletter, or contact
                us for support. This information may include your name, email
                address, phone number, and any other details you choose to
                provide.
              </p>

              <h4 className="text-2xl font-black uppercase tracking-tighter text-fg mt-8">
                2. How We Use Your Information
              </h4>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, communicate with you, and personalize your
                experience. We may also use your information to send you
                promotional materials or updates about our products and
                services.
              </p>

              <h4 className="text-2xl font-black uppercase tracking-tighter text-fg mt-8">
                3. Information Sharing
              </h4>
              <p>
                We do not share your personal information with third parties
                except as necessary to provide our services, comply with the
                law, or protect our rights. We may share your information with
                trusted service providers who assist us in operating our website
                or conducting our business.
              </p>

              <h4 className="text-2xl font-black uppercase tracking-tighter text-fg mt-8">
                4. Security
              </h4>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, use, or disclosure. However, no method
                of transmission over the internet or electronic storage is
                completely secure, so we cannot guarantee absolute security.
              </p>

              <h4 className="text-2xl font-black uppercase tracking-tighter text-fg mt-8">
                5. Changes to This Policy
              </h4>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page. You are advised to review this policy periodically for any
                changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

