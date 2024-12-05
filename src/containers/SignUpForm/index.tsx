"use client";
import { useForm } from "react-hook-form";

import { ItrocaSignUpInterface } from "@/services/itroca";

import { redirect } from "next/navigation";
import { SignUpForm } from "./signup-form";
import { LoginButton } from "./signup-button";
import { useSignUpFormContainer } from "@/hooks/signup";
export type SignUpInputs = ItrocaSignUpInterface;

export const SignUpFormContainer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isLoading },
    setError,
  } = useForm<SignUpInputs>();

  const canSubmit = !isLoading && !isSubmitting;
  const { onSubmit, isAuthenticated } = useSignUpFormContainer({ setError });

  if (isAuthenticated) {
    // TODO: create a modal to redirect user to dashboard page
    redirect("/dashboard");
  }

  return (
    <section className="flex-col gap-3 p-4">
      <SignUpForm
        canSubmit={canSubmit}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
      />
      <LoginButton />
    </section>
  );
};
