import { useRef, useState } from 'react';
import BackgroundMusic from './components/BackgroundMusic';
import Hero from './components/Hero';
import TripMap from './components/TripMap';
import DaySection from './components/DaySection';
import TripSummary from './components/TripSummary';
import { DAYS, STOPS } from './data/itinerary';
import { useScrollProgress } from './hooks/useScrollProgress';

const N = STOPS.length - 1;
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function App() {
  const car = useRef<SVGGElement>(null), rot = useRef<SVGGElement>(null), bar = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  useScrollProgress((t) => {
    const i = Math.min(Math.floor(t), N - 1), f = t - i, a = STOPS[i], b = STOPS[i + 1];
    const x = a.x + (b.x - a.x) * f, y = a.y + (b.y - a.y) * f;
    if (car.current) car.current.style.transform = `translate(${x}px,${y}px)`;
    if (rot.current && (a.x !== b.x || a.y !== b.y)) {
      const d = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      rot.current.style.transform = `rotate(${d}deg) scaleY(${Math.abs(d) > 90 ? -1 : 1})`;
    }
    if (bar.current) bar.current.style.transform = `scaleX(${t / N})`;
    setIdx(Math.round(t));
  });

  const day = STOPS[idx].day;
  return (
    <>
      <BackgroundMusic />
      <div className="bar"><div ref={bar} /></div>
      <Hero onStart={() => go('day-1')} />
      <main className="story">
        <div className="mapcol"><TripMap idx={idx} carRef={car} rotRef={rot} /></div>
        <div className="days">{DAYS.map((d) => <DaySection key={d.n} d={d} active={idx} />)}</div>
      </main>
      <TripSummary />
      <footer>Made for the boys · Goa 2026</footer>
      <nav aria-label="Jump to day">
        {DAYS.map((d) => (
          <button key={d.n} className={d.n === day ? 'on' : ''} onClick={() => go(`day-${d.n}`)}>
            <span className="s">DAY </span><span className="m">D</span>{d.n}
          </button>
        ))}
      </nav>
    </>
  );
}
