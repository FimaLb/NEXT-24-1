import { getCarById } from "@/loaders/cars";
import { getColorById } from "@/loaders/color";
import { notFound } from "next/navigation";

export default async function Make({
  params: { car },
}: {
  params: {
    car: string;
  };
}) {
  const currentCar = await getCarById(car);
  if (!currentCar) {
    return notFound();
  }
  const color = await getColorById(currentCar?.color);

  return (
    <main className='p-10 flex flex-col gap-10'>
      <h1>{currentCar.name}</h1>
      {color ? <div>Color: {color.name}</div> : null}
    </main>
  );
}
