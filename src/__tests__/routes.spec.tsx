import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Router } from "../router";

describe("Router", () => {
  it("Should be able to render the Login page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Basecamp",
      level: 2
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Sign Up page", async () => {
    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <Router />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Sign Up",
      level: 2
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Dashboard Up page", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Router />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Dashboard",
      level: 1
    });
    expect(title).toBeInTheDocument();
  });
});