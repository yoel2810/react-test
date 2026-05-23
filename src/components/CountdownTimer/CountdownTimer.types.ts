export interface CountdownTimerProps {
  date: string;
  onBirthdayReached?: () => void;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
