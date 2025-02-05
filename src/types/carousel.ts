import {
    CarouselAlignmentEnum,
    CarouselModeEnum,
    CarouselOrientationEnum,
} from "@/constants/enums";
//Carousel Types
export type CarouselProps = {
  images: CarouselImage[];
  orientation: CarouselOrientation;
  mode: CarouselMode;
  loop: boolean;
  autoplay: boolean;
  alignment: CarouselAlignmentOptions;
  itemsPerPage: number;
};

export type CarouselAlignmentOptions = `${CarouselAlignmentEnum}`;
export type CarouselMode = `${CarouselModeEnum}`;
export type CarouselOrientation = `${CarouselOrientationEnum}`;

export type CarouselImage = { id: string; src: string };

export type CarouselSettingsActions = {
  addImage: (image: CarouselImage) => void;
  editImage: (image: CarouselImage) => void;
  removeImage: (id: string) => void;
  setMode: (mode: CarouselMode) => void;
  setOrientation: (orientation: CarouselOrientation) => void;
  setAlignment: (alignment: CarouselAlignmentOptions) => void;
  setLoop: (loop: boolean) => void;
  setAutoplay: (autoplay: boolean) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
};

export type CarouselSettingImageCardProps = {
  title: string;
  image: CarouselImage;
  removeImage: () => void;
  editImageClick: () => void;
};
