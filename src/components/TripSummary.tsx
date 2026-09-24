const HL = ['🏖️ Candolim Beach', '🏝️ Divar Island', '🏘️ Fontainhas', '🏰 Fort Aguada', '🏰 Reis Magos Fort', '🎨 Museum of Goa', '🎰 Casino Night', '🕺 North Goa Nightlife'];
export default function TripSummary() {
  return (
    <section className="sec" id="summary">
      <div className="dash2">
        <h2>GOA 2026</h2>
        <div className="stats">
          <p><b>4</b><small>friends</small></p><p><b>3</b><small>nights</small></p>
          <p><b>4</b><small>days</small></p><p><b>₹24K</b><small>stay</small></p>
        </div>
        <div className="facts"><span>📍 Candolim</span><span>🚗 Self drive</span><span>🌴 North Goa</span></div>
      </div>
      <h2 style={{ marginTop: '2.5rem' }}>Trip highlights</h2>
      <div className="chips">{HL.map((h) => <span key={h}>{h}</span>)}</div>
    </section>
  );
}
