import PageWrapper from "@/components/ui/PageWrapper";
import React from "react";
import { getCakeByAlias } from "@/loaders/cake";
import CakeItem from "../../_components/CakeItem";
import Link from "next/link";
import { getCakes } from "@/loaders/cakes";

export async function generateStaticParams() {
  const cakes = await getCakes();

  return cakes?.length
    ? cakes.map(({ id, catalog }) => ({
        cakes: catalog?.alias,
        cake: id,
      }))
    : [];
}

export default async function CakePage({
  params: { cake, cakes },
}: {
  params: { cake: string; cakes: string };
}) {
  const cakeItem = await getCakeByAlias(cake);
  console.log("cakes", cakes);
  return (
    <PageWrapper>
      <CakeItem itemData={cakeItem} />
      <Link href={`${cakeItem?.alias}/edit`}>Edite cake</Link>
      <Link href={`/cakes-catalog/${cakes}`}>Back</Link>
    </PageWrapper>
  );
}
