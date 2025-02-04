import { AUTOPLAY_DELAY } from "@/constants";
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
import { useMemo } from "react";

const calculateWithAndHeightClass = (mode: CarouselMode) => {
  switch (mode) {
    case "landscape":
      return "w-[450px] h-64";
    case "portrait":
      return "w-64 h-[450px]";
    case "square":
      return "w-64 h-64";
    default:
      return "w-64 h-64";
  }
};

export const Carousel = () => {
  const {
    state: { images, mode, orientation, loop, alignment, autoplay },
  } = useCarouselSettings();

  const plugins = useMemo(() => {
    let addedPlugins = [];

    if (autoplay) {
      addedPlugins.push(
        Autoplay({
          delay: AUTOPLAY_DELAY,
        })
      );
    }

    return addedPlugins;
  }, [autoplay]);

  return (
    <div className="max-w-[450px] w-full flex justify-center">
      <Card className="p-10 w-full flex justify-center items-center flex-col">
        <CardHeader className="mb-10">
          <CardTitle>Carousel</CardTitle>
        </CardHeader>

        <CardContent>
          <CarouselComponent
            plugins={plugins}
            className="w-full max-w-xs"
            orientation={orientation}
            opts={{
              align: alignment,
              loop,
            }}
          >
            <CarouselContent className={mode === "portrait" ? "h-[450px]" : "h-64"}>
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
