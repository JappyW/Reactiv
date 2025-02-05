import { IMG_REGEX } from "@/constants";
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
