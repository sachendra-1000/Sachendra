import { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, Star, MapPin, Hotel, ShoppingCart } from 'lucide-react';

// Local images
import kripaluImg from '../assets/kripalu.jpeg';
import sajiloImg from '../assets/sajilo.jpeg';
import nextgenImg from '../assets/nextgen.jpeg';
import myImg from '../assets/divine.jpeg';
import jgmImg from '../assets/jgm.jpeg';

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

  const featuredProject = {
    title: 'Explore Nepal',
    category: 'Tourism Platform',
    description: 'A modern tourism platform developed to promote Nepal\'s natural beauty, cultural heritage, trekking destinations, hotels, tour packages, transportation services, and local experiences.',
    year: '2024',
    image: nextgenImg,
    link: 'https://explore-nepal-oyb7.vercel.app/',
    features: [
      'Destination Explorer',
      'Hotel Booking',
      'Tour Package Booking',
      'AI Travel Assistant',
      'Interactive Maps',
      'Responsive Design',
      'Secure Authentication',
      'Admin Dashboard',
      'Provider Dashboard',
      'Customer Dashboard',
      'Online Booking System',
      'Firebase & MongoDB Integration',
    ],
  };

  const otherProjects = [
    {
      title: 'Kripalu Udhyan',
      category: 'Web Experience',
      description: 'A beautiful web experience for Kripalu Udhyan.',
      year: '2024',
      image: kripaluImg,
      link: 'https://ambitious-grass-049bca800.1.azurestaticapps.net/',
    },
    {
      title: 'Hotel Taj Mahal Everest',
      category: 'Hotel Website',
      description: 'Modern hotel booking and information platform.',
      year: '2024',
      image: myImg,
      link: '#',
    },
    {
      title: 'eCommerce Platform',
      category: 'Online Store',
      description: 'Full-featured eCommerce application with cart and checkout.',
      year: '2024',
      image: sajiloImg,
      link: '#',
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
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-300">
            Each project is built with modern technologies, clean code, and a focus on user experience.
            Here is a showcase of my best work.
          </p>
        </header>

        {/* Featured Project: Explore Nepal */}
        <article
          className={`group relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-orange-500/10 backdrop-blur-xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_60px_rgba(56,189,248,0.2)]`}
          style={{ transitionDelay: '200ms' }}
          onMouseEnter={() => setHoveredIndex(-1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
              {featuredProject.image ? (
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className={`h-full w-full object-cover transition-transform duration-700 ${
                    hoveredIndex === -1 ? 'scale-110' : 'scale-100'
                  }`}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-cyan-600 to-teal-700" />
              )}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border border-white/20 bg-black/40 backdrop-blur-xl px-6 py-3">
                  <MapPin className="h-6 w-6 text-cyan-300 inline mr-2" />
                  <span className="text-white font-semibold">Explore Nepal</span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="mb-3 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-400">
                <Star className="h-4 w-4 text-orange-400" />
                <span>{featuredProject.category}</span>
                <span className="h-px w-6 bg-white/40" />
                <span>{featuredProject.year}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-sm text-slate-300 mb-6">
                {featuredProject.description}
              </p>

              <div className="mb-6">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400 mb-3">
                  Key Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span className="uppercase tracking-[0.15em]">View Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </a>
            </div>
          </div>
        </article>

        {/* Other Projects grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {otherProjects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]`}
              style={{ transitionDelay: `${(index + 1) * 150 + 300}ms` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-teal-600" />
                  )}

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/25" />

                  {/* Highlight border on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-white/0 transition-all duration-500 group-hover:border-white/20" />

                  {/* Corner action icon */}
                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-black/10">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="transition-all duration-500 group-hover:-translate-y-1">
                      <div className="mb-3 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/70">
                        <span>{project.category}</span>
                        <span className="h-px w-6 bg-white/40" />
                        <span className="text-white/60">{project.year}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-md text-xs md:text-sm text-white/80 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {project.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-white/70 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        <span>View Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
