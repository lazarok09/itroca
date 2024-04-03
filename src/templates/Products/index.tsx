import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { ProductsContainer } from "@/containers/Products";
import { getProducts } from "@/services/itroca";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/hooks/session";
import React from "react";
import { SearchContainer } from "@/containers/SearchProducts";

export const Products = async () => {
  const cookieStorage = cookies();
  const itrocatoken = cookieStorage.get(AUTH_COOKIE_NAME);

  const products = await getProducts({
    customOptions: {
      headers: {
        cookie: `${itrocatoken?.name}=${itrocatoken?.value}`,
      },
    },
  });

  return (
    <>
      <Header />
      <main className="p-4 min-h-max">
        <ProductsContainer serverProducts={products} />
      </main>
      <Footer />
    </>
  );
};
