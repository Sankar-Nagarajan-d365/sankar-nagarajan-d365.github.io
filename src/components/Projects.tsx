import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/profile';
import { Section, SectionHeading } from './ui';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title={<>Enterprise <span className="gradient-text">ERP engagements</span></>}
        intro="Client projects I've contributed to. Descriptions cover my technical work only; client details are kept confidential."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass gradient-border group relative flex min-w-0 flex-col overflow-hidden p-6 sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" aria-hidden="true" />
            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">{p.type}</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><Building2 className="h-3.5 w-3.5" aria-hidden="true" />{p.company}</span>
            </div>
            <h3 className="relative mt-5 font-display text-2xl font-bold text-white">{p.name}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{p.overview}</p>

            <div className="relative mt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">My contributions</p>
              <ul className="mt-3 space-y-2">
                {p.contributions.map((c) => (
                  <li key={c} className="flex gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
              {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
