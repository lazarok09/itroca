import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import ToastProvider from "./toast";

import "./global.css";
import { CustomSessionProvider } from "@/context/Session";
import NProgressProvider from "./nprogress";
import { CustomDialogProvider } from "@/context/Dialog";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NProgressProvider />
        <CustomSessionProvider>
          <CustomDialogProvider>
            <ToastProvider>{children}</ToastProvider>
          </CustomDialogProvider>
        </CustomSessionProvider>
      </body>
    </html>
  );
}
