import { DefaultTheme } from "styled-components";

import { VariantsButtonProps } from "./types";

export function getTokenButton(
  variant: VariantsButtonProps,
  theme: DefaultTheme
) {
  if (variant === "default") {
    return {
      backgroundColor: theme.COLORS.dark,
      color: theme.COLORS.light,
      border: "none",
    };
  } else {
    return {
      backgroundColor: "transparent",
      color: theme.COLORS.dark,
      border: `1px solid ${theme.COLORS.dark}`,
    };
  }
}
