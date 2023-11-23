"use client";

import styled, { css } from "styled-components";





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
