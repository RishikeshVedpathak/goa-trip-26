// Route coordinates are normalised to a 0–100 grid over the map (x → right, y → down).
export type Loc = { x: number; y: number; name: string };
export const LOCS: Record<string, Loc> = {
  pune: { x: 90, y: 8, name: 'Pune' },
  regal: { x: 34, y: 46, name: 'Regal Park, Candolim' },
  mikeys: { x: 37, y: 40, name: "Mikey's Place" },
  beach: { x: 26, y: 48, name: 'Candolim Beach' },
  shanta: { x: 84, y: 84, name: 'Shri Shantadurga Devasthan' },
  siddhi: { x: 72, y: 70, name: 'Siddhivinayak Ganesh Mandir' },
  divar: { x: 70, y: 44, name: 'Divar Island' },
  panjim: { x: 56, y: 57, name: 'Panjim' },
  fontainhas: { x: 63, y: 61, name: 'Fontainhas' },
  deltin: { x: 50, y: 50, name: 'Deltin Royale' },
  sinq: { x: 23, y: 55, name: 'Sinquerim Beach' },
  club: { x: 28, y: 59, name: 'Sinq Night Club' },
  aguada: { x: 18, y: 63, name: 'Fort Aguada' },
  mog: { x: 42, y: 32, name: 'Museum of Goa' },
  reis: { x: 47, y: 43, name: 'Reis Magos Fort' },
};

export type Item = { k: number; t: string; i: string; title: string; loc: string; sub?: string };
export type Day = { n: number; date: string; title: string; tag: string; color: string; callout?: string; items: Item[] };
type Raw = [string, string, string, string, string?];

let k = 0;
const mk = (n: number, date: string, title: string, tag: string, color: string, raw: Raw[], callout?: string): Day => ({
  n, date, title, tag, color, callout,
  items: raw.map(([t, i, ti, loc, sub]) => ({ k: k++, t, i, title: ti, loc, sub })),
});

export const DAYS: Day[] = [
  mk(1, 'Friday · 2 October', 'Pune → Candolim', 'The journey begins.', '#ff7a45', [
    ['12:00 AM', '🚗', 'Leave Pune', 'pune', 'Self-drive, four friends'],
    ['12:00 PM', '🏠', 'Check-in', 'regal', 'Regal Park, Candolim · arrive 10:30–12:30'],
    ['1:00 PM', '🍴', 'Lunch', 'mikeys', "Mikey's Place"],
    ['2:30 PM', '😴', 'Power nap', 'regal', 'Rest at the Airbnb till 5:00 PM'],
    ['5:30 PM', '🌅', 'Candolim Beach', 'beach', 'Sunset until 7:30 PM'],
    ['8:30 PM', '🍻', 'Dinner & drinks', 'regal', 'Around Candolim'],
  ]),
  mk(2, 'Saturday · 3 October', 'Temples, Islands & Casino', 'Sacred mornings, island hopping, luck at night.', '#f2b632', [
    ['8:00 AM', '🥞', 'Breakfast', 'regal', 'Caravela Cafe & Bistro'],
    ['10:15 AM', '🛕', 'Shri Shantadurga Devasthan', 'shanta', 'Kavlem'],
    ['11:15 AM', '🛕', 'Shri Siddhivinayak Ganesh Mandir', 'siddhi'],
    ['12:00 PM', '🏝️', 'Divar Island', 'divar'],
    ['2:00 PM', '🍴', 'Lunch', 'panjim', 'Panjim'],
    ['3:00 PM', '🏘️', 'Fontainhas', 'fontainhas', 'Latin Quarter'],
    ['5:00 PM', '🏠', 'Airbnb', 'regal', 'Rest & get ready'],
    ['8:30 PM', '🚕', 'Leave for the casino', 'regal'],
    ['9:00 PM', '🎰', 'Deltin Royale', 'deltin', 'Casino night'],
    ['Late', '🛏️', 'Overnight', 'regal', 'Regal Park, Candolim'],
  ], '🎰 Casino Night'),
  mk(3, 'Sunday · 4 October', 'Forts, Art & Nightlife', 'Forts by day, dance floors by night.', '#e5507a', [
    ['8:30 AM', '🥞', 'Breakfast', 'regal'],
    ['9:30 AM', '🏖️', 'Sinquerim Beach', 'sinq'],
    ['10:15 AM', '🏰', 'Fort Aguada', 'aguada'],
    ['11:30 AM', '🎨', 'Museum of Goa', 'mog', 'MOG'],
    ['1:00 PM', '🍴', 'Lunch', 'mog'],
    ['2:30 PM', '🏰', 'Reis Magos Fort', 'reis'],
    ['4:30 PM', '🏠', 'Airbnb', 'regal', 'Rest & get ready till 7:30 PM'],
    ['8:30 PM', '🍽️', 'Dinner', 'regal'],
    ['10:00 PM', '🕺', 'Sinq Night Club or Chill out at the beach', 'club'],
    ['Late', '🛏️', 'Overnight', 'regal', 'Regal Park, Candolim'],
  ], '🕺 Last Night In Goa'),
  mk(4, 'Monday · 5 October', 'Goa → Pune', 'Goa, until next time.', '#2bb3a7', [
    ['9:00 AM', '🥞', 'Breakfast', 'regal'],
    ['10:00 AM', '🧳', 'Check-out', 'regal'],
    ['11:00 AM', '🚗', 'Start drive to Pune', 'pune', 'The car turns back home'],
  ], '🚗 Turning back toward Pune'),
];

export const STOPS = DAYS.flatMap((d) => d.items.map((it) => ({ ...it, day: d.n, ...LOCS[it.loc] })));
