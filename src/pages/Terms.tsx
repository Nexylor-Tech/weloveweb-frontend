import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-brand-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-16"
        >
          <section className="w-full">
            <h1 className="text-5xl md:text-[6rem] font-heading font-black leading-[0.85] tracking-tighter text-brand-green uppercase mb-16">
              Terms of Service
            </h1>
            <div className="flex flex-col md:flex-row gap-16 items-start border-t border-gray-200 pt-16">
              <div className="w-full md:w-1/4">
                <h2 className="text-lg font-heading font-bold uppercase tracking-widest flex items-center gap-2 text-brand-dark">
                  <span className="w-2 h-2 bg-brand-yellow"></span> Legal Agreement
                </h2>
              </div>
              <div className="w-full md:w-3/4 flex flex-col gap-8">
                <h3 className="text-3xl md:text-4xl font-sans font-medium leading-tight text-brand-dark">
                  Please read these terms carefully before using our services.
                </h3>

                <div className="flex flex-col gap-8 mt-8 font-sans text-gray-600 leading-relaxed">
                  <h4 className="text-2xl font-heading font-black uppercase tracking-tighter text-brand-dark">
                    1. Acceptance of Terms
                  </h4>
                  <p>
                    By accessing or using our services, you agree to be bound by
                    these terms and conditions. If you do not agree to all the terms
                    and conditions, then you may not access the website or use any
                    services.
                  </p>

                  <h4 className="text-2xl font-heading font-black uppercase tracking-tighter text-brand-dark mt-8">
                    2. Use of Services
                  </h4>
                  <p>
                    You agree to use our services only for lawful purposes and in
                    accordance with these terms. You are responsible for all
                    activities that occur under your contract.
                  </p>

                  <h4 className="text-2xl font-heading font-black uppercase tracking-tighter text-brand-dark mt-8">
                    3. Intellectual Property
                  </h4>
                  <p>
                    All content, features, and functionality of our services,
                    including but not limited to text, graphics, logos, and
                    software, are the exclusive property of Weloveweb and are
                    protected by international copyright, trademark, patent, trade
                    secret, and other intellectual property or proprietary rights
                    laws.
                  </p>

                  <h4 className="text-2xl font-heading font-black uppercase tracking-tighter text-brand-dark mt-8">
                    4. Limitation of Liability
                  </h4>
                  <p>
                    In no event shall Weloveweb, nor its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for any
                    indirect, incidental, special, consequential or punitive
                    damages, including without limitation, loss of profits, data,
                    use, goodwill, or other intangible losses, resulting from your
                    access to or use of or inability to access or use the services.
                  </p>

                  <h4 className="text-2xl font-heading font-black uppercase tracking-tighter text-brand-dark mt-8">
                    5. Governing Law
                  </h4>
                  <p>
                    These terms shall be governed and construed in accordance with
                    the laws of your jurisdiction, without regard to its conflict of
                    law provisions. Our failure to enforce any right or provision of
                    these terms will not be considered a waiver of those rights.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
