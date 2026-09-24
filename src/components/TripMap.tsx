import type { RefObject } from 'react';
import { DAYS, LOCS, STOPS } from '../data/itinerary';

const SEA = 'M-100,-100 H76 L70,0 C58,12 46,20 32,32 C24,40 24,48 18,56 C12,64 10,76 0,86 L-6,200 H-100Z';
const RIVER = 'M30,36 C44,44 52,46 62,52 S86,54 104,46';
const routeD = (n: number) => {
  const l = DAYS[n - 1].items.map((i) => LOCS[i.loc]).filter((p, i, a) => !i || p !== a[i - 1]);
  return 'M' + l.map((p) => `${p.x},${p.y}`).join(' L');
};

type P = { idx: number; carRef: RefObject<SVGGElement>; rotRef: RefObject<SVGGElement> };
export default function TripMap({ idx, carRef, rotRef }: P) {
  const cur = STOPS[idx];
  const dayLocs = new Set(DAYS[cur.day - 1].items.map((i) => i.loc));
  return (
    <div className="mapwrap">
      <svg viewBox="0 0 100 100" role="img" aria-label="Stylised map of the North Goa road-trip route">
        <defs>
          <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M6,0H0V6" fill="none" stroke="#fff" strokeOpacity=".06" strokeWidth=".15" />
          </pattern>
        </defs>
        <rect x="-100" y="-100" width="300" height="300" fill="#153f33" />
        <path d={SEA} fill="#0b3a44" stroke="#5fd0c4" strokeOpacity=".5" strokeWidth=".4" />
        <path d={RIVER} fill="none" stroke="#0b3a44" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="-100" y="-100" width="300" height="300" fill="url(#grid)" />
        {DAYS.map((d) => (
          <path key={d.n} d={routeD(d.n)} stroke={d.color} className={'route' + (d.n === cur.day ? ' act' : '')} />
        ))}
        {Object.entries(LOCS).map(([key, l]) => {
          const on = key === cur.loc;
          return (
            <g key={key}>
              {on && <circle cx={l.x} cy={l.y} r="1.2" className="rip" />}
              <circle cx={l.x} cy={l.y} r="1" className={'pin' + (on ? ' on' : '')} />
              {(on || dayLocs.has(key)) && <text x={l.x + 1.8} y={l.y + 0.8} className="lab">{l.name}</text>}
            </g>
          );
        })}
        <g ref={carRef} className="car">
          <ellipse cx=".4" cy="1" rx="3" ry="1.5" fill="#000" opacity=".3" />
          <g ref={rotRef} className="rot">
            <rect x="-2.6" y="-1.3" width="5.2" height="2.6" rx="1" fill="#ff5a36" />
            <rect x="-.7" y="-1" width="1.9" height="2" rx=".4" fill="#ffe9c9" />
            <circle cx="2.4" cy="-.75" r=".3" fill="#fff3a8" />
            <circle cx="2.4" cy=".75" r=".3" fill="#fff3a8" />
          </g>
        </g>
      </svg>
      <div className="now" key={idx}>
        <b>{cur.i} {cur.title}</b><br /><small>{cur.t} · {cur.name}</small>
      </div>
    </div>
  );
}
