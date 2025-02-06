import { ButtonReducerActionEnum } from "@/constants/enums";
import { describe, expect, it } from "vitest";
import { buttonInitialState, ButtonReducerActionTypes, buttonSettingsReducer } from "../reducer";

describe("ButtonSettingsReducer", () => {
  it("should handle SET_LINK", () => {
    const action: ButtonReducerActionTypes = {
      type: ButtonReducerActionEnum.SET_LINK,
      payload: { link: "https://test.com" },
    };
    const expectedState = { ...buttonInitialState, link: "https://test.com" };
    expect(buttonSettingsReducer(buttonInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_PADDING", () => {
    const action: ButtonReducerActionTypes = {
      type: ButtonReducerActionEnum.SET_PADDING,
      payload: { padding: 10 },
    };
    const expectedState = { ...buttonInitialState, padding: 10 };
    expect(buttonSettingsReducer(buttonInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_BORDER_RADIUS", () => {
    const action: ButtonReducerActionTypes = {
      type: ButtonReducerActionEnum.SET_BORDER_RADIUS,
      payload: { borderRadius: 10 },
    };
    const expectedState = { ...buttonInitialState, borderRadius: 10 };
    expect(buttonSettingsReducer(buttonInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_BG_COLOR", () => {
    const action: ButtonReducerActionTypes = {
      type: ButtonReducerActionEnum.SET_BG_COLOR,
      payload: { bgColor: "#fff000" },
    };
    const expectedState = { ...buttonInitialState, bgColor: "#fff000" };
    expect(buttonSettingsReducer(buttonInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_BUTTON_SIZE", () => {
    const action: ButtonReducerActionTypes = {
      type: ButtonReducerActionEnum.SET_LABEL,
      payload: { label: "New Label" },
    };
    const expectedState = { ...buttonInitialState, label: "New Label" };
    expect(buttonSettingsReducer(buttonInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_LABEL_COLOR", () => {
    const action: ButtonReducerActionTypes = {
      type: ButtonReducerActionEnum.SET_LABEL_COLOR,
      payload: { labelColor: "#000000" },
    };
    const expectedState = { ...buttonInitialState, labelColor: "#000000" };
    expect(buttonSettingsReducer(buttonInitialState, action)).toEqual(expectedState);
  });
});
