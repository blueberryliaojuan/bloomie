import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
// for all the routes management
import router from "./routes/router.jsx";
//
import { IonIcon } from "@ionic/react";
import { heartOutline, cartOutline } from "ionicons/icons";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
