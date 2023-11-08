"use client";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/global";
import { theme } from "@/styles/theme";
import Head from "next/head";
import ToastProvider from "./toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://itroca.com.br/statics/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://itroca.com.br/statics/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://itroca.com.br/statics/images/favicons/favicon-16x16.png"
        />
      </Head>
      <body className={inter.className}>
        <ToastProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </StyledComponentsRegistry>
        </ToastProvider>
      </body>
    </html>
  );
}
