import { CatalogsEntity, Catalog } from "@/db-types";

export async function getCakesCatalogs(): Promise<Catalog["catalogs"]> {
  const cakesCatalog = await fetch(`${process.env.API_BASE_PATH}/catalogs`);

  return cakesCatalog.json();
}

export async function getCakesCatalogById() {}

export async function getCakeCatalogByAlias(
  alias: string
): Promise<CatalogsEntity | null> {
  const res = await fetch(
    `${process.env.API_BASE_PATH}/catalogs?alias=${alias}`
  );
  const cakeCatalog = await res.json();
  return cakeCatalog?.length ? cakeCatalog[0] : null;
}
