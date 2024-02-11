import React from "react";
import { Products } from "@/templates/Products";

import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: "iTroca | Produtos",
};

export default function ProductsPage() {
  return <Products />;
}
