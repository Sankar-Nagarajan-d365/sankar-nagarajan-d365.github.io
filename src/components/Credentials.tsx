import { motion } from 'framer-motion';
import { Award, GraduationCap, RefreshCcw } from 'lucide-react';
import { certifications, methodologies } from '../data/profile';
import { Section, SectionHeading } from './ui';

function MicrosoftLogo() {
  return (
    <svg viewBox="0 0 23 23" className="h-6 w-6" aria-hidden="true">
      <path fill="#f25022" d="M1 1h10v10H1z" />
      <path fill="#7fba00" d="M12 1h10v10H12z" />
      <path fill="#00a4ef" d="M1 12h10v10H1z" />
      <path fill="#ffb900" d="M12 12h10v10H12z" />
    </svg>
  );
}

export default function Credentials() {
  return (
    <Section id="credentials">
      <SectionHeading eyebrow="Certifications · Education · Methodologies" title={<>Credentials &amp; <span className="gradient-text">ways of working</span></>} />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid min-w-0 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ rotateX: 2, rotateY: -3 }}
              style={{ transformPerspective: 900 }}
              className="relative min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#0b2a5b] via-[#1a1f4d] to-[#3b1d6e] p-6 shadow-2xl shadow-violet-900/30 sm:p-7"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-electric-500/30 blur-3xl" aria-hidden="true" />
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <MicrosoftLogo />
                  <span className="text-sm font-semibold tracking-wide text-white/90">Microsoft Certified</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/50 bg-amber-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  {c.level}
                </span>
              </div>
              <div className="relative mt-6">
                <p className="font-mono text-sm text-electric-400">{c.code}</p>
                <h3 className="mt-1.5 font-display text-xl font-bold leading-tight text-white sm:text-2xl">{c.title}</h3>
              </div>
              <div className="relative mt-6 border-t border-white/15 pt-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Awarded to</p>
                <p className="mt-1 font-display font-semibold text-white">Sankar Nagarajan</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid min-w-0 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass flex items-start gap-5 p-7"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white"><GraduationCap className="h-6 w-6" aria-hidden="true" /></span>
            <div className="min-w-0">
              <p className="eyebrow">Education</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">Bachelor of Engineering (BE) – Mechanical Engineering</h3>
              <p className="mt-1 text-slate-400">Thiagarajar College of Engineering</p>
              <p className="text-sm text-slate-500">Tamil Nadu, India</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-7"
          >
            <div className="flex items-center gap-3">
              <RefreshCcw className="h-5 w-5 text-violet-400" aria-hidden="true" />
              <p className="eyebrow">Methodologies</p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {methodologies.map((m, i) => (
                <motion.li
                  key={m}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-electric-500/10 to-violet-500/10 px-4 py-2 text-sm font-medium text-slate-100"
                >
                  {m}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
