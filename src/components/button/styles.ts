"use client";

import styled, { css } from "styled-components";

import { getTokenButton } from "./utils";
import { VariantsButtonProps } from "./types";

export const Wrapper = styled.button<{ variant: VariantsButtonProps }>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem 1.5rem;

    border-radius: ${theme.RADIUS.md};
    border: ${getTokenButton(variant, theme).border};

    background-color: ${getTokenButton(variant, theme).backgroundColor};
    color: ${getTokenButton(variant, theme).color};

    transition: all ease-in-out 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  `}
`;
