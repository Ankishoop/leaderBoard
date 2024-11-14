import React from "react";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { medal } from "../utils/indes";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BladgeComp from "./BladgeComp";

// const data = [
//   {
//     name: "Roger Korsgaard",
//     role: "Daytrader",
//     rank: 1,
//     trophies: "Options",
//     streaks: "14 / 90%",
//     alerts: "20 / 90%",
//     trades: "497 / 90%",
//     avgGain: "90%",
//     xScore: "83",
//   },
//   {
//     name: "Charlie Herwitz",
//     role: "Swing Trader",
//     rank: 2,
//     trophies: "Stocks",
//     streaks: "13 / 80%",
//     alerts: "18 / 60%",
//     trades: "359 / 90%",
//     avgGain: "90%",
//     xScore: "80",
//   },
//   // Add more entries as needed
// ];

function LeaderTable({ data }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "95%",
        margin: "auto",
        border: "none",
        boxShadow: "none",
      }}
    >
      <Table
        sx={{
          boxShadow: "none",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            ></TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            >
              Name
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            >
              Rank
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            >
              Trophies
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            >
              Streaks
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            >
              Alerts
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            >
              Trades
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            >
              Avg Gain
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", border: "none" }}
            >
              Xscore
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((entry, index) => (
            <TableRow
              key={index}
              sx={{
                borderLeft: `5px solid ${medal[entry.Rank]}`,
              }}
            >
              <TableCell
                align="center"
                sx={{
                  border: "none",
                }}
              >
                <Typography variant="h6" color="primary">
                  {entry.Rank}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    gap: 1,
                  }}
                >
                  <Avatar sx={{ marginRight: 2 }}>A</Avatar>{" "}
                  {/* Replace with actual avatar */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   gap: 1,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {entry.Name}
                        <CheckCircleIcon
                          sx={{
                            color: "#1DA1F2",
                            fontSize: 16,
                            marginLeft: 0.5,
                          }}
                        />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {entry["Trading Style"]}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "grey",
                      padding: "5px",
                      borderRadius: 2,
                    }}
                  >
                    <ManageAccountsIcon />
                    {entry.Trophies}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "none",
                }}
              >
                {["1", "2", "3"].includes(entry.Rank) ? (
                  <BladgeComp Xcolor={medal[entry.Rank]} />
                ) : (
                  // <Typography variant="body2">{entry.trophies}</Typography>
                  ""
                )}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "none",
                }}
              >
                {/* <Typography>{entry.Streaks}</Typography> */}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "none",
                }}
              >
                <Typography>{entry.Streaks}</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "none",
                }}
              >
                <Typography>{entry.Alerts}</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderBottom: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      height: 38,
                      width: 0.01,
                      backgroundColor: "#909090",
                      borderRadius: 12,
                    }}
                  />
                  <Typography>
                    {entry.Trades} / {entry["Avg Gain"]}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "none",
                }}
              >
                <Typography>{entry["Avg Gain"]}</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "none",
                }}
              >
                <Box>
                  <BladgeComp
                    Xscore={entry.Xscore}
                    Xcolor={medal[entry.Rank]}
                    background={"#1a116b"}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeaderTable;
