import { Box, Typography } from '@mui/material';
import type { GalleryProps } from './Gallery.types';
import {
  sectionSx,
  headerSx,
  titleSx,
  subtitleSx,
  gridSx,
  cardSx,
  imageWrapSx,
  captionSx,
} from './Gallery.styles';

export default function Gallery({ photos }: GalleryProps) {
  return (
    <Box component="section" id="gallery" sx={sectionSx}>
      <Box sx={headerSx}>
        <Typography sx={titleSx}>הזיכרונות שלנו</Typography>
        <Typography sx={subtitleSx}>רגעים קפואים בזמן, לנצח בלבי</Typography>
      </Box>

      <Box sx={gridSx}>
        {photos.map((photo) => (
          <Box key={photo.id} sx={cardSx}>
            <Box sx={imageWrapSx}>
              <Box
                component="img"
                src={photo.image}
                alt={photo.alt}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            {photo.caption && (
              <Typography sx={captionSx}>{photo.caption}</Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
