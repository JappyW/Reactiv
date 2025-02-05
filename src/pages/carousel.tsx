import { CarouselSettingsProvider } from "@/providers/CarouselSettingsProvider";
import { CarouselPreview } from "@components/CarouselPreview";

export const CarouselPage = () => {
  return (
    <CarouselSettingsProvider>
      <CarouselPreview />
    </CarouselSettingsProvider>
  );
};
