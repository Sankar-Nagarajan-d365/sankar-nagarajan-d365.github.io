// Pixel-art scene: a developer at a night-time desk, coding on a widescreen monitor.
// Drawn on an 80×56 pixel grid with SVG rects (crispEdges) and animated with CSS.

type R = [x: number, y: number, w: number, h: number, fill: string, cls?: string];

const C = {
  wall: '#0c1430',
  wallDark: '#09102a',
  window: '#13204a',
  frame: '#25335f',
  star: '#c7d2fe',
  moon: '#e0e7ff',
  city1: '#1a2554',
  city2: '#212e63',
  lit: '#fbbf24',
  desk: '#3b2f5c',
  deskTop: '#4c3d75',
  deskEdge: '#2a2145',
  mon: '#1c2340',
  monEdge: '#2e3866',
  screen: '#070b1a',
  blue: '#5b9dff',
  violet: '#a78bfa',
  cyan: '#67e8f9',
  green: '#4ade80',
  gray: '#64748b',
  hair: '#1b1530',
  skin: '#c98f6b',
  hoodie: '#6d4bd8',
  hoodieDark: '#5536b5',
  phones: '#3b82f6',
  chair: '#1e2440',
  chairDark: '#151a31',
  kb: '#2b3358',
  key: '#3d4778',
  mug: '#e2e8f0',
  plant: '#22c55e',
  plantDark: '#15803d',
  pot: '#b45309',
  book1: '#3b82f6',
  book2: '#8b5cf6',
  book3: '#0ea5e9',
  book4: '#f59e0b',
};

const scene: R[] = [
  // wall + floor shading
  [0, 0, 80, 56, C.wall],
  [0, 48, 80, 8, C.wallDark],

  // window with night city
  [4, 4, 22, 18, C.frame],
  [5, 5, 20, 16, C.window],
  [7, 7, 1, 1, C.star], [12, 6, 1, 1, C.star], [19, 8, 1, 1, C.star], [23, 6, 1, 1, C.star], [9, 11, 1, 1, C.star],
  [20, 6, 3, 3, C.moon], [21, 6, 2, 1, C.window],
  [5, 15, 4, 6, C.city1], [9, 13, 3, 8, C.city2], [12, 16, 4, 5, C.city1], [16, 12, 3, 9, C.city2], [19, 15, 6, 6, C.city1],
  [10, 15, 1, 1, C.lit, 'px-win'], [17, 14, 1, 1, C.lit], [17, 17, 1, 1, C.lit, 'px-win px-d2'], [6, 17, 1, 1, C.lit], [21, 17, 1, 1, C.lit, 'px-win px-d3'],
  [4, 11, 22, 1, C.frame], [14, 4, 1, 18, C.frame],

  // shelf with books
  [56, 12, 20, 1, C.deskEdge],
  [58, 6, 2, 6, C.book1], [60, 7, 2, 5, C.book2], [62, 5, 2, 7, C.book3], [64, 8, 3, 4, C.book4], [68, 6, 2, 6, C.book2], [70, 7, 2, 5, C.book1],

  // chair back (behind person)
  [9, 26, 5, 20, C.chair], [9, 26, 1, 20, C.chairDark],

  // monitor
  [32, 15, 36, 22, C.monEdge],
  [33, 16, 34, 20, C.mon],
  [34, 17, 32, 18, C.screen],
  [48, 37, 4, 5, C.monEdge],
  [44, 41, 12, 2, C.monEdge],

  // person: hoodie body (seen from behind-left)
  [12, 30, 16, 15, C.hoodie],
  [12, 30, 3, 15, C.hoodieDark],
  [15, 27, 10, 4, C.hoodie],
  // hood
  [14, 28, 12, 2, C.hoodieDark],
  // neck
  [18, 25, 4, 3, C.skin],
  // head
  [15, 15, 11, 11, C.hair],
  [24, 19, 2, 5, C.skin], // ear/cheek side
  [16, 14, 8, 2, C.hair],
  // headphones
  [14, 14, 13, 1, C.phones],
  [13, 15, 1, 3, C.phones],
  [26, 15, 1, 3, C.phones],
  [24, 18, 3, 5, C.phones],
  // arm reaching to keyboard
  [26, 36, 10, 4, C.hoodie],
  [36, 37, 3, 3, C.skin],

  // desk
  [2, 43, 76, 2, C.deskTop],
  [2, 45, 76, 1, C.deskEdge],
  [5, 46, 3, 10, C.desk], [72, 46, 3, 10, C.desk],

  // keyboard
  [37, 41, 18, 2, C.kb],
  [38, 41, 2, 1, C.key], [41, 41, 2, 1, C.key], [44, 41, 2, 1, C.key, 'px-key'], [47, 41, 2, 1, C.key], [50, 41, 2, 1, C.key, 'px-key px-d2'], [53, 41, 1, 1, C.key],
  // mouse
  [58, 41, 3, 2, C.kb],

  // mug + steam
  [64, 38, 5, 5, C.mug], [69, 39, 1, 2, C.mug], [65, 39, 3, 1, '#7c3aed'],
  [65, 35, 1, 2, '#94a3b8', 'px-steam'], [67, 34, 1, 2, '#94a3b8', 'px-steam px-d2'],

  // plant
  [72, 39, 5, 4, C.pot],
  [73, 33, 1, 6, C.plantDark], [74, 31, 1, 8, C.plant], [75, 34, 1, 5, C.plantDark],
  [71, 34, 2, 1, C.plant], [76, 32, 2, 1, C.plant], [72, 31, 2, 1, C.plantDark],
];

