import { NO_CALLBACK } from "@/constants";
import { CarouselReducerActionEnum } from "@/constants/enums";
import {
  carouselReducerInitialState,
  carouselSettingsReducer,
} from "@/providers/CarouselSettingsProvider/reducer";
import {
  CarouselActions,
  CarouselImage,
  CarouselMode,
  CarouselOrientation,
  CarouselProps,
} from "@/types";
import { createContext, ReactNode, useCallback, useContext, useReducer } from "react";
import { toast } from "sonner";

type CarouselSettingsContextType = {
  state: CarouselProps;
  actions: CarouselActions;
};

const CarouselSettingsContext = createContext<CarouselSettingsContextType>({
  state: carouselReducerInitialState,
  actions: {
    addImage: NO_CALLBACK,
    editImage: NO_CALLBACK,
    removeImage: NO_CALLBACK,
    setMode: NO_CALLBACK,
    setOrientation: NO_CALLBACK,
  },
});

export const CarouselSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(carouselSettingsReducer, carouselReducerInitialState);

  const addImage = useCallback((image: CarouselImage) => {
    dispatch({ type: CarouselReducerActionEnum.ADD_IMAGE, payload: { image } });

    toast("Added an image");
  }, []);

  const editImage = useCallback((image: CarouselImage) => {
    dispatch({ type: CarouselReducerActionEnum.ADD_IMAGE, payload: { image } });

    toast("Edited the image");
  }, []);

  const removeImage = useCallback((id: string): void => {
    dispatch({ type: CarouselReducerActionEnum.REMOVE_IMAGE, payload: { id } });

    toast("Removed the image");
  }, []);

  const setOrientation = useCallback((orientation: CarouselOrientation): void => {
    dispatch({ type: CarouselReducerActionEnum.SET_ORIENTATION, payload: { orientation } });

    toast(`Orientation is set to ${orientation}`);
  }, []);

  const setMode = useCallback((mode: CarouselMode) => {
    dispatch({ type: CarouselReducerActionEnum.SET_MODE, payload: { mode } });

    toast(`Mode is set to ${mode}`);
  }, []);

  return (
    <CarouselSettingsContext.Provider
      value={{ state, actions: { setMode, addImage, editImage, setOrientation, removeImage } }}
    >
      {children}
    </CarouselSettingsContext.Provider>
  );
};

export const useCarouselSettings = () =>
  useContext<CarouselSettingsContextType>(CarouselSettingsContext);
