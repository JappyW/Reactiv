import { LOCAL_STORAGE_KEYS } from "@/constants";
import { getValueFromLocalStorage } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useLocalStorageState<T>(
  key: LOCAL_STORAGE_KEYS,
  defaultValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState(() => getValueFromLocalStorage(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];
}
