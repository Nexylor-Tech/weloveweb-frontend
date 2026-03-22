import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-6">
              Let's build<br />
              <span className="text-brand-purple">something great.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-md mb-8 font-sans">
              We are a digital marketing agency focused on creating beautiful, functional, and impactful digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-brand-yellow">Navigation</h4>
            <ul className="space-y-4 font-sans text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-brand-pink">Socials</h4>
            <ul className="space-y-4 font-sans text-gray-300">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram size={18} /> Instagram
                </a>
              </li>
            </ul>

            <h4 className="text-lg font-heading font-bold mb-6 mt-8 text-brand-green">Contact</h4>
            <ul className="space-y-4 font-sans text-gray-300">
              <li>
                <a href="tel:+917908237625" className="hover:text-white transition-colors">
                  +91 7908237625
                </a>
              </li>
              <li>
                <a href="tel:+917583918246" className="hover:text-white transition-colors">
                  +91 7583918246
                </a>
              </li>
              <li>
                <a href="mailto:support.dgp@weloveweb.in" className="hover:text-white transition-colors break-all">
                  support.dgp@weloveweb.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading font-bold text-2xl tracking-tighter">
            weloveweb<span className="text-brand-purple">.</span>
          </p>
          <p className="text-sm text-gray-500 font-sans">
            &copy; {new Date().getFullYear()} weloveweb. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-sans">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

