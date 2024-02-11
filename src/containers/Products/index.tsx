"use client";

import { ErrorMessage } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/ProductCard";
import { useSession } from "@/hooks/session";

import { getProducts } from "@/services/itroca";
import { useEffect, useState } from "react";

export function ProductsContainer() {
  const {} = useSession()
  const [products, setProducts] = useState<ITrocaProduct[]>();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (e: any) {
        setError(e?.message);
      }
    };

    fetchProducts();
  }, []);

  if (products && !products?.length) {
    <h1>Parece que estamos sem produtos para esse usuário</h1>;
  }

  if (error) {
    return <ErrorMessage label="Parece que encontramos um erro" error={error}/>;
  }

  return (
    <>
      <section>
        <div className="mb-5">
          <h1>Bem vindo a tela de produtos</h1>
        </div>

        {!products ? (
          <div className="flex flex-grow basis-full flex-wrap flex-col justify-center justify-items-center">
            <Loading />
          </div>
        ) : (
          <div className="flex flex-wrap gap-5">
            {products?.map((product, index) => {
              return (
                <article key={index}>
                  <ProductCard {...product} />
                </article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
