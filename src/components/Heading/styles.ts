"use client";

import styled, { css } from "styled-components";

export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    font-weight: 700;
    font-family: ${theme.fonts.bs_font_sans_serif};
    color: black;
  `}
`;
