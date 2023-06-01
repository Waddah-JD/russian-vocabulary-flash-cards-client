import { Box, Grid, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const Menu = styled(Grid)(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

const Title = styled("h1")(() => {
  return { textAlign: "center" };
});

function PageContainer(): JSX.Element {
  return (
    <Box p={1}>
      <Menu container>
        <Grid item xs={12} sm={6}>
          <Title>Russian Vocabulary Flashcards</Title>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Navigation />
        </Grid>
      </Menu>
      <Outlet />
    </Box>
  );
}

export default PageContainer;
