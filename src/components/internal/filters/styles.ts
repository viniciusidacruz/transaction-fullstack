"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
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

export const Date = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.SIZE.md};
    font-weight: ${theme.WEIGHT.bold};
    color: ${theme.COLORS.primary.DARK};
  `}
`;

export const ActionsFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
