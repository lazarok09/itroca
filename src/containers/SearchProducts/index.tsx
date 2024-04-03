"use client";

import { Input } from "@mui/material";

import { useRouter } from "next/navigation";
import React, { forwardRef } from "react";

import { toast } from "react-toastify";
export const SEARCH_INPUT_ID = "search-input";

export const SearchContainer = ({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
}) => {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const inputValue = String(form.get(SEARCH_INPUT_ID)).trim();
    if (!inputValue) {
      toast.error("Valor não encontrado", {
        className: "toast-custom-icon",
        toastId: `error-${e}`,
        autoClose: 1500,
      });
      return;
    }
    router.push(`/products?name=${inputValue}`);
  }

  return (
    <>
      <section>
        <div className="mb-5 px-5">
          <form onSubmit={handleSubmit}>
            <fieldset className="flex flex-wrap justify-center flex-col ">
              <label className="cursor-pointer" htmlFor={SEARCH_INPUT_ID}>
                Busca
              </label>
              <Input
                id={SEARCH_INPUT_ID}
                type="search"
                name={SEARCH_INPUT_ID}
                color="primary"
                inputRef={inputRef}
              />
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
