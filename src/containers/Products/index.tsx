"use client";

import { ErrorMessage } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/ProductCard";

import { getProducts } from "@/services/itroca";
import { useEffect, useState } from "react";

export function ProductsContainer() {
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

  if (!error) {
    <ErrorMessage error="Parece que ocorreu um erro durante a busca de produtos" />;
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
