import { Children, Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./LayOuts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AllCrops from "./components/Navbar/AllCrops/AllCrops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    Children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/allCrops',
        Component: 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
