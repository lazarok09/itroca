import ProductTemplate from "@/templates/Product";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <ProductTemplate id={id} />;
}
