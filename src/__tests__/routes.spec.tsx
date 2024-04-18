import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { routesConfig } from "../router";

const createRouter = (initialEntries: string[]) => {
  const routerConfig = createMemoryRouter(routesConfig, {
    initialEntries
  });
  return routerConfig;
}

describe("Router", () => {
  it("Should be able to render the Login page", async () => {
    const router = createRouter(["/"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "Basecamp",
      level: 2
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Sign Up page", async () => {
    const router = createRouter(["/sign-up"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "Sign Up",
      level: 2
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Dashboard page", async () => {
    const router = createRouter(["/dashboard"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "Dashboard",
      level: 1
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Not Found page", async () => {
    const router = createRouter(["/some-path"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "404 Not Found",
      level: 1
    });
    expect(title).toBeInTheDocument();
  });
});