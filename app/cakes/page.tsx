import { getCakes } from "@/loaders/cakes";
import CakesList from "../(site)/cakes-catalog/_components/CakesList";

export default async function CakesPage() {
  const cakesList = await getCakes();

  return (
    <div className='flex'>
      <CakesList list={cakesList} />
    </div>
  );
}