// code on screen: [indent, length, color]
const code: [number, number, string][] = [
  [0, 9, C.violet],
  [0, 14, C.blue],
  [2, 11, C.cyan],
  [2, 16, C.violet],
  [4, 12, C.green],
  [4, 18, C.blue],
  [2, 6, C.gray],
  [0, 3, C.violet],
];

const px = ([x, y, w, h, fill, cls]: R, i: number) => (
  <rect key={i} x={x} y={y} width={w} height={h} fill={fill} className={cls} />
);

export default function PixelCoder() {
  return (
    <svg
      viewBox="0 0 80 56"
      shapeRendering="crispEdges"
      className="block h-auto w-full"
      role="img"
      aria-label="Pixel-art illustration of a developer coding at a desk at night"
    >
      <style>{`
        .px-line { transform-box: fill-box; transform-origin: left; animation: px-type 9s steps(8, end) infinite backwards; }
        .px-cursor { animation: px-blink 1s steps(1, end) infinite; }
        .px-steam { animation: px-steam 2.4s ease-in-out infinite; }
        .px-key { animation: px-key 0.6s steps(1, end) infinite; }
        .px-win { animation: px-blink 3.2s steps(1, end) infinite; }
        .px-d2 { animation-delay: 0.8s; }
        .px-d3 { animation-delay: 1.6s; }
        @keyframes px-type { 0% { transform: scaleX(0); } 12%, 85% { transform: scaleX(1); } 100% { transform: scaleX(1); opacity: 0; } }
        @keyframes px-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes px-steam { 0% { transform: translateY(0); opacity: 0; } 30% { opacity: 0.8; } 100% { transform: translateY(-4px); opacity: 0; } }
        @keyframes px-key { 0%, 49% { fill: #3d4778; } 50%, 100% { fill: #8b5cf6; } }
        @media (prefers-reduced-motion: reduce) {
          .px-line, .px-cursor, .px-steam, .px-key, .px-win { animation: none !important; }
        }
      `}</style>
      {scene.map(px)}
      {/* screen glow */}
      <rect x={34} y={17} width={32} height={18} fill="url(#px-glow)" />
      <defs>
        <linearGradient id="px-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" stopOpacity="0.12" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      {/* line numbers + typing code */}
      {code.map(([indent, len, color], i) => (
        <g key={i}>
          <rect x={35} y={18 + i * 2} width={1} height={1} fill="#334155" />
          <rect
            x={37 + indent}
            y={18 + i * 2}
            width={len}
            height={1}
            fill={color}
            className="px-line"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        </g>
      ))}
      <rect x={41} y={34} width={2} height={1} fill="#e2e8f0" className="px-cursor" />
    </svg>
  );
}
