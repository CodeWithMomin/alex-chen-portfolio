import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border/50" aria-label="Footer">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-mono">© 2026 Alex Chen — Built with passion & too much coffee</p>
        <motion.a href="#" whileHover={{ y: -2 }} className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-mono" aria-label="Back to top">
          Back to top <ArrowUp size={14} />
        </motion.a>
      </div>
    </footer>
  );
}
