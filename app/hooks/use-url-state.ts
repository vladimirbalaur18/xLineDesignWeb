"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useUrlState<T extends string>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial value from URL or use default
  const initialValue = (searchParams.get(key) as T) || defaultValue;
  const [state, setState] = useState<T>(initialValue);

  // Update URL when state changes
  const updateState = useCallback(
    (value: T) => {
      setState(value);

      const params = new URLSearchParams(searchParams.toString());
      if (value === defaultValue) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      const newUrl = params.toString()
        ? `?${params.toString()}`
        : window.location.pathname;
      router.push(newUrl, { scroll: false });
    },
    [key, defaultValue, searchParams, router]
  );

  // Sync state with URL changes (e.g., browser back/forward)
  useEffect(() => {
    const urlValue = searchParams.get(key) as T;
    if (urlValue !== null && urlValue !== state) {
      setState(urlValue);
    } else if (urlValue === null && state !== defaultValue) {
      setState(defaultValue);
    }
  }, [searchParams, key, state, defaultValue]);

  return [state, updateState];
}

// Hook for managing multiple URL states at once
export function useUrlStates<T extends Record<string, string>>(
  initialState: T
): [T, (updates: Partial<T>) => void, (key: keyof T) => void] {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL or defaults
  const getInitialState = (): T => {
    const state = { ...initialState };
    Object.keys(initialState).forEach((key) => {
      const urlValue = searchParams.get(key);
      if (urlValue !== null) {
        state[key as keyof T] = urlValue as T[keyof T];
      }
    });
    return state;
  };

  const [state, setState] = useState<T>(getInitialState);

  // Update multiple states at once
  const updateStates = useCallback(
    (updates: Partial<T>) => {
      setState((prev) => ({ ...prev, ...updates }));

      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        const defaultValue = initialState[key as keyof T];
        if (value === defaultValue) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      const newUrl = params.toString()
        ? `?${params.toString()}`
        : window.location.pathname;
      router.push(newUrl, { scroll: false });
    },
    [searchParams, router, initialState]
  );

  // Reset a specific state to its default
  const resetState = useCallback(
    (key: keyof T) => {
      const defaultValue = initialState[key];
      updateStates({ [key]: defaultValue } as Partial<T>);
    },
    [updateStates, initialState]
  );

  // Sync with URL changes
  useEffect(() => {
    const newState = getInitialState();
    setState(newState);
  }, [searchParams]);

  return [state, updateStates, resetState];
}
