import { createBrowserRouter } from "react-router-dom";

import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { SignUp } from "./pages/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  }
]);