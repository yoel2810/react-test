import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import type { CountdownTimerProps, TimeLeft } from "./CountdownTimer.types";
import {
  sectionSx,
  sectionTitleSx,
  timerGridSx,
  unitCardSx,
  unitValueSx,
  unitLabelSx,
  birthdayMessageSx,
} from "./CountdownTimer.styles";

function getTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "ימים" },
  { key: "hours", label: "שעות" },
  { key: "minutes", label: "דקות" },
  { key: "seconds", label: "שניות" },
];

export default function CountdownTimer({ date, onBirthdayReached }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    getTimeLeft(date),
  );
  const notifiedRef = useRef(false);

  useEffect(() => {
    if (timeLeft === null && !notifiedRef.current) {
      notifiedRef.current = true;
      onBirthdayReached?.();
    }
    const id = setInterval(() => {
      const next = getTimeLeft(date);
      setTimeLeft(next);
      if (next === null && !notifiedRef.current) {
        notifiedRef.current = true;
        onBirthdayReached?.();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [date, onBirthdayReached]);

  return (
    <Box component="section" id="countdown" sx={sectionSx}>
      {timeLeft === null ? (
        <Typography sx={birthdayMessageSx}>
          🎉 יום הולדת שמח, גלי! 🎉
        </Typography>
      ) : (
        <>
          <Typography sx={sectionTitleSx}>ספירה לאחור ליום שלך</Typography>
          <Box sx={timerGridSx}>
            {UNITS.map(({ key, label }) => (
              <Box key={key} sx={unitCardSx}>
                <Typography sx={unitValueSx}>
                  {String(timeLeft[key]).padStart(2, "0")}
                </Typography>
                <Typography sx={unitLabelSx}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
