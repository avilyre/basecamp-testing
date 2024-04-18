import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div data-testid="not-found-page">
      <h1>404 Not Found</h1>
      <Link to="/">Go to home page</Link>
    </div>
  );
}