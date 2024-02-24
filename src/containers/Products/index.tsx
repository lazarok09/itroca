import { ProductCard } from "@/components/ProductCard";
import { ProductsNotFounded } from "./notfounded";

type Props = {
  products: ITrocaProduct[] | [];
};

export function ProductsContainer({ products }: Props) {
  return (
    <>
      <section>
        <div className="mb-5">
          <h1>Bem vindo a tela de produtos</h1>
          <div className="flex flex-wrap gap-5">
            {!products.length ? (
              <ProductsNotFounded />
            ) : (
              products?.map((product, index) => {
                return (
                  <article key={index}>
                    <ProductCard {...product} />
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
