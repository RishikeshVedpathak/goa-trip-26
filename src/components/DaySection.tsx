import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import type { Day } from '../data/itinerary';

export default function DaySection({ d, active }: { d: Day; active: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && el.classList.add('in'), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section id={`day-${d.n}`} ref={ref} className="day" style={{ '--c': d.color } as CSSProperties}>
      <header>
        <p className="num">DAY 0{d.n}</p>
        <h3>{d.title}</h3>
        <p className="date">{d.date}</p>
        <p className="tag">{d.tag}</p>
      </header>
      {d.callout && <div className="callout">{d.callout}</div>}
      <ol className="tl">
        {d.items.map((it) => (
          <li key={it.k} data-stop className={it.k === active ? 'on' : ''}>
            <time>{it.t}</time>
            <div><b>{it.i} {it.title}</b>{it.sub && <small>{it.sub}</small>}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
