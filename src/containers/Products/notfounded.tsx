import { Button } from "@/components/SubmitInput";
import Image from "next/image";
const noDataIcon = "/no_data.svg";
export const ProductsNotFounded = () => {
  return (
    <article className="flex flex-col items-center gap-4  justify-center content-center pt-24 w-full">
      <Image
        src={noDataIcon}
        alt="produto nao encontrado"
        height={250}
        width={250}
      />
      <h2>Parece que estamos sem produtos para esse usuário</h2>

      <div>
        <Button className="bg-green-500 font-medium" >Cadastrar novos</Button>
      </div>
    </article>
  );
};
