import { SubmitHandler, UseFormSetError } from "react-hook-form";

import { ItrocaSignUpInterface, signUp } from "@/services/itroca";
import { toast } from "react-toastify";

import { useSession } from "./session";
import { SignUpInputs } from "@/containers/SignUpForm";

export const useSignUpFormContainer = ({
  setError,
}: {
  setError: UseFormSetError<ItrocaSignUpInterface>;
}) => {
  const { isAuthenticated, setSession } = useSession();

  const onSubmit: SubmitHandler<SignUpInputs> = async (inputs) => {
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
  return { onSubmit, isAuthenticated };
};
