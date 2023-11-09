"use client";

import styled, { css } from "styled-components";

export const HeaderLinkWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0.6rem 1.4rem;
    font-weight: 600;
    border-radius: 8px;
    box-shadow: 0 0.5rem 1rem #00000026;
    cursor: pointer;
    background: transparent;
    &.active {
      background: ${theme.colors.bs_green};
    }
  `}
`;
