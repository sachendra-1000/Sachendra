import { useEffect, useState } from 'react';
import { Sparkles, Code, Camera, Video, ArrowRight, Mail } from 'lucide-react';
import myImage from '../assets/my.jpg';
import CV from "../assets/CV-sachendra.pdf"; // 👈 make sure file is at src/assets/my.jpg

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roles = [
    { icon: Code, text: 'Web Designer' },
    { icon: Sparkles, text: 'App Developer' },
    { icon: Camera, text: 'Photographer' },
    { icon: Video, text: 'Videographer' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

      {/* Soft radial glow behind content */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 md:h-[28rem] md:w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-25">
        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `hero-float ${Math.random() * 10 + 16}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-6xl px-6 py-24 md:py-32 lg:py-40"
        style={{ transform: `translateY(${Math.min(scrollY * 0.2, 40)}px)` }}
      >
        <div
          className={`transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            {/* Left: Text */}
            <div>
              {/* Tagline */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span className="text-[0.7rem] md:text-xs font-medium tracking-[0.25em] text-cyan-300">
                  DIGITAL CREATOR
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                  Sachendra
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-cyan-400 bg-clip-text text-transparent">
                  Shrestha
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm md:text-base text-slate-300">
                I design and develop modern web experiences, craft mobile‑ready interfaces,
                and tell visual stories through photography and video. Clean aesthetics,
                smooth interactions, and user‑first experiences are my priority.
              </p>

              {/* Roles */}
              <div className="mt-10 space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                  Specialised in
                </p>

                <div className="flex flex-wrap gap-3">
                  {roles.map(({ icon: Icon, text }, index) => (
                    <div
                      key={text}
                      className="group cursor-default"
                      style={{
                        animation: `hero-fadeInUp 0.7s ease-out ${index * 0.12}s both`,
                      }}
                    >
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm font-light tracking-wide text-slate-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10">
                          <Icon className="h-3.5 w-3.5 text-cyan-300 transition-transform duration-300 group-hover:-rotate-6" />
                        </div>
                        <span>{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to actions */}
              <div className="mt-12 flex flex-wrap items-center gap-4">
                {/* Download CV button */}
                <a
                  href={CV}            // file in /public
                  download="mycv.pdf"         // optional: filename for download
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(56,189,248,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View Portfolio
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a href="shresthasachendra8@gmail.com" target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                    <Mail className="h-4 w-4 text-cyan-300" />
                    Let's Connect
                  </button>
                </a>


                <span className="ml-1 text-xs text-slate-400">
                  Currently <span className="text-cyan-300">available</span> for freelance projects.
                </span>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Glow behind card */}
                <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-cyan-400/40 via-slate-900 to-orange-400/40 blur-3xl" />

                {/* Portrait card */}
                <div className="hero-portrait relative h-full w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_0_45px_rgba(15,23,42,0.8)]">
                  <img
                    src={myImage}
                    alt="Sachendra Shrestha"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-100">
                    <div>
                      <p className="font-semibold">Sachendra Shrestha</p>
                      <p className="text-[0.7rem] text-slate-300">Founder · NextGen</p>
                    </div>
                    <div className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-cyan-300">
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex justify-center">
            <div className="flex flex-col items-center gap-3 text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
              <span>Scroll</span>
              <div className="relative h-10 w-6 rounded-full border-2 border-white/30">
                <div className="hero-scroll-dot absolute left-1/2 top-2 h-3 w-1.5 -translate-x-1/2 rounded-full bg-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-26px) rotate(180deg); opacity: 1; }
        }
        @keyframes hero-fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes hero-scroll {
          0% { transform: translate(-50%, 0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translate(-50%, 12px); opacity: 0; }
        }
        .hero-scroll-dot {
          animation: hero-scroll 1.4s ease-in-out infinite;
        }
        @keyframes hero-portrait-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .hero-portrait {
          animation: hero-portrait-float 9s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}