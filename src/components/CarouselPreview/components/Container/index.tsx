import { AUTOPLAY_DELAY } from "@/constants";
import { Carousel } from "@/mobile/components/Carousel";
import { useCarouselSettings } from "@/providers/CarouselSettingsProvider";
import { PhoneScreen } from "@components/PhoneScreen";
import { Card, CardHeader, CardTitle } from "@components/ShadCN";
import Autoplay from "embla-carousel-autoplay";
import { useMemo } from "react";

export const CarouselContainer = () => {
  const {
    state: { images, mode, orientation, loop, alignment, autoplay, itemsPerPage, ...rest },
  } = useCarouselSettings();

  const plugins = useMemo(() => {
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
    <Card className="p-10 w-fit flex justify-center items-center flex-col">
      <CardHeader className="mb-10">
        <CardTitle>Carousel Preview</CardTitle>
      </CardHeader>

      <PhoneScreen>
        <Carousel
          {...rest}
          plugins={plugins}
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
