import { ProductCard } from "@/components/ProductCard";
import { Suspense } from "react";

const API_URL = "http://localhost:4000/products";

export async function ProductsContainer() {
  const response = await fetch(API_URL);
  const data: ITrocaProduct[] = await response.json();

  return (
    <Suspense fallback={"Carregando..."}>
      {data?.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </Suspense>
  );
}
