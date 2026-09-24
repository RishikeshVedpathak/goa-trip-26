import { useEffect, useRef, useState } from 'react';

const musicUrl = new URL('../Dil Chahta Hai - Music.m4a', import.meta.url).href;

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let unlocked = false;
    const syncPlaying = () => setIsPlaying(!audio.paused);
    const tryPlay = () => {
      if (unlocked) return;
      if (!audio.paused) {
        unlocked = true;
        syncPlaying();
        return;
      }
      void audio.play().then(() => {
        unlocked = true;
        syncPlaying();
      }).catch(() => {
        // Most browsers require a user gesture before audible autoplay.
      });
    };
    const unlock = (event: Event) => {
      if (event.target instanceof Element && event.target.closest('.audio-toggle')) return;
      tryPlay();
    };

    audio.addEventListener('play', syncPlaying);
    audio.addEventListener('pause', syncPlaying);
    tryPlay();
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('keydown', unlock);

    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      audio.removeEventListener('play', syncPlaying);
      audio.removeEventListener('pause', syncPlaying);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
      setIsMuted(false);
      void audio.play().then(() => setIsPlaying(true)).catch(() => undefined);
      return;
    }

    const nextMuted = !audio.muted;
    audio.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const label = isPlaying ? (isMuted ? 'Unmute music' : 'Mute music') : 'Play music';
  const icon = isPlaying ? (isMuted ? '🔇' : '🔊') : '▶️';

  return (
    <>
      <audio ref={audioRef} className="background-audio" src={musicUrl} autoPlay loop preload="auto" />
      <button
        className="audio-toggle"
        type="button"
        onClick={toggleAudio}
        aria-label={label}
        aria-pressed={isMuted}
        title={label}
      >
        <span aria-hidden="true">{icon}</span>
      </button>
    </>
  );
}
