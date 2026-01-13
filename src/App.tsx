import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import DigitalDNA from './components/DigitalDNA';
import Creations from './components/Creations';
import Contact from './components/Contact';
import MouseFollower from './components/MouseFollower';
import Navigation from './components/Navigation';
import Footer from './components/Footer';   // ✅ Capitalized import

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-orange-500 to-cyan-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <MouseFollower />
      <Navigation />

      <Hero />
      <About />
      <DigitalDNA />
      <Creations />
      <Contact />
      <Footer />       {/* ✅ Correct usage */}
    </div>
  );
}

export default App;