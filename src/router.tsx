import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { SignUp } from "./pages/sign-up";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}