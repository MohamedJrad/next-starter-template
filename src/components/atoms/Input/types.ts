type InputType = "text" | "number" | "email" | "password";

export interface Props {
  type: InputType | string;
  name: string;
  label: string;
  placeHolder?: string;
  defaultValue?: string;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isTouched?: boolean;
  isDisabled?: boolean;
  error?: string;
  maxLength: number;
  isWithRequiredStar?: boolean;
  onValueChange?: (e: string) => void;
}

export interface ILogic {
  type: string;
  defaultValue?: string;
  maxLength: number;
  onValueChange?: (e: string) => void;
}

export interface IValue {
  type: string;
  value: string | number;
  maxLength: number;
}
