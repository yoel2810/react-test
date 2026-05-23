import CountdownTimer from '../CountdownTimer/CountdownTimer';
import type { LockScreenProps } from './LockScreen.types';

export default function LockScreen({ date, onUnlock }: LockScreenProps) {
  return <CountdownTimer date={date} onBirthdayReached={onUnlock} />;
}
