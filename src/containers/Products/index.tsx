import { ProductCard } from "@/components/ProductCard";

type Props = {
  products: ITrocaProduct[] | [];
};
export function ProductsContainer({ products }: Props) {
  if (products && !products?.length) {
    <h1>Parece que estamos sem produtos para esse usuário</h1>;
  }

  return (
    <>
      <section>
        <div className="mb-5">
          <h1>Bem vindo a tela de produtos</h1>
          <div className="flex flex-wrap gap-5">
            {products?.map((product, index) => {
              return (
                <article key={index}>
                  <ProductCard {...product} />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
