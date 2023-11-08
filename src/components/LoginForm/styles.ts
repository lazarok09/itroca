"use client";

import styled, { css } from "styled-components";

export const LoginFormWrapper = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `}
`;
export const LoginFormFieldSet = styled.fieldset`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: none;
  `}
`;

export const LoginFormInput = styled.input`
  ${({ theme }) => css`
    padding: 1rem 0.75rem;
    width: 262px;
    height: 58px;
    background: transparent;
    outline: ${theme.colors.bs_blue};
    border: 1px solid gainsboro;
    border-radius: 8px;
    font-size: 1rem;
    &::placeholder {
      text-transform: capitalize;
    }
    &:focus-visible {
      outline: 0.5px solid ${theme.colors.bs_blue};
      border: none;
    }
    *:focus {
      width: initial; /* Redefine a largura para o valor padrão */
      height: initial; /* Redefine a altura para o valor padrão */
    }
    /* Redefina os estilos de preenchimento automático */
    &:-webkit-autofill {
      background-color: transparent; /* Define a cor de fundo desejada */
      color: #000; /* Define a cor do texto desejada */
      box-shadow: 0 0 0 100px white inset; /* Define sombras desejadas */
    }
    /* Redefina os estilos de preenchimento automático */
    &:-webkit-autofill,
    &:autofill {
      background-color: transparent; /* Define a cor de fundo desejada */
      color: #000; /* Define a cor do texto desejada */
      box-shadow: 0 0 0 100px white inset; /* Define sombras desejadas */
    }
    font-family: ${theme.fonts.bs_font_sans_serif};
  `}
`;
export const LoginFormSubmitInput = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.bs_gray};
    padding: 12px 25px;
    border: none;
    color: white;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    &:disabled {
      background: ${theme.colors.bs_red};
    }
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
