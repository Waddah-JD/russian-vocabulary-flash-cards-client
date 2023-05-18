import { signUserOut } from "actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserIsAuthenticated } from "selectors/auth";

function Navigation() {
  const dispatch = useDispatch();

  const userIsAuthenticated = useSelector(selectUserIsAuthenticated);

  function handleSignOut() {
    dispatch(signUserOut());
  }

  return userIsAuthenticated ? (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/practice">Practice</Link>
      <button onClick={handleSignOut}>Sign Out</button>
    </nav>
  ) : (
    <nav>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
  );
}

export default Navigation;
