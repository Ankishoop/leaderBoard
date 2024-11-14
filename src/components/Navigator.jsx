import SearchIcon from "@mui/icons-material/Search";

import React from "react";
import { Box } from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        display: "flex",
        padding: "8px",
        // marginTop: "3px",
        // maxHeight: "50px",
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
      }}
    >
      <Box display="flex" width={"100%"}>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            width: "40%",
            backgroundColor: "#d0d0d0",
            borderRadius: 2,
            padding: "8px 16px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <SearchIcon color="action" />
          <input
            placeholder="Start typing Ticker name, User, or Trader..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              width: "100%",
              color: "black",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          //   height: "70%",
          //   overflow: "hidden",
        }}
      >
        <Box
          sx={{
            // padding: 2,
            padding: " 8px",
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <SearchIcon color="action" />
        </Box>
        <Box
          sx={{
            // padding: 2,
            padding: " 8px",
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <SearchIcon color="action" />
        </Box>
        <Box
          sx={{
            padding: "8px",
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <SearchIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
