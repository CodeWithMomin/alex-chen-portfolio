import { motion } from 'framer-motion';
import { Code2, Database, GitBranch, Terminal, Globe, Boxes, BarChart3, Palette } from 'lucide-react';

const techStack = [
  { name: 'React.js', icon: Code2 },
  { name: 'Next.js', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Terminal },
  { name: 'Express.js', icon: Terminal },
  { name: 'Python', icon: Terminal },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Bootstrap', icon: Palette },
  { name: 'Material UI', icon: Palette },
  { name: 'Pandas', icon: BarChart3 },
  { name: 'NumPy', icon: BarChart3 },
  { name: 'GitHub', icon: GitBranch },
  { name: 'Figma', icon: Palette },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative" aria-label="About me">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative">
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="text-xs font-mono text-primary tracking-widest uppercase mb-3 text-center">About</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: 0.05 }} className="font-mono font-bold text-3xl sm:text-5xl mb-16 text-center tracking-tight">A bit about me</motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div className="shrink-0" initial={{ opacity: 0, scale: 0.85, rotate: -3 }} whileInView={{ opacity: 1, scale: 1, rotate: 3 }} whileHover={{ rotate: 0, scale: 1.03 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }}>
            <div className="relative">
              <div className="w-52 h-52 rounded-2xl border border-border overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-muted glow-border flex items-center justify-center">
                <span className="font-mono text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">MZ</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-52 h-52 rounded-2xl border border-border/30 -z-10" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                {[0, 1, 2].map(i => (
                  <div key={i} className="absolute w-2 h-2 rounded-full bg-primary/60 animate-orbit" style={{ animationDelay: `${i * 6.6}s` }} />
                ))}
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-lg leading-relaxed text-muted-foreground mb-5">
              Full Stack Developer skilled in building scalable web applications using <span className="text-foreground font-medium">Next.js, React.js, Node.js, Express.js, PostgreSQL, and MongoDB</span>. Experienced in creating responsive UI with Tailwind CSS and developing secure RESTful APIs.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-lg leading-relaxed text-muted-foreground">
              Familiar with deployment, real-time features, and <span className="text-foreground font-medium">Machine Learning integration</span>. Passionate about writing clean code and building impactful, user-focused digital solutions.
            </motion.p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-20 overflow-hidden relative" aria-label="Technologies I work with">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee w-max gap-4">
            {[...techStack, ...techStack].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="flex items-center gap-2.5 px-5 py-3 rounded-xl glass-card whitespace-nowrap hover:border-primary/30 hover:-translate-y-1 transition-all duration-200">
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
