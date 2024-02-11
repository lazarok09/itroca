"use client"; // Error components must be Client Components

import { ErrorMessage } from "@/components/Error";
import { Header } from "@/components/Header";
import Image from "next/image";
import { useEffect } from "react";
const donutsIcon = "/donuts.svg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <section className=" min-h-screen flex  items-center flex-col gap-5 ">
        <article className="flex flex-col gap-4 pt-32">
          <Image height={250} width={250} src={donutsIcon} alt={"donuts"} />
          <div className="flex w-max-72 ">
            <ErrorMessage
              label="Parece que encontramos um erro"
              error={error?.message}
            />
          </div>
        </article>
        <div>
          <button
            className="p-5 bg-green-500 rounded-lg text-white font-medium hover:bg-gray-600 "
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            type="button"
          >
            Tentar novamente
          </button>
        </div>
      </section>
    </>
  );
}
