import { useId, type ReactNode } from 'react';
import type { Project } from '@/types/portfolio';

/**
 * Blueprint-style schematic of each project's UI/architecture. These are
 * illustrations, not screenshots — set `image` on a project to show a real one.
 */

const ACCENTS: Record<string, string> = {
  atelier: '#e879f9',
  'ai-xrays': '#38bdf8',
  sliding3d: '#818cf8',
  'ai-data-analyst': '#a78bfa',
  fintrack: '#34d399',
  'ai-sql-assistant': '#c084fc',
  'vacuum-robot': '#94a3b8',
  'endoscopy-db': '#fb7185',
  'oop-graphical-app': '#fbbf24',
};

const FALLBACK_ACCENT = '#22d3ee';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

interface VisualProps {
  a: string;
  uid: string;
}

function Win({ url, children }: { url: string; children: ReactNode }) {
  return (
    <g>
      <rect x="120" y="16" width="400" height="188" fill="#0a1628" fillOpacity="0.9" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 3" />
      <line x1="120" y1="36" x2="520" y2="36" stroke="currentColor" strokeOpacity="0.3" />
      {[132, 141, 150].map((cx) => (
        <circle key={cx} cx={cx} cy="26" r="2.5" fill="currentColor" fillOpacity="0.35" />
      ))}
      <rect x="166" y="21" width="190" height="10" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.3" />
      <text x="172" y="28.5" fontSize="6.5" fill="currentColor" fillOpacity="0.7" fontFamily={MONO}>
        {url}
      </text>
      {children}
    </g>
  );
}

function Lines({ x, y, widths, gap = 8, opacity = 0.25 }: { x: number; y: number; widths: number[]; gap?: number; opacity?: number }) {
  return (
    <>
      {widths.map((w, i) => (
        <rect key={i} x={x} y={y + i * gap} width={w} height="3" fill="currentColor" fillOpacity={opacity} />
      ))}
    </>
  );
}

function Garment({ x, y, s = 1, a, fillOpacity = 0.25 }: { x: number; y: number; s?: number; a: string; fillOpacity?: number }) {
  // simple dress silhouette centred on (x, y)
  const d = `M${x - 6 * s} ${y - 20 * s} L${x + 6 * s} ${y - 20 * s} L${x + 9 * s} ${y - 8 * s} L${x + 16 * s} ${y + 20 * s} L${x - 16 * s} ${y + 20 * s} L${x - 9 * s} ${y - 8 * s} Z`;
  return <path d={d} fill={a} fillOpacity={fillOpacity} stroke={a} strokeOpacity="0.8" strokeWidth="0.8" />;
}

function Atelier({ a }: VisualProps) {
  const scores = ['0.93', '0.91', '0.88', '0.86', '0.84', '0.81'];
  return (
    <Win url="atelier.app / search">
      <rect x="132" y="46" width="104" height="150" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.3" />
      <Garment x={184} y={116} s={2.4} a={a} fillOpacity={0.18} />
      <rect x="150" y="76" width="68" height="84" fill="none" stroke={a} strokeWidth="1.2" strokeDasharray="4 2" />
      <rect x="150" y="66" width="54" height="10" fill={a} fillOpacity="0.9" />
      <text x="154" y="73.5" fontSize="6.5" fill="#0a1628" fontFamily={MONO} fontWeight="700">
        dress · 0.94
      </text>
      <text x="184" y="188" textAnchor="middle" fontSize="6.5" fill="currentColor" fillOpacity="0.55" fontFamily={MONO}>
        query.jpg
      </text>

      <path d="M240 121 h12" stroke={a} strokeWidth="1.2" />
      <path d="M249 117 l5 4 l-5 4" fill="none" stroke={a} strokeWidth="1.2" />

      {scores.map((sc, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 262 + col * 84;
        const y = 46 + row * 78;
        return (
          <g key={sc}>
            <rect x={x} y={y} width="76" height="70" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.3" />
            <Garment x={x + 38} y={y + 28} s={1.15} a={a} fillOpacity={0.12 + (5 - i) * 0.03} />
            <rect x={x} y={y + 58} width="76" height="12" fill={a} fillOpacity="0.1" />
            <text x={x + 5} y={y + 66.5} fontSize="6.5" fill={a} fontFamily={MONO}>
              cos {sc}
            </text>
          </g>
        );
      })}
    </Win>
  );
}

