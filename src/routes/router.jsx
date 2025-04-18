import Home from "../page/Home";
import Shop from "../page/Shop";
import NotFound from "../page/NotFound";
import About from "../page/About";
import Favorite from "../page/Favorite";
import Detail from "../page/Detail";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },

  {
    path: "*",
    element: <NotFound />, // 404 page
  },
]);

export default router;
