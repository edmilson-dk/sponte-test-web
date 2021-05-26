import { ChangeEvent, FocusEvent } from "react";

export type ProductInputProps = {
  id: string;
  name: string;
  value: any;
  isTextArea: boolean;
  label: string;
  type: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: FocusEvent<any>) => void;
}