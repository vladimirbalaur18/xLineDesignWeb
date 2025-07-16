"use client";

import { useState, useEffect, useRef } from "react";
import { Input, InputProps } from "./input";

interface DebouncedInputProps extends Omit<InputProps, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  debounceMs?: number;
}

export function DebouncedInput({
  value,
  onChange,
  debounceMs = 500,
  ...props
}: DebouncedInputProps) {
  const [inputValue, setInputValue] = useState(value);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Update internal state when external value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      onChange(newValue);
    }, debounceMs);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return <Input {...props} value={inputValue} onChange={handleInputChange} />;
}
