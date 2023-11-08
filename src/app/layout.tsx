import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

import GlobalStyles from "@/styles/global";
import Head from "next/head";
import ToastProvider from "./toast";
import { NextSessionProvider } from "@/lib/session";
import { StyledThemeProvider } from "@/lib/theme";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="pt-br">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body className={inter.className}>
        <NextSessionProvider session={session}>
          <ToastProvider>
            <StyledComponentsRegistry>
              <GlobalStyles />
              <StyledThemeProvider>{children}</StyledThemeProvider>
            </StyledComponentsRegistry>
          </ToastProvider>
        </NextSessionProvider>
      </body>
    </html>
  );
}
