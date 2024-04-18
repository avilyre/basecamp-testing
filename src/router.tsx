import { createBrowserRouter, RouteObject } from "react-router-dom";

import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { SignUp } from "./pages/sign-up";
import { NotFound } from "./pages/not-found";

export const routesConfig: RouteObject[] = [
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
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
  }
]

export const router = createBrowserRouter(routesConfig);
