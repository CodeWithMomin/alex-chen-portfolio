import { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';

const fullText = "Hi, I'm Alex Chen";

export function HeroSection() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Dramatic spotlight gradients */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Primary warm spotlight */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            left: '20%',
            top: '10%',
            background: 'radial-gradient(circle, hsl(24 100% 60% / 0.08) 0%, transparent 70%)',
            animation: 'spotlight 8s ease-in-out infinite',
          }}
        />
        {/* Purple accent spotlight */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            right: '10%',
            bottom: '20%',
            background: 'radial-gradient(circle, hsl(270 80% 65% / 0.06) 0%, transparent 70%)',
            animation: 'spotlight 10s ease-in-out infinite 2s',
          }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0
                ? 'hsl(24 100% 60% / 0.4)'
                : i % 3 === 1
                  ? 'hsl(270 80% 65% / 0.3)'
                  : 'hsl(0 0% 80% / 0.2)',
              animation: `float-particle ${5 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-medium text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </div>

        <h1 className="font-mono font-extrabold text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-6 leading-[0.9]">
          <span className="text-shimmer">{displayed}</span>
          <span className={`typewriter-cursor text-primary`}>|</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 font-sans max-w-xl mx-auto leading-relaxed">
          Full Stack Developer · Open Source Enthusiast
          <br />
          <span className="text-sm">Crafting performant web experiences with modern tools</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:shadow-[0_0_50px_hsl(24_100%_60%/0.3)] transition-all duration-500 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card text-foreground font-semibold text-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-0.5 gradient-border"
          >
            Download Resume <Download size={16} />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
