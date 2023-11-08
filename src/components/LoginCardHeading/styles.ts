import styled, { css } from "styled-components";

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
