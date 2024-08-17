"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    width: 100%;

    label {
      font-size: ${theme.SIZE.base};
      font-weight: ${theme.WEIGHT.bold};
      color: ${hasError ? theme.COLORS.error : theme.COLORS.text.default};
    }

    input {
      padding: 1rem;
      border-radius: ${theme.RADIUS.md};
      border: 1px solid
        ${hasError ? theme.COLORS.error : theme.COLORS.text.default};

      color: ${hasError ? theme.COLORS.error : theme.COLORS.text.default};

      width: 100%;

      outline: none;
    }

    small {
      color: ${theme.COLORS.error};
    }
  `}
`;
