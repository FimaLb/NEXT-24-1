import { getMakeById, getMakes } from "@/loaders/make";
import { MakesList } from "../_components/MakesList";

export default async function Page() {
  const makes = await getMakes();

  return (
    <div className='p-20'>
      <MakesList data={makes} />
    </div>
  );
}
