export enum CarouselOrientationEnum {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export enum CarouselModeEnum {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
  SQURE = "square",
}

export enum CarouselAlignmentEnum {
  START = "start",
  CENTER = "center",
  END = "end",
}

export enum CarouselReducerActionEnum {
  SET_ORIENTATION = "SET_ORIENTATION",
  SET_MODE = "SET_MODE",
  ADD_IMAGE = "ADD_IMAGE",
  EDIT_IMAGE = "EDIT_IMAGE",
  REMOVE_IMAGE = "REMOVE_IMAGE",
  SET_ALIGNMENT = "SET_ALIGNMENT",
  SET_LOOP = "SET_LOOP",
  SET_AUTOPLAY = "SET_AUTOPLAY",
  SET_ITEMS_PER_PAGE = "SET_ITEMS_PER_PAGE",
}

export enum ButtonReducerActionEnum {
  SET_LABEL = "SET_LABEL",
  SET_LINK = "SET_LINK",
  SET_LABEL_COLOR = "SET_LABEL_COLOR",
  SET_BG_COLOR = "SET_BG_COLOR",
  SET_PADDING = "SET_PADDING",
  SET_BORDER_RADIUS = "SET_BORDER_RADIUS",
}
