import { CarouselOrientationEnum } from "@/constants/enums";
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
      return "w-72 h-36";
    case "portrait":
      return "w-72 h-96";
    case "square":
      return "w-72 h-72";
    default:
      return "w-72 h-72";
  }
};

export const Carousel = ({
  images,
  mode,
  orientation,
  loop,
  alignment,
  plugins,
  itemsPerPage = 1,
}: Omit<CarouselProps, "autoplay"> & { plugins: CarouselPlugin }) => {
  return (
    <CarouselComponent
      plugins={plugins}
      className="w-full"
      orientation={orientation}
      opts={{
        align: alignment,
        loop,
      }}
    >
      <CarouselContent
        className={`${
          orientation === CarouselOrientationEnum.HORIZONTAL
            ? "h-fit"
            : calculateWithAndHeightClass(mode)
        } w-fit`}
      >
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
