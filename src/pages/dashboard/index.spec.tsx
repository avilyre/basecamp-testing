import { render, screen } from "@testing-library/react";
import { Dashboard } from ".";

describe("Dashboard Page", () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  it("Should be able to render the title", async () => {
    const title = await screen.findByRole("heading", {
      name: "Dashboard",
    });
    expect(title).toBeInTheDocument();
  });
});