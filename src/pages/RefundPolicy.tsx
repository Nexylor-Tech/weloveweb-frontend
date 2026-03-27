import { motion } from 'framer-motion';

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase">Refund Policy</h1>
          <div className="space-y-8 text-black/60 leading-relaxed">
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Project Deposits</h3>
              <p>All project deposits are non-refundable once work has commenced. This ensures we can allocate the necessary resources to your project.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Service Cancellations</h3>
              <p>For ongoing retainer services, we require 30 days' notice for cancellation. Refunds for the current billing cycle are not provided.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Exceptional Circumstances</h3>
              <p>We understand that exceptional circumstances can occur. If you believe you are entitled to a refund for a specific reason, please contact our support team.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight">Contact Us</h3>
              <p>If you have any questions about our refund policy, please reach out to us at info@weloveweb.com.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