function XRays({ a, uid }: VisualProps) {
  const findings = [
    { name: 'Effusion', v: 0.72 },
    { name: 'Cardiomegaly', v: 0.41 },
    { name: 'Atelectasis', v: 0.27 },
    { name: 'Edema', v: 0.12 },
  ];
  return (
    <Win url="xray.local / analyze">
      <defs>
        <radialGradient id={`${uid}-heat`}>
          <stop offset="0" stopColor={a} stopOpacity="0.85" />
          <stop offset="0.5" stopColor={a} stopOpacity="0.3" />
          <stop offset="1" stopColor={a} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="132" y="46" width="130" height="150" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.3" />
      {/* ribcage + lungs */}
      <path d="M197 60 V170" stroke="currentColor" strokeOpacity="0.4" strokeWidth="3" />
      {[74, 88, 102, 116, 130].map((y) => (
        <g key={y} stroke="currentColor" strokeOpacity="0.22" fill="none">
          <path d={`M197 ${y} Q168 ${y - 6} 150 ${y + 8}`} />
          <path d={`M197 ${y} Q226 ${y - 6} 244 ${y + 8}`} />
        </g>
      ))}
      <ellipse cx="171" cy="112" rx="21" ry="42" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <ellipse cx="223" cy="112" rx="21" ry="42" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <ellipse cx="205" cy="140" rx="20" ry="16" fill={`url(#${uid}-heat)`} />
      <ellipse cx="228" cy="96" rx="12" ry="14" fill={`url(#${uid}-heat)`} fillOpacity="0.7" />
      <text x="197" y="190" textAnchor="middle" fontSize="6.5" fill={a} fontFamily={MONO}>
        Grad-CAM overlay
      </text>

      {/* findings */}
      <text x="278" y="56" fontSize="6.5" fill="currentColor" fillOpacity="0.6" fontFamily={MONO}>
        FINDINGS · multi-label
      </text>
      {findings.map((f, i) => {
        const y = 66 + i * 22;
        return (
          <g key={f.name}>
            <text x="278" y={y + 4} fontSize="7" fill="currentColor" fillOpacity="0.85" fontFamily={MONO}>
              {f.name}
            </text>
            <rect x="278" y={y + 8} width="224" height="5" fill="currentColor" fillOpacity="0.08" />
            <rect x="278" y={y + 8} width={224 * f.v} height="5" fill={a} fillOpacity="0.85" />
            <text x="502" y={y + 4} textAnchor="end" fontSize="7" fill={a} fontFamily={MONO}>
              {f.v.toFixed(2)}
            </text>
          </g>
        );
      })}
      {['ConvNeXt', 'DenseNet', 'Ensemble'].map((m, i) => (
        <g key={m}>
          <rect x={278 + i * 76} y="164" width="70" height="16" fill={i === 2 ? a : 'currentColor'} fillOpacity={i === 2 ? 0.2 : 0.05} stroke={i === 2 ? a : 'currentColor'} strokeOpacity="0.6" strokeDasharray="3 2" />
          <text x={313 + i * 76} y="174.5" textAnchor="middle" fontSize="6.5" fill={i === 2 ? a : 'currentColor'} fillOpacity={i === 2 ? 1 : 0.7} fontFamily={MONO}>
            {m}
          </text>
        </g>
      ))}
    </Win>
  );
}

