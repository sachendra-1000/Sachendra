import { useEffect, useState, useRef } from 'react';
import { User, Target, Code2, Briefcase } from 'lucide-react';

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
    'Next.js',
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind CSS',
    'PHP',
    'Firebase',
    'MongoDB',
    'MySQL',
    'Figma',
    'Git & GitHub',
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
              ABOUT ME
            </span>
          </div>

          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-300 bg-clip-text text-transparent">
              Sachendra
            </span>
          </h2>

          <div className="space-y-4 text-sm md:text-base text-slate-200">
            <p>
              My name is <span className="font-semibold text-cyan-300">Sachendra Shrestha</span>,
              a passionate Full Stack Web Developer who builds modern, fast, and user-friendly web applications.
            </p>

            <p>
              I specialize in creating tourism platforms, business websites, eCommerce applications,
              and AI-powered solutions using Next.js, React.js, PHP, Firebase, MongoDB, HTML, CSS, and JavaScript.
            </p>

            <p>
              I enjoy designing and developing responsive websites with a strong focus on performance,
              usability, and user experience. I continuously learn new technologies and enjoy turning
              ideas into professional web applications.
            </p>

            <p>
              My goal is to create innovative digital experiences that solve real-world problems
              through clean design and efficient development.
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
          {/* Card: Goal */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-orange-500/20">
                <Target className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                  GOAL
                </p>
                <p className="text-sm font-medium text-slate-100">
                  Innovative digital experiences
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300">
              To create modern, scalable web applications that solve real-world problems
              through clean design and efficient development.
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

          {/* Card: Experience */}
          <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/12 via-slate-900/70 to-orange-500/12 p-6 md:p-7 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-cyan-500/20">
                <Briefcase className="h-5 w-5 text-orange-300" />
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                  EXPERIENCE
                </p>
                <p className="text-sm font-medium text-slate-100">
                  Freelance Full Stack Developer
                </p>
              </div>
            </div>
            <p className="mb-3 text-xs md:text-sm text-slate-300">
              Designing and developing modern websites and web applications for businesses,
              tourism, education, and eCommerce with responsive design, clean code, and scalable architecture.
            </p>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-cyan-300">
              PERFORMANCE · USABILITY · CLEAN DESIGN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
