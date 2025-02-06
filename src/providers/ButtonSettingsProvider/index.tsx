import { LOCAL_STORAGE_KEYS, NO_CALLBACK } from "@/constants";
import { ButtonReducerActionEnum } from "@/constants/enums";
import { usePersistReducer } from "@/hooks/usePersistReducer";
import { ButtonProps, ButtonSettingsActions, ReactFCWithChildren } from "@/types";
import { createContext, useCallback, useContext } from "react";
import { toast } from "sonner";
import { buttonInitialState, ButtonReducerActionTypes, buttonSettingsReducer } from "./reducer";

type ButtonSettingsContextType = {
  state: ButtonProps;
  actions: ButtonSettingsActions;
};

const ButtonSettingsContext = createContext<ButtonSettingsContextType>({
  state: buttonInitialState,
  actions: {
    setBGColor: NO_CALLBACK,
    setLabel: NO_CALLBACK,
    setLabelColor: NO_CALLBACK,
    setLink: NO_CALLBACK,
    setPadding: NO_CALLBACK,
    setBorderRadius: NO_CALLBACK,
  },
});

export const ButtonSettingsProvider: ReactFCWithChildren = ({ children }) => {
  const [state, dispatch] = usePersistReducer<ButtonProps, ButtonReducerActionTypes>(
    buttonSettingsReducer,
    buttonInitialState,
    LOCAL_STORAGE_KEYS.BUTTON_SETTINGS
  );

  const setLabel: ButtonSettingsActions["setLabel"] = useCallback((label) => {
    dispatch({ type: ButtonReducerActionEnum.SET_LABEL, payload: { label } });

    toast(`Set button label to ${label}`);
  }, []);

  const setLabelColor: ButtonSettingsActions["setLabelColor"] = useCallback((labelColor) => {
    dispatch({ type: ButtonReducerActionEnum.SET_LABEL_COLOR, payload: { labelColor } });

    toast(`Set button label color to ${labelColor}`);
  }, []);

  const setLink: ButtonSettingsActions["setLink"] = useCallback((link) => {
    dispatch({ type: ButtonReducerActionEnum.SET_LINK, payload: { link } });

    toast(!link ? "Removed button link" : `Set button link to ${link}`);
  }, []);

  const setBGColor: ButtonSettingsActions["setBGColor"] = useCallback((bgColor) => {
    dispatch({ type: ButtonReducerActionEnum.SET_BG_COLOR, payload: { bgColor } });

    toast(`Set button background color to ${bgColor}`);
  }, []);

  const setPadding: ButtonSettingsActions["setPadding"] = useCallback((padding) => {
    dispatch({ type: ButtonReducerActionEnum.SET_PADDING, payload: { padding } });

    toast(`Set button padding to ${padding}px`);
  }, []);

  const setBorderRadius: ButtonSettingsActions["setBorderRadius"] = useCallback((borderRadius) => {
    dispatch({ type: ButtonReducerActionEnum.SET_BORDER_RADIUS, payload: { borderRadius } });

    toast(`Set button border radius to ${borderRadius}%`);
  }, []);

  return (
    <ButtonSettingsContext.Provider
      value={{
        state,
        actions: {
          setLabel,
          setBGColor,
          setLabelColor,
          setLink,
          setPadding,
          setBorderRadius,
        },
      }}
    >
      {children}
    </ButtonSettingsContext.Provider>
  );
};

export const useButtonSettings = () => useContext<ButtonSettingsContextType>(ButtonSettingsContext);
