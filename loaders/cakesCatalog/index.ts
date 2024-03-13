import { CakesCatalogsEntity, Catalog } from "@/db-types";

export async function getCakesCatalogs(): Promise<Catalog["cakesCatalogs"]> {
  const cakesCatalog = await fetch(`${process.env.API_BASE_PATH}/cakesCatalog`);

  return cakesCatalog.json();
}

export async function getCakesCatalogById() {}

export async function getCakeCatalogByAlias(
  alias: string
): Promise<CakesCatalogsEntity | null> {
  const res = await fetch(
    `${process.env.API_BASE_PATH}/cakesCatalogs?alias=${alias}`
  );
  const cakeCatalog = await res.json();

  return cakeCatalog?.length ? cakeCatalog[0] : null;
}
