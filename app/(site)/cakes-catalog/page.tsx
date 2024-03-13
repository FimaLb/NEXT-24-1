import { getCakesCatalogs } from "@/loaders/cakesCatalog";
import CakesCatalogList from "./_components/CakesCatalogList";

export default async function cakesCatalogPage() {
  const cakesData = await getCakesCatalogs();

  return (
    <div className='p-20'>
      <CakesCatalogList data={cakesData} />
    </div>
  );
}
