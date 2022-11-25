import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import { Admin } from "./admin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/administracion",
    element: <Admin />
  }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
