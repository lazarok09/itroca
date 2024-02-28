import { ProductCard } from "@/components/ProductCard";
import { ProductsContainerProps } from ".";

export function Products({ products }: ProductsContainerProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {products?.map((product, index) => {
        return <ProductCard {...product} key={index} />;
      })}
    </div>
  );
}
