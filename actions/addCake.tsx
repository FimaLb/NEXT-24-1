"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export interface AddCakeResult {
  status?: boolean;
  message?: string;
}

export default async function addCake(
  state: AddCakeResult,
  formData: FormData
): Promise<AddCakeResult> {
  const id = formData.get("id");
  const catalogAlias = formData.get("catalogAlias");
  const cakeAlias = `${id}_${formData.get("name")}`;
  const src = `/categories/fruit_cakes.jpg`;

  const data = {
    id,
    title: formData.get("name"),
    alt: formData.get("name"),
    description: `${catalogAlias} ${formData.get("name")}`,
    src,
    alias: cakeAlias,
    catalogId: formData.get("catalogId"),
    sizeId: formData.get("sizeId"),
    wheightId: formData.get("wheightId"),
  };

  try {
    const res = await fetch(`${process.env.API_BASE_PATH}/cakes`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        status: false,
        message: "Ops, something went wrong!",
      };
    }
    // console.log("catalogAlias", catalogAlias);
    // revalidatePath(`/cakes-catalog/${catalogAlias}`);
    revalidateTag("cakes-by-catalog-id");
    return {
      status: true,
      message: "Added successfully!",
    };
  } catch (error) {
    return {
      status: false,
      message: (error as Error)?.message,
    };
  }
}

export type AddCakeAction = typeof addCake;
