import { ComponentProps } from "react";

export type VariantsButtonProps = "default" | "outline";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: VariantsButtonProps;
  isLoading?: boolean;
};
