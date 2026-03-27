import { About } from '../components/About';

export function AboutPage() {
  return (
    <div className="pt-12">
      <About />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-black/60 leading-relaxed">
              To be the leading creative force that empowers brands to transcend digital boundaries and create meaningful connections with their audience.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-black/60 leading-relaxed">
              We combine data-driven insights with bold creative thinking to deliver measurable results and transformative growth for our clients.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Values</h3>
            <p className="text-black/60 leading-relaxed">
              Integrity, innovation, and impact. We believe in transparency, pushing boundaries, and delivering work that truly matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

