import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Mainn } from "./layouts/Mainn";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainn />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/product/:title",
        element: <ProductDetails />
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
