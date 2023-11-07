"use client";

import styled, { css } from "styled-components";

export const LoginPageContainerWrapper = styled.main`
  ${() => css`
    display: flex;
    justify-content: center;
    margin-top: 3.8rem;
  `}
`;

export const LoginCard = styled.div`
  ${() => css`
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 0 0.5rem 1rem #00000026;
    height: min-content;
  `}
`;
export const LoginCardHeading = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.bs_green};
    color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 8px 16px;
    border-bottom: 1px solid ${theme.colors.bs_gray_500};
    font-size: 14px;
    font-family: ${theme.fonts.bs_font_sans_serif};
  `}
`;

export const LoginCardItems = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 1rem;
    background-color: ${theme.colors.bs_body_bg};
  `}
`;
export const LoginFormOtherOptions = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    a {
      text-decoration: underline;
    }
  `}
`;
export const LoginFormAlterLink = styled.div`
  ${() => css``}
`;
export const LoginFormSeparator = styled.hr`
  ${() => css``}
`;
