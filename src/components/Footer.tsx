import { Mail } from 'lucide-react';
import { navItems, profile } from '../data/profile';
import { GithubIcon, LinkedinIcon, LinkedinLink } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-navy-950/80 backdrop-blur-xl" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient font-display text-sm font-bold text-white">SN</span>
            <span className="font-display font-semibold text-white">{profile.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate-400">{profile.title}. Building scalable ERP solutions on Microsoft Dynamics 365 from {profile.location.split(',')[0]}.</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="text-slate-400 hover:text-white">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Connect</p>
          <div className="mt-4 flex gap-3">
            <a href={`mailto:${profile.email}`} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 hover:border-white/30 hover:text-white" aria-label="Email"><Mail className="h-4 w-4" /></a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 hover:border-white/30 hover:text-white" aria-label="GitHub"><GithubIcon /></a>
            <LinkedinLink className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 hover:border-white/30 hover:text-white"><LinkedinIcon /><span className="sr-only">LinkedIn</span></LinkedinLink>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-slate-500 sm:px-6">© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}
