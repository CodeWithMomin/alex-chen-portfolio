import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/CodeWithMomin' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mominzahoor11' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/_mominzahoor' },
  { icon: Mail, label: 'Email', href: 'mailto:mominzahoor11@gmail.com' },
];

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:mominzahoor11@gmail.com?subject=${subject}&body=${body}`, '_self');
  };

  const inputClass = "w-full px-5 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200";

  return (
    <section id="contact" className="py-32 px-6 relative" aria-label="Contact">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/15 to-transparent" aria-hidden="true" />

      <div className="max-w-xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="text-center mb-12">
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-mono font-bold text-3xl sm:text-5xl mb-4 tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground text-sm">Have a project in mind? Let's build something great together.</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-4 glass-card rounded-2xl p-8">
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Name</label>
            <input id="name" type="text" required className={inputClass} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
            <input id="email" type="email" required className={inputClass} placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
            <textarea id="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about your project..." value={message} onChange={e => setMessage(e.target.value)} />
          </div>
          <motion.button type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:shadow-[0_0_35px_hsl(24_100%_60%/0.2)] transition-shadow duration-300">
            Send Message <Send size={16} />
          </motion.button>
        </motion.form>

        <motion.div className="flex justify-center gap-3 mt-12" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          {socials.map(s => {
            const Icon = s.icon;
            return (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200">
                <Icon size={18} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
