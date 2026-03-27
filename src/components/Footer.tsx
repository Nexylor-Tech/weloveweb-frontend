import { useTransition } from './Layout';
export function Footer() {
  const currentYear = new Date().getFullYear();
  const { startTransition } = useTransition();

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Large Header Section */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-[13vw] lg:text-[12rem] font-display font-bold tracking-tighter leading-none whitespace-nowrap select-none pointer-events-none text-[#1A1A1A]">
            CONTACT US
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-24">
          {/* Column 1: Description & Socials */}
          <div className="space-y-10">
            <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-xs">
              We are a results-driven marketing agency based in Durgapur, WB — crafting strategic campaigns and bold digital experiences that amplify your brand's reach.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/weloveweb.in"
                target='_blank'
                className="flex items-center justify-center"
              >
                <p className="hover:text-orange-500 transition-all duration-300">[Instagram]</p>
              </a>
            </div>
          </div>

          {/* Column 2: Location & Email */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Location</h3>
              <p className="text-sm md:text-base leading-relaxed">
                PS-39 Vidyasagar Pally,<br />
                Durgapur, 713213
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</h3>
              <p className="text-sm md:text-base hover:text-orange-500 transition-colors cursor-pointer">
                info@weloveweb.com
              </p>
            </div>
          </div>

          {/* Column 3: Call Us & Open Time */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Call Us</h3>
              <p className="text-sm md:text-base hover:text-orange-500 transition-colors cursor-pointer">
                +91 9239140341
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Open Time</h3>
              <p className="text-sm md:text-base leading-relaxed">
                11.00 am - 07.00 pm
              </p>
            </div>
          </div>

          {/* Column 4: Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-48 rounded-2xl overflow-hidden border border-white/5">
            <img
              src="https://images.pexels.com/photos/3989140/pexels-photo-3989140.jpeg"
              alt="Office"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/40">
          <p>© {currentYear} weloveweb All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <button onClick={() => startTransition('/faq')} className="hover:text-white transition-colors">FAQ</button>
            <button onClick={() => startTransition('/terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => startTransition('/privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => startTransition('/refund')} className="hover:text-white transition-colors">Refund Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

