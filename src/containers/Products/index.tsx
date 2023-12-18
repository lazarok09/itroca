"use client";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/ProductCard";
import { useSession } from "@/hooks/session";
import { API_URL, getProducts, getUser } from "@/services/itroca";
import { Suspense } from "react";

export async function ProductsContainer() {
  const { session } = useSession();
  if (session.status === "authenticated") {
    return <Loading />;
  }

  const data = await getProducts({ token: session.accessToken });
  if (!data.length) {
    <h1>Parece que estamos sem produtos para esse usuário</h1>;
  }

  return (
    <Suspense fallback={"Carregando..."}>
      {data?.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </Suspense>
  );
}
