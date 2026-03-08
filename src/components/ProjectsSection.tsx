import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'CloudSync Dashboard',
    description: 'Real-time infrastructure monitoring dashboard with WebSocket streams, alerting, and team collaboration.',
    tags: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    gradient: 'from-orange-500/10 via-rose-500/5 to-transparent',
    accent: 'text-orange-400',
  },
  {
    name: 'DevFlow CLI',
    description: 'Open-source CLI tool for automating development workflows — scaffolding, linting, deployment pipelines.',
    tags: ['Node.js', 'TypeScript', 'Commander'],
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    accent: 'text-emerald-400',
  },
  {
    name: 'NoteGraph',
    description: 'Knowledge management app with bidirectional linking, graph visualization, and AI-powered search.',
    tags: ['Next.js', 'PostgreSQL', 'OpenAI', 'Prisma'],
    gradient: 'from-violet-500/10 via-purple-500/5 to-transparent',
    accent: 'text-violet-400',
  },
  {
    name: 'PixelForge',
    description: 'Browser-based creative coding playground with real-time preview, GLSL shaders, and exportable artwork.',
    tags: ['React', 'WebGL', 'Canvas API'],
    gradient: 'from-pink-500/10 via-rose-500/5 to-transparent',
    accent: 'text-pink-400',
  },
  {
    name: 'AuthShield',
    description: 'Authentication microservice with OAuth2, MFA support, rate limiting, and comprehensive audit logging.',
    tags: ['Go', 'Redis', 'PostgreSQL', 'Docker'],
    gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    accent: 'text-amber-400',
  },
  {
    name: 'DataPipe',
    description: 'ETL pipeline framework for processing large-scale datasets with configurable transformations and scheduling.',
    tags: ['Python', 'Apache Kafka', 'AWS Lambda'],
    gradient: 'from-sky-500/10 via-blue-500/5 to-transparent',
    accent: 'text-sky-400',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative" aria-label="Projects">
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px]" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="scroll-reveal mb-16 text-center">
      <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Portfolio</p>
      <h2 className="font-mono font-bold text-3xl sm:text-5xl tracking-tight">Selected Work</h2>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="scroll-reveal group relative rounded-2xl glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(24_100%_60%/0.15)]"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Preview gradient area */}
      <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        <span className="font-mono text-3xl font-bold text-foreground/20 group-hover:text-foreground/30 transition-all duration-500 group-hover:scale-110">
          {project.name.split(' ').map(w => w[0]).join('')}
        </span>
        {/* Hover arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={14} className="text-foreground/60" />
        </div>
      </div>

      <div className="p-6">
        <h3 className={`font-mono font-bold text-lg mb-2 ${project.accent}`}>{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted/80 text-muted-foreground font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 border-t border-border/50">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github size={14} /> Source
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
            aria-label={`View ${project.name} live demo`}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
