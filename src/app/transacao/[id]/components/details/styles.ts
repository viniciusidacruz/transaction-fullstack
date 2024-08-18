"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
    width: 100%;

    gap: 1rem;

    color: ${theme.COLORS.light};
  `}
`;

export const Group = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    border-bottom: 1px solid ${theme.COLORS.text.default};

    padding-bottom: 1rem;

    strong,
    span {
      font-size: 2rem;
    }

    span {
      margin-left: 2rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      strong,
      span {
        font-size: 1rem;
      }

      span {
        margin-left: 0;
      }
    }
  `}
`;
