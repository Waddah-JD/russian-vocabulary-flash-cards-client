import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Layout/Navigation";

function Homepage() {
  return (
    <div>
      <h1>Russian Vocabulary Flashcards</h1>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Homepage;
