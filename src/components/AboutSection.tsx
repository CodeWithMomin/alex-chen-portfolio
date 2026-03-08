import { useScrollReveal } from '@/hooks/useScrollReveal';
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

export function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6" aria-label="About me">
      <div ref={ref} className="scroll-reveal max-w-4xl mx-auto">
        <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-12 text-center">
          <span className="text-primary">{'// '}</span>About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile photo */}
          <div className="shrink-0">
            <div className="w-44 h-44 rounded-full border-2 border-primary glow-border overflow-hidden bg-secondary flex items-center justify-center">
              <span className="font-mono text-5xl font-bold text-primary">AC</span>
            </div>
          </div>

          {/* Bio */}
          <div className="text-center md:text-left">
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              I'm a full stack developer with 6+ years of experience crafting performant, accessible web applications. 
              I specialize in React ecosystems, cloud-native architectures, and turning complex problems into elegant solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not shipping code, you'll find me contributing to open source, writing technical articles, 
              or experimenting with creative coding and generative art.
            </p>
          </div>
        </div>

        {/* Tech stack marquee */}
        <div className="mt-16 overflow-hidden relative" aria-label="Technologies I work with">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee w-max gap-8">
            {[...techStack, ...techStack].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary/50 whitespace-nowrap">
                  <Icon size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
