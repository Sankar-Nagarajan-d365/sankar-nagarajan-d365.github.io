import { motion } from 'framer-motion';
import { Apple, Bot, Smartphone } from 'lucide-react';
import { appProject as app } from '../data/profile';
import { Icon, Section, SectionHeading } from './ui';

export default function AppProject() {
  return (
    <Section id="app">
      <SectionHeading
        eyebrow="Personal Project"
        title={<>A mobile app <span className="gradient-text">built with AI</span></>}
        intro={app.intro}
      />

      {/* intro card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="glass gradient-border relative overflow-hidden p-6 sm:p-8"
      >
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-gradient opacity-20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            <Apple className="h-3.5 w-3.5" aria-hidden="true" />iOS
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />Android
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-electric-400/30 bg-electric-500/10 px-3 py-1 text-xs font-medium text-electric-400">
            <Bot className="h-3.5 w-3.5" aria-hidden="true" />AI-assisted build
          </span>
        </div>
        <h3 className="relative mt-5 font-display text-3xl font-bold text-white">{app.name}</h3>
        <p className="relative mt-2 text-slate-300">{app.tagline}</p>

        <div className="relative mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {app.stats.map((s) => (
            <div key={s.label} className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
              <p className="mt-1 text-xs text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* features */}
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

      {/* how it was built */}
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

      <div className="mt-10 flex flex-wrap gap-2">
        {app.tech.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>
    </Section>
  );
}
