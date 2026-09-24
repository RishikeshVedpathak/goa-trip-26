const HL = ['🏖️ Candolim Beach', '🏝️ Divar Island', '🏘️ Fontainhas', '🏰 Fort Aguada', '🏰 Reis Magos Fort', '🎨 Museum of Goa', '🎰 Casino Night', '🕺 North Goa Nightlife'];
export default function TripSummary() {
  return (
    <section className="sec" id="summary">
      <h2>Trip highlights</h2>
      <div className="chips">{HL.map((h) => <span key={h}>{h}</span>)}</div>
    </section>
  );
}
