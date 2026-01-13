import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-8 right-8 z-40 transition-all duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-3 flex gap-6">
        {['DNA', 'Creations', 'Connect'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-sm font-light tracking-wider hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </button>
        ))}
      </div>
    </nav>
  );
}