function Sliding3D({ a }: VisualProps) {
  const n = 3;
  const ax = 30;
  const by = 15;
  const h = 22;
  const cx = 270;
  const y0 = 56;
  const top = (i: number, j: number): [number, number] => [cx + (i - j) * ax, y0 + (i + j) * by];
  const poly = (pts: [number, number][]) => pts.map((p) => p.join(',')).join(' ');
  const cells: ReactNode[] = [];
  let num = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const pts = [top(i, j), top(i + 1, j), top(i + 1, j + 1), top(i, j + 1)];
      const isGap = i === n - 1 && j === n - 1;
      const label = isGap ? '' : String(++num);
      const cxy = [(pts[0][0] + pts[2][0]) / 2, (pts[0][1] + pts[2][1]) / 2];
      cells.push(
        <g key={`t${i}${j}`}>
          <polygon points={poly(pts)} fill={isGap ? '#0a1628' : a} fillOpacity={isGap ? 1 : 0.14 + ((i + j) % 3) * 0.05} stroke="currentColor" strokeOpacity="0.6" />
          {label && (
            <text x={cxy[0]} y={cxy[1] + 2.5} textAnchor="middle" fontSize="7" fill="currentColor" fontFamily={MONO}>
              {label}
            </text>
          )}
        </g>
      );
    }
  }
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      const [x1, y1] = top(i, n);
      const [x2, y2] = top(i + 1, n);
      cells.push(
        <polygon key={`l${i}${k}`} points={poly([[x1, y1 + k * h], [x2, y2 + k * h], [x2, y2 + (k + 1) * h], [x1, y1 + (k + 1) * h]])} fill="currentColor" fillOpacity={0.05 + k * 0.02} stroke="currentColor" strokeOpacity="0.45" />
      );
    }
  }
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      const [x1, y1] = top(n, j);
      const [x2, y2] = top(n, j + 1);
      cells.push(
        <polygon key={`r${j}${k}`} points={poly([[x1, y1 + k * h], [x2, y2 + k * h], [x2, y2 + (k + 1) * h], [x1, y1 + (k + 1) * h]])} fill={a} fillOpacity={0.05 + k * 0.03} stroke="currentColor" strokeOpacity="0.45" />
      );
    }
  }
  return (
    <Win url="sliding3d.vercel.app">
      {cells}
      {/* HUD */}
      <g fontFamily={MONO}>
        <rect x="402" y="50" width="104" height="30" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 2" />
        <text x="410" y="61" fontSize="6.5" fill="currentColor" fillOpacity="0.6">TIME</text>
        <text x="410" y="74" fontSize="11" fill={a}>00:42</text>
        <rect x="402" y="88" width="104" height="30" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 2" />
        <text x="410" y="99" fontSize="6.5" fill="currentColor" fillOpacity="0.6">MOVES</text>
        <text x="410" y="112" fontSize="11" fill={a}>17</text>
        <rect x="402" y="132" width="104" height="18" fill={a} fillOpacity="0.2" stroke={a} strokeOpacity="0.8" />
        <text x="454" y="143.5" textAnchor="middle" fontSize="7" fill={a}>SOLVE · A*</text>
        <rect x="402" y="156" width="104" height="18" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="3 2" />
        <text x="454" y="167.5" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.8">SHUFFLE</text>
      </g>
    </Win>
  );
}

