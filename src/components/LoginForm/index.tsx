"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import * as Styled from "./styles";
import { submitLogin } from "@/services/itroca";
import { toast } from "react-toastify";

type LoginFormProps = {};

type Inputs = {
  useremail: string;
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
    submitLogin(data).then((response) => {
      if (response?.error) {
        toast.error(`Login ou senha inválidos`, {
          className: "toast-custom-icon",
          autoClose: false,
          toastId: `error-${data.useremail}`
        });
      }
      if (response?.ok) {
        toast.success(`Bem vindo(a) de volta`, {
          className: "toast-custom-icon",
          autoClose: false,
          toastId: `success-${data.useremail}`,
        });
      }
    });
  };

  return (
    <Styled.LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Styled.LoginFormFieldSet>
        <label htmlFor="login" />
        <Styled.LoginFormInput
          id="email"
          type="email"
          placeholder="login"
          required
          {...register("useremail")}
        />

        <label htmlFor="password" />
        <Styled.LoginFormInput
          id="password"
          type="password"
          placeholder="senha"
          required
          {...register("password")}
        />
      </Styled.LoginFormFieldSet>
      <Styled.LoginFormButtonContainer>
        <Styled.LoginFormSubmitInput disabled={false} type="submit" />
      </Styled.LoginFormButtonContainer>
    </Styled.LoginFormWrapper>
  );
};
