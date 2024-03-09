import { Catalog, MakeEntity } from "@/db-types";

export async function getMakeById(id: string): Promise<MakeEntity | null> {
  const res = await fetch(`http://localhost:3031/make/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function getMakes(): Promise<Catalog["make"] | null> {
  const res = await fetch(`${process.env.API_BASE_PATH}/make`);

  return res.json();
}

export async function getMakeByAlias(
  alias: string
): Promise<MakeEntity | null> {
  const res = await fetch(`${process.env.API_BASE_PATH}/make?alias=${alias}`);
  const make = await res.json();
  return make?.length ? make[0] : null;
}
