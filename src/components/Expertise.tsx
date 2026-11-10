import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { expertise } from '../data/profile';
import { Icon, Section, SectionHeading } from './ui';

export default function Expertise() {
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? expertise : expertise.filter((g) => g.id === filter);

  return (
    <Section id="expertise">
      <SectionHeading
        eyebrow="Core Technical Expertise"
        title={<>The <span className="gradient-text">technology stack</span></>}
        intro="Filter by area to explore the tools and techniques I use across D365 F&O projects."
      />

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter expertise">
        {[{ id: 'all', title: 'All' }, ...expertise].map((g) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            aria-selected={filter === g.id}
            onClick={() => setFilter(g.id)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === g.id ? 'text-white' : 'border border-white/10 text-slate-400 hover:text-white'}`}
          >
            {filter === g.id && <motion.span layoutId="exp-pill" className="absolute inset-0 -z-10 rounded-full bg-brand-gradient" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            {g.title}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((g) => (
            <motion.article
              key={g.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="glass gradient-border group flex min-w-0 flex-col p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-electric-500/20 to-violet-500/20 text-electric-400 transition-colors group-hover:text-white">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-400">{g.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-200 transition-colors hover:border-electric-500/50 hover:bg-electric-500/10">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
