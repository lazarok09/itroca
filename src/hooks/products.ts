"use client";

import { getProducts, getUserProducts } from "@/services/itroca";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
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

  const cleanSearchParams = ({
    ref,
  }: {
    ref: React.RefObject<HTMLInputElement>;
  }) => {
    router.replace("/products");

    if (ref.current) {
      ref.current.value = "";
    }
  };

  return { products, cleanSearchParams };
};

export const useUserProducts = () => {
  const [products, setProducts] = useState<ITrocaProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await getUserProducts({});
        setProducts(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { products, isLoading, error };
};
