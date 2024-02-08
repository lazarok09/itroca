import { ErrorMessage } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/ProductCard";

import { getProducts } from "@/services/itroca";
import { Suspense } from "react";

export async function ProductsContainer() {
  try {
    const products = await getProducts();

    if (products && !products?.length) {
      <h1>Parece que estamos sem produtos para esse usuário</h1>;
    }

    return (
      <Suspense fallback={<Loading />}>
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </Suspense>
    );
  } catch (e) {
    console.error("🚀 ~ ProductsContainer ~ e:", e);
    return <ErrorMessage error={"Deu pau "} />;
  }
}
