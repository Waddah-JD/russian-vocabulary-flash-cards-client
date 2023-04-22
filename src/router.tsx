import Homepage from "components/Homepage";
import Learn from "components/Learn";
import Practice from "components/Practice";
import SignIn from "components/SignIn";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />}>
      <Route path="/learn" element={<Learn />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Route>
  )
);

export default router;
