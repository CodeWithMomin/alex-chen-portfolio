import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com' },
  { icon: Mail, label: 'Email', href: 'mailto:alex@example.com' },
];

export function ContactSection() {
  const ref = useScrollReveal();
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

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30" aria-label="Contact">
      <div ref={ref} className="scroll-reveal max-w-2xl mx-auto">
        <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-12 text-center">
          <span className="text-primary">{'// '}</span>Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(186_100%_50%/0.4)] transition-all duration-300 disabled:opacity-50"
          >
            {sending ? 'Sending...' : 'Send Message'} <Send size={18} />
          </button>
        </form>

        {/* Social links */}
        <div className="flex justify-center gap-4 mt-12">
          {socials.map(s => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_hsl(186_100%_50%/0.2)] transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
