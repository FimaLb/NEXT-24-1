import { getCakesCatalog } from "@/loaders/cakesCatalog";
import CakesCatalogList from "./_components/CakesCatalogList";

export default async function cakesCatalogPage() {
  const cakesData = await getCakesCatalog();

  return (
    <div className='p-20'>
      <CakesCatalogList data={cakesData} />
    </div>
  );
}
