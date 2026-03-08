

# Developer Portfolio Website — Alex Chen

## Design System
- **Background**: Deep navy (#0a0a0f) with subtle grain texture overlay
- **Accent**: Electric cyan (#00f0ff) for highlights, hover states, and glowing effects
- **Typography**: JetBrains Mono for headings, system sans-serif for body
- **Custom animated cursor** on desktop (glowing dot that follows mouse)
- **Scroll animations**: Elements fade/slide in using CSS animations triggered by Intersection Observer (no Framer Motion needed — we'll use a lightweight custom hook)

## Sections

### 1. Hero (Full-screen)
- Typewriter effect: "Hi, I'm Alex Chen" with blinking cursor
- Subtitle: "Full Stack Developer · Open Source Enthusiast"
- Two glowing CTA buttons: "View My Work" → scrolls to projects, "Download Resume" → link
- Animated background: floating particle grid using CSS animations

### 2. About
- Short bio with personality
- Circular profile photo with animated cyan glow border
- Animated marquee ticker of tech stack icons (React, Node.js, TypeScript, Python, PostgreSQL, Docker, AWS, Git, etc.) using Lucide + custom SVGs

### 3. Projects (Card Grid)
- 6 project cards in responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each card: project name, description, tech tags, preview image (placeholder), GitHub + Live Demo icon buttons
- Hover: card lifts, cyan glow shadow, subtle image zoom

### 4. Skills
- Animated skill bars grouped by category: Frontend, Backend, DevOps/Cloud, Tools
- Bars fill in on scroll with cyan gradient
- Clean percentage labels

### 5. Experience Timeline
- Vertical timeline with alternating left/right layout (stacked on mobile)
- 4 entries with realistic work/education data
- Animated dots and connecting line

### 6. Contact
- Form: Name, Email, Message fields with glowing focus states
- Submit shows toast notification ("Message sent!")
- Social icon buttons (GitHub, LinkedIn, Twitter/X, Email) with hover glow animations

### 7. Footer
- Minimal: copyright "© 2026 Alex Chen" + "Back to Top" smooth-scroll button

## Technical Approach
- Custom `useScrollReveal` hook using Intersection Observer for scroll animations
- Custom cursor component tracking mouse position
- CSS-based grain texture overlay
- All content is realistic placeholder data
- Fully responsive, mobile-first
- Accessible: aria-labels, keyboard nav, proper contrast ratios
- Smooth scroll behavior enabled globally

