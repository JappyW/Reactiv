import { AUTOPLAY_DELAY } from "@/constants";
import { CarouselOrientationEnum } from "@/constants/enums";
import { CarouselMode, CarouselProps } from "@/types";
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ShadCN";
import Autoplay from "embla-carousel-autoplay";
import { useMemo } from "react";

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

export const MobileCarousel = ({
  images,
  mode,
  orientation,
  loop,
  alignment,
  itemsPerPage = 1,
  autoplay,
}: CarouselProps) => {
  const carouselPlugins = useMemo(() => {
    let addedPlugins = [];

    if (autoplay) {
      addedPlugins.push(
        Autoplay({
          delay: AUTOPLAY_DELAY,
          stopOnLastSnap: !loop,
          stopOnMouseEnter: true,
        })
      );
    }

    return addedPlugins;
  }, [autoplay]);

  return (
    <CarouselComponent
      plugins={[...carouselPlugins]}
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
