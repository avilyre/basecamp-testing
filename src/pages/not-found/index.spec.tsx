import { render, screen } from "@testing-library/react";
import React from "react";

import { NotFound } from ".";

type LinkType = {
  children: JSX.Element;
  to: string;
}

describe("Not Found Page", () => {
  vi.mock("react-router-dom", () => ({
    Link: (props: LinkType) => {
      const { children, to } = props;
      return React.createElement("a", { href: to }, children);
    },
    // Or
    // Link: vi.fn().mockImplementation((props: LinkType) => {
    //   const { children, to } = props;
    //   return React.createElement("a", { href: to }, children);
    // })
  }));

  beforeEach(() => {
    render(<NotFound />);
  });

  it("Should be able to render the page", async () => {
    const pageContainer = await screen.findByTestId("not-found-page");
    expect(pageContainer).toBeInTheDocument();
  });

  it("Should be able to render the title", async () => {
    const title = await screen.findByRole("heading", {
      name: "404 Not Found",
      level: 1
    });
    expect(title).toBeInTheDocument();
  })

  it("Should be able to render the go back link", async () => {
    const link = await screen.findByRole("link", {
      name: "Go to home page"
    });

    expect(link).toHaveAttribute("href", "/");
  });
})