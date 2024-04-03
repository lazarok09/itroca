import { SEARCH_INPUT_ID } from "@/containers/SearchProducts";
import { getProducts } from "@/services/itroca";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ForwardedRef, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const useSearchedProducts = ({
  serverProducts,
}: {
  serverProducts: ITrocaProduct[];
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [products, setProducts] = useState<ITrocaProduct[]>(serverProducts);
  const serverProductsRef = useRef(serverProducts);

  const queryInputValue = searchParams.get("name");

  useEffect(() => {
    async function fetchData() {
      try {
        if (queryInputValue) {
          setProducts(
            await getProducts({
              name: String(queryInputValue),
            })
          );
        } else {
          setProducts(serverProductsRef.current);
        }
      } catch (e) {
        console.error("🚀 ~ fetchData ~ e:", e);
        toast.error(`Error ${JSON.stringify(e)}`, {
          className: "toast-custom-icon",
          toastId: `error-${e}`,
          autoClose: 1500,
        });
      }
    }
    fetchData();
  }, [queryInputValue]);

  const cleanSearchParams = (ref: React.RefObject<HTMLInputElement>) => {
    router.replace("/products");
    if (ref.current) {
      ref.current.value = "";
    }
  };

  return { products, cleanSearchParams };
};
