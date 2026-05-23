import { Box } from '@mui/material';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import type { LockScreenProps } from './LockScreen.types';
import { wrapperSx } from './LockScreen.styles';

export default function LockScreen({ date, onUnlock }: LockScreenProps) {
  return (
    <Box sx={wrapperSx}>
      <CountdownTimer date={date} onBirthdayReached={onUnlock} />
    </Box>
  );
}
