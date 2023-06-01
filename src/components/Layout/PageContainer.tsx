import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const Menu = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

function PageContainer(): JSX.Element {
  return (
    <Box p={1}>
      <Menu>
        <h1>Russian Vocabulary Flashcards</h1>
        <Navigation />
      </Menu>
      <Outlet />
    </Box>
  );
}

export default PageContainer;
