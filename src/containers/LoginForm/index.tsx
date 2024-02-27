"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import { signIn } from "@/services/itroca";
import { toast } from "react-toastify";
import { CustomButton } from "../../components/SubmitInput";
import { useContext } from "react";
import { CustomSessionContext } from "@/context/Session/context";
import { redirect } from "next/navigation";
import { CustomInput } from "../../components/CustomInput";

type Inputs = {
  useremail: string;
  password: string;
};

export const LoginFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isLoading },
  } = useForm<Inputs>();

  const canSubmit = !isLoading && !isSubmitting;

  const { session, setSession } = useContext(CustomSessionContext);

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    try {
      const data = await signIn({
        email: inputs.useremail,
        password: inputs.password,
      });
      //TODO: OPTIONAL HASH
      setSession({
        user: data,
        status: "authenticated",
      });

      if (data) {
        toast.success(`Bem vindo(a) de volta`, {
          className: "toast-custom-icon",
          toastId: `success-${inputs.useremail}`,
          autoClose: 1500,
        });
      }
    } catch (e) {
      console.error("🚀 ~ constonSubmit:SubmitHandler<Inputs>= ~ e:", e);
      toast.error(`Login ou senha inválidos`, {
        className: "toast-custom-icon",
        toastId: `error-${e}`,
        autoClose: 1500,
      });
    }
  };
  if (session?.status === "authenticated") {
    redirect("/dashboard");
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
    flex
    flex-col
    gap-6
    "
    >
      <fieldset className="flex flex-col gap-5 border-none">
        <CustomInput
          id="email"
          type="email"
          placeholder="Email"
          required
          {...register("useremail")}
        />

        <CustomInput
          id="password"
          type="password"
          placeholder="Senha"
          required
          {...register("password")}
        />
      </fieldset>
      <div className="flex flex-1 justify-end items-end ">
        <CustomButton
          disabled={!canSubmit}
          type="submit"
          data-loading={!canSubmit ? true : false}
        >
          Enviar
        </CustomButton>
      </div>
    </form>
  );
};
