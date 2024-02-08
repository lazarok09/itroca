"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import { signIn } from "@/services/itroca";
import { toast } from "react-toastify";
import { Button } from "../SubmitInput";
import { useContext } from "react";
import { CustomSessionContext } from "@/context/Session/context";
import { redirect } from "next/navigation";
import { useCookies } from "react-cookie";
import { AUTH_COOKIE_NAME } from "@/hooks/session";

const inputClass = String(`
    border
    border-solid
    border-gray-400
    rounded-md
    py-4 px-3.5
    w-64
    h-14
    bg-transparent
    text-base
    placeholder:capitalize
    focus-visible:outline-blue-500
    focus-visible:border-none
    focus:w-64
    focus:h-14
    autofill:bg-transparent
    autofill:text-black
    autofill:shadow-black
    font-sans`);

type Inputs = {
  useremail: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<Inputs>();

  const canSubmit = !isLoading && !isSubmitting;

  const { session, setSession } = useContext(CustomSessionContext);
  const [, setCookies] = useCookies([AUTH_COOKIE_NAME]);

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    return new Promise(async (resolve, reject) => {
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

          resolve(data);
        }
      } catch (e) {
        toast.error(`Login ou senha inválidos`, {
          className: "toast-custom-icon",
          toastId: `error-${e}`,
          autoClose: 1500,
        });
        reject({ message: e, error: e });
      }
    });
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
        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          {...register("useremail")}
          className={inputClass}
        />

        <input
          id="password"
          type="password"
          placeholder="Senha"
          required
          {...register("password")}
          className={inputClass}
        />
      </fieldset>
      <div className="flex flex-1 justify-end items-end ">
        <Button disabled={!canSubmit} type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};
