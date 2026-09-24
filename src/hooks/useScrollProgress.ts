import { useEffect, useRef } from 'react';

/** Maps scroll position to a fractional stop index (0 … stops-1), tied to [data-stop] elements.
 *  Eased in a rAF loop so the car glides; snaps to whole stops for prefers-reduced-motion. */
export function useScrollProgress(onUpdate: (t: number) => void) {
  const cb = useRef(onUpdate);
  cb.current = onUpdate;
  useEffect(() => {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ys: number[] = [], target = 0, cur = 0, raf = 0;
    const step = () => {
      raf = 0;
      cur = still ? Math.round(target) : cur + (target - cur) * 0.18;
      if (Math.abs(target - cur) < 0.002) cur = target;
      cb.current(cur);
      if (cur !== target) raf = requestAnimationFrame(step);
    };
    const read = () => {
      if (!ys.length) return;
      const c = scrollY + innerHeight * 0.55, n = ys.length - 1;
      let i = 0;
      while (i < n && c > ys[i + 1]) i++;
      target = c <= ys[0] ? 0 : i >= n ? n : i + (c - ys[i]) / (ys[i + 1] - ys[i]);
      if (!raf) raf = requestAnimationFrame(step);
    };
    const measure = () => {
      ys = [...document.querySelectorAll<HTMLElement>('[data-stop]')].map((e) => e.getBoundingClientRect().top + scrollY + e.offsetHeight / 2);
      read();
    };
    measure();
    addEventListener('scroll', read, { passive: true });
    addEventListener('resize', measure);
    addEventListener('load', measure);
    document.fonts?.ready.then(measure);
    return () => {
      removeEventListener('scroll', read);
      removeEventListener('resize', measure);
      removeEventListener('load', measure);
      cancelAnimationFrame(raf);
    };
  }, []);
}
