import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { makeHome } from "./pages/home";

function makeRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: makeHome(),
    },
  ]);
}

export function Router() {
  return <RouterProvider router={makeRouter()} />;
}
