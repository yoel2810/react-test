import { useState } from "react";
import { Box, Typography } from "@mui/material";
import type { GalleryProps } from "./Gallery.types";
import Lightbox from "./Lightbox/Lightbox";
import {
  sectionSx,
  headerSx,
  titleSx,
  subtitleSx,
  gridSx,
  cardSx,
  imageWrapSx,
  captionSx,
} from "./Gallery.styles";

export default function Gallery({ photos }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <Box component="section" id="gallery" sx={sectionSx}>
      <Box sx={headerSx}>
        <Typography sx={titleSx}>התמונות שלנו</Typography>
        <Typography sx={subtitleSx}>
          לגמרי אין לנו מספיק צריך להוסיף עוד :(
        </Typography>
      </Box>

      <Box sx={gridSx}>
        {photos.map((photo, index) => (
          <Box key={photo.id} sx={cardSx} onClick={() => setSelectedIndex(index)}>
            <Box sx={imageWrapSx}>
              <Box
                component="img"
                src={photo.image}
                alt={photo.alt}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            {photo.caption && (
              <Typography sx={captionSx}>{photo.caption}</Typography>
            )}
          </Box>
        ))}
      </Box>

      <Lightbox
        photos={photos}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={() => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() =>
          setSelectedIndex((i) =>
            i !== null && i < photos.length - 1 ? i + 1 : i
          )
        }
      />
    </Box>
  );
}
