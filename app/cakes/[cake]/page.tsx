import PageWrapper from "@/components/ui/PageWrapper";
import React from "react";
import { getCakeByAlias } from "@/loaders/cake";
import CakeItem from "@/app/(site)/cakes-catalog/_components/CakeItem";
import Link from "next/link";
import { getCakes } from "@/loaders/cakes";

// export async function generateStaticParams() {
//   const cakes = await getCakes();

//   return cakes?.length
//     ? cakes.map(({ alias }) => ({
//         cake: alias,
//       }))
//     : [];
// }

export default async function CakePage({
  params: { cake },
}: {
  params: { cake: string };
}) {
  console.log("param alias cake come", cake);
  const cakeItem = await getCakeByAlias(cake);
  console.log("param cake out", cakeItem);
  return (
    <PageWrapper>
      <CakeItem itemData={cakeItem} />
      <Link href={`${cakeItem?.alias}/edit`}>Edite cake</Link>
      <Link href={`/cakes`}>Back</Link>
    </PageWrapper>
  );
}
