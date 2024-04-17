import "./index.styles.scss";

import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      
      <form>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
    </form>
    </div>
  );
}