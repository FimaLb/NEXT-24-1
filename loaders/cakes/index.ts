import { Catalog } from "@/db-types";

export async function getCakesByCatalogId(
  id: string,
  filters?: {
    size?: string;
    wheight?: string;
  }
): Promise<Catalog["cakes"] | null> {
  const params = new URLSearchParams();
  params.set("catalogId", id);

  if (filters?.size) {
    params.set("sizeId", filters?.size);
  }
  if (filters?.wheight) {
    params.set("wheightId", filters?.wheight);
  }

  console.log("params", params.toString());
  const cakes = await fetch(
    `${process.env.API_BASE_PATH}/cakes?${params.toString()}`
  );

  return cakes.json();
}
