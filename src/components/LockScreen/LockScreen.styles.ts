import type { SxProps, Theme } from '@mui/material';

// CountdownTimer's sectionSx already handles full-screen layout and background.
// This wrapper is intentionally minimal — just a block container.
export const wrapperSx: SxProps<Theme> = {
  display: 'block',
};
