import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { learning } from '../data/profile';
import { Icon, Section, SectionHeading } from './ui';

export default function Learning() {
  return (
    <Section id="learning">
      <SectionHeading
        eyebrow="Beyond the Resume"
        title={<>Continuous learning <span className="gradient-text">&amp; innovation</span></>}
        intro="The Microsoft ecosystem around Dynamics 365 keeps growing. These are areas I'm actively exploring to extend what I can deliver on top of F&O."
      />

      <div className="glass mb-8 flex items-start gap-3 border-violet-400/20 p-4 text-sm text-slate-300">
        <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" aria-hidden="true" />
        <p>
          <span className="font-semibold text-white">Learning interests, not project experience.</span>{' '}
          My professional project work is listed under Experience and Projects. The topics below are self-directed learning.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {learning.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className={`gradient-border group min-w-0 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5 backdrop-blur ${i === learning.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="flex items-center justify-between">
              <Icon name={l.icon} className="h-6 w-6 text-violet-400 transition-colors group-hover:text-electric-400" />
              <span className="rounded-full bg-violet-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-300">Exploring</span>
            </div>
            <h3 className="mt-4 font-display font-semibold text-white">{l.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{l.note}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
