import { motion } from 'framer-motion';
import { Apple, Bot, CheckCircle2, Layers, Smartphone, User } from 'lucide-react';
import { appProject as app } from '../data/profile';
import { Icon, Section, SectionHeading } from './ui';

const tagIcon: Record<string, typeof Apple> = {
  iOS: Apple,
  Android: Smartphone,
  'Cross-platform': Layers,
  'AI-assisted (Claude Code)': Bot,
};

export default function AppProject() {
  return (
    <Section id="app">
      <SectionHeading
        eyebrow="Personal Projects"
        title={<>Cross-platform <span className="gradient-text">mobile app</span></>}
        intro={app.intro}
      />
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="glass gradient-border group relative flex min-w-0 flex-col overflow-hidden p-6 sm:p-8"
      >
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {app.tags.map((t) => {
              const I = tagIcon[t];
              return (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                  {I && <I className="h-3.5 w-3.5" aria-hidden="true" />}{t}
                </span>
              );
            })}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><User className="h-3.5 w-3.5" aria-hidden="true" />Personal Project</span>
        </div>
        <h3 className="relative mt-5 font-display text-2xl font-bold text-white">{app.name}</h3>
        <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{app.overview}</p>

        <div className="relative mt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Key contributions</p>
          <ul className="mt-3 grid gap-2 md:grid-cols-2 md:gap-x-8">
            {app.contributions.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
          {app.tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
      </motion.article>

      {/* what the app does */}
      <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">What the app does</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {app.features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass group min-w-0 p-5"
          >
            <Icon name={f.icon} className="h-6 w-6 text-electric-400 transition-colors group-hover:text-violet-400" />
            <h4 className="mt-4 font-display font-semibold text-white">{f.title}</h4>
            <p className="mt-1 text-sm text-slate-400">{f.text}</p>
          </motion.div>
        ))}
      </div>

      {/* how I built it */}
      <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">How I built it</p>
      <ol className="relative mt-6 space-y-6 border-l border-white/10 pl-8 sm:pl-10">
        {app.steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="relative min-w-0"
          >
            <span className="absolute -left-[46px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient font-mono text-xs font-bold text-white sm:-left-[54px]">
              {i + 1}
            </span>
            <h4 className="font-display font-semibold text-white">{s.title}</h4>
            <p className="mt-1 text-sm text-slate-400">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
