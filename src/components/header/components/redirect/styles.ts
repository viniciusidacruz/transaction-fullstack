import Link from "next/link";
import styled, { css } from "styled-components";

export const LinkNavigation = styled(Link)<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    color: ${theme.COLORS.light};
    background-color: ${isActive
      ? theme.COLORS.text.default
      : theme.COLORS.dark};

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
  `}
`;
