import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Download, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { Section, SectionHeading } from './ui';
import { GithubIcon, LinkedinIcon, LinkedinLink } from './SocialIcons';

function CopyButton({ value, label }: { value: string; label: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      window.setTimeout(() => setDone(false), 1600);
    } catch {
      /* clipboard unavailable: value stays visible and selectable */
    }
  };
  return (
    <button type="button" onClick={copy} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-white/30 hover:text-white" aria-label={done ? `${label} copied` : `Copy ${label}`}>
      {done ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export default function Contact() {
  const rows = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  ];

  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800/80 via-navy-900/80 to-charcoal-900/80 p-6 backdrop-blur-xl sm:p-10 md:p-14"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-electric-600/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" aria-hidden="true" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0">
            <SectionHeading eyebrow="Contact" title={<>Let's build something <span className="gradient-text">reliable</span></>} />
            <div className="-mt-6 space-y-1">
              <p className="font-display text-xl font-semibold text-white">{profile.name}</p>
              <p className="text-slate-400">{profile.title}</p>
              <p className="inline-flex items-center gap-2 pt-2 text-sm text-slate-400"><MapPin className="h-4 w-4" aria-hidden="true" />{profile.location}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary"><Mail className="h-4 w-4" /> Email Me</a>
              <LinkedinLink className="btn-ghost"><LinkedinIcon /> LinkedIn</LinkedinLink>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><GithubIcon /> GitHub</a>
            </div>
          </div>

          <div className="grid min-w-0 content-start gap-4">
            {rows.map((r) => (
              <div key={r.label} className="glass flex items-center gap-4 p-4 sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white"><r.icon className="h-5 w-5" aria-hidden="true" /></span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-500">{r.label}</p>
                  <a href={r.href} className="block truncate font-medium text-white hover:text-electric-400">{r.value}</a>
                </div>
                <CopyButton value={r.value} label={r.label} />
              </div>
            ))}

            <div className="glass flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">Resume</p>
                <p className="font-medium text-white">Sankar-Nagarajan-Resume.pdf</p>
              </div>
              <a href={`${import.meta.env.BASE_URL}${profile.resumeFile}`} download className="btn-ghost !py-2"><Download className="h-4 w-4" /> Download</a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
