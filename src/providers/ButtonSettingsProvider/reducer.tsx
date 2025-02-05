import { ButtonReducerActionEnum } from "@/constants/enums";
import { ButtonProps } from "@/types";

export type ButtonReducerActionTypes =
  | { type: ButtonReducerActionEnum.SET_LABEL; payload: { label: string } }
  | { type: ButtonReducerActionEnum.SET_LABEL_COLOR; payload: { labelColor: string } }
  | { type: ButtonReducerActionEnum.SET_LINK; payload: { link: string } }
  | { type: ButtonReducerActionEnum.SET_BG_COLOR; payload: { bgColor: string } }
  | { type: ButtonReducerActionEnum.SET_PADDING; payload: { padding: number } }
  | { type: ButtonReducerActionEnum.SET_BORDER_RADIUS; payload: { borderRadius: number } };

export const buttonInitialState: ButtonProps = {
  label: "Save",
  bgColor: "#179641",
  labelColor: "#ffffff",
  borderRadius: 0,
  padding: 0,
  link: undefined,
};

export const buttonSettingsReducer = (
  state: ButtonProps,
  action: ButtonReducerActionTypes
): ButtonProps => {
  switch (action.type) {
    case ButtonReducerActionEnum.SET_LABEL:
      return {
        ...state,
        label: action.payload.label,
      };

    case ButtonReducerActionEnum.SET_LABEL_COLOR:
      return {
        ...state,
        labelColor: action.payload.labelColor,
      };

    case ButtonReducerActionEnum.SET_LINK:
      return {
        ...state,
        link: action.payload.link,
      };

    case ButtonReducerActionEnum.SET_BG_COLOR:
      return {
        ...state,
        bgColor: action.payload.bgColor,
      };

    case ButtonReducerActionEnum.SET_PADDING:
      return {
        ...state,
        padding: action.payload.padding,
      };

    case ButtonReducerActionEnum.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.payload.borderRadius,
      };

    default:
      return state;
  }
};
