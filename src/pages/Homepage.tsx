import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Layout/Navigation";

const NavBar = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

function Homepage(): JSX.Element {
  return (
    <Box p={1}>
      <NavBar>
        <h1>Russian Vocabulary Flashcards</h1>
        <Navigation />
      </NavBar>
      <Outlet />
    </Box>
  );
}

export default Homepage;
