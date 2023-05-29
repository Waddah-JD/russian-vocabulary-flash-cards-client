import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";

import EnglishTranslation from "./pages/EnglishTranslation";
import Homepage from "./pages/Homepage";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />}>
      <Route path="/learn" element={<Learn />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/english-translations/:id" element={<EnglishTranslation />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

export default router;
