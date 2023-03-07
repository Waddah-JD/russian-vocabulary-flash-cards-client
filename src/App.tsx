import Homepage from "@components/Homepage";
import Learn from "@components/Learn";
import Practice from "@components/Practice";
import { AuthContextProvider } from "@contexts/auth";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />}>
      <Route path="/learn" element={<Learn />} />
      <Route path="/practice" element={<Practice />} />
    </Route>
  )
);

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
