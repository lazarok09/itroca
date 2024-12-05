import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { ItrocaSignUpInterface } from "@/services/itroca";
import { UseFormRegister } from "react-hook-form";

export const SignUpForm = ({
  onSubmit,
  register,
  canSubmit,
}: {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<ItrocaSignUpInterface>;
  canSubmit: boolean;
}) => {
  return (
    <form
      onSubmit={onSubmit}
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
