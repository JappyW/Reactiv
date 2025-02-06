import { textareaInitialState } from "@/providers/TextareaSettingsProvider/reducer";
import { fireEvent, render, screen } from "@testing-library/react";
import { toast } from "sonner";
import { describe, expect, it, vi } from "vitest";
import { TextareaSettingsProvider, useTextareaSettings } from "../index";

vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

const TestComponent = () => {
  const {
    state: { description, descriptionColor, title, titleColor },
    actions: { setDescription, setDescriptionColor, setTitle, setTitleColor },
  } = useTextareaSettings();
  return (
    <div>
      <div data-testid="title">{title}</div>
      <div data-testid="titleColor">{titleColor}</div>
      <div data-testid="description">{description}</div>
      <div data-testid="descriptionColor">{descriptionColor}</div>
      <button onClick={() => setTitle("New Title")}>Set Title</button>
      <button onClick={() => setTitleColor("#000fff")}>Set Title Color</button>
      <button onClick={() => setDescription("New Description")}>Set Description</button>
      <button onClick={() => setDescriptionColor("#fff000")}>Set Description Color</button>
    </div>
  );
};

describe("TextareaSettingsProvider", () => {
  it("provides initial state", () => {
    render(
      <TextareaSettingsProvider>
        <TestComponent />
      </TextareaSettingsProvider>
    );

    expect(screen.getByTestId("title").textContent).toBe(textareaInitialState.title);
    expect(screen.getByTestId("titleColor").textContent).toBe(textareaInitialState.titleColor);
    expect(screen.getByTestId("description").textContent).toBe(textareaInitialState.description);
    expect(screen.getByTestId("descriptionColor").textContent).toBe(
      textareaInitialState.descriptionColor
    );
  });

  it("updates title and shows toast", () => {
    render(
      <TextareaSettingsProvider>
        <TestComponent />
      </TextareaSettingsProvider>
    );
    const title = screen.getByText("Set Title");
    fireEvent.click(title);

    vi.mock("sonner", () => ({
      toast: vi.fn(),
    }));

    expect(screen.getByTestId("title").textContent).toBe("New Title");
    expect(toast).toHaveBeenCalledWith("Set textarea title to New Title");
  });

  it("updates title color and shows toast", () => {
    render(
      <TextareaSettingsProvider>
        <TestComponent />
      </TextareaSettingsProvider>
    );
    const titleColorButton = screen.getByText("Set Title Color");
    fireEvent.click(titleColorButton);

    expect(screen.getByTestId("titleColor").textContent).toBe("#000fff");
    expect(toast).toHaveBeenCalledWith("Set textarea title color to #000fff");
  });

  it("updates description and shows toast", () => {
    render(
      <TextareaSettingsProvider>
        <TestComponent />
      </TextareaSettingsProvider>
    );
    const descriptionButton = screen.getByText("Set Description");
    fireEvent.click(descriptionButton);

    expect(screen.getByTestId("description").textContent).toBe("New Description");
    expect(toast).toHaveBeenCalledWith("Set textarea description to New Description");
  });

  it("updates description color and shows toast", () => {
    render(
      <TextareaSettingsProvider>
        <TestComponent />
      </TextareaSettingsProvider>
    );
    const descriptionColorButton = screen.getByText("Set Description Color");
    fireEvent.click(descriptionColorButton);

    expect(screen.getByTestId("descriptionColor").textContent).toBe("#fff000");
    expect(toast).toHaveBeenCalledWith("Set textarea description color to #fff000");
  });
});
