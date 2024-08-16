"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;

    padding: 3rem 2rem;

    background: ${theme.COLORS.gradient};
    border-end-start-radius: ${theme.RADIUS.lg};
    border-end-end-radius: ${theme.RADIUS.lg};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const HighlightText = styled.h2`
  ${({ theme }) => css`
    color: ${theme.COLORS.text.default};

    font-size: ${theme.SIZE.sm};
    font-weight: ${theme.WEIGHT.bold};
  `}
`;

export const Balance = styled.h1`
  ${({ theme }) => css`
    color: ${theme.COLORS.text.default};

    font-size: ${theme.SIZE.lg};
    font-weight: ${theme.WEIGHT.bold};
  `}
`;

export const DepositLastContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 4px 8px;
    border-radius: ${theme.RADIUS.md};

    background-color: ${theme.COLORS.error};
    color: ${theme.COLORS.light};
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 4px;
    justify-content: center;
    width: 100%;

    margin-top: 2rem;

    & > a,
    button {
      color: ${theme.COLORS.light};
      background-color: ${theme.COLORS.dark};

      padding: 20px;
      width: 210px;

      border-radius: ${theme.RADIUS.md};

      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;

      text-transform: uppercase;
      font-weight: ${theme.WEIGHT.semibold};

      transition: all ease-in-out 0.2s;

      &:hover {
        background-color: ${theme.COLORS.text.default};
      }
    }

    & > a:nth-child(1) {
      border-end-start-radius: ${theme.RADIUS.lg};
    }

    & > a:nth-child(3) {
      border-end-end-radius: ${theme.RADIUS.lg};
    }
  `}

  @media (max-width: 768px) {
    flex-direction: column;

    & > a,
    button {
      width: 100%;
    }

    & > a:nth-child(1) {
      border-end-start-radius: ${({ theme }) => theme.RADIUS.md};
    }

    & > a:nth-child(3) {
      border-end-end-radius: ${({ theme }) => theme.RADIUS.md};
    }
  }
`;
