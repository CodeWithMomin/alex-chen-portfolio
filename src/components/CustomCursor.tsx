import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    setVisible(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX - 12, y: e.clientY - 12 });
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea')) {
        setHovering(true);
      }
    };
    const out = () => setHovering(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor ${hovering ? 'hovering' : ''}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  );
}
