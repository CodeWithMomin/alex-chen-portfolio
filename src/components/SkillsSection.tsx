import { motion } from 'framer-motion';

const skillCategories = [
  { category: 'Frontend', skills: [{ name: 'React.js / Next.js', level: 88 }, { name: 'TypeScript', level: 82 }, { name: 'Tailwind CSS / Bootstrap', level: 90 }, { name: 'Material UI', level: 78 }] },
  { category: 'Backend', skills: [{ name: 'Node.js / Express.js', level: 85 }, { name: 'Python', level: 80 }, { name: 'PostgreSQL / MySQL', level: 82 }, { name: 'MongoDB', level: 78 }] },
  { category: 'Data & ML', skills: [{ name: 'Pandas / NumPy', level: 80 }, { name: 'Matplotlib', level: 75 }, { name: 'Machine Learning', level: 72 }, { name: 'Data Analytics', level: 78 }] },
  { category: 'Tools', skills: [{ name: 'GitHub', level: 88 }, { name: 'Figma', level: 75 }, { name: 'CI/CD Pipelines', level: 70 }, { name: 'Performance & A11y', level: 72 }] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 relative" aria-label="Skills">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" aria-hidden="true" />
      <div className="max-w-5xl mx-auto relative">
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="text-xs font-mono text-primary tracking-widest uppercase mb-3 text-center">Expertise</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: 0.05 }} className="font-mono font-bold text-3xl sm:text-5xl mb-16 text-center tracking-tight">Skills & Tools</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div key={cat.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: ci * 0.1 }} whileHover={{ y: -3 }} className="glass-card rounded-2xl p-8 transition-shadow duration-300 hover:shadow-[0_8px_30px_-8px_hsl(24_100%_60%/0.08)]">
              <h3 className="font-mono font-semibold text-sm tracking-widest uppercase mb-6 text-primary">{cat.category}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.08 }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-accent" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: ci * 0.1 + si * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
