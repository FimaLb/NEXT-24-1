import { Catalog } from "@/db-types";

export async function getCakesByCatalogId(
  id: string
): Promise<Catalog["cakes"] | null> {
  const cakes = await fetch(
    `${process.env.API_BASE_PATH}/cakes?catalogId=${id}`
  );

  return cakes.json();
}
