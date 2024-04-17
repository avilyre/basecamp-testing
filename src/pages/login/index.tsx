import "./index.styles.scss";

export const Login = () => {
  return (
    <div className="login-container">
      <h2>Basecamp</h2>

      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}