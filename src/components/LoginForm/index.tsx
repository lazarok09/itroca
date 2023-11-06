"use client";
import { FormEvent, useRef } from "react";
import {
  LoginFormButton,
  LoginFormButtonContainer,
  LoginFormFieldSet,
  LoginFormInput,
  LoginFormWrapper,
} from "./styles";

type LoginFormProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submiting: boolean;
};

export const LoginForm = ({ handleSubmit, submiting }: LoginFormProps) => {
  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <LoginFormFieldSet>
        <label htmlFor="login" />
        <LoginFormInput
          name="login"
          id="name"
          type="text"
          placeholder="login"
          required
        />

        <label htmlFor="password" />
        <LoginFormInput
          name="password"
          id="password"
          type="password"
          placeholder="senha"
          required
        />

        <LoginFormButtonContainer>
          <LoginFormButton disabled={submiting} type="submit">
            Login
          </LoginFormButton>
        </LoginFormButtonContainer>
      </LoginFormFieldSet>
    </LoginFormWrapper>
  );
};
