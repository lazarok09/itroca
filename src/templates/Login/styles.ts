"use client";

import styled, { css } from "styled-components";

export const LoginPageWrapper = styled.main`
  ${() => css`
    min-height: 80vh;

    @media (min-width: 600px) {
      min-height: 85vh;
    }
  `}
`;
