"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import { ItrocaSignUpInterface, signUp } from "@/services/itroca";
import { toast } from "react-toastify";
import { CustomButton } from "../../components/CustomButton";
import { useContext } from "react";
import { CustomSessionContext } from "@/context/Session/context";
import { redirect } from "next/navigation";
import { CustomInput } from "../../components/CustomInput";

type Inputs = ItrocaSignUpInterface;

export const SignUpFormContainer = () => {
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
    const treatedAge = Number(inputs.age);
    try {
      const data = await signUp({
        email: inputs.email,
        address: inputs.address,
        age: treatedAge,
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
    } catch (e) {
      const treatedError: GenericErrorHandler | PrismaErrorHandler = e as any;

      const error = `Dados inválidos: ${treatedError?.message}`;
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
        <CustomInput
          id="name"
          type="text"
          placeholder="name"
          required
          {...register("name")}
        />
        <CustomInput
          id="address"
          type="text"
          placeholder="address"
          required
          {...register("address")}
        />
        <CustomInput
          id="age"
          type="number"
          placeholder="age"
          max={130}
          min={18}
          required
          {...register("age")}
        />

        <CustomInput
          id="email"
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <CustomInput
          id="password"
          type="password"
          placeholder="ex: 123"
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
