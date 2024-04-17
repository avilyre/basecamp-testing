import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { SignUp } from ".";

type LinkType = {
  children: JSX.Element;
  to: string;
}

const navigateMock = vi.fn();

describe("SignUp Page", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
    Link: (props: LinkType) => {
      const { children, to } = props;
      return React.createElement("a", { href: to }, children);
    }
  }));

  beforeEach(() => {
    render(<SignUp />);
  });

  describe("Form Render Inputs", () => {
    it("Should be able to render the SignUp title", async () => {
      const title = await screen.findByRole("heading", {
        name: "Sign Up",
        level: 2 // H2
      });
      expect(title).toBeInTheDocument();
    })
  
    it("Should be to have 3 inputs in the form", async () => {
      const inputs = await screen.findAllByRole("textbox");
      expect(inputs).toHaveLength(3);
    });
  
    it("Should be able to render the name input", async () => {
      const input = await screen.findByPlaceholderText("Name");
      expect(input).toBeInTheDocument();
    });
  
    it("Should be able to render the email input", async () => {
      const input = await screen.findByPlaceholderText("Email");
      expect(input).toBeInTheDocument();
    });
  
    it("Should be able to render the password input", async () => {
      const input = await screen.findByPlaceholderText("Password");
      expect(input).toBeInTheDocument();
    });
  
    it("Should be able to render the submit button", async () => {
      const button = await screen.findByRole("button", {
        name: "Sign Up"
      });
      expect(button).toBeInTheDocument();
    });
  });

  it("Should be able to click the sign up button", async () => {
    const button = await screen.findByRole("button", {
      name: "Sign Up"
    });
    fireEvent.click(button);
    expect(navigateMock).toHaveBeenCalledOnce();
  });

  it("Should be able to render the Sign In link", async () => {
    const link = await screen.findByRole("link", {
      name: "Back to login",
    });
    expect(link).toHaveAttribute("href", "/");
  })

  it("Should be able to click the Sign In link", async () => {
    const link = await screen.findByRole("link", {
      name: "Back to login",
    });
    fireEvent.click(link);
    expect(navigateMock).toHaveBeenCalledOnce();
  });
});