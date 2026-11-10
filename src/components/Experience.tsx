import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { Calendar, ChevronDown, FolderGit2, MapPin } from 'lucide-react';
import { experience } from '../data/profile';
import { Section, SectionHeading } from './ui';

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Professional Experience"
        title={<>Career <span className="gradient-text">timeline</span></>}
        intro="Five organizations, one platform. Select a role to see the full scope of work."
      />

      <ol ref={listRef} className="relative space-y-6 pl-8 sm:pl-12">
        <div className="absolute bottom-2 left-[11px] top-2 w-px bg-white/10 sm:left-[19px]" aria-hidden="true" />
        <motion.div
          className="absolute left-[11px] top-2 w-px origin-top bg-gradient-to-b from-electric-500 to-violet-500 sm:left-[19px]"
          style={{ scaleY: scrollYProgress, bottom: 8 }}
          aria-hidden="true"
        />

        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative"
            >
              <span
                className={`absolute -left-8 top-6 grid h-6 w-6 place-items-center rounded-full border sm:-left-12 sm:h-10 sm:w-10 ${job.current ? 'border-transparent bg-brand-gradient' : 'border-white/15 bg-navy-900'}`}
                aria-hidden="true"
              >
                {job.current && <span className="absolute inset-0 animate-ping rounded-full bg-violet-500/40" />}
                <span className={`h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${job.current ? 'bg-white' : 'bg-electric-400'}`} />
              </span>

              <div className={`glass gradient-border overflow-hidden transition-colors ${isOpen ? 'bg-white/[0.06]' : ''}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`job-${i}`}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-7"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{job.company}</h3>
                      {job.current && (
                        <span className="rounded-full bg-brand-gradient px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-white">CURRENT ROLE</span>
                      )}
                    </div>
                    <p className="mt-1.5 font-medium text-electric-400">{job.role}</p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-400">
                      <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" />{job.period}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />{job.location}</span>
                      {job.project && (
                        <span className="inline-flex items-center gap-1.5 text-violet-400"><FolderGit2 className="h-4 w-4" aria-hidden="true" />{job.project}</span>
                      )}
                    </div>
                  </div>
                  <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`job-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <ul className="grid gap-x-8 gap-y-2.5 border-t border-white/10 px-5 pb-6 pt-5 text-sm leading-relaxed text-slate-300 sm:px-7 md:grid-cols-2">
                        {job.points.map((p) => (
                          <li key={p} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-electric-400 to-violet-400" aria-hidden="true" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
