import PageWrapper from "@/components/ui/PageWrapper";
import React from "react";
import { getCakeByAlias } from "@/loaders/cake";
import CakeItem from "../../../_components/CakeItem";
import { getSizeData } from "@/loaders/size";
import { getCakesCatalogs } from "@/loaders/cakesCatalog";
import { getWeightData } from "@/loaders/wheight";
import { CakeAddEditForm } from "../../../_components/CakeAddEditForm";
import editeCake from "@/actions/editeCake";

export const revalidate = 0;

export default async function CakePage({
  params: { cake, cakes },
}: {
  params: { cake: string; cakes: string };
}) {
  const cakeItem = await getCakeByAlias(cake);
  const catalogs = await getCakesCatalogs();
  const sizes = await getSizeData();
  const wheights = await getWeightData();
  const selectedCatalog = catalogs?.find(({ alias }) => alias === cakes);

  console.log("cakeItem", cakeItem);

  return (
    <div className='flex flex-col p-20'>
      <CakeAddEditForm
        action={editeCake}
        catalogs={catalogs}
        sizes={sizes}
        wheights={wheights}
        selectedCatalog={selectedCatalog}
        data={cakeItem}
      />
    </div>
  );
}
