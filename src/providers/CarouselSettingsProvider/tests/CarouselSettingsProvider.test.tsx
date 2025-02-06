import { fireEvent, render, screen } from "@testing-library/react";
import { toast } from "sonner";
import { describe, expect, it, vi } from "vitest";
import { CarouselSettingsProvider, useCarouselSettings } from "../index";

vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

const TestComponent = () => {
  const {
    state: { alignment, autoplay, itemsPerPage, loop, mode, images, orientation },
    actions: {
      addImage,
      editImage,
      removeImage,
      setAlignment,
      setAutoplay,
      setItemsPerPage,
      setLoop,
      setMode,
    },
  } = useCarouselSettings();
  return (
    <div>
      <div data-testid="alignment">{alignment}</div>
      <div data-testid="autoplay">{autoplay ? "enabled" : "disabled"}</div>
      <div data-testid="itemsPerPage">{itemsPerPage}</div>
      <div data-testid="loop">{loop ? "enabled" : "disabled"}</div>
      <div data-testid="mode">{mode}</div>
      <div data-testid="images">{JSON.stringify(images)}</div>
      <div data-testid="orientation">{orientation}</div>

      <button onClick={() => addImage({ src: "test.png", id: "123asg_asd-123_1251" })}>
        Add Image
      </button>
      <button onClick={() => editImage({ src: "test2.png", id: "123asg_asd-123_1251" })}>
        Edit Image
      </button>
      <button onClick={() => removeImage("image1")}>Remove Image</button>
      <button onClick={() => setAlignment("center")}>Set Alignment</button>
      <button onClick={() => setAutoplay(true)}>Set Autoplay</button>
      <button onClick={() => setItemsPerPage(3)}>Set Items Per Page</button>
      <button onClick={() => setLoop(true)}>Set Loop</button>
      <button onClick={() => setMode("square")}>Set Mode</button>
    </div>
  );
};

