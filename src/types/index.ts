import {
  CarouselAlignmentEnum,
  CarouselModeEnum,
  CarouselOrientationEnum,
} from "@/constants/enums";

export type CarouselProps = {
  images: CarouselImage[];
  orientation: CarouselOrientation;
  mode: CarouselMode;
  loop: boolean;
  autoplay: boolean;
  alignment?: CarouselAlignmentOptions;
};

export type CarouselAlignmentOptions = `${CarouselAlignmentEnum}`;
export type CarouselMode = `${CarouselModeEnum}`;
export type CarouselOrientation = `${CarouselOrientationEnum}`;

export type CarouselActions = {
  addImage: (image: CarouselImage) => void;
  editImage: (image: CarouselImage) => void;
  removeImage: (id: string) => void;
  setMode: (mode: CarouselMode) => void;
  setOrientation: (orientation: CarouselOrientation) => void;
  setAlignment: (alignment: CarouselAlignmentOptions) => void;
  setLoop: (loop: boolean) => void;
  setAutoplay: (autoplay: boolean) => void;
};

export type ClassNameHelper = { className?: string };

export type CarouselImage = { id: string; src: string };