function DataAnalyst({ a }: VisualProps) {
  const bars = [0.4, 0.62, 0.5, 0.84, 0.7, 0.95];
  const line = [0.3, 0.45, 0.4, 0.62, 0.55, 0.8, 0.72];
  const lx = (i: number) => 336 + i * 27;
  const ly = (v: number) => 150 - v * 62;
  return (
    <Win url="ai-data-analyst.app">
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={132 + i * 130} y="46" width="122" height="28" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.3" />
          <text x={139 + i * 130} y="57" fontSize="6" fill="currentColor" fillOpacity="0.55" fontFamily={MONO}>
            {['ROWS', 'ACCURACY', 'FEATURES'][i]}
          </text>
          <text x={139 + i * 130} y="69" fontSize="10" fill={a} fontFamily={MONO}>
            {['48,210', '0.914', '23'][i]}
          </text>
        </g>
      ))}
      <rect x="132" y="82" width="180" height="80" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.25" />
      {bars.map((v, i) => (
        <rect key={i} x={142 + i * 28} y={154 - v * 62} width="18" height={v * 62} fill={a} fillOpacity={0.35 + v * 0.4} />
      ))}
      <rect x="322" y="82" width="188" height="80" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.25" />
      <polyline points={line.map((v, i) => `${lx(i)},${ly(v)}`).join(' ')} fill="none" stroke={a} strokeWidth="1.5" />
      {line.map((v, i) => (
        <circle key={i} cx={lx(i)} cy={ly(v)} r="2" fill="#0a1628" stroke={a} />
      ))}
      <rect x="132" y="172" width="378" height="22" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="3 2" />
      <text x="142" y="186" fontSize="7" fill="currentColor" fillOpacity="0.7" fontFamily={MONO}>
        Ask about your data…
      </text>
      <rect x="474" y="176" width="30" height="14" fill={a} fillOpacity="0.25" stroke={a} />
    </Win>
  );
}

function FinTrack({ a }: VisualProps) {
  const r = 30;
  const c = 2 * Math.PI * r;
  const segs = [0.42, 0.28, 0.18];
  let offset = 0;
  const rows = [
    ['Groceries', '−42.10'],
    ['Salary', '+2,400.00'],
    ['Transport', '−18.50'],
    ['Coach tip', 'AI'],
  ];
  return (
    <Win url="fintrack-ai.vercel.app">
      <g transform="translate(184 100)">
        <circle r={r} fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="14" />
        {segs.map((s, i) => {
          const el = (
            <circle
              key={i}
              r={r}
              fill="none"
              stroke={a}
              strokeOpacity={0.9 - i * 0.28}
              strokeWidth="14"
              strokeDasharray={`${s * c - 1.5} ${c}`}
              strokeDashoffset={-offset * c}
              transform="rotate(-90)"
            />
          );
          offset += s;
          return el;
        })}
        <text textAnchor="middle" y="-1" fontSize="6" fill="currentColor" fillOpacity="0.6" fontFamily={MONO}>SPENT</text>
        <text textAnchor="middle" y="10" fontSize="10" fill={a} fontFamily={MONO}>€1,240</text>
      </g>
      {['Food', 'Rent', 'Other'].map((l, i) => (
        <g key={l}>
          <rect x={144 + i * 44} y="150" width="6" height="6" fill={a} fillOpacity={0.9 - i * 0.28} />
          <text x={153 + i * 44} y="156" fontSize="6.5" fill="currentColor" fillOpacity="0.7" fontFamily={MONO}>{l}</text>
        </g>
      ))}
      <text x="144" y="182" fontSize="6.5" fill="currentColor" fillOpacity="0.55" fontFamily={MONO}>Budget · 71% used</text>
      <rect x="144" y="186" width="96" height="5" fill="currentColor" fillOpacity="0.1" />
      <rect x="144" y="186" width="68" height="5" fill={a} fillOpacity="0.85" />

      <text x="286" y="54" fontSize="6.5" fill="currentColor" fillOpacity="0.6" fontFamily={MONO}>TRANSACTIONS</text>
      {rows.map(([name, amt], i) => (
        <g key={name}>
          <rect x="286" y={60 + i * 26} width="224" height="22" fill="currentColor" fillOpacity={i === 3 ? 0 : 0.04} stroke={i === 3 ? a : 'currentColor'} strokeOpacity={i === 3 ? 0.7 : 0.25} strokeDasharray={i === 3 ? '3 2' : undefined} />
          <circle cx="299" cy={71 + i * 26} r="4" fill={a} fillOpacity="0.3" />
          <text x="310" y={74 + i * 26} fontSize="7.5" fill="currentColor" fillOpacity="0.85" fontFamily={MONO}>{name}</text>
          <text x="502" y={74 + i * 26} textAnchor="end" fontSize="7.5" fill={amt.startsWith('+') || amt === 'AI' ? a : 'currentColor'} fillOpacity="0.9" fontFamily={MONO}>{amt}</text>
        </g>
      ))}
      <text x="286" y="182" fontSize="6.5" fill="currentColor" fillOpacity="0.5" fontFamily={MONO}>POST /api/transactions · JWT</text>
    </Win>
  );
}

