import { motion } from 'framer-motion';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase">Terms of Service</h1>
          <div className="space-y-8 text-black/60 leading-relaxed">
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Acceptance of Terms</h3>
              <p>By accessing or using our services, you agree to be bound by these terms. If you do not agree to all of these terms, do not use our services.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Use of Services</h3>
              <p>You may use our services only as permitted by law and these terms. We may suspend or terminate your access if you do not comply with our terms or policies.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Intellectual Property</h3>
              <p>All content and materials provided as part of our services are the property of weloveweb or its licensors and are protected by intellectual property laws.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, weloveweb will not be liable for any indirect, incidental, special, or consequential damages.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

