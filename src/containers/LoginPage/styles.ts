import styled, { css } from "styled-components";

export const LoginPageWrapper = styled.main`
  ${() => css`
    display: flex;
    justify-content: center;
    height: 100vh;
  `}
`;

const paddings = "12px";

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
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding-left: ${paddings};
  `}
`;

export const LoginCardItems = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: ${paddings};
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
