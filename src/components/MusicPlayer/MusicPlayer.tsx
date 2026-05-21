import { useState, useRef, useEffect } from 'react';
import { Box, Tooltip } from '@mui/material';
import { PlayArrow, Pause, MusicNote } from '@mui/icons-material';
import type { MusicPlayerProps } from './MusicPlayer.types';
import { fabSx } from './MusicPlayer.styles';

export default function MusicPlayer({ src }: MusicPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.addEventListener('canplaythrough', () => setReady(true));
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !ready) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const label = !ready ? 'טוען מוזיקה...' : playing ? 'השהה מוזיקה' : 'נגן מוזיקה';
  const Icon = !ready ? MusicNote : playing ? Pause : PlayArrow;

  return (
    <Tooltip title={label} placement="left">
      <Box
        sx={fabSx}
        onClick={toggle}
        role="button"
        aria-label={label}
        aria-pressed={playing}
      >
        <Icon fontSize="medium" />
      </Box>
    </Tooltip>
  );
}
