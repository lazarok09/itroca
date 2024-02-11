"use client";

import { ErrorMessage } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/ProductCard";
import { useSession } from "@/hooks/session";

import { getProducts } from "@/services/itroca";

import { useEffect, useState } from "react";

const Products = () => {
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
    return (
      <ErrorMessage label="Parece que encontramos um erro" error={error} />
    );
  }
  return !products ? (
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
  );
};

export function ProductsContainer() {
  const { session } = useSession();

  return (
    <>
      <section>
        <div className="mb-5">
          <h1>Bem vindo a tela de produtos</h1>
          {session.status === "authenticated" && Products()}
          {session.status !== "notauthenticated" && <Loading />}
          {session.status === "notauthenticated" && <p>Volte para a página de login.</p>}
        </div>
      </section>
    </>
  );
}
