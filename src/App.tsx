import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms.tsx';
import PageBorder from './components/PageBorder';
import { ContactModalProvider } from './components/ContactModalProvider';

export default function App() {
  return (
    <BrowserRouter>
      <ContactModalProvider>
        <PageBorder>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </PageBorder>
      </ContactModalProvider>
    </BrowserRouter>
  );
}

