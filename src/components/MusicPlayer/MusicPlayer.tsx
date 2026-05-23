import { useRef, useEffect } from 'react';
import type { MusicPlayerProps } from './MusicPlayer.types';

export default function MusicPlayer({ src, autoPlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src]);

  useEffect(() => {
    if (!autoPlay) return;

    const tryPlay = () => {
      if (playedRef.current) return;
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().then(() => { playedRef.current = true; }).catch(() => {});
    };

    // Attempt immediately (works if a prior gesture already unlocked audio)
    tryPlay();

    // Fall back to first user gesture on the page
    const onGesture = () => {
      tryPlay();
      document.removeEventListener('click', onGesture);
      document.removeEventListener('touchstart', onGesture);
      document.removeEventListener('keydown', onGesture);
    };
    document.addEventListener('click', onGesture);
    document.addEventListener('touchstart', onGesture);
    document.addEventListener('keydown', onGesture);

    return () => {
      document.removeEventListener('click', onGesture);
      document.removeEventListener('touchstart', onGesture);
      document.removeEventListener('keydown', onGesture);
    };
  }, [autoPlay]);

  return null;
}
