import { CakesCatalogEntity, Catalog } from "@/db-types";

export async function getCakesCatalog(): Promise<Catalog["cakesCatalog"]> {
  const cakesCatalog = await fetch(`${process.env.API_BASE_PATH}/cakesCatalog`);

  return cakesCatalog.json();
}

export async function getCakesCatalogById() {}

export async function getCakeCatalogByAlias(
  alias: string
): Promise<CakesCatalogEntity | null> {
  const res = await fetch(
    `${process.env.API_BASE_PATH}/cakesCatalog?alias=${alias}`
  );
  const cakeCatalog = await res.json();

  return cakeCatalog?.length ? cakeCatalog[0] : null;
}
