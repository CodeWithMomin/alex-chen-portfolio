import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useThemeToggle } from '@/components/ThemeProvider';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useThemeToggle();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-lg tracking-tight">
          <span className="text-primary">momin</span>
          <span className="text-muted-foreground">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200">
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="ml-3 w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} className="p-2 text-muted-foreground hover:text-foreground" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-foreground p-2" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-1 overflow-hidden">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
