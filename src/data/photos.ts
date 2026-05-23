import type { PhotoCard } from "../components/Gallery/Gallery.types";
import heroImg from "../assets/gallery/WhatsApp Image 2026-05-14 at 20.50.11.jpeg";
import image1 from "../assets/gallery/20260425_155722.jpg";
import image2 from "../assets/gallery/20260425_155731.jpg";
import image3 from "../assets/gallery/IMG_20191207_022250.jpg";
import image4 from "../assets/gallery/IMG_20240818_100859.jpg";

export const photos: PhotoCard[] = [
  {
    id: "photo-1",
    image: heroImg,
    alt: "זיכרון יפה עם גלי",
    caption: "לא ברור למה אני נראה כזה כועס פה אבל בוודאות נמס לי הלב",
  },
  {
    id: "photo-2",
    image: image1,
    alt: "זיכרון יפה עם גלי",
    caption: "זה נראה לי היה היום הכי טוב בחיים שלי",
  },
  {
    id: "photo-3",
    image: image2,
    alt: "זיכרון יפה עם גלי",
    caption: "אני מתגעגעעעע",
  },
  {
    id: "photo-4",
    image: image3,
    alt: "זיכרון יפה עם גלי",
    caption: "החיוך שלך זה הדבר הכי מקסים בעולם, את צריכה לחייך יותר",
  },
  {
    id: "photo-5",
    image: image4,
    alt: "זיכרון יפה עם גלי",
    caption: "זו נראה לי התמונה הראשונה שלנו 🥹",
  },
];
