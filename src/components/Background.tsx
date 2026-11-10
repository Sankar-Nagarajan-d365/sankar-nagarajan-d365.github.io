import { useEffect, useRef } from 'react';

// Subtle animated network of ERP "objects" (tables, entities, services) linked by data flows.
const LABELS = ['CustTable', 'SalesLine', 'InventTrans', 'LedgerJournal', 'DMF', 'OData', 'SSRS', 'X++', 'CoC', 'VendTable', 'BYOD', 'DataEntity'];

type Node = { x: number; y: number; vx: number; vy: number; label?: string };

export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, raf = 0;
    let nodes: Node[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const init = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(55, Math.max(24, (w * h) / 26000)));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        label: i < LABELS.length && w > 640 ? LABELS[i] : undefined,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const max = 150;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < max) {
            const alpha = (1 - d / max) * 0.18;
            ctx.strokeStyle = (i + j) % 2 ? `rgba(59,130,246,${alpha})` : `rgba(139,92,246,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = n.label ? 'rgba(139,92,246,0.7)' : 'rgba(91,157,255,0.45)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.label ? 2.4 : 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (n.label) {
          ctx.font = '11px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(148,163,184,0.28)';
          ctx.fillText(n.label, n.x + 7, n.y + 4);
        }
      }
    };

    let last = 0;
    const step = (t: number) => {
      raf = requestAnimationFrame(step);
      if (t - last < 33) return; // ~30fps is plenty for slow ambient motion
      last = t;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }
      draw();
    };

    init();
    if (reduce) draw();
    else raf = requestAnimationFrame(step);

    const onResize = () => { init(); if (reduce) draw(); };
    const onVis = () => {
      if (reduce) return;
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(step);
    };
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-electric-600/20 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-indigo-700/10 blur-[110px]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '56px 56px' }}
      />
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  );
}
