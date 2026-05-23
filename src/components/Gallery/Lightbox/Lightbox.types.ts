import type { PhotoCard } from "../Gallery.types";

export interface LightboxProps {
  photos: PhotoCard[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}
