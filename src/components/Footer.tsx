import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Digital DNA', href: '#dna' },
    { label: 'Creations', href: '#creations' },
    { label: 'Contact', href: '#connect' },
  ];

  const socials = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:shresthasachendra8@gmail.com', // ✅ opens email client
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sachendra-1000',   // ✅ opens GitHub
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
    },
    {
      icon: Twitter,
      label: 'Twitter/X',
      href: '#',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-16 border-t border-white/10 bg-black/80 text-slate-200 backdrop-blur-xl">
      {/* Top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:py-12">
        {/* Upper part */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand + text */}
          <div className="max-w-md space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.22em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              NextGen · Digital Studio
            </div>

            <h3 className="text-lg font-semibold text-white">
              Built by Sachendra Shrestha · Founder of NextGen
            </h3>
            <p className="text-sm text-slate-400">
              Modern websites, apps, and digital experiences focused on performance,
              clean design, and real business impact.
            </p>
          </div>

          {/* Navigation + socials */}
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
            {/* Quick nav */}
            <nav className="flex flex-wrap gap-3 text-xs md:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 transition-all duration-200 hover:border-cyan-400/60 hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/70 hover:bg-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-cyan-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-4 text-[0.75rem] text-slate-500 md:flex-row">
          <p>© {year} NextGen · All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-slate-200 transition-all duration-200 hover:border-cyan-400/70 hover:bg-white/10"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}