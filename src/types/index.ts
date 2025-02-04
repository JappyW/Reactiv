import { CarouselModeEnum, CarouselOrientationEnum } from "@/constants/enums";

export type CarouselProps = {
  images: CarouselImage[];
  orientation: CarouselOrientation;
  mode: CarouselMode;
};

export type CarouselMode = `${CarouselModeEnum}`;
export type CarouselOrientation = `${CarouselOrientationEnum}`;

export type CarouselActions = {
  addImage: (image: CarouselImage) => void;
  editImage: (image: CarouselImage) => void;
  removeImage: (id: string) => void;
  setMode: (mode: CarouselMode) => void;
  setOrientation: (orientation: CarouselOrientation) => void;
};

export type ClassNameHelper = { className?: string };

export type CarouselImage = { id: string; src: string };
