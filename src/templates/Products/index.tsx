import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { ProductsContainer } from "@/containers/Products";

export const Products = () => {
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
