import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./layout/Main";
import Products from "./pages/Products";

const router =createBrowserRouter([
  {
  path:"",
  element: <Main /> ,
  children:[
    { path: "/", element:<Home />,children:[] },
    {path:"/about",element: <About />},
    {path:"/products",element: <Products />}

  ]
  },
  ]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
