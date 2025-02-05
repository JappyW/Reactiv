import { CarouselSettingsProvider } from "@/providers/CarouselSettingsProvider";
import { CarouselPreview } from "@components/CarouselPreview";

const CarouselPage = () => {
  return (
    <CarouselSettingsProvider>
      <CarouselPreview />
    </CarouselSettingsProvider>
  );
};

export default CarouselPage;
