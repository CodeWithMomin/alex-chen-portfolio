import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'CloudSync Dashboard',
    description: 'Real-time infrastructure monitoring dashboard with WebSocket streams, alerting, and team collaboration.',
    tags: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    name: 'DevFlow CLI',
    description: 'Open-source CLI tool for automating development workflows — scaffolding, linting, deployment pipelines.',
    tags: ['Node.js', 'TypeScript', 'Commander'],
    color: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    name: 'NoteGraph',
    description: 'Knowledge management app with bidirectional linking, graph visualization, and AI-powered search.',
    tags: ['Next.js', 'PostgreSQL', 'OpenAI', 'Prisma'],
    color: 'from-violet-500/20 to-violet-500/5',
  },
  {
    name: 'PixelForge',
    description: 'Browser-based creative coding playground with real-time preview, GLSL shaders, and exportable artwork.',
    tags: ['React', 'WebGL', 'Canvas API'],
    color: 'from-rose-500/20 to-rose-500/5',
  },
  {
    name: 'AuthShield',
    description: 'Authentication microservice with OAuth2, MFA support, rate limiting, and comprehensive audit logging.',
    tags: ['Go', 'Redis', 'PostgreSQL', 'Docker'],
    color: 'from-amber-500/20 to-amber-500/5',
  },
  {
    name: 'DataPipe',
    description: 'ETL pipeline framework for processing large-scale datasets with configurable transformations and scheduling.',
    tags: ['Python', 'Apache Kafka', 'AWS Lambda'],
    color: 'from-sky-500/20 to-sky-500/5',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <h2 ref={ref} className="scroll-reveal font-mono font-bold text-3xl sm:text-4xl mb-12 text-center">
      <span className="text-primary">{'// '}</span>Projects
    </h2>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="scroll-reveal group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(186_100%_50%/0.15)]"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Preview area */}
      <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
        <span className="font-mono text-2xl font-bold text-foreground/60">{project.name.split(' ').map(w => w[0]).join('')}</span>
      </div>

      <div className="p-6">
        <h3 className="font-mono font-bold text-lg mb-2 text-foreground">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-primary font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github size={16} /> Code
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label={`View ${project.name} live demo`}
          >
            <ExternalLink size={16} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}
