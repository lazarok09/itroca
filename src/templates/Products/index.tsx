import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { ProductsContainer } from "@/containers/Products";
import { getProducts } from "@/services/itroca";

export const Products = async () => {
  const products = await getProducts();
  console.log("🚀 ~ Products ~ products:", products)

  return (
    <>
      <Header />

      <main className="p-4 min-h-max">
        <ProductsContainer />
      </main>
        <Footer />
    </>
  );
};
