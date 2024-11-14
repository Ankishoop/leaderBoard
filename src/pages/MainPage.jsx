import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import TabBar from "../components/TabBar";
import Navbar from "../components/Navigator";
import RankingCard from "../components/RankingCard";
import Featured from "../components/Featured";
import axios from "axios";
import LeaderTable from "../components/LeaderTable";

function MainPage({ leaderBoard }) {
  console.log("🚀 ~ MainPage ~ leaderBoard:", leaderBoard);

  const TopRanking = leaderBoard.slice(0, 3);
  console.log("🚀 ~ MainPage ~ TopRanking:", TopRanking);

  return (
    <>
      {/* </Box> */}
      <Navbar />
      <TabBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {TopRanking.map((eachRank) => {
          return <RankingCard key={eachRank.Rank} data={eachRank} />;
        })}
        {/* <RankingCard />
        <RankingCard />
        <RankingCard /> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Featured />
        <Featured />
        <Featured />
        <Featured />
      </Box>

      <Box>
        <LeaderTable data={leaderBoard} />
      </Box>
    </>
  );
}

export default MainPage;
