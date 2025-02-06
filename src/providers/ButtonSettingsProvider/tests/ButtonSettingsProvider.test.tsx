import { fireEvent, render, screen } from "@testing-library/react";
import { toast } from "sonner";
import { describe, expect, it, vi } from "vitest";
import { ButtonSettingsProvider, useButtonSettings } from "../index";

vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

const TestComponent = () => {
  const {
    state: { bgColor, labelColor, borderRadius, label, padding, link },
    actions: { setBGColor, setLabelColor, setBorderRadius, setLabel, setLink, setPadding },
  } = useButtonSettings();
  return (
    <div>
      <span data-testid="button-bg-color">{bgColor}</span>
      <span data-testid="button-label-color">{labelColor}</span>
      <span data-testid="button-border-radius">{borderRadius}</span>
      <span data-testid="button-label">{label}</span>
      <span data-testid="button-link">{link}</span>
      <span data-testid="button-padding">{padding}</span>
      <button onClick={() => setLink("https://google.com")}>Change Link</button>
      <button onClick={() => setLink()}>Remove Link</button>
      <button onClick={() => setLabel("New Label")}>Change Label</button>
      <button onClick={() => setPadding(10)}>Change Padding</button>
      <button onClick={() => setBGColor("#ffffff")}>Change BG Color</button>
      <button onClick={() => setLabelColor("#000000")}>Change Label Color</button>
      <button onClick={() => setBorderRadius(10)}>Change Border Radius</button>
    </div>
  );
};

describe("ButtonSettingsProvider", () => {
  it("provides default button settings", () => {
    render(
      <ButtonSettingsProvider>
        <TestComponent />
      </ButtonSettingsProvider>
    );

    expect(screen.getByTestId("button-bg-color").textContent).toBe("#179641");
    expect(screen.getByTestId("button-label-color").textContent).toBe("#ffffff");
    expect(screen.getByTestId("button-border-radius").textContent).toBe("0");
    expect(screen.getByTestId("button-padding").textContent).toBe("0");
    expect(screen.getByTestId("button-label").textContent).toBe("Save");
    expect(screen.getByTestId("button-link").textContent).toBe("");
  });

  it("allows changing button background color", () => {
    render(
      <ButtonSettingsProvider>
        <TestComponent />
      </ButtonSettingsProvider>
    );

    const changeBgColorBtn = screen.getByText("Change BG Color");
    fireEvent.click(changeBgColorBtn);
    expect(screen.getByTestId("button-bg-color").textContent).toBe("#ffffff");
    expect(toast).toHaveBeenCalledWith("Set button background color to #ffffff");
  });

  it("allows changing button label color", () => {
    render(
      <ButtonSettingsProvider>
        <TestComponent />
      </ButtonSettingsProvider>
    );

    const changeTextColorBtn = screen.getByText("Change Label Color");
    fireEvent.click(changeTextColorBtn);
    expect(screen.getByTestId("button-label-color").textContent).toBe("#000000");
    expect(toast).toHaveBeenCalledWith("Set button label color to #000000");
  });

  it("allows changing button border radius", () => {
    render(
      <ButtonSettingsProvider>
        <TestComponent />
      </ButtonSettingsProvider>
    );

    const changeBorderRadiusBtn = screen.getByText("Change Border Radius");
    fireEvent.click(changeBorderRadiusBtn);
    expect(screen.getByTestId("button-border-radius").textContent).toBe("10");
    expect(toast).toHaveBeenCalledWith("Set button border radius to 10%");
  });

  it("allows changing button label", () => {
    render(
      <ButtonSettingsProvider>
        <TestComponent />
      </ButtonSettingsProvider>
    );

    const changeLabelBtn = screen.getByText("Change Label");
    fireEvent.click(changeLabelBtn);
    expect(screen.getByTestId("button-label").textContent).toBe("New Label");
    expect(toast).toHaveBeenCalledWith("Set button label to New Label");
  });

  it("allows changing button link", () => {
    render(
      <ButtonSettingsProvider>
        <TestComponent />
      </ButtonSettingsProvider>
    );

    const changeLinkBtn = screen.getByText("Change Link");
    fireEvent.click(changeLinkBtn);
    expect(screen.getByTestId("button-link").textContent).toBe("https://google.com");
    expect(toast).toHaveBeenCalledWith("Set button link to https://google.com");
  });

  it("allows removing button link", () => {
    render(
      <ButtonSettingsProvider>
        <TestComponent />
      </ButtonSettingsProvider>
    );

    const removeLinkBtn = screen.getByText("Remove Link");
    fireEvent.click(removeLinkBtn);
    expect(screen.getByTestId("button-link").textContent).toBe("");
    expect(toast).toHaveBeenCalledWith("Removed button link");
  });

  it("allows changing button padding", () => {
    render(
      <ButtonSettingsProvider>
        <TestComponent />
      </ButtonSettingsProvider>
    );

    const changePaddingBtn = screen.getByText("Change Padding");
    fireEvent.click(changePaddingBtn);
    expect(screen.getByTestId("button-padding").textContent).toBe("10");
    expect(toast).toHaveBeenCalledWith("Set button padding to 10px");
  });
});
