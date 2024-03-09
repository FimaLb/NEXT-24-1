import { CarsList } from "@/app/_components/CarsList";
import { ColorsList } from "@/app/_components/ColorsList";
import { getCarsByMakeId } from "@/loaders/cars";
import { getColors } from "@/loaders/color";
import { getMakeByAlias } from "@/loaders/make";
import { notFound } from "next/navigation";

export default async function MakePage({
  params: { make },
  searchParams: { color },
}: {
  params: { make: string };
  searchParams: { color?: string };
}) {
  const currentMake = await getMakeByAlias(make);
  if (!currentMake) {
    return notFound();
  }
  const cars = await getCarsByMakeId(currentMake.id, { color });
  const colors = await getColors();
  return (
    <div className='p-20 flex flex-col gap-5'>
      <h1>{currentMake?.name}</h1>
      <ColorsList data={colors} />
      <CarsList data={cars} />
    </div>
  );
}
