import { Catalog } from "@/db-types";

export async function getWeightData(): Promise<Catalog["wheight"]> {
  const weights = await fetch(`${process.env.API_BASE_PATH}/wheight`);

  return weights.json();
}
