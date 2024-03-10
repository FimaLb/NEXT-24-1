import { Catalog } from "@/db-types";

export async function getSizeData(): Promise<Catalog["size"]> {
  const sizes = await fetch(`${process.env.API_BASE_PATH}/size`);

  return sizes.json();
}
