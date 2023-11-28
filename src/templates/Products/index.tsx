import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { ProductsContainer } from "@/containers/Products";

export const Products = () => {
  return (
    <>
      <Header />
      <div
        className="
         min-h-screen
         text-bg flex flex-1
         grid-cols-3
      "
      >
        <main className="w-70 p-4 ">
          <ProductsContainer />
        </main>
      </div>

      <Footer />
    </>
  );
};
