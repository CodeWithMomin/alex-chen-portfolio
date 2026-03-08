import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap } from 'lucide-react';

const entries = [
  {
    type: 'work' as const,
    title: 'Senior Full Stack Engineer',
    org: 'Vercel',
    date: 'Jan 2023 — Present',
    points: [
      'Lead development of internal tooling platform serving 200+ engineers',
      'Reduced deploy times by 40% through infrastructure optimizations',
      'Mentored 4 junior developers and led architecture review sessions',
    ],
  },
  {
    type: 'work' as const,
    title: 'Full Stack Developer',
    org: 'Stripe',
    date: 'Mar 2020 — Dec 2022',
    points: [
      'Built real-time payment analytics dashboard processing 1M+ events/day',
      'Designed and shipped OAuth2 integration used by 500+ merchants',
      'Contributed to open-source SDK with 12K+ GitHub stars',
    ],
  },
  {
    type: 'work' as const,
    title: 'Frontend Developer',
    org: 'Shopify',
    date: 'Jun 2018 — Feb 2020',
    points: [
      'Developed merchant-facing React components in the Polaris design system',
      'Improved Lighthouse scores from 62 to 94 across key pages',
      'Shipped A/B tested checkout flow that increased conversion by 8%',
    ],
  },
  {
    type: 'education' as const,
    title: 'B.Sc. Computer Science',
    org: 'University of Toronto',
    date: '2014 — 2018',
    points: [
      "Dean's List all semesters, graduated with honors",
      'Teaching assistant for Data Structures & Algorithms',
      'Capstone: distributed systems project on fault-tolerant consensus',
    ],
  },
];

export function ExperienceSection() {
  const headerRef = useScrollReveal();

  return (
    <section id="experience" className="py-32 px-6" aria-label="Experience">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="scroll-reveal text-center mb-20">
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Journey</p>
          <h2 className="font-mono font-bold text-3xl sm:text-5xl tracking-tight">Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" aria-hidden="true" />

          <div className="space-y-16">
            {entries.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({ entry, index }: { entry: typeof entries[0]; index: number }) {
  const ref = useScrollReveal();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`scroll-reveal relative flex items-start gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Dot with glow */}
      <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 mt-1 z-10" aria-hidden="true">
        <div className="w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_12px_hsl(24_100%_60%/0.5)]" />
      </div>

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:text-right md:pr-0' : 'md:pl-0'}`}>
        <div className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all duration-500">
          <div className={`inline-flex items-center gap-2 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            {entry.type === 'work' ? (
              <Briefcase size={14} className="text-primary" />
            ) : (
              <GraduationCap size={14} className="text-accent" />
            )}
            <span className="text-xs font-mono text-muted-foreground">{entry.date}</span>
          </div>
          <h3 className="font-mono font-bold text-foreground text-base mb-0.5">{entry.title}</h3>
          <p className="text-primary text-sm font-semibold mb-4">{entry.org}</p>
          <ul className={`space-y-2 text-sm text-muted-foreground ${isLeft ? 'md:text-right' : ''}`}>
            {entry.points.map((p, j) => (
              <li key={j} className="leading-relaxed">{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
