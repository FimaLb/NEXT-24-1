import { CakeAddEditForm } from "../../_components/CakeAddEditForm";
import { getCakesCatalogs } from "@/loaders/cakesCatalog";
import { getWeightData } from "@/loaders/wheight";
import { getSizeData } from "@/loaders/size";
import addCake from "@/actions/addCake";

export default async function AddCakePage({
  params: { cakes },
}: {
  params: { cakes: string };
}) {
  const catalogs = await getCakesCatalogs();
  const sizes = await getSizeData();
  const wheights = await getWeightData();
  const selectedCatalog = catalogs?.find(({ alias }) => alias === cakes);

  return (
    <div className='flex flex-col p-20'>
      <CakeAddEditForm
        action={addCake}
        catalogs={catalogs}
        sizes={sizes}
        wheights={wheights}
        selectedCatalog={selectedCatalog}
      />
    </div>
  );
}