function SqlAssistant({ a }: VisualProps) {
  const rows = [
    ['2026-01', 12400],
    ['2026-02', 15100],
    ['2026-03', 18900],
  ] as const;
  return (
    <Win url="ai-sql.vercel.app">
      <rect x="132" y="46" width="132" height="22" fill={a} fillOpacity="0.14" stroke={a} strokeOpacity="0.7" />
      <text x="139" y="60" fontSize="7" fill="currentColor" fontFamily={MONO}>revenue per month?</text>

      <rect x="132" y="76" width="182" height="60" fill="#060f1f" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 2" />
      <text x="139" y="90" fontSize="7" fontFamily={MONO} fill={a}>SELECT</text>
      <text x="171" y="90" fontSize="7" fontFamily={MONO} fill="currentColor" fillOpacity="0.85">month, SUM(total)</text>
      <text x="139" y="102" fontSize="7" fontFamily={MONO} fill={a}>FROM</text>
      <text x="165" y="102" fontSize="7" fontFamily={MONO} fill="currentColor" fillOpacity="0.85">orders</text>
      <text x="139" y="114" fontSize="7" fontFamily={MONO} fill={a}>GROUP BY</text>
      <text x="183" y="114" fontSize="7" fontFamily={MONO} fill="currentColor" fillOpacity="0.85">1 ORDER BY 1;</text>
      <rect x="139" y="122" width="88" height="9" fill={a} fillOpacity="0.16" />
      <text x="143" y="129" fontSize="6" fontFamily={MONO} fill={a}>SELECT-only guard ✓</text>

      <rect x="132" y="146" width="182" height="48" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
      <text x="139" y="158" fontSize="6" fill="currentColor" fillOpacity="0.55" fontFamily={MONO}>month</text>
      <text x="300" y="158" textAnchor="end" fontSize="6" fill="currentColor" fillOpacity="0.55" fontFamily={MONO}>sum</text>
      {rows.map(([m, v], i) => (
        <g key={m}>
          <line x1="139" x2="307" y1={162 + i * 10} y2={162 + i * 10} stroke="currentColor" strokeOpacity="0.15" />
          <text x="139" y={171 + i * 10} fontSize="7" fill="currentColor" fillOpacity="0.85" fontFamily={MONO}>{m}</text>
          <text x="300" y={171 + i * 10} textAnchor="end" fontSize="7" fill={a} fontFamily={MONO}>{v.toLocaleString('en-US')}</text>
        </g>
      ))}

      <rect x="326" y="46" width="184" height="148" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
      <text x="334" y="58" fontSize="6.5" fill="currentColor" fillOpacity="0.6" fontFamily={MONO}>DASHBOARD</text>
      {[0.35, 0.5, 0.42, 0.7, 0.62, 0.9].map((v, i) => (
        <rect key={i} x={338 + i * 27} y={172 - v * 96} width="16" height={v * 96} fill={a} fillOpacity={0.3 + v * 0.5} />
      ))}
      <line x1="334" y1="172" x2="502" y2="172" stroke="currentColor" strokeOpacity="0.4" />
    </Win>
  );
}

