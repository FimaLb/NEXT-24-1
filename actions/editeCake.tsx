"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export interface EditeCakeResult {
  status?: boolean;
  message?: string;
}

export default async function editeCake(
  state: EditeCakeResult,
  formData: FormData
): Promise<EditeCakeResult> {
  const makeAlias = formData.get("catalogAlias");
  const id = formData.get("id");
  const data = {
    id,
    title: formData.get("name"),
    alt: formData.get("name"),
    description: `${makeAlias} ${formData.get("name")}`,
    src: "/categories/fruit_cakes.jpg",
    alias: formData.get("name"),
    catalogId: formData.get("catalogId"),
    sizeId: formData.get("sizeId"),
    wheightId: formData.get("wheightId"),
  };
  console.log("data", JSON.stringify(data));
  try {
    const res = await fetch(`${process.env.API_BASE_PATH}/cakes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        status: false,
        message: "Ops, something went wrong!",
      };
    }
    console.log("makeAlias", makeAlias);
    revalidatePath(`/cakes-catalog/${makeAlias}/${id}`);
    revalidateTag("cakes-by-catalog-id");
    return {
      status: true,
      message: "Edit successfully!",
    };
  } catch (error) {
    return {
      status: false,
      message: (error as Error)?.message,
    };
  }
}

export type EditeCakeAction = typeof editeCake;
