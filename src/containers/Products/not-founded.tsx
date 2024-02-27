import { CustomButton } from "@/components/SubmitInput";
import Image from "next/image";
const noDataIcon = "/no_data.svg";

type Props = {
  title: string;
  handleRegisterNewProducts: () => void;
};
export const ProductsNotFounded = ({
  title,
  handleRegisterNewProducts,
}: Props) => {
  return (
    <article className="flex flex-col items-center gap-4  justify-center content-center pt-24 w-full">
      <Image
        src={noDataIcon}
        alt="produto nao encontrado"
        height={250}
        width={250}
      />
      <h2>{title}</h2>

      <div>
        <CustomButton
          onClick={handleRegisterNewProducts}
          className="bg-green-500 font-medium"
        >
          Cadastrar novos
        </CustomButton>
      </div>
    </article>
  );
};
