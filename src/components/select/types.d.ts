import { ComponentProps, ReactNode } from "react";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: Option[];
  icon?: ReactNode;
  onChangeValue: (value: string) => void;
}
