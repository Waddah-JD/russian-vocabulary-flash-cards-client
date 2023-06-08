import { Box, Grid, Link, styled } from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const Menu = styled(Grid)(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

const Title = styled("h1")(({ theme }) => {
  return {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  };
});

function PageContainer(): JSX.Element {
  return (
    <Box p={1}>
      <Menu container>
        <Grid item sm={12} md={6}>
          <Title>
            <Link component={RouterLink} to="/" underline="none">
              Russian Vocabulary Flashcards
            </Link>
          </Title>
        </Grid>

        <Grid item sm={12} md={6}>
          <Navigation />
        </Grid>
      </Menu>

      <Outlet />
    </Box>
  );
}

export default PageContainer;
