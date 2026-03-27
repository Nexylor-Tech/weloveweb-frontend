import { Star, ArrowRight, Briefcase, Globe } from 'lucide-react';
export function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Large Text with Embedded Icons */}
        <div className="mb-16 md:mb-32">
          <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            About weloveweb
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] text-black">
            We're a full-stack
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-black/10 mx-1.5 md:mx-3 align-middle">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-black" />
            </span>
            creative marketing agency driven by research, sharpened by design, and focused on measurable results.
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-black/10 mx-1.5 md:mx-3 align-middle">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-black" />
            </span>
            <span className="text-black/30">From bold branding to </span>
            <span className="inline-flex items-center justify-center w-12 h-8 sm:w-16 sm:h-10 md:w-24 md:h-14 rounded-sm overflow-hidden mx-1.5 md:mx-3 align-middle border border-black/10">
              <img src="https://images.pexels.com/photos/7688443/pexels-photo-7688443.jpeg" alt="Mini" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </span>
            <span className="text-black/30">immersive web experiences, we craft what connects.</span>
          </h2>
        </div>

        {/* Bottom Section: Stats, Images, and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left: Ratings & Avatars */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">4,9</p>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
                ))}
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-black/10 text-black/10" />
              </div>
              <p className="text-[10px] md:text-sm font-bold text-black/40 uppercase tracking-widest">Customers Satisfaction</p>
            </div>

            <div className="flex items-center -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-white overflow-hidden bg-gray-100">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-white bg-black flex items-center justify-center text-white">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 rotate-[-45deg]" />
              </div>
            </div>
          </div>

          {/* Middle: Dual Images */}
          <div className="lg:col-span-6 flex gap-4 md:gap-6">
            <div className="flex-1 aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-black/5">
              <img src="https://images.pexels.com/photos/7710079/pexels-photo-7710079.jpeg" alt="Team 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-black/5 mt-8 md:mt-12">
              <img src="https://images.pexels.com/photos/6476807/pexels-photo-6476807.jpeg" alt="Team 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Right: Text and CTA */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight">Creative and Strategic minds</h3>
              <p className="text-base lg:text-lg text-black/60 leading-relaxed">
                Meet weloveweb — the team that turns insights into impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

