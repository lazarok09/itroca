"use client";

import styled, { css } from "styled-components";
export const HeaderWrapper = styled.header`
  ${() => css`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
    padding: 4px 60px;
    justify-content: flex-end;
  `}
`;

export const HeaderNavigation = styled.nav`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `}
`;


