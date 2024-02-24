"use client";

import { ProductCard } from "@/components/ProductCard";
import { ProductsNotFounded } from "./not-founded";
import { useMemo, useState } from "react";

import { Button } from "@/components/SubmitInput";

type Props = {
  products: ITrocaProduct[] | [];
};

type StepTypes = "default" | "registerProducts";
type RenderType = {
  [key in StepTypes]: JSX.Element;
};

function Products({ products }: Props) {
  return products?.map((product, index) => {
    return (
      <article key={index}>
        <ProductCard {...product} />
      </article>
    );
  });
}

export function ProductsContainer({ products }: Props) {
  const [step, setStep] = useState<StepTypes>("default");

  const defaultView = useMemo(
    () =>
      !products.length ? (
        <ProductsNotFounded
          handleRegisterNewProducts={() => setStep("registerProducts")}
        />
      ) : (
        <Products products={products} />
      ),
    [products]
  );

  const RENDERS: RenderType = {
    default: defaultView,
    registerProducts: (
      <div className="flex flex-col items-center gap-4  justify-center content-center pt-24 w-full">
        <h1>Formulário de Cadastro (container)</h1>
        <Button
          className="bg-green-500 font-medium"
          onClick={() => setStep("default")}
        >
          Voltar
        </Button>
      </div>
    ),
  };

  return (
    <>
      <section>
        <div className="mb-5">
          <h1>Bem vindo a tela de produtos</h1>
          <div className="flex flex-wrap gap-5">{RENDERS[step]}</div>
        </div>
      </section>
    </>
  );
}
