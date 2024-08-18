"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.header<{ isDanger: boolean }>`
  ${({ theme, isDanger }) => css`
    width: 100%;

    padding: 3rem 2rem;

    position: relative;

    background: ${isDanger
      ? theme.COLORS.gradientDanger
      : theme.COLORS.gradient};
    border-end-start-radius: ${theme.RADIUS.lg};
    border-end-end-radius: ${theme.RADIUS.lg};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 5px 40px 0px rgba(255, 255, 255, 0.5);
  `}
`;

export const LogoLabel = styled(Link)`
  ${({ theme }) => css`
    font-size: 1.25rem;
    font-weight: ${theme.WEIGHT.bold};

    position: absolute;
    left: 2rem;
    top: 2rem;

    color: ${theme.COLORS.text.default};
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

export const DepositContainer = styled.div<{ backgroundColor: string }>`
  ${({ theme, backgroundColor }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 4px 8px;
    border-radius: ${theme.RADIUS.md};

    background-color: ${backgroundColor};
    color: ${theme.COLORS.light};
  `}
`;

export const DepositWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 4px;
    justify-content: center;
    width: 100%;

    margin-top: 2rem;

    & > button {
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

    & > button:nth-child(1) {
      border-end-start-radius: ${theme.RADIUS.lg};
    }

    & > button:nth-child(3) {
      border-end-end-radius: ${theme.RADIUS.lg};
    }
  `}

  @media (max-width: 768px) {
    flex-direction: column;

    & > a,
    button {
      width: 100%;
    }

    & > button:nth-child(1) {
      border-end-start-radius: ${({ theme }) => theme.RADIUS.md};
      border-start-start-radius: ${({ theme }) => theme.RADIUS.lg};
      border-start-end-radius: ${({ theme }) => theme.RADIUS.lg};
    }

    & > button:nth-child(3) {
      border-end-end-radius: ${({ theme }) => theme.RADIUS.lg};
      border-end-start-radius: ${({ theme }) => theme.RADIUS.lg};
    }
  }
`;
