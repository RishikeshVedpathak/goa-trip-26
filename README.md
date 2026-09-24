# GOA 2026 · scroll-driven road-trip itinerary

Static React + Vite + TypeScript site. No backend, no API keys.

## Install / run / build
```
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve dist/ locally
```

## Change the itinerary
Edit `src/data/itinerary.ts`. Each day is one `mk(...)` call with rows of
`[time, emoji, title, locationKey, optionalSubtitle]`. Every row becomes a stop the car drives to, in order.
Add places to `LOCS`.

## How the route works
`LOCS` holds normalised coordinates (`x`,`y` from 0–100 over the map, y down). `useScrollProgress`
measures each timeline row (`[data-stop]`), turns scroll position into a fractional stop index, and
`App.tsx` linearly interpolates the car between the two neighbouring stops
(`x = ax + (bx - ax) * f`), rotating it along the segment direction. The car and progress bar are moved
directly through refs in `requestAnimationFrame`, so React only re-renders when the active stop changes.
`prefers-reduced-motion` snaps the car to whole stops and disables CSS animation.

## Replace the map
The map is a stylised SVG in `src/components/TripMap.tsx` (`SEA`, `RIVER` paths and colours), so no map
tiles are embedded. To use an image instead: put it at `public/map/goa-map.jpg`, add
`<image href={import.meta.env.BASE_URL + 'map/goa-map.jpg'} x="0" y="0" width="100" height="100" />`
in place of the sea/land shapes, and tune the `LOCS` coordinates to match. Use an image you have the
rights to (e.g. an OpenStreetMap export with attribution).

## Deploy to GitHub Pages
1. Push to a GitHub repo's `main` branch.
2. Settings → Pages → Source: **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and publishes `dist/` on every push.

## Base path
The workflow sets `VITE_BASE=/<repository-name>/` automatically, so renaming the repo just works.
Locally: `VITE_BASE=/my-repo/ npm run build`. If unset, the base is `./` (relative), which works on any path.
