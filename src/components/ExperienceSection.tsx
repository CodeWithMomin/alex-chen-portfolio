import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const entries = [
  { type: 'work' as const, title: 'Full Stack Developer Intern', org: 'Hostelbird', date: '2024 — Present', points: ['Building and maintaining full-stack features using React, Node.js, and databases', 'Collaborating with the team on product development and UI/UX improvements', 'Working with REST APIs and integrating third-party services'] },
  { type: 'work' as const, title: 'Intern', org: 'Cognifyz', date: '2022', points: ['Gained hands-on experience with web development and data projects', 'Worked on real-world tasks involving data analysis and visualization', 'Strengthened skills in Python and data-driven problem solving'] },
  { type: 'education' as const, title: 'B.Tech in Computer Science Engineering', org: 'Islamic University of Science and Technology', date: '2020 — 2024', points: ['Specialized in software development and data science', 'Built multiple full-stack projects and ML models during coursework', 'Strong foundation in algorithms, data structures, and system design'] },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6" aria-label="Experience">
      <div className="max-w-3xl mx-auto">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Journey</p>
          <h2 className="font-mono font-bold text-3xl sm:text-5xl tracking-tight">Experience</h2>
        </motion.div>

        <div className="relative">
          <motion.div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} aria-hidden="true" />

          <div className="space-y-16">
            {entries.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i} className={`relative flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`} initial={{ opacity: 0, x: isLeft ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <motion.div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 mt-1 z-10" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 300 }} aria-hidden="true">
                    <div className="w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_10px_hsl(24_100%_60%/0.4)]" />
                  </motion.div>

                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:text-right' : ''}`}>
                    <div className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_hsl(24_100%_60%/0.06)]">
                      <div className={`inline-flex items-center gap-2 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        {entry.type === 'work' ? <Briefcase size={14} className="text-primary" /> : <GraduationCap size={14} className="text-accent" />}
                        <span className="text-xs font-mono text-muted-foreground">{entry.date}</span>
                      </div>
                      <h3 className="font-mono font-bold text-foreground text-base mb-0.5">{entry.title}</h3>
                      <p className="text-primary text-sm font-semibold mb-4">{entry.org}</p>
                      <ul className={`space-y-2 text-sm text-muted-foreground ${isLeft ? 'md:text-right' : ''}`}>
                        {entry.points.map((p, j) => <li key={j} className="leading-relaxed">{p}</li>)}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
