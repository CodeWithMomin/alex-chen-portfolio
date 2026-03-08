import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com' },
  { icon: Mail, label: 'Email', href: 'mailto:alex@example.com' },
];

export function ContactSection() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: '✉️ Message sent!', description: "Thanks for reaching out. I'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const inputClass = "w-full px-5 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300";

  return (
    <section id="contact" className="py-32 px-6 relative" aria-label="Contact">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px]" aria-hidden="true" />

      <div className="max-w-xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-xs font-mono text-primary tracking-widest uppercase mb-3 text-center"
        >Contact</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="font-mono font-bold text-3xl sm:text-5xl mb-4 text-center tracking-tight"
        >Get In Touch</motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-12 text-sm"
        >Have a project in mind? Let's build something great together.</motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4 glass-card rounded-2xl p-8"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Name</label>
            <input id="name" type="text" required className={inputClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
            <input id="email" type="email" required className={inputClass} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
            <textarea id="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about your project..." />
          </div>
          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ y: -2, boxShadow: '0 0 50px hsl(24 100% 60% / 0.25)' }}
            whileTap={{ scale: 0.97 }}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm transition-all duration-500 disabled:opacity-50"
          >
            {sending ? 'Sending...' : 'Send Message'} <Send size={16} />
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, boxShadow: '0 0 25px hsl(24 100% 60% / 0.15)' }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-300"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
