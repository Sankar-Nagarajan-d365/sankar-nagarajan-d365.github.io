import { motion } from 'framer-motion';
import { Briefcase, Code2, Headset, Network } from 'lucide-react';
import { summary } from '../data/profile';
import { Section, SectionHeading } from './ui';

const pillars = [
  { icon: Code2, label: 'Development', text: 'X++, CoC, forms, tables, data entities, SSRS' },
  { icon: Network, label: 'Integration', text: 'DMF / DIXF, OData, BYOD, SQL Server' },
  { icon: Headset, label: 'Consulting & Support', text: 'Requirements, RCA, Tier 1–2 incidents' },
  { icon: Briefcase, label: 'Delivery', text: 'UAT / SIT, regression, Azure DevOps, LCS' },
];

export default function Summary() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Executive Summary" title={<>Five years building on <span className="gradient-text">Dynamics 365 F&amp;O</span></>} />
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass min-w-0 space-y-5 p-6 text-base leading-relaxed text-slate-300 sm:p-8 md:text-[17px]"
        >
          {summary.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-white' : ''}>{p}</p>
          ))}
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass flex min-w-0 items-start gap-4 p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-white">{p.label}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
