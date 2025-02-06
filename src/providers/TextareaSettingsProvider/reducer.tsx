import { TextareaReducerActionEnum } from "@/constants/enums";
import { TextareaProps } from "@/types";

export type TextareaReducerActionTypes =
  | { type: TextareaReducerActionEnum.SET_TITLE; payload: { title: string } }
  | { type: TextareaReducerActionEnum.SET_TITLE_COLOR; payload: { titleColor: string } }
  | { type: TextareaReducerActionEnum.SET_DESCRIPTION; payload: { description: string } }
  | {
      type: TextareaReducerActionEnum.SET_DESCRIPTION_COLOR;
      payload: { descriptionColor: string };
    };

export const textareaInitialState: TextareaProps = {
  title: "Hello there Text Area",
  titleColor: "#ffffff",
  description: "Example description",
  descriptionColor: "#ffffff",
};

export const textareaSettingsReducer = (
  state: TextareaProps,
  action: TextareaReducerActionTypes
): TextareaProps => {
  switch (action.type) {
    case TextareaReducerActionEnum.SET_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };

    case TextareaReducerActionEnum.SET_TITLE_COLOR:
      return {
        ...state,
        titleColor: action.payload.titleColor,
      };

    case TextareaReducerActionEnum.SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
      };

    case TextareaReducerActionEnum.SET_DESCRIPTION_COLOR:
      return {
        ...state,
        descriptionColor: action.payload.descriptionColor,
      };

    default:
      return state;
  }
};
