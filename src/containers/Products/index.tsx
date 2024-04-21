"use client";

import { ProductsNotFounded } from "./not-founded";
import { useMemo, useRef, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { CustomButton } from "@/components/CustomButton";
import { Products } from "./products";

import { NewProductFormContainer } from "../NewProductForm";

import { ArrowBack, Clear } from "@mui/icons-material";
import { SearchContainer } from "../SearchProducts";
import { useSearchedProducts } from "@/hooks/products";
import { BackButton } from "@/components/BackButton";

export type ProductsContainerProps = {
  serverProducts: ITrocaProduct[] | [];
};

type StepTypes = "default" | "registerProducts";
type RenderType = {
  [key in StepTypes]: JSX.Element;
};

export function ProductsContainer({ serverProducts }: ProductsContainerProps) {
  const { products, cleanSearchParams } = useSearchedProducts({
    serverProducts,
  });
  const inputRef = useRef<HTMLInputElement>(null);
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
            <Products serverProducts={products} />
          </article>

          <CustomButton
            className="font-medium bg-green-500 hover:bg-green-400 hover:font-semibold"
            title={"Adicionar mais produtos"}
            onClick={() => setStep("registerProducts")}
          >
            <AddIcon />
          </CustomButton>
        </section>
      ),
    [products]
  );
  const registerNewProducts = useMemo(() => {
    return (
      <section className="flex flex-col items-center w-full">
        <div className="flex justify-center">
          <h1 className="text-center pb-5 text-xl">Formulário de Cadastro</h1>
        </div>
        <div className="flex  flex-col items-center gap-4  justify-center content-center">
          <NewProductFormContainer />
        </div>
      </section>
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
          <SearchContainer inputRef={inputRef} />
          <BackButton onClick={() => setStep("default")} />
          <div className="flex flex-wrap gap-5 ">{RENDERS[step]}</div>

          <CustomButton
            className="font-medium bg-green-500 hover:bg-green-400 hover:font-semibold "
            title={"Adicionar mais produtos"}
            onClick={() => cleanSearchParams({ ref: inputRef })}
          >
            <Clear />
          </CustomButton>
        </div>
      </section>
    </>
  );
}
