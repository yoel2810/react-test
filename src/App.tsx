import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero/Hero";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import Gallery from "./components/Gallery/Gallery";
import Letters from "./components/Letters/Letters";
import Surprise from "./components/Surprise/Surprise";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { photos } from "./data/photos";
import { letters } from "./data/letters";

const BIRTHDAY = "2026-05-23T13:00:00";
const MUSIC_SRC = `${import.meta.env.BASE_URL}music/song.mp3`;

const scrollReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [birthdayReached, setBirthdayReached] = useState(
    () => new Date(BIRTHDAY) <= new Date(),
  );

  return (
    <>
      <Hero name="גלי" targetSectionId="countdown" />

      <AnimatedSection>
        <CountdownTimer
          date={BIRTHDAY}
          onBirthdayReached={() => setBirthdayReached(true)}
        />
      </AnimatedSection>

      <AnimatedSection>
        <Gallery photos={photos} />
      </AnimatedSection>

      <AnimatedSection>
        <Letters letters={letters} />
      </AnimatedSection>

      <AnimatedSection>
        <Surprise />
      </AnimatedSection>

      <MusicPlayer src={MUSIC_SRC} autoPlay={birthdayReached} />
    </>
  );
}

export default App;
