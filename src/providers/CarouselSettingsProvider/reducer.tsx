import {
  CarouselModeEnum,
  CarouselOrientationEnum,
  CarouselReducerActionEnum,
} from "@/constants/enums";
import {
  CarouselAlignmentOptions,
  CarouselImage,
  CarouselMode,
  CarouselOrientation,
  CarouselProps,
} from "@/types";

export type CarouselReducerActionTypes =
  | { type: CarouselReducerActionEnum.ADD_IMAGE; payload: { image: CarouselImage } }
  | { type: CarouselReducerActionEnum.EDIT_IMAGE; payload: { image: CarouselImage } }
  | { type: CarouselReducerActionEnum.REMOVE_IMAGE; payload: { id: string } }
  | {
      type: CarouselReducerActionEnum.SET_ORIENTATION;
      payload: { orientation: CarouselOrientation };
    }
  | { type: CarouselReducerActionEnum.SET_MODE; payload: { mode: CarouselMode } }
  | { type: CarouselReducerActionEnum.SET_LOOP; payload: { loop: boolean } }
  | { type: CarouselReducerActionEnum.SET_AUTOPLAY; payload: { autoplay: boolean } }
  | {
      type: CarouselReducerActionEnum.SET_ALIGNMENT;
      payload: { alignment: CarouselAlignmentOptions };
    }
  | { type: CarouselReducerActionEnum.SET_ITEMS_PER_PAGE; payload: { itemsPerPage: number } };

export const carouselReducerInitialState: CarouselProps = {
  images: [
    {
      id: "1",
      src: "data:image/jpeg;base64,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",
    },
    {
      id: "2",
      src: "data:image/png;base64,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",
    },
    {
      id: "3",
      src: "data:image/jpeg;base64,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",
    },
    {
      id: "4",
      src: "data:image/png;base64,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",
    },
    {
      id: "5",
      src: "data:image/jpeg;base64,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",
    },
    {
      id: "6",
      src: "https://i.ytimg.com/vi/fib0dfdtMuI/hqdefault.jpg",
    },
  ],
  orientation: CarouselOrientationEnum.HORIZONTAL,
  mode: CarouselModeEnum.LANDSCAPE,
  loop: true,
  autoplay: true,
  alignment: "start",
  itemsPerPage: 1,
};

export const carouselSettingsReducer = (
  state: CarouselProps,
  action: CarouselReducerActionTypes
): CarouselProps => {
  switch (action.type) {
    case CarouselReducerActionEnum.SET_ORIENTATION:
      return {
        ...state,
        orientation: action.payload.orientation,
      };

    case CarouselReducerActionEnum.SET_MODE:
      return {
        ...state,
        mode: action.payload.mode,
      };

    case CarouselReducerActionEnum.SET_ALIGNMENT:
      return {
        ...state,
        alignment: action.payload.alignment,
      };

    case CarouselReducerActionEnum.SET_AUTOPLAY:
      return {
        ...state,
        autoplay: action.payload.autoplay,
      };
    case CarouselReducerActionEnum.SET_LOOP:
      return {
        ...state,
        loop: action.payload.loop,
      };
    case CarouselReducerActionEnum.SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.payload.itemsPerPage,
      };

    case CarouselReducerActionEnum.ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload.image],
      };

    case CarouselReducerActionEnum.EDIT_IMAGE:
      const newImages = [...state.images];
      const editedImageIndex = newImages.findIndex((image) => image.id === action.payload.image.id);

      if (editedImageIndex !== -1) {
        newImages[editedImageIndex] = action.payload.image;
        return {
          ...state,
          images: newImages,
        };
      }

      return state;

    case CarouselReducerActionEnum.REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image.id !== action.payload.id),
      };

    default:
      return state;
  }
};
