import { useEffect, useState, useRef } from 'react';
import { User, Rocket, Code2, Building2 } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stack = [
    'HTML',
    'CSS',
    'Bootstrap',
    'React.js',
    'Next.js',
    'PHP',
    'Figma',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-24 md:py-32 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute inset-y-16 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-700/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Text side */}
        <div
          className={`max-w-xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[0.7rem] font-medium tracking-[0.25em] text-slate-300">
              FOUNDER · NEXTGEN
            </span>
          </div>

          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              About Sachendra
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-300 bg-clip-text text-transparent">
              &amp; NextGen
            </span>
          </h2>

          <div className="space-y-4 text-sm md:text-base text-slate-200">
            <p>
              My name is <span className="font-semibold text-cyan-300">Sachendra Shrestha</span>, and I am the Founder of{' '}
              <span className="font-semibold text-orange-300">NextGen</span>. I am a passionate Web Developer, App Developer,
              and Digital Creator with a strong vision to help businesses grow through modern technology and smart digital
              solutions.
            </p>

            <p>
              At NextGen, my goal is to deliver high-quality, secure, and user-friendly digital products that meet real
              business needs. I specialize in building professional websites, web applications, and admin panels, focusing on
              performance, responsiveness, and clean design.
            </p>

            <p>
              With skills in <span className="font-medium">HTML, CSS, Bootstrap, React.js, Next.js, PHP, and Figma</span>, I lead
              projects from concept to completion while ensuring client satisfaction and long-term scalability.
            </p>

            <p>
              I strongly believe in innovation, continuous learning, and creating solutions that stand out in today’s
              competitive digital world.
            </p>

            <p>
              As the founder, I am committed to building NextGen as a trusted technology partner, providing reliable services,
              transparent communication, and future-ready solutions for individuals and businesses.
            </p>
          </div>
        </div>

        {/* Highlight / info side */}
        <div
          className={`flex w-full flex-col gap-6 lg:max-w-md transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Card: Mission */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-orange-500/20">
                <Rocket className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                  MISSION
                </p>
                <p className="text-sm font-medium text-slate-100">
                  Growth through smart digital solutions
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300">
              NextGen is built to help businesses transform their ideas into modern, scalable digital products—without
              compromising on quality, security, or user experience.
            </p>
          </div>

          {/* Card: Tech stack */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-sky-500/10">
                <Code2 className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                  TECH STACK
                </p>
                <p className="text-sm font-medium text-slate-100">
                  From idea to production-ready
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Card: NextGen as a partner */}
          <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/12 via-slate-900/70 to-orange-500/12 p-6 md:p-7 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-cyan-500/20">
                <Building2 className="h-5 w-5 text-orange-300" />
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                  NEXTGEN
                </p>
                <p className="text-sm font-medium text-slate-100">
                  Your trusted technology partner
                </p>
              </div>
            </div>
            <p className="mb-3 text-xs md:text-sm text-slate-300">
              Reliable services, transparent communication, and future-ready solutions—designed for both individuals and
              businesses.
            </p>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-cyan-300">
              PERFORMANCE · SECURITY · CLEAN DESIGN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}