"use client";

import styled, { css } from "styled-components";

export const Table = styled.section`
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Header = styled.div`
  ${({ theme }) => css`
    color: ${theme.COLORS.light};

    width: 100%;
    display: flex;

    font-size: ${theme.SIZE.md};
    font-weight: ${theme.WEIGHT.bold};

    padding: 0 1rem;

    & > span:nth-child(1) {
      width: 30%;
    }

    & > span:nth-child(2) {
      width: 10%;
    }

    & > span:nth-child(3) {
      width: 10%;
    }

    & > span:nth-child(4) {
      width: 10%;
    }

    & > span:nth-child(5) {
      width: 20%;
    }

    & > span:nth-child(6) {
      width: 10%;
    }

    & > span:nth-child(7) {
      width: 10%;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const Row = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    color: ${theme.COLORS.light};
    border: 1px solid ${theme.COLORS.light};
    border-radius: ${theme.RADIUS.md};
    display: flex;
    align-items: center;

    & > div:nth-child(1) {
      width: 30%;
      overflow-wrap: break-word;

      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }

    & > div:nth-child(2) {
      width: 10%;
    }

    & > div:nth-child(3) {
      width: 10%;
    }

    & > div:nth-child(4) {
      width: 10%;
    }

    & > div:nth-child(5) {
      width: 20%;

      overflow-wrap: break-word;

      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }

    & > div:nth-child(6) {
      width: 10%;
    }

    & > div:nth-child(7) {
      width: 10%;

      display: flex;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;

      & > div {
        width: 100% !important;
        display: flex !important;
        justify-content: space-between !important;
      }
    }
  `}
`;

export const Status = styled.span<{ bgStatus: string }>`
  ${({ bgStatus, theme }) => css`
    background-color: ${bgStatus};
    width: fit-content;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.RADIUS.md};
  `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;
`;

export const Group = styled.div`
  & > span:first-child {
    display: none;
  }

  @media (max-width: 768px) {
    & > span:first-child {
      display: block;
      font-weight: ${({ theme }) => theme.WEIGHT.bold};
    }
  }
`;
