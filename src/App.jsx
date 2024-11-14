import { useEffect, useState } from "react";

import MainPage from "./pages/mainPAge";
import axios from "axios";
import { Skeleton } from "@mui/material";

function App() {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://sheetdb.io/api/v1/r9qkloxrhjycd";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const jsonData = JSON.parse(JSON.stringify(response.data));
        console.log("🚀 ~ .then ~ jsonData:", jsonData);
        setLeaderBoard(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        height: "100vh", // Full height of the viewport
        width: "100vw", // Full width of the parent container
      }}
    >
      {loading ? (
        <Skeleton variant="rounded" width={"100%"} height={60} />
      ) : (
        <MainPage leaderBoard={leaderBoard} />
      )}
    </div>
  );
}

export default App;
