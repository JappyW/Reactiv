import { LeftColumn, RightColumn } from "@/layouts/ColumnLayout";
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
