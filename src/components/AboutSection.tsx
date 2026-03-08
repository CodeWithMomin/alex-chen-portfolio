import { motion } from 'framer-motion';
import { Code2, Database, Cloud, GitBranch, Terminal, Cpu, Globe, Boxes } from 'lucide-react';

const techStack = [
  { name: 'React', icon: Code2 },
  { name: 'Node.js', icon: Terminal },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Python', icon: Terminal },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Boxes },
  { name: 'AWS', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'GraphQL', icon: Globe },
  { name: 'Redis', icon: Cpu },
  { name: 'Next.js', icon: Code2 },
  { name: 'Tailwind', icon: Code2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative" aria-label="About me">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-primary tracking-widest uppercase mb-3 text-center"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono font-bold text-3xl sm:text-5xl mb-16 text-center tracking-tight"
        >
          A bit about me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Profile photo with orbit elements */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="w-52 h-52 rounded-2xl border border-border overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-muted glow-border flex items-center justify-center">
                <span className="font-mono text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">AC</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-52 h-52 rounded-2xl border border-border/30 -z-10" />

              {/* Orbiting dots */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/60 animate-orbit"
                    style={{ animationDelay: `${i * 6.6}s`, animationDuration: '20s' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={0}
              className="text-lg leading-relaxed text-muted-foreground mb-5"
            >
              I'm a full stack developer with <span className="text-foreground font-medium">6+ years</span> of experience crafting performant, accessible web applications.
              I specialize in React ecosystems, cloud-native architectures, and turning complex problems into elegant solutions.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={1}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              When I'm not shipping code, you'll find me contributing to open source, writing technical articles,
              or experimenting with <span className="text-foreground font-medium">creative coding</span> and generative art.
            </motion.p>
          </div>
        </div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 overflow-hidden relative"
          aria-label="Technologies I work with"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee w-max gap-4">
            {[...techStack, ...techStack].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="flex items-center gap-2.5 px-5 py-3 rounded-xl glass-card whitespace-nowrap hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <Icon size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground/80">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
