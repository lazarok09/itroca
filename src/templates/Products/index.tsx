import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { ProductsContainer } from "@/containers/Products";
import { getProducts } from "@/services/itroca";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/hooks/session";
import React, { Fragment } from "react";

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
    <Fragment>
      <Header />
      <main className="p-4 min-h-max max-w-7xl m-auto">
        <ProductsContainer serverProducts={products} />
      </main>
      <Footer />
    </Fragment>
  );
};
