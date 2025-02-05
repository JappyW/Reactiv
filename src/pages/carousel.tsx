import { CarouselSettingsProvider } from "@/providers/CarouselSettingsProvider";
import { CarouselPreview } from "@components/CarouselPreview";
import ErrorBoundary from "@components/ErrorBoundary";

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
