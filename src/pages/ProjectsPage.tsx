import { Projects } from '../components/Projects';

export function ProjectsPage() {
  return (
    <div className="pt-12">
      <Projects />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
          <h2 className="text-5xl font-bold tracking-tighter">Our Process</h2>
          <div className="flex gap-4">
            {['All', 'Branding', 'UI/UX', 'Marketing', 'Motion'].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-full border border-black/10 text-sm font-bold hover:bg-black hover:text-white transition-all"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="text-4xl font-bold text-orange-500">01.</div>
            <h3 className="text-2xl font-bold">Discovery & Research</h3>
            <p className="text-black/60 leading-relaxed">
              We start by understanding your brand, your audience, and your business goals to build a solid foundation.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-4xl font-bold text-orange-500">02.</div>
            <h3 className="text-2xl font-bold">Design & Strategy</h3>
            <p className="text-black/60 leading-relaxed">
              Our creative team develops bold concepts and strategic roadmaps that align with your vision.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-4xl font-bold text-orange-500">03.</div>
            <h3 className="text-2xl font-bold">Execution & Launch</h3>
            <p className="text-black/60 leading-relaxed">
              We bring the concepts to life with meticulous attention to detail and a focus on high-performance results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

