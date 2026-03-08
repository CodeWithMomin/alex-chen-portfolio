import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border" aria-label="Footer">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Alex Chen. Built with passion & too much coffee.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label="Back to top"
        >
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
