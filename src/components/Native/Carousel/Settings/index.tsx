import { CarouselFieldsSettings } from "./Fields";
import { CarouselImagesSettings } from "./Images";

export const CarouselSettings = () => {
  return (
    <div className="flex justify-center items-center gap-10 flex-col md:w-6/12 w-full">
      <CarouselFieldsSettings />
      <CarouselImagesSettings />
    </div>
  );
};