function VacuumRobot({ a }: VisualProps) {
  const path = 'M148 60 H286 V84 H148 V108 H286 V132 H148 V156 H286';
  return (
    <Win url="rmi://robot-server:1099">
      {/* floor plan */}
      <rect x="132" y="46" width="170" height="148" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.5" />
      <rect x="240" y="150" width="50" height="34" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <circle cx="146" cy="180" r="8" fill="none" stroke="currentColor" strokeOpacity="0.5" />
      <path d={path} fill="none" stroke={a} strokeWidth="1.2" strokeDasharray="4 3" />
      <circle cx="286" cy="132" r="7" fill="#0a1628" stroke={a} strokeWidth="1.5" />
      <circle cx="286" cy="132" r="2" fill={a} />

      {/* client / server */}
      <g fontFamily={MONO}>
        <rect x="326" y="52" width="80" height="34" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 2" />
        <text x="366" y="66" textAnchor="middle" fontSize="7" fill="currentColor">Client</text>
        <text x="366" y="78" textAnchor="middle" fontSize="6" fill="currentColor" fillOpacity="0.55">GUI · commands</text>
        <rect x="430" y="52" width="80" height="34" fill={a} fillOpacity="0.1" stroke={a} strokeOpacity="0.8" strokeDasharray="3 2" />
        <text x="470" y="66" textAnchor="middle" fontSize="7" fill={a}>Server</text>
        <text x="470" y="78" textAnchor="middle" fontSize="6" fill="currentColor" fillOpacity="0.55">Robot · Map</text>
        <path d="M406 64 H430 M424 60 l6 4 l-6 4" fill="none" stroke={a} />
        <path d="M430 76 H406 M412 72 l-6 4 l6 4" fill="none" stroke="currentColor" strokeOpacity="0.6" />
        <text x="418" y="52" textAnchor="middle" fontSize="6" fill="currentColor" fillOpacity="0.55">RMI</text>
      </g>
      <text x="326" y="112" fontSize="6.5" fill="currentColor" fillOpacity="0.6" fontFamily={MONO}>LOG</text>
      <Lines x={326} y={118} widths={[150, 118, 138, 96, 128]} gap={11} opacity={0.22} />
      <rect x="326" y="118" width="4" height="3" fill={a} />
      <rect x="326" y="140" width="4" height="3" fill={a} />
    </Win>
  );
}

function EndoscopyDb({ a }: VisualProps) {
  const table = (x: number, y: number, name: string, fields: string[]) => (
    <g fontFamily={MONO}>
      <rect x={x} y={y} width="104" height={18 + fields.length * 12} fill="#0a1628" stroke="currentColor" strokeOpacity="0.55" />
      <rect x={x} y={y} width="104" height="14" fill={a} fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.55" />
      <text x={x + 6} y={y + 10} fontSize="7.5" fill={a}>{name}</text>
      {fields.map((f, i) => (
        <text key={f} x={x + 6} y={y + 26 + i * 12} fontSize="6.5" fill="currentColor" fillOpacity="0.8">
          {i === 0 ? '# ' : ''}{f}
        </text>
      ))}
    </g>
  );
  return (
    <Win url="psql · endoscopy_db">
      <g stroke={a} strokeOpacity="0.8" fill="none">
        <path d="M236 90 H272" />
        <path d="M390 90 H426" />
        <path d="M324 52 V46" strokeOpacity="0" />
      </g>
      <g fontFamily={MONO} fontSize="7" fill={a}>
        <text x="240" y="86">1</text>
        <text x="262" y="86">N</text>
        <text x="394" y="86">N</text>
        <text x="416" y="86">1</text>
      </g>
      {table(132, 52, 'patient', ['patient_id', 'name', 'birth_date', 'insurance'])}
      {table(274, 52, 'examination', ['exam_id', 'patient_id', 'doctor_id', 'type', 'exam_date'])}
      {table(416, 52, 'doctor', ['doctor_id', 'name', 'specialty'])}
      <path d="M326 136 V158" stroke={a} strokeOpacity="0.6" strokeDasharray="3 2" fill="none" />
      <rect x="274" y="158" width="104" height="30" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="3 2" />
      <text x="326" y="171" textAnchor="middle" fontSize="6.5" fill="currentColor" fillOpacity="0.8" fontFamily={MONO}>3NF · normalized</text>
      <text x="326" y="181" textAnchor="middle" fontSize="6" fill="currentColor" fillOpacity="0.5" fontFamily={MONO}>FK constraints</text>
    </Win>
  );
}

