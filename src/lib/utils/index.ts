import { IMG_REGEX, listOfObjectsInLocalStorage, LOCAL_STORAGE_KEYS } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalize = (text: string) => {
  if (!text.length) return;

  const [firstLetter, ...rest] = text;
  return `${firstLetter.toUpperCase()}${rest.join("")}`;
};

export const isImgUrl = (url: string) => {
  return IMG_REGEX.test(url);
};

export const pluralize = (word: string, numberOfItems: number, endWith?: string) => {
  if (numberOfItems > 1) {
    return `${word}${endWith || "s"}`;
  }

  return word;
};

//can be changed to use any logging service in the future
export const logError = (text: string, error: Error, errorInfo?: any) => {
  console.error(text, error, errorInfo);
};

export const getValueFromLocalStorage = <T>(key: LOCAL_STORAGE_KEYS, defaultValue: T): T => {
  try {
    const value = localStorage.getItem(key);

    if (value == null) {
      return defaultValue;
    }

    if (listOfObjectsInLocalStorage.includes(key)) {
      return JSON.parse(value);
    }

    return defaultValue;
  } catch (error) {
    logError("Error parsing value from localStorage", error as Error);
    return defaultValue;
  }
};
