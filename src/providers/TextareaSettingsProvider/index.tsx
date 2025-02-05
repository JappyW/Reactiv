import { NO_CALLBACK } from "@/constants";
import { TextareaReducerActionEnum } from "@/constants/enums";
import { ReactFCWithChildren, TextareaProps, TextareaSettingsActions } from "@/types";
import { createContext, useCallback, useContext, useReducer } from "react";
import { toast } from "sonner";
import { textareaReducerInitialState, textareaSettingsReducer } from "./reducer";

type TextareaSettingsContextType = {
  state: TextareaProps;
  actions: TextareaSettingsActions;
};

const TextareaSettingsContext = createContext<TextareaSettingsContextType>({
  state: textareaReducerInitialState,
  actions: {
    setTitle: NO_CALLBACK,
    setTitleColor: NO_CALLBACK,
    setDescription: NO_CALLBACK,
    setDescriptionColor: NO_CALLBACK,
  },
});

export const TextareaSettingsProvider: ReactFCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(textareaSettingsReducer, textareaReducerInitialState);

  const setTitle = useCallback((title: string) => {
    dispatch({ type: TextareaReducerActionEnum.SET_TITLE, payload: { title } });

    toast(`Set textarea title to ${title}`);
  }, []);

  const setTitleColor = useCallback((titleColor: string) => {
    dispatch({ type: TextareaReducerActionEnum.SET_TITLE_COLOR, payload: { titleColor } });

    toast(`Set textarea title color to ${titleColor}`);
  }, []);

  const setDescription = useCallback((description: string) => {
    dispatch({ type: TextareaReducerActionEnum.SET_DESCRIPTION, payload: { description } });

    toast(`Set textarea description to ${description}`);
  }, []);

  const setDescriptionColor = useCallback((descriptionColor: string) => {
    dispatch({
      type: TextareaReducerActionEnum.SET_DESCRIPTION_COLOR,
      payload: { descriptionColor },
    });

    toast(`Set textarea description background color to ${descriptionColor}`);
  }, []);

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
