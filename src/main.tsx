import { createRoot } from "react-dom/client";
import "./index.css";
import rootRouter from "./routers/RootRouter.tsx";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./contexts/context.tsx";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:7000";
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <RouterProvider router={rootRouter} />
  </ContextProvider>
);
