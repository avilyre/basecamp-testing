import { FormEvent } from "react";
import { Link } from "react-router-dom";

import "./index.styles.scss";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <h2>Basecamp</h2>

      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button type="submit" onClick={handleSubmit}>Sign In</button>
        <Link to="/sign-up">Sign Up</Link>
      </form>
    </div>
  );
}