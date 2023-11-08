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

    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    return new Promise(async (resolve, reject) => {
      const response = await submitLogin(data);
      if (response?.error) {
        toast.error(`Login ou senha inválidos`, {
          className: "toast-custom-icon",
          toastId: `error-${data.useremail}`,
          autoClose: 2000,
        });
        resolve(true);
      }
      if (response?.ok) {
        toast.success(`Bem vindo(a) de volta`, {
          className: "toast-custom-icon",
          toastId: `success-${data.useremail}`,
          autoClose: 2000,
        });
        reject({
          error: response?.error,
          status: response?.status,
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
        <Styled.LoginFormSubmitInput disabled={isSubmitting} type="submit" />
      </Styled.LoginFormButtonContainer>
    </Styled.LoginFormWrapper>
  );
};
