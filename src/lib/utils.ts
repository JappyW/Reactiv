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
  return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url);
};
