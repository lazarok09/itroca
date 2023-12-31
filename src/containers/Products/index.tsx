"use client";

import { ErrorMessage } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/ProductCard";
import { AUTH_COOKIE_NAME } from "@/hooks/session";
import { getProducts } from "@/services/itroca";
import { Suspense, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export function ProductsContainer() {
  const [cookies] = useCookies([AUTH_COOKIE_NAME]);
  const [products, setProducts] = useState<ITrocaProduct[]>();
  const [error, setError] = useState();
  const token = cookies.itrocatoken;
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ token });
        setProducts(data);
      } catch (e: any) {
        setError(e?.message);
      }
    };

    fetchProducts();
  }, [token]);

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
