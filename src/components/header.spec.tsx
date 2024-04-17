import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header Component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("Should be able to render the main title and description", async () => {
    const title = await screen.findAllByRole("heading");
    expect(title).toHaveLength(2);
  });

  it("Should be able to render the title", async () => {
    const title = await screen.findByRole("heading", {
      name: "Basecamp Testing",
    });

    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the description", async () => {
    const description = await screen.findByRole("heading", {
      name: "Short subtitle for this application",
    })
    expect(description).toBeInTheDocument();
  });
});