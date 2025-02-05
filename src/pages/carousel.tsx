import { CarouselSettingsProvider } from "@/providers/CarouselSettingsProvider";
import ErrorBoundary from "@components/ErrorBoundary";
import { CarouselPreview } from "@components/Previews/CarouselPreview";

const CarouselPage = () => {
  return (
    <CarouselSettingsProvider>
      <ErrorBoundary>
        <CarouselPreview />
      </ErrorBoundary>
    </CarouselSettingsProvider>
  );
};

export default CarouselPage;
