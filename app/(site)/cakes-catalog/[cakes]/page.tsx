import { getCakes, getCakesByCatalogId } from "@/loaders/cakes";
import {
  getCakeCatalogByAlias,
  getCakesCatalogs,
} from "@/loaders/cakesCatalog";
import { notFound } from "next/navigation";
import CakesList from "../_components/CakesList";
import CakesFilters from "../_components/CakesFilters";
import { getWeightData } from "@/loaders/wheight";
import { getSizeData } from "@/loaders/size";
import Link from "next/link";

export async function generateStaticParams() {
  const cakesCatalogs = await getCakesCatalogs();

  return cakesCatalogs?.length
    ? cakesCatalogs.map(({ alias }) => ({ cakes: alias }))
    : [];
}

export default async function CakesPage({
  params: { cakes },
  searchParams: { size, wheight },
}: {
  params: { cakes: string };
  searchParams: { size?: string; wheight?: string };
}) {
  const cakesCatalog = await getCakeCatalogByAlias(cakes);
  if (!cakesCatalog) {
    return notFound();
  }
  const cakesList = await getCakesByCatalogId(cakesCatalog.id, {
    size,
    wheight,
  });
  const wheightData = await getWeightData();
  const sizeData = await getSizeData();

  return (
    <div className='p-20'>
      <CakesFilters size={sizeData} wheight={wheightData} />
      <CakesList list={cakesList} catalog={cakes} />
      <Link href={`${cakes}/addCake`}>Add cake</Link>
    </div>
  );
}
