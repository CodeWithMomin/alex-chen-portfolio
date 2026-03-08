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
      'Dean\'s List all semesters, graduated with honors',
      'Teaching assistant for Data Structures & Algorithms',
      'Capstone: distributed systems project on fault-tolerant consensus',
    ],
  },
];

export function ExperienceSection() {
  const headerRef = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-6" aria-label="Experience">
      <div className="max-w-3xl mx-auto">
        <h2 ref={headerRef} className="scroll-reveal font-mono font-bold text-3xl sm:text-4xl mb-16 text-center">
          <span className="text-primary">{'// '}</span>Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12">
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
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-1.5 z-10" aria-hidden="true" />

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
        <div className="inline-flex items-center gap-2 text-primary mb-1">
          {entry.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
          <span className="text-xs font-mono text-muted-foreground">{entry.date}</span>
        </div>
        <h3 className="font-mono font-bold text-foreground text-lg">{entry.title}</h3>
        <p className="text-primary text-sm font-semibold mb-3">{entry.org}</p>
        <ul className={`space-y-1.5 text-sm text-muted-foreground ${isLeft ? 'md:text-right' : ''}`}>
          {entry.points.map((p, j) => (
            <li key={j}>• {p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
