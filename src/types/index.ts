import {
  CarouselAlignmentEnum,
  CarouselModeEnum,
  CarouselOrientationEnum,
} from "@/constants/enums";

export type ClassNameHelper = { className?: string };

export type ReactFCWithChildren<T = unknown> = React.FC<T & { children: React.ReactNode }>;

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

//Button Types
export type ButtonProps = {
  label: string;
  labelColor: string;
  bgColor: string;
  padding: number;
  borderRadius: number;
  link?: string;
};

export type ButtonSettingsActions = {
  setLabel: (title: string) => void;
  setLink: (link: string) => void;
  setLabelColor: (color: string) => void;
  setBGColor: (bgColor: string) => void;
  setPadding: (padding: number) => void;
  setBorderRadius: (borderRadius: number) => void;
};

export type TextAreaProps = {
  title: string;
  description: string;
  titleColor: string;
  descriptionColor: string;
};

export type TextAreaSettingsActions = {
  setTitle: (title: string) => void;
  setDescription: (title: string) => void;
  setTitleColor: (title: string) => void;
  setDescriptionColor: (title: string) => void;
};
