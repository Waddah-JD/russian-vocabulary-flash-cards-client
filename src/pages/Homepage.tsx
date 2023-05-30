import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Layout/Navigation";

function Homepage(): JSX.Element {
  return (
    <Box p={1}>
      <h1>Russian Vocabulary Flashcards</h1>
      <Navigation />
      <Outlet />
    </Box>
  );
}

export default Homepage;
