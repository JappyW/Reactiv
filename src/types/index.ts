import { ButtonProps, ButtonSettingsActions } from "./button";
import {
  CarouselAlignmentOptions,
  CarouselImage,
  CarouselMode,
  CarouselOrientation,
  CarouselProps,
  CarouselSettingImageCardProps,
  CarouselSettingsActions,
} from "./carousel";
import { TextareaProps, TextareaSettingsActions } from "./textarea";

export type ClassNameHelper = { className?: string };

export type ReactFCWithChildren<T = unknown> = React.FC<T & { children: React.ReactNode }>;

export {
  type ButtonProps,
  type ButtonSettingsActions,
  type CarouselAlignmentOptions,
  type CarouselImage,
  type CarouselMode,
  type CarouselOrientation,
  type CarouselProps,
  type CarouselSettingImageCardProps,
  type CarouselSettingsActions,
  type TextareaProps,
  type TextareaSettingsActions
};

