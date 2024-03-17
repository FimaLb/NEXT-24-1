import { CakesEntity } from "@/db-types";

export async function getCakeByAlias(
  alias: string
): Promise<CakesEntity | null> {
  const params = new URLSearchParams();
  params.set("alias", alias);

  if (!alias) {
    return null;
  }
  const res = await fetch(
    `${process.env.API_BASE_PATH}/cakes?${params.toString()}`
  );
  console.log("getCakeByAlias", res);
  if (!res.ok) {
    return null;
  }
  const cake = await res.json();

  return cake?.length ? cake[0] : null;
}
