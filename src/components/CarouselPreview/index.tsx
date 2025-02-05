import { LeftColumn } from "@/layouts/LeftColumn";
import { RightColumn } from "@/layouts/RightColumn";
import { CarouselContainer } from "./components/Container";
import { CarouselFieldsSettings } from "./components/Settings/FieldsSettings";
import { CarouselImagesSettings } from "./components/Settings/ImagesSettings";
export const CarouselPreview = () => {
  return (
    <>
      <LeftColumn>
        <CarouselFieldsSettings />
        <CarouselImagesSettings />
      </LeftColumn>
      <RightColumn>
        <CarouselContainer />
      </RightColumn>
    </>
  );
};
