import { Box, Typography } from "@mui/material";
import React from "react";
import XIcon from "@mui/icons-material/X";

function BladgeComp({ background, Xscore = "", Xcolor = "#f0f0f0" }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        borderRadius: 2,
        background: `${background}`,
        gap: 0.5,
      }}
    >
      <XIcon sx={{ color: `${Xcolor}`, fontSize: 14 }} />

      {Xscore && (
        <Typography
          variant="body2"
          sx={{
            fontSize: 14,
            fontWeight: "bold",
            color: "#F0f0f0",
            marginRight: 1,
          }}
        >
          {Xscore}
        </Typography>
      )}
    </Box>
  );
}

export default BladgeComp;
