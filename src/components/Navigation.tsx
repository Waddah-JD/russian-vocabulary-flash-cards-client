import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/practice">Practice</Link>
    </nav>
  );
};

export default Navigation;
