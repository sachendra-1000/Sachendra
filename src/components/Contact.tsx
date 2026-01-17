import { useEffect, useState, useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socials = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:shresthasachendra8@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sachendra-1000',
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
    {
      icon: MessageCircle,
      label: 'Viber',
      // replace with your real number, e.g. viber://chat?number=+97798xxxxxxx
      href: 'viber://chat?number=9761907107',
    },
  ];

  return (
    <section
      id="connect"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-black py-24 md:py-32 px-6"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      {/* Soft glows & structure lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute inset-x-8 top-16 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent" />
        <div className="absolute inset-y-10 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-700/30 to-transparent" />
      </div>

      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34,211,238,0.18), transparent 55%)`,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[0.7rem] font-medium tracking-[0.25em] text-slate-300">
              LET&apos;S CONNECT
            </span>
          </div>

          <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
              Let&apos;s Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Something Unreal
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-300">
            Share your idea, product, or challenge—whether it&apos;s a fresh launch or a redesign.
            I&apos;ll get back to you with honest thoughts and clear next steps.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Form card */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-slate-50/0 to-orange-500/0 opacity-0 transition-opacity duration-500 hover:opacity-100 hover:from-cyan-500/6 hover:via-slate-50/1 hover:to-orange-500/6" />
              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Send a message</h3>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                    Typical reply in &lt; 24h
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-200">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="How should I call you?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-200">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Where can I reach you?"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-200">
                      Project / message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your vision, goals, timeline, or anything important."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-3.5 text-sm font-medium text-white"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-orange-400 opacity-100 transition-opacity duration-300 group-hover:opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10 tracking-[0.15em] uppercase">
                      Launch Mission
                    </span>
                    <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick connect + availability */}
          <div
            className={`space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            {/* Quick connect card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-xl">
              <h3 className="mb-2 text-xl md:text-2xl font-semibold text-white">
                Quick connect
              </h3>
              <p className="mb-6 text-xs md:text-sm text-slate-300">
                Prefer another channel? Reach out directly and I&apos;ll follow up as soon as I can.
              </p>

              <div className="space-y-3">
                {socials.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-white/10"
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 transition-all duration-300 group-hover:from-cyan-500/25 group-hover:to-orange-500/25">
                      <social.icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                        {social.label}
                      </span>
                      <span className="text-xs text-slate-200">
                        {social.label === 'Email'
                          ? 'shresthasachendra8@gmail.com'
                          : social.label === 'Viber'
                          ? 'Chat on Viber'
                          : 'Visit profile'}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/12 via-slate-900/60 to-orange-500/12 p-7 md:p-8 backdrop-blur-xl">
              <div className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400">
                AVAILABILITY
              </div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)] animate-pulse" />
                <span className="text-base md:text-lg font-light text-slate-50">
                  Open for select projects
                </span>
              </div>
              <p className="mb-3 text-sm text-slate-300">
                Currently accepting collaborations for 2024, with a focus on digital products,
                immersive web experiences, and creative launches.
              </p>
              <p className="text-xs text-slate-400">
                Based remotely · Comfortable across time zones · English & Nepali.
              </p>
            </div>
          </div>
        </div>


       
      </div>
    </section>
  );
}