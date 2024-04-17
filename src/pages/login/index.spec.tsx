import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from ".";

const navigateMock = vi.fn();

describe("Login Page", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock
  }));

  beforeEach(() => {
    render(<Login />);
  });

  it("Should be able to render the login page", async () => {
    const title = await screen.findByRole("heading", {
      name: "Basecamp",
    });
    expect(title).toBeInTheDocument();
  });

  describe("Login Inputs", () => {
    it("Should be able to render two inputs", async () => {
      const inputs = await screen.findAllByRole("textbox");
      expect(inputs).toHaveLength(2);
    });

    it("Should be able to render the email input", async () => {
      const input = await screen.findByPlaceholderText("Email");
      expect(input).toBeInTheDocument();
    });

    it("Should be able to render the password input", async () => {
      const input = await screen.findByPlaceholderText("Password");
      expect(input).toBeInTheDocument();
    });
  });

  it("Should be able to render the submit button", async () => {
    const button = await screen.findByRole("button", {
      name: "Sign In",
    });
    expect(button).toBeInTheDocument();
  });

  it("Shouble be able to click the submit button", async () => {
    const button = await screen.findByRole("button");
    fireEvent.click(button);
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});