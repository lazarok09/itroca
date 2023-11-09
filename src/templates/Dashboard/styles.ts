"use client";
import styled, { css } from "styled-components";
export const DashBoardUser = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.bs_red};
  `}
`;
export const DashboardWrapper = styled.div`
  ${() => css`
    height: 100vh;
  `}
`;

export const MainWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    font-family: ${theme.fonts.bs_font_monospace};
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 2px;
  `}
`;
