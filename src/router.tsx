import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-3xl font-light underline">Hello world!</h1>,
  },
]);
