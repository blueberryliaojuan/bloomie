import Home from "../page/Home";
import Products from "../page/Products";
import NotFound from "../page/NotFound";
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
    path: "*",
    element: <NotFound />, // 404 page
  },
]);

export default router;
