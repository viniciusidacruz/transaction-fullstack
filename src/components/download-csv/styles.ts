"use client";

import { CSVLink } from "react-csv";
import styled, { css } from "styled-components";

export const Wrapper = styled(CSVLink)`
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
