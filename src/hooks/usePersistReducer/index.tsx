import { LOCAL_STORAGE_KEYS } from "@/constants";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { useCallback, useReducer } from "react";

export function usePersistReducer<S, T>(
  reducer: (state: S, action: T) => S,
  defaultValue: S,
  key: LOCAL_STORAGE_KEYS
) {
  const [savedState, saveState] = useLocalStorageState(key, defaultValue);

  const reducerLocalStorage = useCallback(
    (state: S, action: T) => {
      const newState = reducer(state, action);

      saveState(newState);

      return newState;
    },
    [saveState]
  );

  return useReducer<React.Reducer<S, T>>(reducerLocalStorage, savedState);
}
