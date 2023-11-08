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
    console.log(data);
    const result = await submitLogin(data);
    if (result?.error) {
      toast.error("Ops... parece que ocorreu um erro na sua requisição :/");
    }
    if (result?.ok) {
      alert("SUCESSO");
      toast.success(`Bem vindo(a) ${data.useremail.split("@")[0]}`);
    }
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
