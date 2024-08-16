"use client";

import "styled-components";

import { THEME } from "@/shared/styles/global";

type ThemeType = typeof THEME;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
