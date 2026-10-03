import { Children, Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./LayOuts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AllCrops from "./components/AllCrops/Allcrops.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allCrops",
        Component: AllCrops,
      },
      {
        path: 'register',
        Component: Re
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
