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
      {/* Particle grid background */}
      <div className="absolute inset-0" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(186 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(186 100% 50%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-mono font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight mb-6">
          {displayed}
          <span className={`typewriter-cursor text-primary ${done ? '' : ''}`}>|</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 font-sans">
          Full Stack Developer · Open Source Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(186_100%_50%/0.4)] transition-all duration-300"
          >
            View My Work <ArrowDown size={18} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 font-semibold transition-all duration-300"
          >
            Download Resume <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
