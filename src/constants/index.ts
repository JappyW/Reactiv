export const NO_CALLBACK = () => undefined;

export const AUTOPLAY_DELAY = 2000;

export const IMG_REGEX = /\.(jpg|jpeg|png|webp|avif|gif)$/;
export const HEX_COLOR_REGEX = /#[a-f\d]{3}(?:[a-f\d]?|(?:[a-f\d]{3}(?:[a-f\d]{2})?)?)\b/;

export const MIN_BUTTON_LABEL = 4;
export const MAX_BUTTON_LABEL = 100;
export const MIN_BUTTON_PADDING = 0;
export const MAX_BUTTON_PADDING = 40;
export const MIN_BUTTON_BORDER_RADIUS = 0;
export const MAX_BUTTON_BORDER_RADIUS = 100;

export const MIN_ITEMS_PER_PAGE = 1;
export const MAX_ITEMS_PER_PAGE = 3;

export const MIN_TEXTAREA_TITLE_LENGTH = 4;
export const MAX_TEXTAREA_TITLE_LENGTH = 50;
export const MIN_TEXTAREA_DESCRIPTION_LENGTH = 4;
export const MAX_TEXTAREA_DESCRIPTION_LENGTH = 200;

export const INVALID_COLOR_MESSAGE = "Invalid color code";
export const INVALID_URL_MESSAGE = "Invalid URL";

export enum LOCAL_STORAGE_KEYS {
  VITE_THEME_UI = "vite-theme-ui",
  TEXTAREA_SETTINGS = "textarea-settings",
  BUTTON_SETTINGS = "button-settings",
  CAROUSEL_SETTINGS = "carousel-settings",
}

export const listOfObjectsInLocalStorage = [
  LOCAL_STORAGE_KEYS.BUTTON_SETTINGS,
  LOCAL_STORAGE_KEYS.TEXTAREA_SETTINGS,
  LOCAL_STORAGE_KEYS.CAROUSEL_SETTINGS,
];
