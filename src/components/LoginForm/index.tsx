"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  LoginFormSubmitInput,
  LoginFormButtonContainer,
  LoginFormFieldSet,
  LoginFormInput,
  LoginFormWrapper,
} from "./styles";
import { submitLogin } from "@/services/itroca";

type LoginFormProps = {};

type Inputs = {
  login: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    await submitLogin(data);
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <LoginFormFieldSet>
        <label htmlFor="login" />
        <LoginFormInput
          id="name"
          type="text"
          placeholder="login"
          required
          {...register("login")}
        />

        <label htmlFor="password" />
        <LoginFormInput
          id="password"
          type="password"
          placeholder="senha"
          required
          {...register("password")}
        />
      </LoginFormFieldSet>
      <LoginFormButtonContainer>
        <LoginFormSubmitInput disabled={false} type="submit" />
      </LoginFormButtonContainer>
    </LoginFormWrapper>
  );
};
