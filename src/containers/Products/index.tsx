import { ErrorMessage } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { ProductCard } from "@/components/ProductCard";
import { useSession } from "@/hooks/session";
import { getProducts } from "@/services/itroca";
import { Suspense } from "react";

export async function ProductsContainer() {
  try {
    const data = await getProducts();
    if (data) {
      return JSON.stringify(data, null, 2);
    }
    return <h1>No products baby</h1>;
  } catch (e) {
    console.error(e);
    return <ErrorMessage>{JSON.stringify(e)}</ErrorMessage>;
  }

  // if (!data.length) {
  //   <h1>Parece que estamos sem produtos para esse usuário</h1>;
  // }

  // return (
  //   <Suspense fallback={<Loading />}>
  //     {data?.map((product, index) => {
  //       return <ProductCard key={index} {...product} />;
  //     })}
  //   </Suspense>
  // );
}
