import { useEffect, useState, useRef } from 'react';
import { Code2, Globe, Database, Palette, Server, GitBranch } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    name: 'Next.js',
    level: 92,
    color: 'from-cyan-500 to-cyan-300',
    description: 'Server-side rendering, API routes, and App Router.',
  },
  {
    icon: Code2,
    name: 'React.js',
    level: 90,
    color: 'from-orange-500 to-orange-300',
    description: 'Component architecture, hooks, and state management.',
  },
  {
    icon: Globe,
    name: 'JavaScript',
    level: 88,
    color: 'from-teal-500 to-teal-300',
    description: 'ES6+, async/await, DOM manipulation, and APIs.',
  },
  {
    icon: Palette,
    name: 'HTML5 & CSS3',
    level: 95,
    color: 'from-orange-400 to-orange-200',
    description: 'Semantic markup, Flexbox, Grid, and responsive design.',
  },
  {
    icon: Server,
    name: 'PHP & Backend',
    level: 82,
    color: 'from-cyan-600 to-cyan-400',
    description: 'Server-side logic, REST APIs, and form handling.',
  },
  {
    icon: Database,
    name: 'Firebase & MongoDB',
    level: 85,
    color: 'from-orange-300 to-cyan-300',
    description: 'NoSQL databases, authentication, and real-time data.',
  },
];

export default function DigitalDNA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dna"
      ref={sectionRef}
      aria-label="My technical skillset"
      className="relative min-h-screen flex items-center justify-center py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />

      {/* Soft glowing blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 md:w-96 h-80 md:h-96 bg-cyan-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 md:w-96 h-80 md:h-96 bg-orange-500 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid / lines for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_55%),repeating-linear-gradient(to_right,_rgba(148,163,184,0.3)_0,_rgba(148,163,184,0.3)_1px,transparent_1px,transparent_24px),repeating-linear-gradient(to_bottom,_rgba(148,163,184,0.3)_0,_rgba(148,163,184,0.3)_1px,transparent_1px,transparent_24px)]" />

      <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              My Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-300 bg-clip-text text-transparent">
              DNA
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base md:text-lg font-light text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A blend of frontend, backend, and database skills — constantly evolving to create
            meaningful digital experiences.
          </p>

          {/* Accent line */}
          <div
            className={`mt-6 flex justify-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 via-white/80 to-orange-400 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.5)]" />
          </div>
        </div>

        {/* Skills grid */}
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              role="listitem"
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_24px_60px_rgba(15,23,42,0.9)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                {/* Hover gradient wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-orange-500/0 group-hover:from-cyan-500/8 group-hover:to-orange-500/8 transition-all duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top row: icon + percent */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                      <skill.icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    <div className="text-right">
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                        Proficiency
                      </div>
                      <div className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                        {skill.level}%
                      </div>
                    </div>
                  </div>

                  {/* Title + description */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light mb-4">
                    {skill.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                        Evolution
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Growing every project
                      </span>
                    </div>
                    <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 160}ms`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Glow orb in corner */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 w-28 h-28 bg-gradient-to-br from-cyan-500/25 to-orange-500/25 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
