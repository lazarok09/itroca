"use client";

import { ProductsNotFounded } from "./not-founded";
import { useMemo, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { Button } from "@/components/SubmitInput";
import { Products } from "./products";

import { NewProductFormContainer } from "../NewProductForm";

import { ArrowBack } from "@mui/icons-material";

export type ProductsContainerProps = {
  products: ITrocaProduct[] | [];
};

type StepTypes = "default" | "registerProducts";
type RenderType = {
  [key in StepTypes]: JSX.Element;
};

export function ProductsContainer({ products }: ProductsContainerProps) {
  const [step, setStep] = useState<StepTypes>("registerProducts");

  const defaultView = useMemo(
    () =>
      !products.length ? (
        <ProductsNotFounded
          title="Parece que estamos sem produtos para esse usuário"
          handleRegisterNewProducts={() => setStep("registerProducts")}
        />
      ) : (
        <section className="flex flex-wrap gap-4">
          <article className="min-w-full">
            <Products products={products} />
          </article>
          <div className="">
            <Button
              className="font-medium bg-green-500 hover:bg-green-400 hover:font-semibold"
              title={"Adicionar mais produtos"}
              onClick={() => setStep("registerProducts")}
            >
              <AddIcon />
            </Button>
          </div>
        </section>
      ),
    [products]
  );
  const registerNewProducts = useMemo(() => {
    return (
      <div className="flex  flex-col items-center gap-4  justify-center content-center pt-24 w-full">
        <section>
          <h1>Formulário de Cadastro (container)</h1>
          <div className="self-start">
            <Button
              className="bg-green-500 font-medium py-1 px-2 rounded-s-sm"
              onClick={() => setStep("default")}
            >
              <ArrowBack />
            </Button>
          </div>
          <NewProductFormContainer />
        </section>
      </div>
    );
  }, []);

  const RENDERS: RenderType = {
    default: defaultView,
    registerProducts: registerNewProducts,
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
