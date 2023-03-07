import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const Homepage = () => {
  return (
    <div>
      <h1>Russian Vocabulary Flash Cards</h1>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Homepage;
