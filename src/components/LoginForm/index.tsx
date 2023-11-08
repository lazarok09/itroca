"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import * as Styled from "./styles";
import { submitLogin } from "@/services/itroca";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type Inputs = {
  useremail: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const session = useSession();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    return new Promise(async (resolve, reject) => {
      const response = await submitLogin(data);
      if (response?.error) {
        toast.error(`Login ou senha inválidos`, {
          className: "toast-custom-icon",
          toastId: `error-${data.useremail}`,
          autoClose: 1500,
        });
        resolve(true);
      }
      if (response?.ok) {
        toast.success(`Bem vindo(a) de volta`, {
          className: "toast-custom-icon",
          toastId: `success-${data.useremail}`,
          autoClose: 1500,
        });
        reject({
          error: response?.error,
          status: response?.status,
        });
      }
    });
  };
  if (session?.status === 'authenticated') {
    redirect("/dashboard");
  }
  return (
    <Styled.LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Styled.LoginFormFieldSet>
        <Styled.LoginFormInput
          id="email"
          type="email"
          placeholder="Email"
          required
          {...register("useremail")}
        />

        <Styled.LoginFormInput
          id="password"
          type="password"
          placeholder="Senha"
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
