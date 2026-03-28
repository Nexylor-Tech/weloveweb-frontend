import { Services } from '../components/Services';

export function ServicesPage() {
  return (
    <div className="pt-12">
      <Services />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <h2 className="text-4xl font-bold tracking-tighter mb-16">Why Choose Our Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 border border-black/10 rounded-sm hover:border-orange-500 transition-colors group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-orange-500 transition-colors">
              Strategic Approach
            </h3>
            <p className="text-black/60 leading-relaxed">
              We don't just design; we strategize. Every pixel and every campaign is backed by deep research and clear business objectives.
            </p>
          </div>
          <div className="p-12 border border-black/10 rounded-sm hover:border-orange-500 transition-colors group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-orange-500 transition-colors">
              Creative Excellence
            </h3>
            <p className="text-black/60 leading-relaxed">
              Our team of award-winning designers and creative thinkers push the boundaries of what's possible in digital design.
            </p>
          </div>
          <div className="p-12 border border-black/10 rounded-sm hover:border-orange-500 transition-colors group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-orange-500 transition-colors">
              Data-Driven Results
            </h3>
            <p className="text-black/60 leading-relaxed">
              We use advanced analytics and user testing to ensure our solutions deliver measurable growth and ROI for your brand.
            </p>
          </div>
          <div className="p-12 border border-black/10 rounded-sm hover:border-orange-500 transition-colors group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-orange-500 transition-colors">
              Agile Methodology
            </h3>
            <p className="text-black/60 leading-relaxed">
              Our streamlined process ensures fast delivery without compromising on quality, keeping you involved at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

