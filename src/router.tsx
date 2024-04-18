import { createBrowserRouter, RouteObject } from "react-router-dom";

import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { SignUp } from "./pages/sign-up";

export const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]

export const router = createBrowserRouter(routesConfig);
