// src/components/Creations.tsx
import { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

// Local images
import kripaluImg from '../assets/kripalu.jpeg';
import skillhubImg from '../assets/skillhub.jpeg';
import sajiloImg from '../assets/sajilo.jpeg';
import nextgenImg from '../assets/nextgen.jpeg';
import myImg from '../assets/divine.jpeg';
import jgmImg from '../assets/jgm.jpeg'; // placeholder for the remaining projects

export default function Creations() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const creations = [
    {
      title: 'Kripalu Udhyan',
      category: 'Web Experience',
      description: '',
      gradient: 'from-cyan-500 to-teal-600',
      year: '2024',
      image: kripaluImg,
      link: 'https://ambitious-grass-049bca800.1.azurestaticapps.net/',
    },
    {
      title: 'Divine Youth club',
      category: 'Visual Identity',
      description: 'Brand identity system with dynamic motion elements.',
      gradient: 'from-orange-500 to-orange-600',
      year: '2024',
      image: myImg,
      link: 'https://your-platform-link.com/divine-youth-club',
    },
    {
      title: 'Jagat Gurutam Mandir',
      category: 'Mobile App',
      description: 'Travel companion app with immersive AR navigation.',
      gradient: 'from-cyan-400 to-cyan-600',
      year: '2023',
      image: jgmImg,
      link: 'https://your-platform-link.com/jagat-gurutam-mandir',
    },
    {
      title: 'Skill Hub Nepal Study Platform',
      category: 'Photography',
      description: 'Commercial photography series tailored for tech startups.',
      gradient: 'from-teal-500 to-cyan-500',
      year: '2024',
      image: skillhubImg,
      link: 'https://skillhubnepal-class.vercel.app/',
    },
    {
      title: 'Sajilo interior Nepal',
      category: 'Video Production',
      description: 'High-energy launch film designed to amplify product impact.',
      gradient: 'from-orange-400 to-orange-500',
      year: '2023',
      image: sajiloImg,
      link: 'https://sajilointerior.com.np/',
    },
    {
      title: 'NextGen Coder',
      category: 'Web3 Platform',
      description: 'Decentralized creative marketplace powered by smart contracts.',
      gradient: 'from-cyan-600 to-teal-700',
      year: '2024',
      image: nextgenImg,
      link: 'https://next-gen-codeers.vercel.app/',
    },
  ];

  return (
    <section
      id="creations"
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute inset-y-10 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-700/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6">
        {/* Header */}
        <header
          className={`max-w-3xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[0.7rem] font-medium tracking-[0.25em] text-slate-300">
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              Things I
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-orange-400 bg-clip-text text-transparent">
              Create
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-300">
            Each project is a mission to blend storytelling, technology, and design into
            experiences people remember. Here&apos;s a glimpse into the kind of work I love
            creating.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
              {creations.length} featured projects
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
              2023 – 2024
            </span>
          </div>
        </header>

        {/* Creations grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {creations.map((creation, index) => {
            const isMedia = ['video', 'photo'].some((key) =>
              creation.category.toLowerCase().includes(key)
            );

            return (
              <article
                key={creation.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]`}
                style={{ transitionDelay: `${index * 120 + 200}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={creation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {/* Visual */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {creation.image ? (
                      <img
                        src={creation.image}
                        alt={creation.title}
                        className={`h-full w-full object-cover transition-transform duration-700 ${
                          hoveredIndex === index ? 'scale-110' : 'scale-100'
                        }`}
                      />
                    ) : (
                      <div
                        className={`h-full w-full bg-gradient-to-br ${creation.gradient} transition-transform duration-700 ${
                          hoveredIndex === index ? 'scale-110' : 'scale-100'
                        }`}
                      />
                    )}

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/25" />

                    {/* Highlight border on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-white/0 transition-all duration-500 group-hover:border-white/20" />

                    {/* Corner action icon */}
                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-black/10">
                      {isMedia ? (
                        <Play className="h-5 w-5 text-white" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                      <div className="transition-all duration-500 group-hover:-translate-y-1">
                        <div className="mb-3 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/70">
                          <span>{creation.category}</span>
                          <span className="h-px w-6 bg-white/40" />
                          <span className="text-white/60">{creation.year}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                          {creation.title}
                        </h3>

                        <p
                          className={`mt-3 max-w-md text-xs md:text-sm text-white/80 transition-all duration-500 ${
                            hoveredIndex === index
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-3'
                          }`}
                        >
                          {creation.description}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-white/70 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <span>View on platform</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-4 flex justify-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a
            href="https://your-platform-link.com/all-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-orange-400 opacity-100 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 tracking-[0.18em] uppercase">
              View All Missions
            </span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}