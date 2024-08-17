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
  justify-content: space-between;

  margin-top: 1rem;

  button {
    flex: 1;
  }
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    & > div {
      display: flex;
      flex-direction: column;

      gap: 1rem;

      label {
        font-size: ${theme.SIZE.base};
        font-weight: ${theme.WEIGHT.bold};
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
