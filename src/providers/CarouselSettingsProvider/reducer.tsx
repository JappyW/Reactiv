import {
  CarouselModeEnum,
  CarouselOrientationEnum,
  CarouselReducerActionEnum,
} from "@/constants/enums";
import {
  CarouselAlignment,
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
      payload: { alignment: CarouselAlignment };
    }
  | { type: CarouselReducerActionEnum.SET_ITEMS_PER_PAGE; payload: { itemsPerPage: number } };

export const carouselInitialState: CarouselProps = {
  images: [
    {
      id: "1",
      src: "https://images.pexels.com/photos/30375942/pexels-photo-30375942/free-photo-of-vintage-street-lamp-against-modern-architecture.jpeg",
    },
    {
      id: "2",
      src: "https://images.pexels.com/photos/30443465/pexels-photo-30443465/free-photo-of-colorful-traditional-water-seller-in-moroccan-souk.jpeg",
    },
    {
      id: "3",
      src: "https://images.pexels.com/photos/30472132/pexels-photo-30472132/free-photo-of-couple-in-traditional-kimono-at-fushimi-inari.jpeg",
    },
    {
      id: "4",
      src: "https://images.pexels.com/photos/29861006/pexels-photo-29861006/free-photo-of-majestic-mountain-peaks-shrouded-in-clouds.jpeg",
    },
    {
      id: "5",
      src: "https://images.pexels.com/photos/30417370/pexels-photo-30417370/free-photo-of-snowy-mountains-under-clear-blue-sky.jpeg",
    },
    {
      id: "6",
      src: "https://images.pexels.com/photos/30462129/pexels-photo-30462129/free-photo-of-majestic-himalayan-mountain-landscape.jpeg",
    },
    {
      id: "7",
      src: "https://images.pexels.com/photos/30326244/pexels-photo-30326244/free-photo-of-classic-car-driving-through-snowy-mountain-landscape.jpeg",
    },
    {
      id: "8",
      src: "https://images.pexels.com/photos/29587987/pexels-photo-29587987/free-photo-of-vibrant-nightlife-in-tokyo-s-shinjuku-district.jpeg",
    },
    {
      id: "9",
      src: "https://images.pexels.com/photos/30238187/pexels-photo-30238187/free-photo-of-stunning-image-of-the-tarantula-nebula.jpeg",
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
