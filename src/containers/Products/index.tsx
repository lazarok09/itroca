import { ProductCard } from "@/components/ProductCard";
import { API_URL } from "@/services/itroca";
import { Suspense } from "react";

export async function ProductsContainer() {
  if (!API_URL) throw new Error("API_URL env not founded");
  try {
    const response = await fetch(`${API_URL}/products`);
    const data: ITrocaProduct[] = await response.json();
    return (
      <Suspense fallback={"Carregando..."}>
        {data?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </Suspense>
    );
  } catch (e) {
    console.error(e);
    const error: { message: string } = e as any;
    return (
      <section>
        <h1>Erro na busca de produtos :/</h1>
        <details>
          <summary>Detalhes</summary>
          {error?.message}
        </details>
      </section>
    );
  }
}
