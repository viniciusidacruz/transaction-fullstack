import styled, { css } from "styled-components";

export const TitleRemove = styled.h3`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.SIZE.md};
    font-weight: ${theme.WEIGHT.bold};
  `}
`;

export const Actions = styled.div`
  display: flex;
  gap: 2rem;
`;
