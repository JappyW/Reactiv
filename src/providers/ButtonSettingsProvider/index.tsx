import { NO_CALLBACK } from "@/constants";
import { ButtonReducerActionEnum } from "@/constants/enums";
import { ButtonProps, ButtonSettingsActions, ReactFCWithChildren } from "@/types";
import { createContext, useCallback, useContext, useReducer } from "react";
import { toast } from "sonner";
import { buttonReducerInitialState, buttonSettingsReducer } from "./reducer";

type ButtonSettingsContextType = {
  state: ButtonProps;
  actions: ButtonSettingsActions;
};

const ButtonSettingsContext = createContext<ButtonSettingsContextType>({
  state: buttonReducerInitialState,
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
  const [state, dispatch] = useReducer(buttonSettingsReducer, buttonReducerInitialState);

  const setLabel = useCallback((label: string) => {
    dispatch({ type: ButtonReducerActionEnum.SET_LABEL, payload: { label } });

    toast(`Set button label to ${label}`);
  }, []);

  const setLabelColor = useCallback((labelColor: string) => {
    dispatch({ type: ButtonReducerActionEnum.SET_LABEL_COLOR, payload: { labelColor } });

    toast(`Set button label color to ${labelColor}`);
  }, []);

  const setLink = useCallback((link: string) => {
    dispatch({ type: ButtonReducerActionEnum.SET_LINK, payload: { link } });

    toast(`Set button link to ${link}`);
  }, []);

  const setBGColor = useCallback((bgColor: string) => {
    dispatch({ type: ButtonReducerActionEnum.SET_BG_COLOR, payload: { bgColor } });

    toast(`Set button background color to ${bgColor}`);
  }, []);

  const setPadding = useCallback((padding: number) => {
    dispatch({ type: ButtonReducerActionEnum.SET_PADDING, payload: { padding } });

    toast(`Set button padding to ${padding}px`);
  }, []);

  const setBorderRadius = useCallback((borderRadius: number) => {
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
