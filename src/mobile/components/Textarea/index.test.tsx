import { TextareaProps } from "@/types";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MobileTextarea } from "./index";

const defaultProps: TextareaProps = {
  description: "Enter text here...",
  descriptionColor: "#fff000",
  title: "Hello world",
  titleColor: "#ffffff",
};

describe("Textarea Component", () => {
  it("should render the MobileTextarea component", () => {
    render(<MobileTextarea {...defaultProps} />);
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toBeInTheDocument();
  });

  it("should display title text", () => {
    render(<MobileTextarea {...defaultProps} />);
    const textareaElement = screen.getByText(defaultProps.title);
    expect(textareaElement).toBeInTheDocument();
  });

  it("should display description text", () => {
    render(<MobileTextarea {...defaultProps} />);
    const textareaElement = screen.getByPlaceholderText("Enter text here...");
    expect(textareaElement).toBeInTheDocument();
  });

  it("renders title color correctly", () => {
    render(<MobileTextarea {...defaultProps} />);
    const textareaLabelElement = screen.getByText(defaultProps.title);
    expect(textareaLabelElement).toHaveAttribute("style", "color: rgb(255, 255, 255);");
  });
});
