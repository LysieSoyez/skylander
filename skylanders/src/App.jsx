"use client";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCardsPage from "./pages/AllCards";
import WishList from "./pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCardsPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/WishList",
    element: <WishList />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
