"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  color: ${({ theme }) => theme.COLORS.light};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.SIZE.lg};
    font-weight: ${theme.WEIGHT.bold};
  `}
`;
