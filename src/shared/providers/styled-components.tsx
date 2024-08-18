"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { THEME } from "../styles/theme";

interface StyledComponentProviderProps {
  children: ReactNode;
}

/**
 * Provedor de tema para Styled-Components.
 *
 * Envolve os componentes filhos com o `ThemeProvider` do Styled-Components,
 * aplicando o tema definido na aplicação.
 *
 * @param children - Os componentes filhos que receberão o tema fornecido pelo `ThemeProvider`.
 */
export function StyledComponentProvider({
  children,
}: StyledComponentProviderProps) {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
}
