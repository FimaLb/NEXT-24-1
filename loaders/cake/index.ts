import { CakeEntity } from "@/db-types";

export async function getCakeByAlias(
  alias: string
): Promise<CakeEntity | null> {
  if (!alias) {
    return null;
  }
  const res = await fetch(`${process.env.API_BASE_PATH}/cakes?alias=${alias}`);
  if (!res.ok) {
    return null;
  }
  const cake = await res.json();

  return cake?.length ? cake[0] : null;
}
