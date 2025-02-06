import { CarouselReducerActionEnum } from "@/constants/enums";
import {
    carouselInitialState,
    CarouselReducerActionTypes,
    carouselSettingsReducer,
} from "@/providers/CarouselSettingsProvider/reducer";
import { describe, expect, it } from "vitest";

const initialImages = carouselInitialState.images;

describe("CarouselSettingsReducer", () => {
  it("should handle ADD_IMAGE", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.ADD_IMAGE,
      payload: { image: { src: "test1.png", id: "1000" } },
    };
    const expectedState = {
      ...carouselInitialState,
      images: [...initialImages, { src: "test1.png", id: "1000" }],
    };
    expect(carouselSettingsReducer(carouselInitialState, action)).toEqual(expectedState);
  });

  it("should handle EDIT_IMAGE", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.EDIT_IMAGE,
      payload: { image: { src: "test2.png", id: "1000" } },
    };
    const expectedState = {
      ...carouselInitialState,
      images: [...initialImages, { src: "test2.png", id: "1000" }],
    };
    expect(
      carouselSettingsReducer(
        {
          ...carouselInitialState,
          images: [...initialImages, { src: "test1.png", id: "1000" }],
        },
        action
      )
    ).toEqual(expectedState);
  });

  it("should handle REMOVE_IMAGE", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.REMOVE_IMAGE,
      payload: { id: "1000" },
    };
    const expectedState = {
      ...carouselInitialState,
      images: initialImages,
    };
    expect(
      carouselSettingsReducer(
        {
          ...carouselInitialState,
          images: [...initialImages, { src: "test1.png", id: "1000" }],
        },
        action
      )
    ).toEqual(expectedState);

    expect(carouselSettingsReducer(carouselInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_ALIGNMENT", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.SET_ALIGNMENT,
      payload: { alignment: "center" },
    };
    const expectedState = { ...carouselInitialState, alignment: "center" };
    expect(carouselSettingsReducer(carouselInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_MODE", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.SET_MODE,
      payload: { mode: "portrait" },
    };
    const expectedState = { ...carouselInitialState, mode: "portrait" };
    expect(carouselSettingsReducer(carouselInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_AUTOPLAY", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.SET_AUTOPLAY,
      payload: { autoplay: true },
    };
    const expectedState = { ...carouselInitialState, autoplay: true };
    expect(carouselSettingsReducer(carouselInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_LOOP", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.SET_LOOP,
      payload: { loop: true },
    };
    const expectedState = { ...carouselInitialState, loop: true };
    expect(carouselSettingsReducer(carouselInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_ITEMS_PER_PAGE", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.SET_ITEMS_PER_PAGE,
      payload: { itemsPerPage: 2 },
    };
    const expectedState = { ...carouselInitialState, itemsPerPage: 2 };
    expect(carouselSettingsReducer(carouselInitialState, action)).toEqual(expectedState);
  });

  it("should handle SET_ORIENTATION", () => {
    const action: CarouselReducerActionTypes = {
      type: CarouselReducerActionEnum.SET_ORIENTATION,
      payload: { orientation: "vertical" },
    };
    const expectedState = { ...carouselInitialState, orientation: "vertical" };
    expect(carouselSettingsReducer(carouselInitialState, action)).toEqual(expectedState);
  });
});
