import { fireEvent, render, screen } from "@testing-library/react";
import { LoginViewModel } from ".";
import React from "react";

type LinkType = {
  children: JSX.Element;
  to: string;
}

const navigateMock = vi.fn();

describe("Login Page", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
    Link: (props: LinkType) => {
      const { children, to } = props;
      return React.createElement("a", { href: to }, children);
    },
    // or Link: vi.fn().mockImplementation(props => props.children)
  }));

  beforeEach(() => {
    render(<LoginViewModel />);
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

  it("Should be able to click the submit button", async () => {
    const button = await screen.findByRole("button", {
      name: "Sign In"
    });
    fireEvent.click(button);
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  describe("Sign Up button", () => {
    it("Should be able to render the Sign Up link", async () => {
      const link = await screen.findByRole("link", {
        name: "Sign Up",
      });
      expect(link).toHaveAttribute("href", "/sign-up");
    })

    it("Should be able to click the Sign Up link", async () => {
      const link = await screen.findByRole("link", {
        name: "Sign Up",
      });
      expect(link).toHaveAttribute("href", "/sign-up");
    });
  });
});