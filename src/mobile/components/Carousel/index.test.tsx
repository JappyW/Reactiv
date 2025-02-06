import {
  CarouselAlignmentEnum,
  CarouselModeEnum,
  CarouselOrientationEnum,
} from "@/constants/enums";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MobileCarousel } from "./index";

window.matchMedia = vi.fn().mockImplementation(() => ({
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
}));

window.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: () => null,
  disconnect: () => null,
}));

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const mockImages = [
  { id: "1", src: "image1.jpg" },
  { id: "2", src: "image2.jpg" },
  { id: "3", src: "image3.jpg" },
];

describe("MobileCarousel Component", () => {
  it("renders correctly", () => {
    render(
      <MobileCarousel
        autoplay={true}
        images={mockImages}
        mode={CarouselModeEnum.LANDSCAPE}
        orientation={CarouselOrientationEnum.HORIZONTAL}
        loop={true}
        alignment={CarouselAlignmentEnum.START}
        itemsPerPage={1}
      />
    );

    screen.debug();

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(mockImages.length);
    images.forEach((img, index) => {
      expect(img).toHaveAttribute("src", mockImages[index].src);
      expect(img).toHaveAttribute("alt", mockImages[index].id);
    });
  });
});
