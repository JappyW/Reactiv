import { LOCAL_STORAGE_KEYS, NO_CALLBACK } from "@/constants";
import { TextareaReducerActionEnum } from "@/constants/enums";
import { usePersistReducer } from "@/hooks/usePersistReducer";
import { ReactFCWithChildren, TextareaProps, TextareaSettingsActions } from "@/types";
import { createContext, useCallback, useContext } from "react";
import { toast } from "sonner";
import {
  textareaInitialState,
  TextareaReducerActionTypes,
  textareaSettingsReducer,
} from "./reducer";

type TextareaSettingsContextType = {
  state: TextareaProps;
  actions: TextareaSettingsActions;
};

const TextareaSettingsContext = createContext<TextareaSettingsContextType>({
  state: textareaInitialState,
  actions: {
    setTitle: NO_CALLBACK,
    setTitleColor: NO_CALLBACK,
    setDescription: NO_CALLBACK,
    setDescriptionColor: NO_CALLBACK,
  },
});

export const TextareaSettingsProvider: ReactFCWithChildren = ({ children }) => {
  const [state, dispatch] = usePersistReducer<TextareaProps, TextareaReducerActionTypes>(
    textareaSettingsReducer,
    textareaInitialState,
    LOCAL_STORAGE_KEYS.TEXTAREA_SETTINGS
  );

  const setTitle: TextareaSettingsActions["setTitle"] = useCallback((title) => {
    dispatch({ type: TextareaReducerActionEnum.SET_TITLE, payload: { title } });

    toast(`Set textarea title to ${title}`);
  }, []);

  const setTitleColor: TextareaSettingsActions["setTitleColor"] = useCallback((titleColor) => {
    dispatch({ type: TextareaReducerActionEnum.SET_TITLE_COLOR, payload: { titleColor } });

    toast(`Set textarea title color to ${titleColor}`);
  }, []);

  const setDescription: TextareaSettingsActions["setDescription"] = useCallback((description) => {
    dispatch({ type: TextareaReducerActionEnum.SET_DESCRIPTION, payload: { description } });

    toast(`Set textarea description to ${description}`);
  }, []);

  const setDescriptionColor: TextareaSettingsActions["setDescriptionColor"] = useCallback(
    (descriptionColor) => {
      dispatch({
        type: TextareaReducerActionEnum.SET_DESCRIPTION_COLOR,
        payload: { descriptionColor },
      });

      toast(`Set textarea description color to ${descriptionColor}`);
    },
    []
  );

  return (
    <TextareaSettingsContext.Provider
      value={{
        state,
        actions: {
          setTitle,
          setTitleColor,
          setDescription,
          setDescriptionColor,
        },
      }}
    >
      {children}
    </TextareaSettingsContext.Provider>
  );
};

export const useTextareaSettings = () =>
  useContext<TextareaSettingsContextType>(TextareaSettingsContext);
