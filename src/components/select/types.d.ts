import { ComponentProps, ReactNode } from "react";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  defaultValue: string;
  label?: string;
  options: Option[];
  icon?: ReactNode;
  onClearFilter: () => void;
  onChangeValue: (value: string) => void;
}
