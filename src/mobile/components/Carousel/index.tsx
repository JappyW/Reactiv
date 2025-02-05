import { CarouselMode, CarouselProps } from "@/types";
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ShadCN";
import { CarouselPlugin } from "@components/ShadCN/carousel";

const calculateWithAndHeightClass = (mode: CarouselMode) => {
  switch (mode) {
    case "landscape":
      return "w-96 h-56";
    case "portrait":
      return "w-56 h-96";
    case "square":
      return "w-56 h-56";
    default:
      return "w-56 h-56";
  }
};

export const Carousel = ({
  images,
  mode,
  orientation,
  loop,
  alignment,
  plugins,
  itemsPerPage = 3,
}: Omit<CarouselProps, "autoplay"> & { plugins: CarouselPlugin }) => {
  return (
    <CarouselComponent
      plugins={plugins}
      className="w-full max-w-xs"
      orientation={orientation}
      opts={{
        align: alignment,
        loop,
      }}
    >
      <CarouselContent className={mode === "portrait" ? "h-96" : "h-64"}>
        {images.map((image) => (
          <CarouselItem key={image.id} className={`flex justify-center basis-1/${itemsPerPage}`}>
            <img
              src={image.src}
              alt={image.id}
              className={`${calculateWithAndHeightClass(mode)}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselComponent>
  );
};
