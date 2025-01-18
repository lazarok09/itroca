
import { FooterBottomNavigation } from "@/components/BottomNavigation";
import { getProduct } from "@/services/itroca";
import { ProductsNotFounded } from "@/containers/Products/not-founded";
import Image from "next/image";
import HeaderContainer from "@/containers/Header";

export default async function ProductTemplate({ id }: { id: string }) {
  const product = await getProduct({
    id: String(id),
  });

  if (Object.keys(product)?.length < 1) {
    return (
      <ProductsNotFounded
        title={"Products not founded"}
        handleRegisterNewProducts={() => alert("building :p")}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <HeaderContainer />

      <div
        data-testid="home"
        className="  display: flex;
          flex
          font-mono
          h-full
          justify-center
          items-center
          place-items-center
          gap-1
          min-h-[80vh]
          "
      >
        <Image
          height={950}
          width={480}
          src={product.image}
          alt={product.name}
          title={product.name}
        />

        <h2>{product.name}</h2>
      </div>

      <FooterBottomNavigation />
    </div>
  );
}
