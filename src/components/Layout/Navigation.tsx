import { Button, Grid, Link, styled } from "@mui/material";
import { signOut } from "api/auth";
import WordSearch from "components/WordSearch";
import { AuthContext } from "contexts/Auth";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = styled(Grid)(({ theme }) => {
  return {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginBlockStart: "10px",
    },
  };
});

const WordSearchContainer = styled(Grid)(() => {
  return {
    display: "flex",
    justifyContent: "center",
  };
});

function Navigation(): JSX.Element {
  const { userIsAuthenticated } = useContext(AuthContext);

  async function handleSignOut(): Promise<void> {
    await signOut();
  }

  return (
    <Grid container>
      <WordSearchContainer item xs={12} sm={6}>
        <WordSearch />
      </WordSearchContainer>

      {userIsAuthenticated ? (
        <NavBar item xs={12} sm={6}>
          <Link component={RouterLink} to="/learn" underline="none">
            Learn
          </Link>
          <Link component={RouterLink} to="/practice" underline="none">
            Practice
          </Link>
          <Button variant="outlined" size="small" onClick={handleSignOut}>
            Sign Out
          </Button>
        </NavBar>
      ) : (
        <NavBar item xs={12} sm={6}>
          <Link component={RouterLink} to="/sign-in" underline="none">
            Sign In
          </Link>
          <Link component={RouterLink} to="/sign-up" underline="none">
            Sign Up
          </Link>
        </NavBar>
      )}
    </Grid>
  );
}

export default Navigation;
