"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import { submitLogin } from "@/services/itroca";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { InputSubmit } from "../SubmitInput";
import { Input } from "../Input";

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
  if (session?.status === "authenticated") {
    redirect("/dashboard");
  }
  return (
    <form
      className="
    flex
    flex-col
    gap-6
    "
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-5 border-none">
        <Input
          id="email"
          type="email"
          placeholder="Email"
          required
          {...register("useremail")}
        />

        <Input
          id="password"
          type="password"
          placeholder="Senha"
          required
          {...register("password")}
        />
      </fieldset>
      <div className="flex flex-1 justify-end items-end ">
        <InputSubmit disabled={isSubmitting} type="submit" />
      </div>
    </form>
  );
};
