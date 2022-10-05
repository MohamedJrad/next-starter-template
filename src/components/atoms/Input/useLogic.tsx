import { useState, useEffect, ChangeEvent, useCallback } from "react";
import { handleValue } from "./helpers/handleValue";
import { ILogic } from "./types";

export const useLogic = ({
  type,
  defaultValue,
  maxLength,
  onValueChange,
}: ILogic) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(handleValue({ value: event.target.value, type, maxLength }));
  };

  const onValueChangeCallback = useCallback(
    (e: string) => onValueChange && onValueChange(e),
    [onValueChange]
  );
  useEffect(() => {
    onValueChangeCallback(value);
  }, [value, onValueChangeCallback]);

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue, setValue]);

  return { handleChange, value };
};
