import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'SkillShare Social',
    description: 'A skill-sharing platform combining the best of LinkedIn and GitHub — users share their skills, projects, and connect with like-minded professionals.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    gradient: 'from-violet-500/10 via-purple-500/5 to-transparent',
    accent: 'text-violet-400',
  },
  {
    name: 'Task Management App',
    description: 'A full-featured task management application with project boards, task assignments, progress tracking, and team collaboration.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    gradient: 'from-orange-500/10 via-rose-500/5 to-transparent',
    accent: 'text-orange-400',
  },
  {
    name: 'E-Commerce Web App',
    description: 'A complete e-commerce platform with product listings, cart management, secure checkout, and order tracking functionality.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Material UI'],
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    accent: 'text-emerald-400',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative" aria-label="Projects">
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[80px]" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-mono font-bold text-3xl sm:text-5xl tracking-tight">Projects</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 25 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 25 });

  const onMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl glass-card overflow-hidden transition-shadow duration-300 hover:shadow-[0_15px_50px_-12px_hsl(24_100%_60%/0.12)] will-change-transform"
    >
      <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.2) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
        <span className="font-mono text-3xl font-bold text-foreground/20 group-hover:text-foreground/30 transition-all duration-300 group-hover:scale-110">{project.name.split(' ').map(w => w[0]).join('')}</span>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={14} className="text-foreground/60" />
        </div>
      </div>
      <div className="p-6">
        <h3 className={`font-mono font-bold text-lg mb-2 ${project.accent}`}>{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted/80 text-muted-foreground font-medium">{tag}</span>)}
        </div>
        <div className="flex gap-4 pt-2 border-t border-border/50">
          <a href="#" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium" aria-label={`View ${project.name} on GitHub`}><Github size={14} /> Source</a>
          <a href="#" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium" aria-label={`View ${project.name} live demo`}><ExternalLink size={14} /> Live Demo</a>
        </div>
      </div>
    </motion.div>
  );
}
