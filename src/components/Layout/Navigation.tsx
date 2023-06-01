import { Button, Link } from "@mui/material";
import { signOut } from "api/auth";
import WordSearch from "components/WordSearch";
import { AuthContext } from "contexts/Auth";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

function Navigation(): JSX.Element {
  const { userIsAuthenticated } = useContext(AuthContext);

  async function handleSignOut(): Promise<void> {
    await signOut();
  }

  return (
    <>
      <WordSearch />

      {userIsAuthenticated ? (
        <nav style={{ display: "flex", justifyContent: "space-around", gap: 10, alignItems: "center" }}>
          <Link component={RouterLink} to="/learn" underline="none">
            Learn
          </Link>
          <Link component={RouterLink} to="/practice" underline="none">
            Practice
          </Link>
          <Button variant="outlined" size="small" onClick={handleSignOut}>
            Sign Out
          </Button>
        </nav>
      ) : (
        <nav style={{ display: "flex", justifyContent: "space-around", gap: 10, alignItems: "center" }}>
          <Link component={RouterLink} to="/sign-in" underline="none">
            Sign In
          </Link>
          <Link component={RouterLink} to="/sign-up" underline="none">
            Sign Up
          </Link>
        </nav>
      )}
    </>
  );
}

export default Navigation;
