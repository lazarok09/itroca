import styled, { css } from "styled-components";

export const LoginFormWrapper = styled.form`
  ${() => css``}
`;
export const LoginFormFieldSet = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `}
`;

export const LoginFormInput = styled.input`
  ${({ theme }) => css`
    padding: 25px 12px;
    background: transparent;
    outline: ${theme.colors.bs_blue};
    border: 1px solid ${theme.colors.bs_dark_text_emphasis};
    border-radius: 12px;
    font-size: 1rem;
    &::placeholder {
      text-transform: capitalize;
    }
    font-family: ${theme.fonts.bs_font_sans_serif};
  `}
`;
export const LoginFormButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.bs_gray};
    padding: 12px 25px;
    border: none;
    color: white;
    border-radius: 8px;
  `}
`;
export const LoginFormButtonContainer = styled.div`
  ${() => css`
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
  `}
`;
