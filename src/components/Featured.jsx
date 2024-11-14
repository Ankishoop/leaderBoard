import { Avatar, Box, Badge, CardContent, Typography } from "@mui/material";
import React from "react";

function Featured() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          py: 0,
          border: "2px solid #e0e0e0",
          boxShadow: 3,
          borderRadius: 4,
          margin: "auto",
          maxWidth: 280,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Avatar
            src="/assets/image.png"
            alt="Roger Korsgaard"
            sx={{
              width: 60,
              height: 60,
              margin: "auto",
              border: "3px solid #ffffff",
            }}
          />
          <Badge
            badgeContent={4}
            color="secondary"
            sx={{
              position: "absolute",
              top: 15,
              right: 10,
              fontWeight: "bold",
            }}
          />
        </Box>
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="body2" color="textSecondary">
            DayTrader
          </Typography>
          <Typography variant="h8" fontWeight="bold" color="textSecondary">
            Roger K.
          </Typography>
        </CardContent>
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold" color="textSecondary">
            129
          </Typography>
        </CardContent>
      </Box>
    </div>
  );
}

export default Featured;
