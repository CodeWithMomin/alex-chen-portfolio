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
    <section id="skills" className="py-24 px-6 bg-secondary/30" aria-label="Skills">
      <div ref={ref} className="scroll-reveal max-w-5xl mx-auto">
        <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-12 text-center">
          <span className="text-primary">{'// '}</span>Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map(cat => (
            <div key={cat.category}>
              <h3 className="font-mono font-semibold text-lg mb-5 text-primary">{cat.category}</h3>
              <div className="space-y-4">
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
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 skill-bar-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