function OopApp({ a }: VisualProps) {
  return (
    <Win url="GraphicalApp.jar">
      <rect x="132" y="46" width="52" height="148" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.3" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="140" y={54 + i * 24} width="36" height="18" fill={i === 1 ? a : 'currentColor'} fillOpacity={i === 1 ? 0.25 : 0.06} stroke={i === 1 ? a : 'currentColor'} strokeOpacity="0.6" strokeDasharray="3 2" />
        </g>
      ))}
      <rect x="192" y="46" width="200" height="148" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
      <circle cx="240" cy="100" r="24" fill={a} fillOpacity="0.22" stroke={a} />
      <rect x="282" y="72" width="52" height="40" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.7" />
      <polygon points="330,164 358,124 384,164" fill={a} fillOpacity="0.14" stroke={a} strokeOpacity="0.8" />
      <path d="M216 164 Q240 130 262 156 T310 150" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 2" />

      {/* UML */}
      <g fontFamily={MONO}>
        <rect x="402" y="46" width="108" height="30" fill="#0a1628" stroke="currentColor" strokeOpacity="0.5" />
        <text x="456" y="58" textAnchor="middle" fontSize="7" fill={a}>«abstract» Shape</text>
        <line x1="402" y1="62" x2="510" y2="62" stroke="currentColor" strokeOpacity="0.4" />
        <text x="408" y="72" fontSize="6.5" fill="currentColor" fillOpacity="0.7">+ draw(g)</text>
        {[0, 1].map((i) => (
          <g key={i}>
            <path d={`M${430 + i * 52} 104 V90 H456 V76`} fill="none" stroke="currentColor" strokeOpacity="0.5" />
            <rect x={406 + i * 52} y="104" width="48" height="24" fill="#0a1628" stroke="currentColor" strokeOpacity="0.5" />
            <text x={430 + i * 52} y="119" textAnchor="middle" fontSize="6.5" fill="currentColor" fillOpacity="0.85">{['Circle', 'Rect'][i]}</text>
          </g>
        ))}
      </g>
      <Lines x={402} y={144} widths={[96, 70, 84, 58]} gap={10} opacity={0.2} />
    </Win>
  );
}

const VISUALS: Record<string, (props: VisualProps) => ReactNode> = {
  atelier: Atelier,
  'ai-xrays': XRays,
  sliding3d: Sliding3D,
  'ai-data-analyst': DataAnalyst,
  fintrack: FinTrack,
  'ai-sql-assistant': SqlAssistant,
  'vacuum-robot': VacuumRobot,
  'endoscopy-db': EndoscopyDb,
  'oop-graphical-app': OopApp,
};

interface ProjectVisualProps {
  project: Project;
  alt: string;
  className?: string;
}

export default function ProjectVisual({ project, alt, className = '' }: ProjectVisualProps) {
  const uid = useId().replace(/:/g, '');
  const Visual = VISUALS[project.id];
  const accent = ACCENTS[project.id] ?? FALLBACK_ACCENT;

  return (
    <div className={`blueprint-hatch relative overflow-hidden ${className}`}>
      {project.image ? (
        <img src={project.image} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top" />
      ) : (
        <svg
          viewBox="112 8 416 204"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full text-cyan-400"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <pattern id={`${uid}-grid`} width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M16 0 H0 V16" fill="none" stroke="currentColor" strokeOpacity="0.07" />
            </pattern>
          </defs>
          <rect x="112" y="8" width="416" height="204" fill={`url(#${uid}-grid)`} />
          {Visual ? <Visual a={accent} uid={uid} /> : null}
        </svg>
      )}
    </div>
  );
}
