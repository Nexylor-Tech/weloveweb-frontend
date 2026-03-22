import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, BarChart3, Zap, Play } from 'lucide-react';

const services = [
  {
    title: 'Maximize Your Online Visibility with Expert SEO Services',
    description: 'Ranking high on search engines is crucial for long-term success. Our SEO strategies ensure your website stays ahead of the competition.',
    details: [
      'On-Page SEO: Optimizing website structure, content, and meta tags for better search rankings.',
      'Off-Page SEO & Link Building: Building high-quality backlinks to increase domain authority and credibility.',
      'Technical SEO: Ensuring fast-loading pages, mobile optimization, and a seamless user experience.'
    ]
  },
  {
    title: 'Craft Stunning, User-Friendly Websites That Drive Conversions',
    description: 'Our web design team creates visually appealing and functional websites tailored to your business needs.',
    details: ['Responsive Design', 'UI/UX Optimization', 'Performance Tuning']
  },
  {
    title: 'Grow Your Brand and Engagement with Strategic Social Media Marketing',
    description: 'We help you build a strong online presence and engage with your target audience effectively.',
    details: ['Content Strategy', 'Community Management', 'Paid Advertising']
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="relative lg:static">
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-brand-purple/20 text-brand-dark border border-brand-dark rounded-none text-sm font-heading font-bold uppercase tracking-widest mb-6">Our Services</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-8 leading-none">
                Tailored Strategies for <span className="text-gray-500">Maximum Business Growth</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 font-sans">
                Ranking high on search engines is crucial for long-term success. Our SEO strategies ensure your website stays ahead of the competition.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-brand-green rounded-none border-2 border-brand-dark shadow-[4px_4px_0px_0px_rgba(26,26,46,1)]">
                  <BarChart3 className="mb-4" size={32} />
                  <h3 className="font-heading font-bold text-xl mb-2">Driven Strategies</h3>
                  <p className="text-sm font-sans">Data-backed marketing that targets the right audience and maximizes ROI.</p>
                </div>
                <div className="p-6 bg-brand-yellow rounded-none border-2 border-brand-dark shadow-[4px_4px_0px_0px_rgba(26,26,46,1)]">
                  <Zap className="mb-4" size={32} />
                  <h3 className="font-heading font-bold text-xl mb-2">Digital Solution</h3>
                  <p className="text-sm font-sans">Innovative web and social campaigns designed to elevate your brand's presence.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative">
              <img src="https://images.pexels.com/photos/7580765/pexels-photo-7580765.jpeg" alt="Business Growth" className="rounded-none w-full border-2 border-brand-dark shadow-[12px_12px_0px_0px_rgba(26,26,46,0.1)]" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 left-4 right-4 md:left-10 md:right-10 bg-brand-yellow p-6 md:p-8 rounded-none border-2 border-brand-dark shadow-[8px_8px_0px_0px_rgba(26,26,46,1)] grid grid-cols-3 gap-2 md:gap-4 text-center">
                <div>
                  <div className="text-xl md:text-3xl font-heading font-black">172+</div>
                  <div className="text-[10px] md:text-xs font-heading font-bold uppercase leading-tight">Drive Engagement</div>
                </div>
                <div>
                  <div className="text-xl md:text-3xl font-heading font-black">283+</div>
                  <div className="text-[10px] md:text-xs font-heading font-bold uppercase leading-tight">Digital Presence</div>
                </div>
                <div>
                  <div className="text-xl md:text-3xl font-heading font-black">453+</div>
                  <div className="text-[10px] md:text-xs font-heading font-bold uppercase leading-tight">Creating Impactful</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-24 lg:mt-0">
          <div className="relative lg:order-1 order-2">
            <div className="relative">
              <img src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg" alt="Writing" className="rounded-none w-full border-2 border-brand-dark shadow-[12px_12px_0px_0px_rgba(26,26,46,0.1)]" referrerPolicy="no-referrer" />
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 bg-brand-purple rounded-none flex items-center justify-center border-2 border-brand-dark shadow-[4px_4px_0px_0px_rgba(26,26,46,1)] group-hover:scale-110 transition-transform">
                  <Play className="fill-brand-dark" size={32} />
                </div>
              </button>
            </div>
          </div>

          <div className="relative lg:order-2 order-1">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-12 leading-none">
                Our Services Deliver the <span className="text-gray-500">Best Results for Your Business</span>
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="border-2 border-brand-dark rounded-none overflow-hidden shadow-[4px_4px_0px_0px_rgba(26,26,46,1)]">
                    <button
                      className={`w-full flex items-center justify-between p-6 transition-colors ${expandedIndex === index ? 'bg-brand-yellow' : 'bg-white hover:bg-gray-50'}`}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <span className="font-heading font-bold text-lg text-left leading-tight">{service.title}</span>
                      {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="bg-white px-6 pb-6"
                        >
                          <p className="pt-6 mb-4 text-gray-700 font-sans">{service.description}</p>
                          <ul className="space-y-2 list-decimal list-inside text-sm text-gray-600 font-sans">
                            {service.details.map((detail, i) => <li key={i}>{detail}</li>)}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

