"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { THEME } from "../styles/theme";

interface StyledComponentProviderProps {
  children: ReactNode;
}

export function StyledComponentProvider({
  children,
}: StyledComponentProviderProps) {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
}
