"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const FilterBy = styled.div`
  ${({ theme }) => css`
    color: ${theme.COLORS.light};
    font-size: ${theme.SIZE.sm};

    display: flex;
    align-items: center;
    gap: 8px;

    border-radius: 33px;
    border: 1px solid ${theme.COLORS.light};

    padding: 8px 16px;
  `}
`;
