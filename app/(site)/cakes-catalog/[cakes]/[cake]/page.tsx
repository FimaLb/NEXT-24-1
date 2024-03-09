import PageWrapper from "@/components/ui/PageWrapper";
import React from "react";
import { getCakeByAlias } from "@/loaders/cake";
import CakeItem from "../../_components/CakeItem";

export default async function CakePage({
  params: { cake },
}: {
  params: { cake: string };
}) {
  const cakeItem = await getCakeByAlias(cake);

  console.log("cakeItem", cakeItem);
  return (
    <PageWrapper>
      <CakeItem itemData={cakeItem} />
    </PageWrapper>
  );
}
