import { getCakesByCatalogId } from "@/loaders/cakes";
import { getCakeCatalogByAlias } from "@/loaders/cakesCatalog";
import { notFound } from "next/navigation";
import CakesList from "../_components/CakesList";

export default async function CakesPage({
  params: { cakes },
}: {
  params: { cakes: string };
}) {
  const cakesCatalog = await getCakeCatalogByAlias(cakes);
  if (!cakesCatalog) {
    return notFound();
  }
  const cakesList = await getCakesByCatalogId(cakesCatalog.id);

  return (
    <div className='p-20'>
      <CakesList list={cakesList} />
    </div>
  );
}
