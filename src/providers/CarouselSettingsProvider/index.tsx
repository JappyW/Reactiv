import { NO_CALLBACK } from "@/constants";
import { CarouselReducerActionEnum } from "@/constants/enums";
import { pluralize } from "@/lib/utils";
import {
  carouselInitialState,
  carouselSettingsReducer,
} from "@/providers/CarouselSettingsProvider/reducer";
import {
  CarouselAlignment,
  CarouselImage,
  CarouselMode,
  CarouselOrientation,
  CarouselProps,
  CarouselSettingsActions,
  ReactFCWithChildren,
} from "@/types";
import { createContext, useCallback, useContext, useReducer } from "react";
import { toast } from "sonner";

type CarouselSettingsContextType = {
  state: CarouselProps;
  actions: CarouselSettingsActions;
};

const CarouselSettingsContext = createContext<CarouselSettingsContextType>({
  state: carouselInitialState,
  actions: {
    addImage: NO_CALLBACK,
    editImage: NO_CALLBACK,
    removeImage: NO_CALLBACK,
    setMode: NO_CALLBACK,
    setOrientation: NO_CALLBACK,
    setAlignment: NO_CALLBACK,
    setLoop: NO_CALLBACK,
    setAutoplay: NO_CALLBACK,
    setItemsPerPage: NO_CALLBACK,
  },
});

export const CarouselSettingsProvider: ReactFCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(carouselSettingsReducer, carouselInitialState);

  const addImage = useCallback((image: CarouselImage) => {
    dispatch({ type: CarouselReducerActionEnum.ADD_IMAGE, payload: { image } });

    toast("Added an image");
  }, []);

  const editImage = useCallback((image: CarouselImage) => {
    dispatch({ type: CarouselReducerActionEnum.EDIT_IMAGE, payload: { image } });

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

  const setAlignment = useCallback((alignment: CarouselAlignment) => {
    dispatch({ type: CarouselReducerActionEnum.SET_ALIGNMENT, payload: { alignment } });

    toast(`Alignment is set to ${alignment}`);
  }, []);

  const setLoop = useCallback((loop: boolean) => {
    dispatch({ type: CarouselReducerActionEnum.SET_LOOP, payload: { loop } });

    toast(`Loop is set to ${loop ? "enabled" : "disabled"}`);
  }, []);

  const setAutoplay = useCallback((autoplay: boolean) => {
    dispatch({ type: CarouselReducerActionEnum.SET_AUTOPLAY, payload: { autoplay } });

    toast(`Autoplay is set to ${autoplay ? "enabled" : "disabled"}`);
  }, []);

  const setItemsPerPage = useCallback((itemsPerPage: number) => {
    dispatch({ type: CarouselReducerActionEnum.SET_ITEMS_PER_PAGE, payload: { itemsPerPage } });

    toast(`Set ${itemsPerPage} ${pluralize("image", itemsPerPage)} to be displayed per page`);
  }, []);

  return (
    <CarouselSettingsContext.Provider
      value={{
        state,
        actions: {
          setMode,
          addImage,
          editImage,
          setOrientation,
          removeImage,
          setAlignment,
          setLoop,
          setAutoplay,
          setItemsPerPage,
        },
      }}
    >
      {children}
    </CarouselSettingsContext.Provider>
  );
};

export const useCarouselSettings = () =>
  useContext<CarouselSettingsContextType>(CarouselSettingsContext);
