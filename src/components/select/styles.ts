import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectLabelButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.COLORS.light};
    font-size: ${theme.SIZE.sm};

    display: flex;
    align-items: center;
    gap: 8px;

    width: 150px;
    justify-content: space-between;

    border-radius: 33px;
    border: 1px solid ${theme.COLORS.light};

    padding: 8px 16px;
  `}
`;

export const DropdownStyle = styled.div<{ isVisible: boolean }>`
  ${({ theme }) =>
    css`
      position: absolute;
      top: 0;
      left: 0;

      max-height: 40vmax;
      min-width: 10rem;

      padding: 0.4rem;

      display: flex;
      flex-direction: column;

      background: ${theme.COLORS.text.default};

      border-radius: 5px;

      transition: max-height 0.2s ease;
      overflow-y: auto;
    `}

  ${({ isVisible }) =>
    !isVisible &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;

export const DropdownItem = styled.div<{ active: boolean }>`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;

      width: 90%;

      margin: 0.15rem 0;
      padding: 0.3rem 0.5rem;

      font-size: 0.9rem;
      font-weight: 400;

      color: ${theme.COLORS.light};
      border-radius: 0.3rem;
      cursor: pointer;

      &:hover,
      :focus,
      :focus:hover {
        background-color: ${theme.COLORS.primary.DARK};
        color: ${theme.COLORS.text.default} !important;
        outline: none;
      }
    `}

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.COLORS.primary.DARK};
      color: ${theme.COLORS.text.default} !important;
      font-weight: 500;
    `}
`;