describe("CarouselSettingsProvider", () => {
  it("provides initial state", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );

    expect(screen.getByTestId("alignment").textContent).toBe("start");
    expect(screen.getByTestId("autoplay").textContent).toBe("enabled");
    expect(screen.getByTestId("itemsPerPage").textContent).toBe("1");
    expect(screen.getByTestId("loop").textContent).toBe("enabled");
    expect(screen.getByTestId("mode").textContent).toBe("portrait");
    expect(screen.getByTestId("images").textContent).toBe(
      '[{"id":"1","src":"https://images.pexels.com/photos/30375942/pexels-photo-30375942/free-photo-of-vintage-street-lamp-against-modern-architecture.jpeg"},{"id":"2","src":"https://images.pexels.com/photos/30443465/pexels-photo-30443465/free-photo-of-colorful-traditional-water-seller-in-moroccan-souk.jpeg"},{"id":"3","src":"https://images.pexels.com/photos/30472132/pexels-photo-30472132/free-photo-of-couple-in-traditional-kimono-at-fushimi-inari.jpeg"},{"id":"4","src":"https://images.pexels.com/photos/29861006/pexels-photo-29861006/free-photo-of-majestic-mountain-peaks-shrouded-in-clouds.jpeg"},{"id":"5","src":"https://images.pexels.com/photos/30417370/pexels-photo-30417370/free-photo-of-snowy-mountains-under-clear-blue-sky.jpeg"},{"id":"6","src":"https://images.pexels.com/photos/30462129/pexels-photo-30462129/free-photo-of-majestic-himalayan-mountain-landscape.jpeg"},{"id":"7","src":"https://images.pexels.com/photos/30326244/pexels-photo-30326244/free-photo-of-classic-car-driving-through-snowy-mountain-landscape.jpeg"},{"id":"8","src":"https://images.pexels.com/photos/29587987/pexels-photo-29587987/free-photo-of-vibrant-nightlife-in-tokyo-s-shinjuku-district.jpeg"},{"id":"9","src":"https://images.pexels.com/photos/30238187/pexels-photo-30238187/free-photo-of-stunning-image-of-the-tarantula-nebula.jpeg"}]'
    );
    expect(screen.getByTestId("orientation").textContent).toBe("horizontal");
  });

  it("updates alignment", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );
    const button = screen.getByText("Set Alignment");
    fireEvent.click(button);
    expect(screen.getByTestId("alignment").textContent).toBe("center");
    expect(toast).toHaveBeenCalledWith("Alignment is set to center");
  });

  it("updates autoplay", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );
    const button = screen.getByText("Set Autoplay");
    fireEvent.click(button);
    expect(screen.getByTestId("autoplay").textContent).toBe("enabled");
    expect(toast).toHaveBeenCalledWith("Autoplay is set to enabled");
  });

  it("updates items per page", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );
    const button = screen.getByText("Set Items Per Page");
    fireEvent.click(button);
    expect(screen.getByTestId("itemsPerPage").textContent).toBe("3");
    expect(toast).toHaveBeenCalledWith("Set 3 images to be displayed per page");
  });

  it("updates loop", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );
    const button = screen.getByText("Set Loop");
    fireEvent.click(button);
    expect(screen.getByTestId("loop").textContent).toBe("enabled");
    expect(toast).toHaveBeenCalledWith("Loop is set to enabled");
  });

  it("updates mode", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );
    const button = screen.getByText("Set Mode");
    fireEvent.click(button);
    expect(screen.getByTestId("mode").textContent).toBe("square");
    expect(toast).toHaveBeenCalledWith("Mode is set to square");
  });

  it("adds an image", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );
    const button = screen.getByText("Add Image");
    fireEvent.click(button);
    expect(screen.getByTestId("images").textContent).toBe(
      `[{"id":"1","src":"https://images.pexels.com/photos/30375942/pexels-photo-30375942/free-photo-of-vintage-street-lamp-against-modern-architecture.jpeg"},{"id":"2","src":"https://images.pexels.com/photos/30443465/pexels-photo-30443465/free-photo-of-colorful-traditional-water-seller-in-moroccan-souk.jpeg"},{"id":"3","src":"https://images.pexels.com/photos/30472132/pexels-photo-30472132/free-photo-of-couple-in-traditional-kimono-at-fushimi-inari.jpeg"},{"id":"4","src":"https://images.pexels.com/photos/29861006/pexels-photo-29861006/free-photo-of-majestic-mountain-peaks-shrouded-in-clouds.jpeg"},{"id":"5","src":"https://images.pexels.com/photos/30417370/pexels-photo-30417370/free-photo-of-snowy-mountains-under-clear-blue-sky.jpeg"},{"id":"6","src":"https://images.pexels.com/photos/30462129/pexels-photo-30462129/free-photo-of-majestic-himalayan-mountain-landscape.jpeg"},{"id":"7","src":"https://images.pexels.com/photos/30326244/pexels-photo-30326244/free-photo-of-classic-car-driving-through-snowy-mountain-landscape.jpeg"},{"id":"8","src":"https://images.pexels.com/photos/29587987/pexels-photo-29587987/free-photo-of-vibrant-nightlife-in-tokyo-s-shinjuku-district.jpeg"},{"id":"9","src":"https://images.pexels.com/photos/30238187/pexels-photo-30238187/free-photo-of-stunning-image-of-the-tarantula-nebula.jpeg"},{"src":"test.png","id":"123asg_asd-123_1251"}]`
    );
    expect(toast).toHaveBeenCalledWith("Added an image");
  });

  it("edits an image", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );
    const button = screen.getByText("Edit Image");
    fireEvent.click(button);
    expect(screen.getByTestId("images").textContent).toBe(
      '[{"id":"1","src":"https://images.pexels.com/photos/30375942/pexels-photo-30375942/free-photo-of-vintage-street-lamp-against-modern-architecture.jpeg"},{"id":"2","src":"https://images.pexels.com/photos/30443465/pexels-photo-30443465/free-photo-of-colorful-traditional-water-seller-in-moroccan-souk.jpeg"},{"id":"3","src":"https://images.pexels.com/photos/30472132/pexels-photo-30472132/free-photo-of-couple-in-traditional-kimono-at-fushimi-inari.jpeg"},{"id":"4","src":"https://images.pexels.com/photos/29861006/pexels-photo-29861006/free-photo-of-majestic-mountain-peaks-shrouded-in-clouds.jpeg"},{"id":"5","src":"https://images.pexels.com/photos/30417370/pexels-photo-30417370/free-photo-of-snowy-mountains-under-clear-blue-sky.jpeg"},{"id":"6","src":"https://images.pexels.com/photos/30462129/pexels-photo-30462129/free-photo-of-majestic-himalayan-mountain-landscape.jpeg"},{"id":"7","src":"https://images.pexels.com/photos/30326244/pexels-photo-30326244/free-photo-of-classic-car-driving-through-snowy-mountain-landscape.jpeg"},{"id":"8","src":"https://images.pexels.com/photos/29587987/pexels-photo-29587987/free-photo-of-vibrant-nightlife-in-tokyo-s-shinjuku-district.jpeg"},{"id":"9","src":"https://images.pexels.com/photos/30238187/pexels-photo-30238187/free-photo-of-stunning-image-of-the-tarantula-nebula.jpeg"}]'
    );
    expect(toast).toHaveBeenCalledWith("Edited the image");
  });

  it("removes an image", () => {
    render(
      <CarouselSettingsProvider>
        <TestComponent />
      </CarouselSettingsProvider>
    );
    const button = screen.getByText("Remove Image");
    fireEvent.click(button);
    expect(screen.getByTestId("images").textContent).not.toContain('{"id":"image1"}');
    expect(toast).toHaveBeenCalledWith("Removed the image");
  });
});
