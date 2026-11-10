import { motion } from 'framer-motion';
import { capabilities } from '../data/profile';
import { Icon, Section, SectionHeading, fadeUp, stagger } from './ui';

export default function Capabilities() {
  return (
    <Section id="capabilities">
      <SectionHeading
        eyebrow="Professional Capabilities"
        title={<>What I bring <span className="gradient-text">to the table</span></>}
        intro="Development depth combined with the customer-facing skills an ERP engagement needs."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {capabilities.map((c, i) => (
          <motion.div key={c.title} variants={fadeUp} className="group relative min-w-0 bg-navy-950/90 p-7 backdrop-blur-xl transition-colors hover:bg-navy-900/90">
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-violet-600/20 transition-transform group-hover:scale-110">
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <span className="font-mono text-xs text-slate-600">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-white">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
