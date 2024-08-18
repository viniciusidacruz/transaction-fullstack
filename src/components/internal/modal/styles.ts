"use client";

import { animated } from "react-spring";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.3);

  padding: 2rem;

  backdrop-filter: blur(20px);
`;

export const ModalContainer = styled(animated.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.5rem;
    padding: 2rem;
    border-radius: ${theme.RADIUS.md};

    width: 100%;

    background-color: ${theme.COLORS.light};

    position: relative;
  `}
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
`;
