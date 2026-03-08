import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-lg tracking-tight">
          <span className="text-primary">alex</span>
          <span className="text-muted-foreground">.dev</span>
        </a>
        {/* Desktop */}
        <ul className="hidden md:flex gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
