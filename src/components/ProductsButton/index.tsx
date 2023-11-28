import Link from "next/link";
import { HeaderLink } from "../HeaderLink";

export const ProductsButton = () => {
  return (
    <HeaderLink active={true}>
      <Link href={"/products"}>Produtos</Link>
    </HeaderLink>
  );
};
