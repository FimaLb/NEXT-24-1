import { Catalog } from "@/db-types";

export async function getWeightData(): Promise<Catalog["wheights"]> {
  const weights = await fetch(`${process.env.API_BASE_PATH}/wheights`);

  return weights.json();
}
