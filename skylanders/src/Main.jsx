import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import WishList from "./pages/WishList.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <div> 404 not found </div>,
//   },
//   {
//     path: "/WishList",
//     element: <WishList />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </PrimeReactProvider>
);
