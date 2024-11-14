import React from "react";
import { Card, Typography, Button, Box, Badge } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BladgeComp from "./BladgeComp";
import { medal, RankTable } from "../utils/indes";

const RankingCard = ({ data }) => {
  console.log("🚀 ~ RankingCard ~ data:", data);

  return (
    <Card
      sx={{
        height: 320,
        width: 250,
        borderRadius: 3,
        padding: 1,
        boxShadow: 3,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        // backgroundImage: "linear-gradient(145deg, #F4D4D4, #F9F9FB)",
      }}
    >
      {/* Badge in the corner */}
      <Box
        sx={{
          borderRadius: 3,
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "50%",
            //   border: "solid",
            gap: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "60%",
              // border: "solid",
              position: "relative",
              borderRadius: 2,
              backgroundImage: "linear-gradient(145deg, #F0f0f0, yellow)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                padding: "2px 6px",
                borderRadius: "12px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: 34, fontWeight: "bold", color: "gray" }}
              >
                {RankTable[data.Rank]}
              </Typography>
            </Box>
          </Box>

          {/* Avatar */}

          <Box
            sx={{
              position: "absolute",
              top: 52,
              left: 30,
              width: 76,
              height: 86,
              padding: "4px",
              backgroundColor: "white",
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              alt="Roger Korsgaard"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <BladgeComp background={"#4a4a4a"} Xcolor="gray" />
              <BladgeComp
                background={"#1a116b"}
                Xscore={data.Xscore}
                Xcolor={medal[data.Rank]}
              />
            </Box>
          </Box>
        </Box>

        {/* Name and Status */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}
          >
            {data.Name}
            <CheckCircleIcon
              sx={{
                color: "#1DA1F2",
                fontSize: 18,
                marginLeft: 0.5,
              }}
            />
          </Typography>
          <Typography
            sx={{
              background:
                "linear-gradient(to right, #ff7e5f, #f5f5f5, #32cd32)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}
            variant="body"
          >
            {data.TradingStyle}
          </Typography>

          {/* Stats */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginTop: 1,
              height: "100%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Box>
              <Typography variant="subtitle2" align="center">
                {data.Alerts}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Alerts
              </Typography>
            </Box>
            <Box
              sx={{
                height: 38,
                width: 0.01,
                backgroundColor: "#909090",
                borderRadius: 12,
              }}
            />

            <Box>
              <Typography variant="subtitle2" align="center">
                {data.Trades}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Trades
              </Typography>
            </Box>

            <Box
              sx={{
                height: 38,
                width: 0.01,
                backgroundColor: "#909090",
                borderRadius: 12,
              }}
            />
            <Box>
              <Typography variant="subtitle2" align="center">
                {data["Avg Gain"]}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Avg Gain
              </Typography>
            </Box>
          </Box>

          {/* Profile Button */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              marginTop: 2,
              borderColor: "#5e5454",
              borderWidth: 2,
              color: "#5e5454",
              borderRadius: 2,
            }}
          >
            Profile
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default RankingCard;
