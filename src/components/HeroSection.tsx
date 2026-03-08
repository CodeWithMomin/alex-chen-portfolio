import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, ChevronDown } from 'lucide-react';

const fullText = "Hi, I'm Momin Zahoor";

export function HeroSection() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
        setTimeout(() => setShowContent(true), 200);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 2,
      duration: `${6 + Math.random() * 6}s`,
      delay: `${Math.random() * 4}s`,
      color: i % 3 === 0 ? 'hsl(24 100% 60% / 0.35)' : i % 3 === 1 ? 'hsl(270 80% 65% / 0.25)' : 'hsl(var(--foreground) / 0.15)',
    })),
  []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-50" style={{ left: '15%', top: '10%', background: 'radial-gradient(circle, hsl(24 100% 60% / 0.07) 0%, transparent 70%)' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-40" style={{ right: '10%', bottom: '20%', background: 'radial-gradient(circle, hsl(270 80% 65% / 0.05) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        {particles.map(p => (
          <div key={p.id} className="absolute rounded-full" style={{ width: p.size, height: p.size, left: p.left, top: p.top, background: p.color, animation: `float-particle ${p.duration} ease-in-out infinite`, animationDelay: p.delay }} />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-medium text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for work
        </motion.div>

        <h1 className="font-mono font-extrabold text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-6 leading-[0.9]">
          <span className="text-shimmer">{displayed}</span>
          <span className="typewriter-cursor text-primary">|</span>
        </h1>

        <AnimatePresence>
          {showContent && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 font-sans max-w-xl mx-auto leading-relaxed">
                Full Stack Developer
                <br />
                <span className="text-sm">Crafting performant web experiences with modern tools</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#projects" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:shadow-[0_0_40px_hsl(24_100%_60%/0.25)] transition-all duration-300 hover:-translate-y-1 active:scale-95">
                  View My Work <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card text-foreground font-semibold text-sm transition-all duration-300 hover:-translate-y-1 active:scale-95 gradient-border">
                  Download Resume <Download size={16} />
                </a>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-border/30">
                {[{ value: '1+', label: 'Year Experience' }, { value: '10+', label: 'Projects Built' }, { value: '3+', label: 'Technologies Mastered' }].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-mono font-bold text-2xl text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
