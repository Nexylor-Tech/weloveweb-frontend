import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HorizontalScroll from '../components/HorizontalScroll';
import AdvancedDigitalTools from '../components/AdvancedDigitalTools';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';

export default function Home() {
  return (
    <div className="bg-white min-h-full text-brand-dark flex-1 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Intro Section */}
        <AdvancedDigitalTools />

        <HorizontalScroll />
        <Services />
        <Testimonials />

      </main>
      <Footer />
    </div>
  );
}

