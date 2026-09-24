import BeachBackground from './BeachBackground';

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <header className="hero">
      <div className="sun" />
      <BeachBackground />
      <h1>GOA<span>2026</span></h1>
      <p className="sub">The Boys Are Going To Goa 🍻</p>
      <p className="meta">2–5 October 2026 · North Goa · 4 Friends</p>
      <p className="pill">📍 Regal Park, Candolim</p>
      <button onClick={onStart}>Start the Journey ↓</button>
      <div className="road" aria-hidden="true"><div className="dash" /><span className="hcar">🚗</span></div>
    </header>
  );
}
