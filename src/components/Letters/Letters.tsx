import { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import type { LettersProps } from "./Letters.types";
import {
  sectionSx,
  headerSx,
  titleSx,
  subtitleSx,
  listSx,
  cardSx,
  cardHeaderSx,
  cardTitleSx,
  cardBodySx,
} from "./Letters.styles";

export default function Letters({ letters }: LettersProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Box component="section" id="letters" sx={sectionSx}>
      <Box sx={headerSx}>
        <Typography sx={titleSx}>מכתבים מהלב</Typography>
        <Typography sx={subtitleSx}>
          קצת ברכות ומחמאות לא הרגו אף אחד
        </Typography>
      </Box>

      <Box sx={listSx}>
        {letters.map((letter) => (
          <Box key={letter.id} sx={cardSx}>
            <Box sx={cardHeaderSx} onClick={() => toggle(letter.id)}>
              <Typography sx={cardTitleSx}>{letter.title}</Typography>
              {openId === letter.id ? (
                <ExpandLess sx={{ color: "rgba(244,184,193,0.7)" }} />
              ) : (
                <ExpandMore sx={{ color: "rgba(244,184,193,0.7)" }} />
              )}
            </Box>
            <Collapse in={openId === letter.id} unmountOnExit>
              <Typography sx={cardBodySx}>{letter.body}</Typography>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
