import { CarouselSettingsProvider } from "@/providers/CarouselSettingsProvider";
import { Carousel, CarouselSettings } from "@components/Native/Carousel";

export const CarouselPage = () => {
  return (
    <CarouselSettingsProvider>
      <div className="flex items-start justify-evenly flex-wrap gap-10 p-4">
        <CarouselSettings />
        <Carousel />
      </div>
    </CarouselSettingsProvider>
  );
};
