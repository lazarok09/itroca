"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import { ItrocaSignUpInterface, signIn, signUp } from "@/services/itroca";
import { toast } from "react-toastify";
import { Button } from "../SubmitInput";
import { useContext } from "react";
import { CustomSessionContext } from "@/context/Session/context";
import { redirect } from "next/navigation";
import { alertTitleClasses } from "@mui/material";

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

type Inputs = ItrocaSignUpInterface;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isLoading },
    setError,
  } = useForm<Inputs>();

  const canSubmit = !isLoading && !isSubmitting;

  const { session, setSession } = useContext(CustomSessionContext);

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    try {
      const data = await signUp({
        email: inputs.email,
        address: inputs.address,
        age: inputs.age,
        name: inputs.name,
        password: inputs.password,
      });
      //TODO: OPTIONAL HASH
      setSession({
        user: data,
        status: "authenticated",
      });

      if (data) {
        toast.success(`Bem vindo(a) ao ITroca`, {
          className: "toast-custom-icon",
          toastId: `success-${inputs.email}`,
          autoClose: 1500,
        });
      }
      return data;
    } catch (e) {
      console.error("🚀 ~ returnnewPromise ~ e:", e);
      const error = `Dados inválidos ${e}`;
      toast.error(error, {
        className: "toast-custom-icon",
        toastId: `error-${e}`,
        autoClose: 1500,
      });
      setError("root.serverError", {
        type: "custom",
        message: error,
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
        <input
          id="name"
          type="text"
          placeholder="name"
          required
          {...register("name")}
          className={inputClass}
        />
        <input
          id="address"
          type="text"
          placeholder="address"
          required
          {...register("address")}
          className={inputClass}
        />
        <input
          id="age"
          type="number"
          placeholder="age"
          max={130}
          min={18}
          required
          {...register("age")}
          className={inputClass}
        />

        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          {...register("email")}
          className={inputClass}
        />
        <input
          id="password"
          type="password"
          placeholder="ex: 123"
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
