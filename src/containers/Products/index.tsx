"use client";

import { ErrorMessage } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/ProductCard";

import { getProducts } from "@/services/itroca";
import { Suspense, useEffect, useState } from "react";

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
    <ErrorMessage>
      Parece que ocorreu um erro durante a busca de produtos
    </ErrorMessage>;
  }

  return (
    <Suspense fallback={<Loading />}>
      {products?.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </Suspense>
  );
}
