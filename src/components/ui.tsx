import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  AppWindow, BadgeCheck, BarChart3, Bot, Code2, GitBranch, Layers, LifeBuoy, Lightbulb,
  Network, PieChart, ShieldCheck, Sparkles, Users, Workflow, Wrench, Zap, type LucideIcon,
} from 'lucide-react';

export const icons: Record<string, LucideIcon> = {
  AppWindow, BadgeCheck, BarChart3, Bot, Code2, GitBranch, Layers, LifeBuoy, Lightbulb,
  Network, PieChart, ShieldCheck, Sparkles, Users, Workflow, Wrench, Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = icons[name] ?? Code2;
  return <C className={className} aria-hidden="true" />;
}

export function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 max-w-3xl md:mb-16"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">{intro}</p>}
    </motion.div>
  );
}

/** Seconds the hero waits for the intro loader to clear (0 when the loader is skipped with ?static). */
export const INTRO_DELAY = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('static') ? 0 : 1.15;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
