import { MobileCarousel } from "@/mobile/components/Carousel";
import { useCarouselSettings } from "@/providers/CarouselSettingsProvider";
import { PhoneScreen } from "@components/PhoneScreen";
import { Card, CardHeader, CardTitle } from "@components/ShadCN";

export const CarouselContainer = () => {
  const {
    state: { images, mode, orientation, loop, alignment, autoplay, itemsPerPage, ...rest },
  } = useCarouselSettings();

  return (
    <Card className="p-10 w-fit flex justify-center items-center flex-col">
      <CardHeader className="mb-10">
        <CardTitle>Carousel Preview</CardTitle>
      </CardHeader>

      <PhoneScreen>
        <MobileCarousel
          {...rest}
          autoplay={autoplay}
          images={images}
          loop={loop}
          mode={mode}
          orientation={orientation}
          alignment={alignment}
          itemsPerPage={itemsPerPage}
        />
      </PhoneScreen>
    </Card>
  );
};
