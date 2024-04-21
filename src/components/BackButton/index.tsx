import { ButtonHTMLAttributes } from "react";
import { ArrowBack } from "@mui/icons-material";

import { CustomButton } from "../CustomButton";

export const BackButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <CustomButton
      {...props}
      className={`bg-transparent ${props.className}`}
      title={"Voltar"}
    >
      <ArrowBack className="text-black" />
    </CustomButton>
  );
};
