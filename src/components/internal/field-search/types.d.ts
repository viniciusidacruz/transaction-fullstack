import { ComponentProps } from "react";

export type FieldSearchProps = ComponentProps<"input"> & {
  defaultValue: string;
  onSearch: (param: string) => void;
};
