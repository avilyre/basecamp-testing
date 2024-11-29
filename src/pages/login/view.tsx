import "./index.styles.scss";

import { Link } from "react-router-dom";

import { useLoginModel } from "./model";

export const LoginView = (props: ReturnType<typeof useLoginModel>) => {
  const {
    email,
    password,
    handleTypeEmail,
    handleTypePassword,
    handleSubmit
  } = props;

  return (
    <div className="login-container">
      <h2>Basecamp</h2>

      <form>
        <input type="text" placeholder="Email" value={email} onChange={handleTypeEmail}/>
        <input type="text" placeholder="Password" value={password} onChange={handleTypePassword}/>
        <button type="submit" onClick={handleSubmit}>Sign In</button>
        <Link to="/sign-up">Sign Up</Link>
      </form>
    </div>
  );
}