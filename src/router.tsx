import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />}>
      <Route path="/learn" element={<Learn />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route
        path="/sign-up"
        element={
          // TODO implement SignUp component
          null
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

export default router;
