import { ProductCard } from "@/components/ProductCard";
import { ProductsContainerProps } from ".";

export function Products({ products }: ProductsContainerProps) {
  return products?.map((product, index) => {
    return <ProductCard {...product} key={index} />;
  });
}
