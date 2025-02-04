import { useCarouselSettings } from "@/providers/CarouselSettingsProvider";
import { CarouselMode } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ShadCN";

import Autoplay from "embla-carousel-autoplay";

const calculateWithAndHeightClass = (mode: CarouselMode) => {
  switch (mode) {
    case "landscape":
      return "w-[400px] h-56";
    case "portrait":
      return "w-56 h-[400px]";
    case "square":
      return "w-56 h-56";
    default:
      return "w-56 h-56";
  }
};

export const Carousel = () => {
  const {
    state: { images, mode, orientation, loop, align, autoplay },
  } = useCarouselSettings();

  return (
    <div className="max-w-[450px] w-full flex justify-center">
      <Card className="p-10 w-full flex justify-center items-center flex-col">
        <CardHeader className="mb-10">
          <CardTitle>Carousel</CardTitle>
        </CardHeader>

        <CardContent>
          <CarouselComponent
            plugins={
              autoplay
                ? [
                    Autoplay({
                      delay: 2000,
                    }),
                  ]
                : []
            }
            className="w-full max-w-xs"
            orientation={orientation}
            opts={{
              align,
              loop,
            }}
          >
            <CarouselContent className={mode === "portrait" ? "h-[400px]" : "h-56"}>
              {images.map((image) => (
                <CarouselItem key={image.id} className="flex justify-center">
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
        </CardContent>
      </Card>
    </div>
  );
};
