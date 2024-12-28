"use client"; // Error components must be Client Components

import { FooterBottomNavigation } from "@/components/BottomNavigation";
import { ErrorMessage } from "@/components/Error";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { Fragment, useEffect } from "react";
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
    <div className=" min-h-screen">
      <Header />
      <section className="flex  items-center flex-col gap-3 ">
        <article className="flex flex-col gap-2 pt-32">
          <Image height={250} width={250} src={donutsIcon} alt={"donuts"} />
          <div className="flex w-max-72  ">
            <ErrorMessage
              label={"Seems like somenting went wrong :/"}
              error={error?.message}
            />
          </div>
        </article>
        <div>
          <button
            className="pt-3  pb-3 pl-6 pr-6 bg-green-500 rounded-lg text-white font-medium hover:bg-gray-600 "
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            type="button"
          >
            Try again
          </button>
        </div>
      </section>

      <FooterBottomNavigation />
    </div>
  );
}
