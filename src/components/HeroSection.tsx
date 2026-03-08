import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, ChevronDown } from 'lucide-react';

const fullText = "Hi, I'm Alex Chen";

export function HeroSection() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(interval);
          setDone(true);
          setTimeout(() => setShowContent(true), 300);
        }
      }, 70);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Dramatic spotlight gradients */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            left: '20%',
            top: '10%',
            background: 'radial-gradient(circle, hsl(24 100% 60% / 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            right: '10%',
            bottom: '20%',
            background: 'radial-gradient(circle, hsl(270 80% 65% / 0.06) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Particles with varied colors */}
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
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-medium text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </motion.div>

        <h1 className="font-mono font-extrabold text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-6 leading-[0.9]">
          <span className="text-shimmer">{displayed}</span>
          <span className="typewriter-cursor text-primary">|</span>
        </h1>

        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 font-sans max-w-xl mx-auto leading-relaxed">
                Full Stack Developer · Open Source Enthusiast
                <br />
                <span className="text-sm">Crafting performant web experiences with modern tools</span>
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:shadow-[0_0_50px_hsl(24_100%_60%/0.3)] transition-all duration-500 hover:-translate-y-1 active:scale-95"
                >
                  View My Work
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card text-foreground font-semibold text-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 active:scale-95 gradient-border"
                >
                  Download Resume <Download size={16} />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats bar */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-border/30"
            >
              {[
                { value: '6+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Built' },
                { value: '12K+', label: 'GitHub Stars' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-mono font-bold text-2xl text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
