"use client";

import styled from "styled-components";

export const Wrapper = styled.main`
  margin-top: 4rem;
`;

export const Container = styled.section`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
