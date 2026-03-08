import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'CSS / Tailwind', level: 90 },
      { name: 'Performance & A11y', level: 88 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 87 },
      { name: 'GraphQL / REST', level: 88 },
    ],
  },
  {
    category: 'DevOps / Cloud',
    skills: [
      { name: 'AWS (EC2, Lambda, S3)', level: 85 },
      { name: 'Docker / K8s', level: 80 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'Terraform', level: 72 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Linux / Shell', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Testing (Jest, Cypress)', level: 86 },
    ],
  },
];

export function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-32 px-6 relative" aria-label="Skills">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" aria-hidden="true" />

      <div ref={ref} className="scroll-reveal max-w-5xl mx-auto relative">
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3 text-center">Expertise</p>
        <h2 className="font-mono font-bold text-3xl sm:text-5xl mb-16 text-center tracking-tight">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map(cat => (
            <div key={cat.category} className="glass-card rounded-2xl p-8">
              <h3 className="font-mono font-semibold text-sm tracking-widest uppercase mb-6 text-primary">{cat.category}</h3>
              <div className="space-y-5">
                {cat.skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useScrollReveal(0.3);

  return (
    <div ref={ref} className="scroll-reveal">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-accent skill-bar-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
