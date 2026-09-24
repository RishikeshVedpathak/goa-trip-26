import BeachBackground from './BeachBackground';

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <header className="hero">
      <div className="sun" />
      <BeachBackground />
      <h1>GOA<span>2026</span></h1>
      <p className="sub">The Boys Are Going To Goa 🍻</p>
      <p className="meta">2–5 October 2026 · North Goa · 4 Friends</p>
      <a
        className="pill"
        href="https://maps.app.goo.gl/knq9Hph3wBNeieEm6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Regal Park, Candolim in Google Maps"
      >📍 Regal Park, Candolim</a>
      <button onClick={onStart}>Start the Journey ↓</button>
      <div className="road" aria-hidden="true"><div className="dash" /><span className="hcar">🚗</span></div>
    </header>
  );
}
