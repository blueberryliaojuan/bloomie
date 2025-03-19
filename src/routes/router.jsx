import Home from "../page/Home";
import Products from "../page/Products";
import NotFound from "../page/NotFound";
import About from "../page/About";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />, // 404 page
  },
]);

export default router;
