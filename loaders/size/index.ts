import { Catalog } from "@/db-types";

export async function getSizeData(): Promise<Catalog["sizes"]> {
  const sizes = await fetch(`${process.env.API_BASE_PATH}/sizes`);

  return sizes.json();
}
