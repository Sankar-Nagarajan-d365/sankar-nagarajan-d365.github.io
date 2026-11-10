import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] grid place-items-center bg-navy-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <motion.span
            className="absolute inset-0 rounded-2xl border-2 border-transparent"
            style={{ background: 'linear-gradient(#050914,#050914) padding-box, linear-gradient(135deg,#3b82f6,#8b5cf6) border-box' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          />
          <span className="absolute inset-0 grid place-items-center font-display text-2xl font-bold gradient-text">SN</span>
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-brand-gradient"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>
        <p className="font-mono text-xs tracking-widest text-slate-500">INITIALIZING D365 F&amp;O PORTFOLIO</p>
      </div>
    </motion.div>
  );
}
