export interface PhotoCard {
  id: string;
  image: string;
  caption?: string;
  alt: string;
}

export interface GalleryProps {
  photos: PhotoCard[];
}
