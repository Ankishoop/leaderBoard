import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

function TabBar() {
  const [value, setValue] = useState(0);

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    // console.log("🚀 ~ handleTabChange ~ newValue:", newValue);
    setValue(newValue);
  };
  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <Box
        boxShadow={5}
        // borderRadius={2}
        sx={{
          backgroundColor: "lightgray",
          borderRadius: 2,
        }}
      >
        <Tabs
          value={value}
          sx={{
            borderRadius: 2,
          }}
        >
          <Tab
            sm={{ boxShadow: 3 }}
            label="All"
            value={0}
            onClick={(e) => handleTabChange(e, 0)}
            sx={{
              backgroundColor: value === 0 ? "white" : "gray", // Apply shadow to the active tab
              transition: "box-shadow 0.3s ease", // Smooth transition
            }}
          />
          <Tab
            sm={{ boxShadow: 2 }}
            value={1}
            label="Stocks"
            onClick={(e) => handleTabChange(e, 1)}
            sx={{
              backgroundColor: value === 1 ? "white" : "gray", // Apply shadow to the active tab
              transition: "box-shadow 0.3s ease", // Smooth transition
            }}
          />
          <Tab
            sm={{ boxShadow: 3 }}
            value={3}
            label="Options"
            onClick={(e) => handleTabChange(e, 2)}
            sx={{
              backgroundColor: value === 2 ? "white" : "gray", // Apply shadow to the active tab
              transition: "box-shadow 0.3s ease", // Smooth transition
            }}
          />
        </Tabs>
      </Box>
    </Box>
  );
}

export default TabBar;
