import { Box, Typography } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { HeroProps } from './Hero.types';
import {
  heroSectionSx,
  heroNameSx,
  heroHeadlineSx,
  heroSubtextSx,
  scrollCtaSx,
  floatingOrb1Sx,
  floatingOrb2Sx,
} from './Hero.styles';

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
  };
}

export default function Hero({ name = 'Gali', targetSectionId = 'countdown' }: HeroProps) {
  const scrollToNext = () => {
    document.getElementById(targetSectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box component="section" id="hero" sx={heroSectionSx}>
      <Box sx={floatingOrb1Sx} />
      <Box sx={floatingOrb2Sx} />

      <motion.div {...fadeUpProps(0)}>
        <Typography sx={heroNameSx}>{name}</Typography>
      </motion.div>

      <motion.div {...fadeUpProps(0.2)}>
        <Typography sx={heroHeadlineSx}>
          יום הולדת שמח, אהובתי ✨
        </Typography>
      </motion.div>

      <motion.div {...fadeUpProps(0.4)}>
        <Typography sx={heroSubtextSx}>
          כל רגע איתך הוא מתנה. היום אנחנו חוגגים אותך — את האור שלך, את הצחוק שלך, וכל מה שהופך אותך למיוחדת כל כך.
        </Typography>
      </motion.div>

      <motion.div {...fadeUpProps(0.7)} style={{ cursor: 'pointer' }} onClick={scrollToNext}>
        <Box sx={scrollCtaSx}>
          <Typography variant="body2" sx={{ letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
            גלול לגלות
          </Typography>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' as const }}
          >
            <KeyboardArrowDown fontSize="large" />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}
