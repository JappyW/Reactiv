import { TextareaReducerActionEnum } from "@/constants/enums";
import { describe, expect, it } from "vitest";
import {
  textareaInitialState,
  TextareaReducerActionTypes,
  textareaSettingsReducer,
} from "../reducer";

describe("SettingsReducer", () => {
  it("should handle SET_DESCRIPTION", () => {
    const action: TextareaReducerActionTypes = {
      type: TextareaReducerActionEnum.SET_DESCRIPTION,
      payload: { description: "Hi there" },
    };
    const expectedState = { ...textareaInitialState, description: "Hi there" };
    expect(textareaSettingsReducer(textareaInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_TITLE", () => {
    const action: TextareaReducerActionTypes = {
      type: TextareaReducerActionEnum.SET_TITLE,
      payload: { title: "New Title" },
    };
    const expectedState = { ...textareaInitialState, title: "New Title" };
    expect(textareaSettingsReducer(textareaInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_DESCRIPTION_COLOR", () => {
    const action: TextareaReducerActionTypes = {
      type: TextareaReducerActionEnum.SET_DESCRIPTION_COLOR,
      payload: { descriptionColor: "#fff000" },
    };
    const expectedState = { ...textareaInitialState, descriptionColor: "#fff000" };
    expect(textareaSettingsReducer(textareaInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_TITLE_COLOR", () => {
    const action: TextareaReducerActionTypes = {
      type: TextareaReducerActionEnum.SET_TITLE_COLOR,
      payload: { titleColor: "#fff000" },
    };
    const expectedState = { ...textareaInitialState, titleColor: "#fff000" };
    expect(textareaSettingsReducer(textareaInitialState, action)).toEqual(expectedState);
  });
});
