import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Mainn from "./layouts/Mainn";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import { loader as productsLoader } from "./pages/Product";
import { loader as productDetailsLoader } from "./pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainn />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
        loader: productsLoader,
      },
      {
        path: "/product/:postID",
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
