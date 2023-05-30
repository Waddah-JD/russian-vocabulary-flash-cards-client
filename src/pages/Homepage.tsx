import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Layout/Navigation";

function Homepage(): JSX.Element {
  return (
    <Box p={1}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1>Russian Vocabulary Flashcards</h1>
        <Navigation />
      </div>
      <Outlet />
    </Box>
  );
}

export default Homepage;
