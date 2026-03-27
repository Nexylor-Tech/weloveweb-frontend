import { motion } from 'framer-motion';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase">Privacy Policy</h1>
          <div className="space-y-8 text-black/60 leading-relaxed">
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Information We Collect</h3>
              <p>We collect information you provide directly to us, such as while creating account for new domain or contact us for support.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Information Sharing</h3>
              <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Security</h3>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

