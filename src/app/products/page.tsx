import React from "react";
import { Products } from "@/templates/Products";

import { Metadata } from "next";
import { getServerSideSession } from "@/lib/session";
import { DashBoardGuard } from "@/services/auth";

// either Static metadata
export const metadata: Metadata = {
  title: "iTroca | Produtos",
};

export default async function ProductsPage() {
  const session = getServerSideSession();
  return (
    <DashBoardGuard session={session}>
      <Products />
    </DashBoardGuard>
  );
}
