import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, MessageSquare } from 'lucide-react';
import { profile, quickFacts } from '../data/profile';
import { INTRO_DELAY } from './ui';
import { GithubIcon, LinkedinIcon, LinkedinLink } from './SocialIcons';
import PixelCoder from './PixelCoder';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: INTRO_DELAY } } };
const item = { hidden: { y: 24 }, show: { y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex w-full max-w-6xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Currently at TVS Next
          </motion.div>

          <motion.h1 variants={item} className="mt-6 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            SANKAR
            <br />
            <span className="gradient-text">NAGARAJAN</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 font-display text-lg font-medium text-slate-200 sm:text-xl">
            {profile.title}
          </motion.p>

          <motion.ul variants={item} className="mt-4 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-slate-400 sm:text-sm">
            {profile.highlights.map((h, i) => (
              <li key={h} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-violet-400" aria-hidden="true" />}
                <span className={i === 0 ? 'font-semibold text-electric-400' : ''}>{h}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            “{profile.tagline}”
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="btn-primary">
              Explore My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`${import.meta.env.BASE_URL}${profile.resumeFile}`} download className="btn-ghost">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <MessageSquare className="h-4 w-4" /> Let's Connect
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <GithubIcon /> GitHub
            </a>
            <LinkedinLink className="inline-flex items-center gap-2 hover:text-white">
              <LinkedinIcon /> LinkedIn
            </LinkedinLink>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 30, rotateX: 8 }}
          animate={{ y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: INTRO_DELAY + 0.25, ease: 'easeOut' }}
          className="relative min-w-0"
          style={{ perspective: 1000 }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-20 blur-2xl" aria-hidden="true" />
          <div className="glass relative overflow-hidden">
            <PixelCoder />
            <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3 font-mono text-xs text-slate-400">
              <span className="text-emerald-400">sankar@d365</span>
              <span className="text-slate-600">:</span>
              <span className="text-electric-400">~/erp</span>
              <span className="truncate text-slate-300">$ building scalable solutions</span>
              <span className="h-3.5 w-2 shrink-0 animate-pulse bg-violet-400" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
              {quickFacts.map((f, i) => (
                <div key={f.label} className={`px-4 py-4 ${i % 2 === 1 ? 'border-l border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10 sm:border-t-0' : ''} ${i === 2 ? 'sm:border-l' : ''}`}>
                  <div className="font-display text-xl font-bold text-white">{f.value}</div>
                  <div className="mt-0.5 text-[11px] leading-tight text-slate-400">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
