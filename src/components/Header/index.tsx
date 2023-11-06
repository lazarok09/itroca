import Head from "next/head";
import Link from "next/link";

enum metadata {
  title = "I Troca",
  description = "Troque seu telefone por outro, compras avaliações e muito mais !",
}

export const Header = () => {
  return (
    <header>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <nav>
          <Link href={"/"}>Inicio</Link>
          <Link href={"/login"}>Login</Link>
        </nav>
      </Head>
    </header>
  );
};
