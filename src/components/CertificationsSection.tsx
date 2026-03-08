import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  { title: 'MERN Stack Development', org: 'Gildware Technologies', description: 'Full-stack web development with MongoDB, Express.js, React.js, and Node.js' },
  { title: 'Machine Learning', org: 'Cetpa Infotech Pvt Ltd', description: 'Supervised & unsupervised models, data analysis, and ML workflows using Python' },
];

export function CertificationsSection() {
  return (
    <section className="py-32 px-6 relative" aria-label="Certifications">
      <div className="max-w-3xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="font-mono font-bold text-3xl sm:text-5xl tracking-tight">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-8 transition-shadow duration-300 hover:shadow-[0_8px_30px_-8px_hsl(24_100%_60%/0.08)]"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Award size={20} className="text-primary" />
              </div>
              <h3 className="font-mono font-bold text-foreground text-base mb-1">{cert.title}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{cert.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
