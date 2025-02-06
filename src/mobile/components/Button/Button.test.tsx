import { ButtonProps } from "@/types";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MobileButton } from "./index";

const defaultProps: ButtonProps = {
  label: "Click me",
  link: "https://www.google.com",
  //rgb(255,255,255);
  bgColor: "#fff000",
  //rgb(255, 240, 0);
  labelColor: "#ffffff",
  borderRadius: 10,
  padding: 10,
};

describe("MobileButton", () => {
  it("renders correctly", () => {
    render(<MobileButton {...defaultProps} />);
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
  });

  it("renders a link", () => {
    render(<MobileButton {...defaultProps} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", defaultProps.link);
  });

  it("renders label", () => {
    render(<MobileButton {...defaultProps} />);
    expect(screen.getByRole("button")).toHaveTextContent(defaultProps.label);
  });

  it("renders padding correctly", () => {
    render(<MobileButton {...defaultProps} />);
    expect(screen.getByRole("button")).toHaveStyle({
      padding: `${defaultProps.padding}px`,
    });
  });

  it("renders borderRadius correctly", () => {
    render(<MobileButton {...defaultProps} />);
    expect(screen.getByRole("button")).toHaveStyle({
      "border-radius": `${defaultProps.borderRadius}%`,
    });
  });

  it("renders label color correctly", () => {
    render(<MobileButton {...defaultProps} />);
    screen.debug();
    expect(screen.getByText(defaultProps.label)).toHaveAttribute(
      "style",
      "color: rgb(255, 255, 255);"
    );
  });

  it("renders bg color correctly", () => {
    render(<MobileButton {...defaultProps} />);
    screen.debug();
    expect(screen.getByRole("button").getAttribute("style")).toContain(
      "background-color: rgb(255, 240, 0);"
    );
  });
});
