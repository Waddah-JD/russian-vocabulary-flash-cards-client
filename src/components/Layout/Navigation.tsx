import { Button } from "@mui/material";
import { signOut } from "api/auth";
import { AuthContext } from "contexts/Auth";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Navigation(): JSX.Element {
  const { userIsAuthenticated } = useContext(AuthContext);

  async function handleSignOut(): Promise<void> {
    await signOut();
  }

  return userIsAuthenticated ? (
    <nav style={{ display: "flex", justifyContent: "space-around", gap: 10, alignItems: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/practice">Practice</Link>
      <Button variant="outlined" size="small" onClick={handleSignOut}>
        Sign Out
      </Button>
    </nav>
  ) : (
    <nav style={{ display: "flex", justifyContent: "space-around", gap: 10, alignItems: "center" }}>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
  );
}

export default Navigation;
